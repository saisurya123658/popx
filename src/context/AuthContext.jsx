import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../services/api';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('popx_token') || null);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null); // { message, type: 'success' | 'error' }

  // Custom Toast handler
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    // Dismiss after 3.5 seconds
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  // Verify token on mount/boot to fetch fresh profile
  useEffect(() => {
    const loadUser = async () => {
      if (token) {
        try {
          const res = await api.get('/auth/profile');
          setUser(res.data);
        } catch (error) {
          console.error('[Session Error] Invalidate stale token:', error.message);
          // Token expired or invalid
          localStorage.removeItem('popx_token');
          setToken(null);
          setUser(null);
          showToast('Session expired. Please sign in again.', 'error');
        }
      }
      setLoading(false);
    };

    loadUser();
  }, [token]);

  // Login handler
  const login = async (email, password) => {
    try {
      setLoading(true);
      const res = await api.post('/auth/login', { email, password });
      
      const { token: userToken, ...userData } = res.data;
      
      localStorage.setItem('popx_token', userToken);
      setToken(userToken);
      setUser(userData);
      
      showToast('Welcome back, login successful!', 'success');
      return { success: true };
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Login failed, check credentials';
      showToast(errorMsg, 'error');
      return { success: false, message: errorMsg };
    } finally {
      setLoading(false);
    }
  };

  // Register handler
  const register = async (userData) => {
    try {
      setLoading(true);
      const res = await api.post('/auth/register', userData);
      showToast(res.data.message || 'Account created successfully!', 'success');
      return { success: true };
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Signup failed, please try again';
      showToast(errorMsg, 'error');
      return { success: false, message: errorMsg };
    } finally {
      setLoading(false);
    }
  };

  // Logout handler
  const logout = () => {
    localStorage.removeItem('popx_token');
    setToken(null);
    setUser(null);
    showToast('Logged out successfully', 'success');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        register,
        logout,
        toast,
        showToast,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
