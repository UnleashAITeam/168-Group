import { useState, useEffect } from 'react';

export function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulated user data for MVP
    setUser({
      full_name: 'John Doe',
      email: 'john.doe@example.com',
      points: 500
    });
  }, []);

  return { user };
}