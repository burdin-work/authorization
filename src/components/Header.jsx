import React from 'react';

const Header = ({ isAuth, setIsAuth }) => {
    const clearHistory = () => {
        localStorage.clear();
        setIsAuth(false);
    };

    return (
        <div className="storageWrap">
            {isAuth
            && (
                <span
                    role="button"
                    tabIndex={-1}
                    className="clearStorage"
                    onClick={clearHistory}
                    onKeyPress={clearHistory}
                >
                    Clear Localstorage
                </span>
            )}
        </div>
    );
};

export default Header;
