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
                <button onClick={task1}>Задание 1 - Профиль социальной сети</button>
                {/* <Profile profileData={usersData}/> */}
            </li>
            <li>
                <button onClick={task2}>Задание 2 - Секция статистики</button>
                {/* <Statistics title="Upload stats" statsData={statsData}/> */}
            </li>
            <li>
                <button onClick={task3}>Задание 3 - Список друзей</button>
                {/* <FriendsList friends={friendsData} /> */}
            </li>
            <li>
                <button onClick={task4}>Задание 4 - История транзакций</button>
                {/* <Transactions transactions={transactionsData} /> */}
            </li>
        </ul>
    );
}

export default App;

function task1() {
    ReactDOM.render(
    <>
        <button onClick={backToHome} className="backButton">Назад</button>
        <Profile profileData={usersData} />
    </>,
    document.getElementById('root')
    );
};

function task2() {
    ReactDOM.render(
    <>
        <button onClick={backToHome} className="backButton">Назад</button>
        <Statistics title="Upload stats" statsData={statsData}/>
    </>,
    document.getElementById('root')
    );
};

function task3() {
    ReactDOM.render(
    <>
        <button onClick={backToHome} className="backButton">Назад</button>
        <FriendsList friends={friendsData} />
    </>,
    document.getElementById('root')
    );
};

function task4() {
    ReactDOM.render(
    <>
        <button onClick={backToHome} className="backButton">Назад</button>
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
