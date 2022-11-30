import { Profile } from 'components/Profile/Profile';
import { Stats } from 'components/Stats/Stats';
import { FriendsList } from 'components/FriendsList/FriendsList';
import { Transactions } from 'components/Transactions/Transactions';
import user from 'json/user.json';
import data from 'json/data.json';
import friends from 'json/friends.json';
import transactions from 'json/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Stats title="Upload stats" stats={data} />
      <FriendsList title="Friends List" friends={friends} />
      <Transactions title="Transactions History" items={transactions} />
    </>
  );
};
