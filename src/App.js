import { ReactDOM } from 'react';
import Profile from './components/Profile'
import usersData from './usersData.json'
// import logo from './logo.svg';
// import './App.css';
const { avatar, name, tag, location, followers, views, likes } = usersData;

function App(props) {
    // const { avatar, name, tag, location, followers, views, likes } = props;
    return (
        <>
            <h2>Задание 1 - Профиль социальной сети</h2>
            <h2>Задание 1 - Профиль социальной сети</h2>
            <Profile item={usersData}/>
        </>
    )
}

export default App;





// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
