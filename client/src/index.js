import { StrictMode } from 'react';
import { RouteProvider } from './router';
import { createRoot } from 'react-dom/client'; 
// import { ThemeProvider } from './ThemeContext';
import * as serviceWorker from './serviceWorker';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root'),
  root = createRoot(rootElement); // createRoot(rootElement!) if you use Typescript
root.render(
  <StrictMode>
    <RouteProvider>
      {/* <ThemeProvider> */}
      <App />
      {/* </ThemeProvider> */}
    </RouteProvider>
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
