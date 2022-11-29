import PropTypes from 'prop-types';
import scss from './Stats.module.scss';

export const Stats = ({ title, stats }) => {
  return (
    <div className={scss.container}>
      <section className={scss.statistics}>
        <h2 className={scss.title}>{title}</h2>
        <ul className={scss.statList}>
          {stats.map(item => (
            <li
              className={scss.item}
              key={item.id}
              style={{ backgroundColor: getColor() }}
            >
              <span className={scss.label}>{item.label}</span>
              <span className={scss.percentage}>{item.percentage + '%'}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

// const getColor = function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// };

// const getColor = function getRandomHexColor() {
//   let color = '#'  + (Math.floor(Math.random() * 16777215).toString(16));

//   if(color === '#ffffff') {
//     return getColor();
//   }

//   return color;
// };

const getColor = function getRandomHexColor() {
  let color = '#';
  for (let i = 0; i < 3; i++)
    color += (
      '0' + Math.floor((Math.random() * Math.pow(16, 2)) / 2).toString(16)
    ).slice(-2);
  return color;
};

Stats.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
