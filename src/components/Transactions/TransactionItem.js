import PropTypes from "prop-types";
import './Transactions.scss';

function TransactionItem({type, amount, currency}) {
    
    return (
        <>
            <td className="table__cell"><span className="table__cell__info">{type}</span></td>
            <td className="table__cell"><span className="table__cell__info">{amount}</span></td>
            <td className="table__cell"><span className="table__cell__info">{currency}</span></td>
        </>
    )
}

export default TransactionItem;

TransactionItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
};