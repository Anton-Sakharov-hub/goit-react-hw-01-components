import PropTypes from "prop-types";
import FriendsListItems from "./FriensListItems";

function FriensList(props) {
    const { friends } = props;

    return (
        <ul>
            {friends.map(item => (
                <li key={item.id}>
                    <FriendsListItems
                        name={item.name}
                        avatar={item.avatar}
                        isOnline={item.isOnline}
                    />
                </li>
            ))}
        </ul>
    );
};

FriensList.propTypes = {
    friendsData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ),
};

export default FriensList;