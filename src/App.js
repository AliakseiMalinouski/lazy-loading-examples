import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import { PageRouter } from './Router/PageRouter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PageRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
