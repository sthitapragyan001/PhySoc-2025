import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Team from './pages/Team/Team'
import Events from './pages/Events/Events'
import Gallery from './pages/Gallery/Gallery'
import BadGateway from './404/404'


function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <Events /> */}
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/ourteam" element={<Team />} />
      <Route path="/events" element={<Events/>} />
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="/*" element={<BadGateway/>} />
    </Routes>
    </>
  )
}

export default App
