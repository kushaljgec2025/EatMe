import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Tabs from './components/Tabs';
import Recipes from './components/Recipes';
import { useState } from 'react';
function App() {
  const [loader, setLoader] = useState(false);
  return (

    <div className="App">
      <Header />
      <Tabs setLoader={setLoader} />
      <Recipes setLoader={setLoader} />
      {
        loader && <div className="loader w-[100%] h-[100vh] bg-black/75 fixed flex justify-center top-0 left-0">
          <div className="spinner animate-spin absolute top-[50%] border-[8px] border-t-[8px] border-black border-t-mid w-[100px] h-[100px] rounded-[100%]">

          </div>
        </div>
      }
    </div>

  );
}

export default App;
