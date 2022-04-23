import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import store, { persistor } from './redux/store';
import Dashboard from './screens/Dashboard';
import Home from './screens/Home';
import NoMatch from './screens/NoMatch';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='*' element={<NoMatch/>}/>
          </Routes>
        </PersistGate>
      </Provider>
  );
}

export default App;
