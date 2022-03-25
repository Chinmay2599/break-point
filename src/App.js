import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import store from './redux/store';
import Home from './screens/Home';

function App() {
  return (
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Provider>
  );
}

export default App;
