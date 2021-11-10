import PropTypes from 'prop-types';
import './Profile.scss';
// import userData from '../usersData.json';
// console.log(userData);
// const { avatar, name, tag, location, followers, views, likes } = userData;



function Profile({profileData}) {
    const { avatar, name, tag, location, stats } = profileData;

    return (
        <div className="profile">
            <img className="profile__avatar" src={avatar} alt={name} width="480" />
            <p className="profile__name">{name}</p>
            <p className="profile__info">{tag}</p>
            <p className="profile__info">{location}</p>
            <ul className="profile__stats">
                <li className="profile__stats__item">
                    <span className="profile__stats__item__name">Followers</span>
                    <span className="profile__stats__item__info">{stats.followers}</span>
                </li>
                <li className="profile__stats__item">
                    <span className="profile__stats__item__name">Views</span>
                    <span className="profile__stats__item__info">{stats.views}</span>
                </li>
                <li className="profile__stats__item">
                    <span className="profile__stats__item__name">Likes</span>
                    <span className="profile__stats__item__info">{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}

export default Profile;