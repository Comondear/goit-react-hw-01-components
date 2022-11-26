import PropTypes from 'prop-types';
import css from './Transactions.module.css';

export const Transactions = ({ title, items })=> {
  return (
    <div className={css.container}>
      <h2 className={css.title}>{title}</h2>
    <table className={css.transactionHistory}>
      <thead>
        <tr>
        <th className={css.mainType}>Type</th>
        <th className={css.mainAmount}>Amount</th>
        <th className={css.mainCurrency}>Currency</th>
      </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id} className={css.transList}>
          <td className={css.transItem}>{item.type}</td>
          <td className={css.transItem}>{item.amount}</td>
            <td className={css.transItem}>{item.currency}</td>
          </tr>
          ))}
      </tbody>
      </table>
      </div>
  )
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