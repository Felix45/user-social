import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Layout from './Layout';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
