import React from 'react';

const Header = ({isAuth, setIsAuth}) => {

    const clearHistory = () => {
        localStorage.clear();
        setIsAuth(false);
    }

    return (
        <div className="storageWrap">
            {isAuth && <span className="clearStorage" onClick={clearHistory}>Clear Localstorage</span>}
        </div>
    );
};

export default Header;