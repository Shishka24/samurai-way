import "./App.css";
import { Profile } from "./componets/Profile";
import { Header } from "./componets/Header";
import { NavBar } from "./componets/NavBar";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <Profile />
    </div>
  );
};

export default App;
