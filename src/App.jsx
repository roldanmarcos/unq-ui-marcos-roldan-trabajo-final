import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import WelcomePage from './pages/WelcomePage/WelcomePage'
import OptionsPage from './pages/OptionsPage/OptionPage';

function App() {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path='options' element={<OptionsPage />} />
            {/* <Route path='game' element={<OptionPage />} /> */}
          </Routes>
        </Router>
    );
}

export default App
