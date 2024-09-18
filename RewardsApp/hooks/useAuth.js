import { useState, useEffect } from 'react';
import { supabase } from '../services/supabase';

export function useAuth() {
  const [user, setUser] = useState(null);

  const initializeAuth = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
  };

  const login = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    setUser(data.user);
  };

  const signup = async (email, password, fullName) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName }
      }
    });
    if (error) throw error;
    setUser(data.user);
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const resetPassword = async (email) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) throw error;
  };

  const loginWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    if (error) throw error;
  };

  const loginWithFacebook = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'facebook',
    });
    if (error) throw error;
  };

  const loginWithApple = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'apple',
    });
    if (error) throw error;
  };

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return {
    user,
    initializeAuth,
    login,
    signup,
    logout,
    resetPassword,
    loginWithGoogle,
    loginWithFacebook,
    loginWithApple
  };
}