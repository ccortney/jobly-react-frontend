import {useState} from "react";
import { useLocalStorage } from "./hooks";
import AppRoutes from "./AppRoutes";
import './App.css';

function App() {

  // const [token, setToken] = useLocalStorage("token", null);

  // const [user, setUser] = useState(null);


  return (
    <div className="App">
      <AppRoutes/>
    </div>
  );
}

export default App;
