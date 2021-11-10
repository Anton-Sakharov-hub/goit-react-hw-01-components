import PropTypes from 'prop-types';
import './Statistics.scss'

function StatisticItem(props) {
    const { label, percentage } = props;

    return (
    <>
        <span className="statsList__item__label">{label}</span>
        <span className="statsList__item__info">{percentage}%</span>
    </>
    )};

StatisticItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

export default StatisticItem;