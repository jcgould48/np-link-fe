import React from 'react';
import Rewind from './actions/Rewind';
import Dislike from './actions/Dislike';
import Like from './actions/Like';
// import Superlike from './actions/Superlike';

const Actions = ({ organization}) => (
  <div id="actions">
    <Rewind userId={organization.id} />
    <Dislike
      organization={organization}
    />
    <Like
      organization={organization}
    
    />
  </div>
);

export default Actions;
