import React, { useState } from 'react';

const AccountSettings = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const user = JSON.parse(localStorage.getItem('user'));
  const handleSave = () => {
    // Save logic
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="mb-4 text-xl font-semibold text-gray-800">Account Settings</h3>
      <div className="space-y-4">
        <input
          type="text"
          placeholder={user?.name}
          value={user?.name}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 text-gray-800 bg-white border rounded outline-none"
        />
        <input
          type="email"
          placeholder={user?.email}
          value={user?.email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 text-gray-800 bg-white border rounded outline-none"
        />
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 text-gray-800 bg-white border rounded outline-none"
        />
        <button onClick={handleSave} className="bg-[#8cd836] text-white px-4 py-2 rounded ">
          Save
        </button>
      </div>
    </div>
  );
};

export default AccountSettings;