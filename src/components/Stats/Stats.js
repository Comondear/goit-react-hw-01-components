import css from './Stats.module.css';

export const Stats = ({ title, stats }) => {
  return (
        <div className={css.container}>
    <section className={css.statistics}>
  <h2 className={css.title}>{title}</h2>
      <ul className={css.statList}>
        {stats.map(item => (
          <li className={css.item} key={item.id}
          style={{ backgroundColor: getColor() }}>
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage + '%'}</span>
          </li>
        ))}
  </ul>
      </section>
      </div>
  )
};

const getColor = function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};