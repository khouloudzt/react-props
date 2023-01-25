import React from 'react';
import PropTypes from 'prop-types';

const Profile = (props) => {
  const { fullName, bio, profession, handleName } = props;

  return (
    <div style={{ margin: '16px', border: '1px solid #ccc' }}>
      {props.children}
      <h2>{fullName}</h2>
      <p>{bio}</p>
      <p>{profession}</p>
      <button onClick={() => handleName(fullName)}>Click me</button>
    </div>
  );
}

Profile.defaultProps = {
  fullName: 'khouloud zouitini',
  bio: 'This is My bio.',
  profession: 'Web Developper',
  // handleName: (name) => alert(`Hello, ${name}!`),
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func,
};

export default Profile;