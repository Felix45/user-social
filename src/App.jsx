import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import Landing from './pages/Landing';
import Home from './pages/Home';
import UserDetails from './pages/UserDetails';
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
          </Route>
        </Routes>
      </PersistGate>
    </Provider>
  </Router>
);

export default App;
