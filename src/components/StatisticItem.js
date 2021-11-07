import PropTypes from 'prop-types';

function StatisticItem(props) {
    const { label, percentage } = props;

    return (
    <>
        <span>{label}</span>
        <span>{percentage}</span>
    </>
    )};

StatisticItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

export default StatisticItem;