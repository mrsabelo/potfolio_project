import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar';
import Header from './components/Header';
import Particles from 'react-particles-js';


function App() {
  return (
    <>
      <Navbar />
      <Particles
        className="particles-canvas"
          params={{
          particles: {
              number: {
                value: 50,
                density: {
                  enable: true,
                  value_area:900
                }
              },
              shape: {
                type: "circle",
                stroke: {
                  with: 20,
                  color: "#f9ab00"
                }
              },
             
            }
        }}
      />
      
      <Header />
      
    </>
  );
}

export default App;
