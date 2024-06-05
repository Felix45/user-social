/**
 * @name App
 * @description App component is the root component that wraps the entire application
 * @returns {JSX.Element} - A React element that wraps the entire application
 */
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import Landing from './pages/Landing';
import Home from './pages/Home';
import UserDetails from './pages/UserDetails';
import AlbumDetail from './pages/AlbumDetail';
import PhotoEdit from './pages/PhotoEdit';
import Layout from './Layout';
import store from './redux/store';

const persistor = persistStore(store);

const App = () => (
  <Router>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/users" element={<Home />} />
            <Route path="/users/:id" element={<UserDetails />} />
            <Route path="/albums/:id" element={<AlbumDetail />} />
            <Route path="/photos/:id" element={<PhotoEdit />} />
          </Route>
        </Routes>
      </PersistGate>
    </Provider>
  </Router>
);

export default App;
