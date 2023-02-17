import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Invoke from './components/Invoke';
import LatestMissingPeople from './components/LatestMissingPeople';
import MenuBar from './components/MenuBar';
import Volunteer from './components/Volunteer';

function App() {

  return (
    <div className="flex flex-col font-sans">
      <MenuBar />
      <Home />
      <LatestMissingPeople />
      <About />
      <Volunteer />
    </div>
  )
}

export default App
