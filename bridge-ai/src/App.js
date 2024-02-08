import './App.css';
import MapComponent from './MapComponent';
import Navbar from './Navbar/Navbar'

function App() {
  return (
    <div className="App">
        <div className='navbar-container'>
            <Navbar/>
        </div>
        <MapComponent/>
    </div>
  );

}
export default App;
