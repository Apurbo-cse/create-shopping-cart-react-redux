
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './layouts/include/Navbar';
import MasterLayout from './layouts/MasterLayout';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<MasterLayout />}>
          <Route index path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
