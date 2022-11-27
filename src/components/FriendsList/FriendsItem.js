import PropTypes from 'prop-types';
import css from './Friends.module.css';

export const FriendItem = ({ friend: { name, avatar, isOnline } }) => {
  return (
<div className={css.item}>
  <span className={
                  isOnline
                    ? `${css.status} ${css.online}`
                    : `${css.status} ${css.offline}`
                }></span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
</div>
  )
};

FriendItem.propTypes = {
  friend: PropTypes.shape({
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  }).isRequired,
}