import React from 'react';
import ProfileImage from './ProfileImage';
import ProfileInfo from './ProfileInfo';

const Profile = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-20 px-6">
      <ProfileImage />
      <ProfileInfo />
    </div>
  );
};

export default Profile;