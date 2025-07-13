import Profile from "../assets/profile.png";
import reactIcon from "../assets/react-icon.png";
import activateIcon from "@ui5/webcomponents-icons/dist/activate.js";
import { Avatar, ShellBar, ShellBarItem } from '@ui5/webcomponents-react';
import { Home } from "./components/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import { Detail } from "./components/Detail";
import { useNavigate } from "react-router-dom";



function App() {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("./");
  };

  return (
    <div>

      <ShellBar
        logo={<img src={reactIcon} alt="Company Logo" />}
        profile={<Avatar><img src={Profile} alt="User Avatar" /></Avatar>}
        primaryTitle="My App"
        onLogoClick={handleLogoClick}
      >
        <ShellBarItem icon={activateIcon} text="Activate" />
      </ShellBar>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Routes>
    </div>
  );
}

export default App;
