import React from 'react';

const LikedOrganization = ({ organization }) => (
  <div className="liked-organization">
    <div className="liked-organization-image">
      <img
        src={`/images/users/${organization.image}`}
        alt={`You liked ${organization.name}`}
      />
    </div>
  </div>
);

export default LikedOrganization;
