import PropTypes from 'prop-types';
import { FcLinux } from 'react-icons/fc';
import { ImLocation } from 'react-icons/im';
import scss from './Profile.module.scss';

export const Profile = ({
  username,
  tag,
  location,
  avatar = FcLinux,
  stats,
}) => {
  return (
    <div className={scss.container}>
      <div className={scss.profile}>
        <div className={scss.description}>
          <img src={avatar} alt="User avatar" className={scss.avatar} />
          <p className={scss.name}>{username}</p>
          <p className={scss.tag}>{'@' + tag}</p>
          <p className={scss.location}>
            <ImLocation />
            {location}
          </p>
        </div>

        <ul className={scss.stats}>
          <li>
            <span className={scss.label}>Followers</span>
            <span className={scss.quantity}>{stats.followers}</span>
          </li>
          <li>
            <span className={scss.label}>Views</span>
            <span className={scss.quantity}>{stats.views}</span>
          </li>
          <li>
            <span className={scss.label}>Likes</span>
            <span className={scss.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
