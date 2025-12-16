import React, { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import Profile from "../assets/profile.jpg";
import { X, Menu } from "lucide-react";

export default function Apnavbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // qaysi sahifada turganini bilish

  const linkClass = (path) =>
    `cursor-pointer text-[16px] ${
      location.pathname === path ? "font-bold" : "font-[400]"
    }`;

  return (
    <header className="w-full sticky z-50 top-0 left-0 bg-[#E4EBFE] shadow-sm">
      <div className="flex items-center justify-between h-[80px] px-5">
        <img src={Logo} alt="logo" className="w-[130px]" />

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 items-center">
          <li onClick={() => navigate("/")} className={linkClass("/")}>Dashboard</li>
          <li onClick={() => navigate("/yetkazibberish")} className={linkClass("/yetkazibberish")}>Yetkazib berish</li>
          <li onClick={() => navigate("/tovarlar")} className={linkClass("/tovarlar")}>Tovarlar</li>
          <li onClick={() => navigate("/buyurtmatarixi")} className={linkClass("/buyurtmatarixi")}>Buyurtma tarixi</li>
          <li onClick={() => navigate("/hisobot")} className={linkClass("/hisobot")}>Hisobot</li>
          {/* <li className="font-[400] cursor-pointer text-[16px]">Hisobot</li> */}
          <img src={Profile} alt="profile" className="w-[50px] h-[50px] rounded-full" />
        </ul>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setOpen(true)}>
          <Menu size={32} />
        </button>
      </div>
    </header>
  );
}
