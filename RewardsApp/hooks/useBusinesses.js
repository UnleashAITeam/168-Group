import { useState, useEffect } from 'react';

export function useBusinesses() {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    // TODO: Fetch businesses from your API or database
    // For now, we'll use dummy data
    const dummyBusinesses = [
      { id: 1, name: 'Business 1', category: 'Restaurant' },
      { id: 2, name: 'Business 2', category: 'Retail' },
      { id: 3, name: 'Business 3', category: 'Service' },
    ];
    setBusinesses(dummyBusinesses);
  }, []);

  return { businesses };
}