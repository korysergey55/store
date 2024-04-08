import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import i18n from './i18n'
import { ToastContainer } from 'react-toastify';
import App from './Components/App/App'

// normalize and basic styles for application
import 'normalize.css'
import './index.css'
import './sourses/styles/styles.scss'

import 'react-toastify/dist/ReactToastify.css'
import 'yet-another-react-lightbox/styles.css';

import 'antd/dist/reset.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter >
    <App />
    <ToastContainer />
  </BrowserRouter>
);
