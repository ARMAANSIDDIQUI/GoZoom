import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for existing session
        const token = localStorage.getItem('admin_auth_token');
        if (token === 'gozoom_admin_session_active') {
            setIsAuthenticated(true);
        }
        setLoading(false);
    }, []);

    const login = (username, password) => {
        // Hardware simulation for demo/admin purposes
        if (username === 'admin' && password === 'admin123') {
            localStorage.setItem('admin_auth_token', 'gozoom_admin_session_active');
            setIsAuthenticated(true);
            return true;
        }
        return false;
    };

    const logout = () => {
        localStorage.removeItem('admin_auth_token');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
