import PropTypes from 'prop-types';
import scss from './Friends.module.scss';

export const FriendItem = ({ friend: { name, avatar, isOnline = ? `${scss.status} ${scss.online}`
            : `${scss.status} ${scss.offline}` } }) => {
  return (
    <div className={scss.item}>
      <span
        className={isOnline}
      ></span>
      <img className={scss.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={scss.name}>{name}</p>
    </div>
  );
};

FriendItem.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
