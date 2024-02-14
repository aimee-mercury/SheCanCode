import React, { useState } from 'react';
import './settings.css';
import Header from './Header'
import Sidebar from './Siderbar'

function Settings() {
  // State for user profile settings
  const [userProfile, setUserProfile] = useState({
    username: 'JohnDoe',
    email: 'john.doe@example.com',
    bio: 'A passionate reader',
  });

  // State for notification settings
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
  });

  // State for security settings
  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    changePassword: false,
  });

  // State for theme mode (dark/light)
  const [themeMode, setThemeMode] = useState('light');

  const toggleThemeMode = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <>
    <Header OpenSidebar={OpenSidebar}/>
     <div className='finance-container'>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <div className={`settings-dashboard-container ${themeMode}-mode`}  data-aos="fade-up" data-aos-duration={2000}>
        <div className='dashboard-settings-page'>
        <h1 className='sombe'>SETTINGS</h1><br />
          <br />
          <div className='user-profile-notification'>
          <div className="dashbord-settings-section">
            <h2 className='dash-headings'>User Profile</h2>
            <div className="settings-section-content1">
              <p>Username: {userProfile.username}</p>
              <p>Email: {userProfile.email}</p>
              <p>Bio: {userProfile.bio}</p>
              {/* Add form fields and update functionality */}
            </div>
          </div>
          <div className='save-nofication'>
          <div className='heading-save'><span>Save your changes here</span><button type='submit'>Save</button></div>
          <div className="section">
            <h2 className='dash-headings'>Notification Settings</h2>
            <div className="settings-section-content">
              <label className='settings-label'>
                <input
                  type="checkbox"
                  checked={notificationSettings.emailNotifications}
                  onChange={() => setNotificationSettings({ ...notificationSettings, emailNotifications: !notificationSettings.emailNotifications })}
                />
                Receive Email Notifications
              </label>
             
              {/* Add more notification settings */}
              </div>
            </div>
          </div><br />
          </div>
          <div className='security-theme'>
          <div className="section1">
            <h2 className='dash-headings'>Security Settings</h2>
            <div className="settings-section-content">
              <label>
                <input
                  type="checkbox"
                  checked={securitySettings.twoFactorAuth}
                  onChange={() => setSecuritySettings({ ...securitySettings, twoFactorAuth: !securitySettings.twoFactorAuth })}
                />
                Enable Two-Factor Authentication
              </label>
              <button onClick={() => console.log('Change Password clicked')} className='settings-change-button'>Change Password</button>
              {/* Add more security settings */}
            </div>
          </div>
          <div className="section2">
            <h2 className='dash-headings'>Theme Mode</h2>
            <div className="settings-section-content">
              <label>
                <input
                  type="checkbox"
                  checked={themeMode === 'dark'}
                  onChange={toggleThemeMode}
                />
                Dark Mode
              </label>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Settings;
;
