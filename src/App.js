
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './layouts/include/Navbar';
import MasterLayout from './layouts/MasterLayout';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<MasterLayout />}>
          <Route index path="/" element={<Home />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
