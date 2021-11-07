import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem';

function Statistics({ statsData, title }) {
    
    return (
        <section>
            {title && <h3>{title.toUpperCase()}</h3>}
        <ul>
            {statsData.map(item => {
                const { id, label, percentage } = item;
                return (
                    <li key={id}>
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

