import React, { useState, useEffect } from 'react';

const Loader = ({ logo }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading && (
                <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255, 255, 255, 0.8)', zIndex: 9999 }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                        {/* Your logo with rotating animation */}
                        <img src={logo} alt="Logo" style={{ width: '100px', height: '100px', animation: 'spin 2s linear infinite' }} />
                        {/* Loader animation */}
                        <div className="lds-dual-ring"></div>
                    </div>
                    {/* CSS for rotating animation */}
                    <style>
                        {`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}
                    </style>
                </div>
            )}
        </>
    );
};

export default Loader;
