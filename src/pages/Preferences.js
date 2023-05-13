import React, { useState } from 'react';

const Preferences = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [language, setLanguage] = useState('English');

  const handleNotificationsToggle = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleDarkModeToggle = () => {
    setDarkModeEnabled(!darkModeEnabled);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleSubmit = () => {
    // TODO: Add form submission logic here
    alert('Settings updated!');
  };

  return (
    <div style={{ backgroundColor: '#fff', color: '#333', padding: '2rem' }}>
      <h1 style={{ color: '#2caeba', fontSize: '2rem', marginBottom: '2rem' }}>
        Settings and Preferences
      </h1>
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="checkbox"
          id="notifications"
          checked={notificationsEnabled}
          onChange={handleNotificationsToggle}
          style={{ marginRight: '1rem' }}
        />
        <label htmlFor="notifications" style={{ fontSize: '1.2rem' }}>
          Enable Notifications
        </label>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="checkbox"
          id="dark-mode"
          checked={darkModeEnabled}
          onChange={handleDarkModeToggle}
          style={{ marginRight: '1rem' }}
        />
        <label htmlFor="dark-mode" style={{ fontSize: '1.2rem' }}>
          Dark Mode
        </label>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="language" style={{ fontSize: '1.2rem' }}>
          Language:
        </label>
        <select
          id="language"
          value={language}
          onChange={handleLanguageChange}
          style={{
            marginLeft: '0.5rem',
            padding: '0.5rem',
            fontSize: '1.2rem',
            backgroundColor: '#f5f5f5',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
      </div>
      <button
        onClick={handleSubmit}
        style={{
          backgroundColor: '#2caeba',
          color: '#fff',
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '5px',
          fontSize: '1.2rem',
          cursor: 'pointer',
        }}
      >
        Save Settings
      </button>
    </div>
  );
};

export default Preferences;
