import PropTypes from 'prop-types';
import scss from './Transactions.module.scss';

export const Transactions = ({ title, items }) => {
  return (
    <div className={scss.container}>
      <h2 className={scss.title}>{title}</h2>
      <table className={scss.transactionHistory}>
        <thead>
          <tr>
            <th className={scss.mainType}>Type</th>
            <th className={scss.mainAmount}>Amount</th>
            <th className={scss.mainCurrency}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id} className={scss.transList}>
              <td className={scss.transItem}>{item.type}</td>
              <td className={scss.transItem}>{item.amount}</td>
              <td className={scss.transItem}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
