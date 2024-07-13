import { useState } from "react";
import AppContext from "./context/AppContext";
// import Router from "./Router";
import MainRouter from "./Router/routerhelper";



const AppInitialState = {
  bags: null,
  bag: null,
};

function App(){
 const [appState, setAppState] = useState(AppInitialState);
  return(
   <AppContext.Provider value ={{AppInitialState}}>
    <MainRouter/>
   </AppContext.Provider>
      // <Router/>
   
  )
}

export default App;