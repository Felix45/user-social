import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import Home from './pages/Home';
import Layout from './Layout';
import store from './redux/store';

const persistor = persistStore(store);

const App = () => (
  <Router>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </PersistGate>
    </Provider>
  </Router>
);

export default App;
