import React, { useState, useEffect } from 'react';
import { AuthContext } from '../lib/auth-context-utils';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const base = import.meta.env.VITE_BASE_URL ?? "";

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const storedRefreshToken = sessionStorage.getItem('refreshToken');
        const storedAccessToken = sessionStorage.getItem('accessToken');
        const accessTokenExpiry = sessionStorage.getItem('accessTokenExpiry');

        // If we have tokens, try to refresh if access token is expired
        if (storedRefreshToken && storedAccessToken) {
          const now = new Date();

          // If access token is expired, try to refresh
          if (!accessTokenExpiry || new Date(accessTokenExpiry) <= now) {
            try {
              const refreshRes = await fetch(`${base}/api/auth/refresh`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${storedRefreshToken}`,
                },
                credentials: "include",
              });

              if (refreshRes.ok) {
                const refreshData = await refreshRes.json();
                const newAccessToken = refreshData.accessToken;
                const newRefreshToken = refreshData.refreshToken;

                // Update stored tokens in sessionStorage
                sessionStorage.setItem('accessToken', newAccessToken);
                sessionStorage.setItem('refreshToken', newRefreshToken);
                sessionStorage.setItem('accessTokenExpiry', new Date(Date.now() + 15 * 60 * 1000).toISOString()); // 15 minutes
                sessionStorage.setItem('refreshTokenExpiry', new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()); // 7 days

                // Update user data if provided
                if (refreshData.user) {
                  setUser(refreshData.user);
                }
              } else {
                // Refresh failed, clear tokens
                sessionStorage.removeItem('accessToken');
                sessionStorage.removeItem('refreshToken');
                sessionStorage.removeItem('accessTokenExpiry');
                sessionStorage.removeItem('refreshTokenExpiry');
                setUser(null);
              }
            } catch (refreshError) {
              console.error('Token refresh failed:', refreshError);
              // Clear tokens on refresh failure
              sessionStorage.removeItem('accessToken');
              sessionStorage.removeItem('refreshToken');
              sessionStorage.removeItem('accessTokenExpiry');
              sessionStorage.removeItem('refreshTokenExpiry');
              setUser(null);
            }
          }
        }

        // Verify current auth status
        const res = await fetch(`${base}/api/auth/me`, {
          credentials: "include",
          headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`,
          },
        });

        if (res.ok) {
          const data = await res.json();
          const userData = data.user ?? null;
          setUser(userData);
        } else {
          // Only clear user if it's a 401 (unauthorized), not other errors
          if (res.status === 401) {
            setUser(null);
            sessionStorage.removeItem('accessToken');
            sessionStorage.removeItem('refreshToken');
            sessionStorage.removeItem('accessTokenExpiry');
            sessionStorage.removeItem('refreshTokenExpiry');
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

  const login = (userData, tokens) => {
    setUser(userData);
    // Store tokens in memory only - no localStorage
    if (tokens) {
      // Store tokens in memory for this session
      sessionStorage.setItem('accessToken', tokens.accessToken);
      sessionStorage.setItem('refreshToken', tokens.refreshToken);
      sessionStorage.setItem('accessTokenExpiry', new Date(Date.now() + 15 * 60 * 1000).toISOString()); // 15 minutes
      sessionStorage.setItem('refreshTokenExpiry', new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()); // 7 days
    }
  };

  const logout = async () => {
    try {
      await fetch(`${base}/api/auth/logout`, {
        method: "POST",
        credentials: "include",
        headers: {
          'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`,
        },
      });
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setUser(null);
      sessionStorage.removeItem('accessToken');
      sessionStorage.removeItem('refreshToken');
      sessionStorage.removeItem('accessTokenExpiry');
      sessionStorage.removeItem('refreshTokenExpiry');
      window.location.href = "/auth";
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
