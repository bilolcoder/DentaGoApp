import React from 'react';
import { Routes, Route } from "react-router-dom";
// import Aperator from "./aperator/aperator";
import BuyurtmalarTarixi from "./aperator/aperatorAll";
import Tovarlar from './aperator/Tovarlar';
import YetkazibBerish from "./aperator/YetkazibBerish";
import Navbar from "./aperator/Apnavbar";
import Dashboard from './aperator/Dashboard';
import Hisobot from './aperator/Hisobot';
import ZubTeaxnik from './aperator/ZubTexnik';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/buyurtmatarixi" element={<BuyurtmalarTarixi />} />
        <Route path="/tovarlar" element={<Tovarlar />} />
        <Route path="/yetkazibberish" element={<YetkazibBerish />} />
        <Route path="/hisobot" element={<Hisobot />} />
        <Route path="/zubtexniklar" element={<ZubTeaxnik />} />
      </Routes>
    </div>
  );
}

export default App;
