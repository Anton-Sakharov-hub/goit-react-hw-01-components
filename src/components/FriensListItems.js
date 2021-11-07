import PropTypes from "prop-types";

function FriendsListItems(props) {
    const { name, avatar, isOnline } = props;

    return (
        <>
            <span>{isOnline}</span>
            <img src={avatar} alt={name} width="180"/>
            <span>{name}</span>
        </>
    )
};

FriendsListItems.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default FriendsListItems;