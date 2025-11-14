import React, { useState, useEffect } from 'react';
import { AuthContext } from '../lib/auth-context-utils';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Initialize from localStorage for immediate display
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [loading, setLoading] = useState(true);
  const base = import.meta.env.VITE_BASE_URL ?? "";

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const res = await fetch(`${base}/api/auth/me`, {
          credentials: "include",
        });
        if (res.ok) {
          const data = await res.json();
          const userData = data.user ?? null;
          setUser(userData);
          if (userData) {
            localStorage.setItem('user', JSON.stringify(userData));
          } else {
            localStorage.removeItem('user');
          }
        } else {
          // Only clear user if it's a 401 (unauthorized), not other errors
          if (res.status === 401) {
            setUser(null);
            localStorage.removeItem('user');
          }
          // For other errors (like 404), don't clear user state
        }
      } catch (error) {
        console.error('Auth verification failed:', error);
        // Don't clear user on network errors - they might be temporary
      } finally {
        setLoading(false);
      }
    };

    verifyAuth();
  }, [base]);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = async () => {
    try {
      await fetch(`${base}/api/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setUser(null);
      localStorage.removeItem('user');
      window.location.href = "/";
    }
  };

  const value = {
    user,
    loading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
