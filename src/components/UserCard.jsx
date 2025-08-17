import React from "react";
import PropTypes from "prop-types";
// UserCard displays a user's name and email in a styled card
const UserCard = React.memo(({ name, email, avatar }) => {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <div className="px-6 py-4">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
            {avatar ? (
              <img
                src={avatar}
                alt={name}
                className="w-full h-full rounded-full object-cover"
                loading="lazy"
              />
            ) : (
              <span className="text-indigo-600 text-xl font-bold">
                {name.charAt(0).toUpperCase()}
              </span>
            )}
          </div>
          <div>
            <h3 className="font-bold text-gray-800 text-lg">{name}</h3>
            <p className="text-gray-600 text-sm">{email}</p>
          </div>
        </div>
        <div className="flex justify-between text-sm text-gray-500">
          <span>Joined: 2 days ago</span>
          <span className="text-indigo-600 font-medium">Active</span>
        </div>
      </div>
      <div className="px-6 pt-2 pb-4">
        <button className="text-xs bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full hover:bg-indigo-200 transition-colors">
          View Profile
        </button>
      </div>
    </div>
  );
});

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string,
};

export default UserCard;
