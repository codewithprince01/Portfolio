import './App.css'
import { Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import Layout from './components/layout/Layout';
import Aboutpage from './pages/Aboutpage';
import ProjectPage from './pages/ProjectPage';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Homepage/>}/>
        <Route path='/about' element={<Aboutpage/>}/>
        <Route path='/project' element={<ProjectPage/>}/>
        <Route path="/resume" element={<Resume/>} />
        <Route path="/contact-me" element={<Contact/>} />

        </Route>
      </Routes>
  )
}

export default App
