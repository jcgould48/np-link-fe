import React from 'react';
import LikedOrganization from './LikedOrganization';

const Empty = ({likedOrgs}) => (
  
  <div id="empty">
    <p>There are no more nonprofits at this time.</p>

    <span className="pulse">
      <img src='/images/misc/main-logo.png' alt="Charity Link" />
    </span>

    <div id="liked-organization">
      <p>
        {likedOrgs.length > 0
          ? "We will connect you via email to the following organizations!"
          : ''}
      </p>

      {likedOrgs.map(item => (
        <LikedOrganization key={item.id} likedOrgs={item} />
      ))}

    </div>
  </div>
);

export default Empty;
