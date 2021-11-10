import PropTypes from "prop-types";
import classNames from "classnames";
import  "./FriendsList.scss";

function FriendsListItems(props) {
    const { name, avatar, isOnline } = props;

    return (
        <>
            <span className={classNames("friendsList__item__status", {
                ['friendsList__item__status--isOnline']: isOnline,
            })}>{isOnline}</span>
            <img className="friendsList__item__avatar" src={avatar} alt={name} width="180"/>
            <span className="friendsList__item__name">{name}</span>
        </>
    )
};

FriendsListItems.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default FriendsListItems;