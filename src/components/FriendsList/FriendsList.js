import PropTypes from 'prop-types';
import scss from './Friends.module.scss';
import { FriendItem } from 'components/FriendsList/FriendsItem';

export const FriendsList = ({ title, friends }) => {
  return (
    <div className={scss.container}>
      <h2 className={scss.title}>{title}</h2>
      <ul className={scss.friendList}>
        {friends.map(friend => (
          <li key={friend.id} className={scss.item}>
            <FriendItem friend={friend} />
          </li>
        ))}
      </ul>
    </div>
  );
};

FriendsList.propTypes = {
  title: PropTypes.string.isRequired,
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
