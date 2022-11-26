import PropTypes from 'prop-types';
import css from './Friends.module.css';
import { FriendItem } from 'components/FriendsList/FriendsItem';

export const FriendsList = ({ title, friends }) => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>{title}</h2>
    <ul className={css.friendList}>
      {friends.map(friend => (
        <li key={friend.id} className={css.item}>
          <FriendItem friend={friend} />
        </li>
      ))}
      </ul> 
      </div>
  )
};

FriendsList.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number
}