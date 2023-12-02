import Home from './Components/Home';
import DataProvider from './Context/DataProvider';

function App() {
  return (
    <DataProvider>    
      <Home/>
    </DataProvider>
  );
}

export default App;

// so here <Home/> becomes a children as it is enclosed 
// b/w then opening and closing tags of <DataProvider> 
// and all the coponents connected(rooted) in Home can use the states in <DataProvider>
// remember to FWD the children! else we'll get an error