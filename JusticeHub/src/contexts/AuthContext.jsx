import React, { useState, useEffect } from 'react';
import { AuthContext } from '../lib/auth-context-utils';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Initialize from localStorage for immediate display
    const storedUser = localStorage.getItem('user');
    const storedRefreshToken = localStorage.getItem('refreshToken');
    const storedAccessToken = localStorage.getItem('accessToken');

    // Check if tokens exist and are valid
    if (storedUser && storedRefreshToken && storedAccessToken) {
      const userData = JSON.parse(storedUser);
      const refreshTokenExpiry = localStorage.getItem('refreshTokenExpiry');

      // Check if refresh token is still valid (longer expiry)
      if (refreshTokenExpiry && new Date(refreshTokenExpiry) > new Date()) {
        return userData;
      }
    }
    return null;
  });
  const [loading, setLoading] = useState(true);
  const base = import.meta.env.VITE_BASE_URL ?? "";

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const storedRefreshToken = localStorage.getItem('refreshToken');
        const storedAccessToken = localStorage.getItem('accessToken');
        const accessTokenExpiry = localStorage.getItem('accessTokenExpiry');

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
                },
                body: JSON.stringify({ refreshToken: storedRefreshToken }),
                credentials: "include",
              });

              if (refreshRes.ok) {
                const refreshData = await refreshRes.json();
                const newAccessToken = refreshData.accessToken;
                const newRefreshToken = refreshData.refreshToken;

                // Update stored tokens
                localStorage.setItem('accessToken', newAccessToken);
                localStorage.setItem('refreshToken', newRefreshToken);
                localStorage.setItem('accessTokenExpiry', new Date(Date.now() + 15 * 60 * 1000).toISOString()); // 15 minutes
                localStorage.setItem('refreshTokenExpiry', new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()); // 7 days

                // Update user data if provided
                if (refreshData.user) {
                  setUser(refreshData.user);
                  localStorage.setItem('user', JSON.stringify(refreshData.user));
                }
              } else {
                // Refresh failed, clear tokens
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                localStorage.removeItem('accessTokenExpiry');
                localStorage.removeItem('refreshTokenExpiry');
                localStorage.removeItem('user');
                setUser(null);
              }
            } catch (refreshError) {
              console.error('Token refresh failed:', refreshError);
              // Clear tokens on refresh failure
              localStorage.removeItem('accessToken');
              localStorage.removeItem('refreshToken');
              localStorage.removeItem('accessTokenExpiry');
              localStorage.removeItem('refreshTokenExpiry');
              localStorage.removeItem('user');
              setUser(null);
            }
          }
        }

        // Verify current auth status
        const res = await fetch(`${base}/api/auth/me`, {
          credentials: "include",
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
          },
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
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('accessTokenExpiry');
            localStorage.removeItem('refreshTokenExpiry');
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
    localStorage.setItem('user', JSON.stringify(userData));

    // Store tokens if provided
    if (tokens) {
      localStorage.setItem('accessToken', tokens.accessToken);
      localStorage.setItem('refreshToken', tokens.refreshToken);
      localStorage.setItem('accessTokenExpiry', new Date(Date.now() + 15 * 60 * 1000).toISOString()); // 15 minutes
      localStorage.setItem('refreshTokenExpiry', new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()); // 7 days
    }
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
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('accessTokenExpiry');
      localStorage.removeItem('refreshTokenExpiry');
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
