import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem'

function Transactions({ transactions }) {
    return (
        <table border="1">
            <tr>
                <th>TYPE</th>
                <th>AMOUNT</th>
                <th>CURRENCY</th>
            </tr>
            {transactions.map(item => 
            (<tr key={item.iddddddddddd}>
                <TransactionItem
                type={item.type}
                amount={item.amount}
                currency={item.currency}
                />
            </tr>))
            }
        </table >
    )
}

export default Transactions;

Transactions.propTypes = {
    item: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    ),
};

