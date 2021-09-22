import logo from './logo.svg';
import './App.css';
import Nav from './components/nav'
import Banner from './components/banner'
import About from './components/about'
import Skills from './components/skills';
import Projects from './components/projects';
import Testimonials from './components/testimonials';
import Contact from './components/contact';


function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
