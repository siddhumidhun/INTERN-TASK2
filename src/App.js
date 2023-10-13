import './App.css';
import SideBar from './components/SideBar';
import MainSection from './components/MainSection';

function App() {
  return (
    <div className="flex">
      <SideBar/>
      <MainSection/>
    </div>
  );
}

export default App;