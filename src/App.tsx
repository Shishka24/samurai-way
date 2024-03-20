import "./App.css";

import { Profile } from "./components/Profile/Profile";
import { Header } from "./components/Header/Header";
import { NavBar } from "./components/NavBar/NavBar";
import { Dialogs } from "./components/Dialogs/Dialogs";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="app-wrapper-content">
        <Dialogs />
      </div>
      {/* <Profile /> */}
    </div>
  );
};

export default App;
