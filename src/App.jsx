import { useState } from "react";
import { AppProvider } from "./context/AppContext";
// import Router from "./Router";
import MainRouter from "./Router/routerhelper";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import  {CartProvider}  from "./context/CartContext.jsx";

const AppInitialState = {
  bags: null,
  bag: null,
};

const queryClient = new QueryClient();
function App() {
  const [appState, setAppState] = useState(AppInitialState);
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>


      <CartProvider>
        <MainRouter />
      </CartProvider>
      </AppProvider>
    </QueryClientProvider>
    // <Router/>
  );
}

export default App;
