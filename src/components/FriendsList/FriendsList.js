import PropTypes from "prop-types";
import FriendsListItems from "./FriensListItems";
import "./FriendsList.scss";

function FriensList(props) {
    const { friends } = props;

    return (
        <ul className="friendsList">
            {friends.map(item => (
                <li key={item.id} className="friendsList__item">
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