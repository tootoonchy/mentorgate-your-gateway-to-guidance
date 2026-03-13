import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './layouts/AppLayout';
import { Dashboard } from './pages/Dashboard';
import { MentorSearch } from './pages/MentorSearch';
import { Activities } from './pages/Activities';
import './App.css';

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/mentors" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mentors" element={<MentorSearch />} />
          <Route path="/activities" element={<Activities />} />
          {/* Default fallback */}
          <Route path="*" element={<Navigate to="/mentors" replace />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
