import React from 'react';
import preloader from '../../assets/images/preloader.svg';

const wrapperStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '75%',
};

const Preloader = () => {
    return <div style={wrapperStyle}><img src={preloader} alt="preloader" /></div>;
};

export default Preloader;
