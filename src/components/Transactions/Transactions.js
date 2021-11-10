import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem'
import './Transactions.scss';

function Transactions({ transactions }) {
    return (
        <table className="table">
            <thead>
                <tr className="table__header">
                    <th className="table__header__item">TYPE</th>
                    <th className="table__header__item">AMOUNT</th>
                    <th className="table__header__item">CURRENCY</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map(item => 
                (<tr key={item.id} className="table__line">
                    <TransactionItem
                    type={item.type}
                    amount={item.amount}
                    currency={item.currency}
                    />
                </tr>))
                }
            </tbody>    
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

