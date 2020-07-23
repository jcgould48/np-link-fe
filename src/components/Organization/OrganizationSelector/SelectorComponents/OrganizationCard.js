import React from 'react';
import Actions from './Actions';

const OrganizationCard = ({ organization }) => {
  const { poc, orgName, image, hashTags, description, pitch } = organization;

  return (
    <>
      <div className="organization">
        <div className="organization-photo">
          <img src={`/images/orgLogos/${image}`} alt={orgName} />
        </div>

        <div className="organization-description">
          <p className="organization-name" style={{color:"#222323"}}>
            {orgName}
          </p>
          <hr/>
          <br/>
          <p className="organization-poc">Point of Contact: {poc}</p>
          <br />
          <p className="organization-pitch">"{pitch}"</p>
          <br />
          <p className="organization-info">Description: {description}</p>
          <br />
          <p className="organization-hash">Areas of Interest: {hashTags}</p>
        </div>
      </div>

      <Actions
        organization={organization}
        // handleLiked={handleLiked}
      />
    </>
  );
};

export default OrganizationCard;
