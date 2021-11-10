import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem';
import './Statistics.scss'

function Statistics({ statsData, title }) {
    
    return (
        <section className="statsSaction">
            {title && <h3 className="stats__title">{title.toUpperCase()}</h3>}
        <ul className="statsList">
            {statsData.map(item => {
                const { id, label, percentage } = item;
                return (
                    <li key={id} className="statsList__item" style={{backgroundColor: randColor()}}>
                        <StatisticItem label={label} percentage={percentage} />
                    </li>
            
                )
            }
            )}
        </ul>
        </section>
    );
};

Statistics.propsTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    ),
};

export default Statistics;



function randColor() {
    const r = Math.floor(Math.random() * (256));
    const g = Math.floor(Math.random() * (256));
    const b = Math.floor(Math.random() * (256));
    const color = `rgb(${r}, ${g}, ${b})`;

    return color;
};

