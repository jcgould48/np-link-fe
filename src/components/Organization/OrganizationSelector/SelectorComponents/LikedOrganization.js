import React from 'react';

const LikedOrganization = ({ likedOrgs }) => (
  <div className="liked-organization">
    <div key= {likedOrgs[0].id} className="liked-organization-image">
      <img
        src={`/images/orgLogos/${likedOrgs[0].image}`}
        alt={`You liked ${likedOrgs[0].name}`}
      />
    </div>
  </div>
);

export default LikedOrganization;
