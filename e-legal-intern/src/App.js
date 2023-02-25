import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ChatBox from './pages/ChatBox';
import Landing from './pages/Landing';
import ChatOnboarding from './pages/ChatOnboarding';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/setbot" exact element={<ChatOnboarding />} />
        <Route path="/chat" exact element={<ChatBox />} />
      </Routes>
    </Router>
  );
}

export default App;
