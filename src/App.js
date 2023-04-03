import { Routes, BrowserRouter, Route,  } from 'react-router-dom';
import Library from './pages/Library';
import Presentation from './pages/Presentation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Activity from './pages/Activity';
import Video from './pages/Video';
import Audio from './pages/Audio';
import Contact from './pages/Contact';
import ActivityDetails from './pages/ActivityDetails';


function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route  path="/" element={<Presentation/>} />
          <Route path="/library" element={<Library/>} />
          <Route path="/activity" element={<Activity/>} />
          <Route path="/activityDetails" element={<ActivityDetails/>} />
          <Route path="/audio" element={<Audio/>} />
          <Route path="/video" element={<Video/>} />
          <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
