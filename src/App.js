
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './layouts/include/Navbar';
import MasterLayout from './layouts/MasterLayout';
import store from './redux/store';
import HomePage from './screens/HomePage';


function App() {
  return (
    <Provider store={store}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<MasterLayout />}>
          <Route index path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
