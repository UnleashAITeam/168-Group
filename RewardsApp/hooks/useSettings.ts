import { useState } from 'react';

interface Settings {
  notifications: boolean;
  // Add other settings as needed
}

export function useSettings() {
  const [settings, setSettings] = useState<Settings>({
    notifications: true,
  });

  const updateSettings = (newSettings: Partial<Settings>) => {
    setSettings(prevSettings => ({ ...prevSettings, ...newSettings }));
  };

  return { settings, updateSettings };
}
