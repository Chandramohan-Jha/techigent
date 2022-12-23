import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// CSS
import './App.css'

// Layout
// import Navbar from './components/Layout/Navbar'
import NewNavBar from './components/Layout/NewNavBar'
import Home from './components/Layout/Home'
import Careers from './components/Layout/Careers'
import Contact from './components/Layout/Contact'
import Awards from './components/Layout/Awards'
import Gallery from './components/Layout/Gallery'
import Detail from './components/Layout/Detail'
import LeaderTeam from './components/Layout/LeaderTeam'
import LeaderDetail from './components/Layout/LeaderDetail'
import Blogs from './components/Layout/Blogs'
import About from './components/Layout/About'
import News from './components/Layout/News'
import CaseStudy from './components/Layout/CaseStudy'

// Product And Service
import ProdAndServ from './components/Service/ProdAndServ'
import Endpoints from './components/Service/Endpoints'
import HardwareSol from './components/Service/HardwareSol'
import SoftwareSol from './components/Service/SoftwareSol'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NewNavBar />
        {/* <Navbar /> */}
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/careers' element={<Careers />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/awards&recogination' element={<Awards />} />
          <Route exact path='/gallery' element={<Gallery />} />
          <Route exact path='/detail' element={<Detail />} />
          <Route exact path='/leadership_team' element={<LeaderTeam />} />
          <Route exact path='/leaderDetail/:id' element={<LeaderDetail />} />
          <Route exact path='/product&service' element={<ProdAndServ />} />
          <Route exact path='/product&service/endpoints' element={<Endpoints />} />
          <Route exact path='/product&service/hardware-solutions' element={<HardwareSol />} />
          <Route exact path='/product&service/software-solutions' element={<SoftwareSol />} />
          <Route exact path='/blogs&post' element={<Blogs />} />
          <Route exact path='/news' element={<News />} />
          <Route exact path='/case-study' element={<CaseStudy />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App