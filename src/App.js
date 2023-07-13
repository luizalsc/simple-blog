import { Provider } from 'react-redux';
import { store } from './store/store'
import './App.css';
import { LoginPage } from './Pages/login';

function App() {
  return (
    <Provider store={store}>
      <LoginPage />
    </Provider>
  );
}

export default App;
