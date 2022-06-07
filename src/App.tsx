import './App.css';
import { Provider } from 'react-redux';
import Dashboard from './pages/dashboard';
import {
  Routes,
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import store from './store';
// pages url
const PAGES = {
  ROOT: '/',
};

// pages components
const ROUTES = [
  {
    path: PAGES.ROOT,
    element: <Dashboard/>,
  },
];


function App() {
  return (
    <Provider store={store} >
      <Router>
        <Routes>
         {ROUTES.map((props, idx) => (
            <Route key={idx} {...props} />
          ))} 
        </Routes>
      </Router>
</Provider>
  );
}

export default App;
