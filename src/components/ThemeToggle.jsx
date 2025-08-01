import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = React.useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark' || 
                  (!localStorage.getItem('theme') && 
                  window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newMode);
  };

  return (
    <button 
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <Icon icon="mdi:weather-sunny" className="w-5 h-5" />
      ) : (
        <Icon icon="mdi:weather-night" className="w-5 h-5" />
      )}
    </button>
  );
}