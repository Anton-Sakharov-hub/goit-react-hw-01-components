// import { ReactDOM, React } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import usersData from './components/Profile/usersData.json';
import Profile from './components/Profile';
import statsData from './components/Statistic/statisticalData.json';
import Statistics from './components/Statistic';
import friendsData from './components/FriendsList/friendsData.json';
import FriendsList from './components/FriendsList';
import transactionsData from './components/Transactions/transactionsData.json';
import Transactions from './components/Transactions';
// import logo from './logo.svg';
import './App.css';

function App(props) {
    // const { avatar, name, tag, location, followers, views, likes } = props;
    return (
        <ul className="mainList">
            <li>
                <a onClick={task1}>Задание 1 - Профиль социальной сети</a>
                {/* <Profile profileData={usersData}/> */}
            </li>
            <li>
                <a onClick={task2}>Задание 2 - Секция статистики</a>
                {/* <Statistics title="Upload stats" statsData={statsData}/> */}
            </li>
            <li>
                <a onClick={task3}>Задание 3 - Список друзей</a>
                {/* <FriendsList friends={friendsData} /> */}
            </li>
            <li>
                <a onClick={task4}>Задание 4 - История транзакций</a>
                {/* <Transactions transactions={transactionsData} /> */}
            </li>
        </ul>
    );
}

export default App;

function task1() {
    ReactDOM.render(
    <>
        <a onClick={backToHome} className="backButton">Назад</a>
        <Profile profileData={usersData} />
    </>,
    document.getElementById('root')
    );
};

function task2() {
    ReactDOM.render(
    <>
        <a onClick={backToHome} className="backButton">Назад</a>
        <Statistics title="Upload stats" statsData={statsData}/>
    </>,
    document.getElementById('root')
    );
};

function task3() {
    ReactDOM.render(
    <>
        <a onClick={backToHome} className="backButton">Назад</a>
        <FriendsList friends={friendsData} />
    </>,
    document.getElementById('root')
    );
};

function task4() {
    ReactDOM.render(
    <>
        <a onClick={backToHome} className="backButton">Назад</a>
        <Transactions transactions={transactionsData} />
    </>,
     document.getElementById('root')
    );
};

function backToHome() {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
};
