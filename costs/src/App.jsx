import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'
import Project from './components/pages/Project'

import Container from './components/layoult/Container'
import styles from './components/layoult/Container.module.css'
import NavBar from './components/layoult/NavBAr'
import Footer from './components/layoult/Footer'

function App() {


  return (

    <Router>
      
      <NavBar />

      <Container customClass="min-height">

        <Routes>

          <Route exact path="/" element={<Home />}></Route>

          <Route   path="/projects" element={<Projects />}></Route>

          <Route   path="/company" element={<Company />}></Route>

          <Route   path="/contact" element={<Contact />}></Route>

          <Route   path="/newproject" element={<NewProject />}></Route>

          <Route   path="/project/:id" element={<Project />}></Route>


        </Routes>

      </Container>

      <Footer />

    </Router>

  )
}

export default App
