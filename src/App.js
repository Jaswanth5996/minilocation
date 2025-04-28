import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterForm from './components/RegisterForm';
import LocationFilter from './components/LocationFilter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/location-filter" element={<LocationFilter />} />
      </Routes>
    </Router>
  );
}

export default App;
