import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './styles/App.scss';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </HashRouter>
);
