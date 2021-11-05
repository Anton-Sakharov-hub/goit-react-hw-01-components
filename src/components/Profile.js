import PropTypes from 'prop-types';

function Profile(props) {
    // const { avatar, name, tag, location, followers, views, likes } = props;
    return (
        <div class="profile">
            <img class="profile__avatar" href={avatar} alt={name} />
            <p class="profile__name">{name}</p>
            <p class="profile__info">{tag}</p>
            <p class="profile__info">{location}</p>
            <ul class="profile__stats">
                <li class="profile__stats__item">
                    <p class="profile__stats__item__name">Followers</p>
                    <p class="profile__stats__item__info">{followers}</p>
                </li>
                <li class="profile__stats__item">
                    <p class="profile__stats__item__name">Views</p>
                    <p class="profile__stats__item__info">{views}</p>
                </li>
                <li class="profile__stats__item">
                    <p class="profile__stats__item__name">Likes</p>
                    <p class="profile__stats__item__info">{likes}</p>
                </li>
            </ul>
        </div>
    );
};

Profile.PropTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}

export default Profile;