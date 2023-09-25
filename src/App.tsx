import React from "react";
import { Route, Routes, Link } from "react-router-dom"
import MainMenuPage from "./pages/mainMenu/MainMenuPage";
import { GamePage } from "./pages/game/GamePage";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import GameSettingPage from "./pages/settingPage/GameSettingPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainMenuPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/setting" element={<GameSettingPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
