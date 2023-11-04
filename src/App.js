import Contact from './components/Contact/contact';
import Intro from './components/Intro/intro';
import Navbar from './components/Navbar/navbar'
import Skill from './components/Skill/skill';
import Works from './components/Works/works';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skill />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
