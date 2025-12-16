import React from "react";
// import { ShoppingBag, Tag, BarChart2 } from "lucide-react";
import { LuUserCog, LuBraces } from "react-icons/lu";
import { LiaToothSolid } from "react-icons/lia";
import { RiToolsLine, RiMegaphoneLine } from "react-icons/ri";
import { FaUserDoctor } from "react-icons/fa6";
import { MdHomeRepairService } from "react-icons/md";
import Dentalist from "../assets/dentalist.jpg"
import { Link } from "react-router-dom";
function Dashboard() {
  return (
    <div className="w-full px-10 py-10 bg-[#F3F5F9] min-h-screen">

      {/* TITLE + BUTTON */}
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-5xl font-extrabold text-black">
          Sotuvchi dashbordi
        </h1>
      </div>

      {/* CARDS ROW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* CARD 1 */}
        <div className=" bg-gray-100 rounded-2xl shadow p-6 flex items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-blue-300 flex items-center justify-center">
            <LuUserCog className="text-[#1E5EFF] w-7 h-7" />
          </div>
          <div>
            <p className="text-gray-500">Sotuvchi</p>
            <p className="text-2xl font-bold">50</p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className=" bg-gray-100 rounded-2xl shadow p-6 flex items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-red-300 flex items-center justify-center">
            <FaUserDoctor className="text-[#FF3B3B] w-7 h-7" />
          </div>
          <div>
            <p className="text-gray-500">Stamatolog</p>
            <p className="text-2xl font-bold">12</p>
          </div>
        </div>

        {/* CARD 3 */}
        <Link to="/zubtexniklar" className=" bg-gray-100 rounded-2xl shadow p-6 flex items-center gap-5 cursor-pointer">
          <div className="w-14 h-14 rounded-full bg-green-300 flex items-center justify-center">
            <LiaToothSolid className="text-[#00A23E] w-7 h-7" />
          </div>
          <div>
            <p className="text-gray-500">Zub texnik</p>
            <p className="text-2xl font-bold">3</p>
          </div>
        </Link>


      {/* </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> */}

        {/* CARD 1 */}
        <div className=" bg-gray-100 rounded-2xl shadow p-6 flex items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-blue-300 flex items-center justify-center">
            <MdHomeRepairService  className="text-[#1E5EFF] w-7 h-7" />
          </div>
          <div>
            <p className="text-gray-500">Ustalar</p>
            <p className="text-2xl font-bold">38</p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className=" bg-gray-100 rounded-2xl shadow p-6 flex items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-red-300 flex items-center justify-center">
            <RiMegaphoneLine  className="text-[#FF3B3B] w-7 h-7" />
          </div>
          <div>
            <p className="text-gray-500">Eloni</p>
            <p className="text-2xl font-bold">32</p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className=" bg-gray-100 rounded-2xl shadow p-6 flex items-center gap-5">
          <div className="w-17 h-14 rounded-full flex items-center justify-center">
            <img src={Dentalist} className="text-[#00A23E] w-full rounded-full h-full" alt="" />
       </div>
          <div>
            <p className="text-gray-500">Dentalist</p>
            <p className="text-2xl font-bold">Tez orada</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
