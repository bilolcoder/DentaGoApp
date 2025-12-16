import React from 'react';
import { Phone, Home, Truck, CheckCircle, House, BaggageClaim, UserCheck, CheckCheck } from 'lucide-react';
import Map from "../assets/map.png"
import Profile from "../assets/profile.jpg";

function YetkazibBerish() {
  return (
    <div className="min-h-screen mt-[60px] bg-white px-[300px]">

      {/* Xarita rasmi */}
      <div className="mb-[20px]">
        <img
          src={Map}
          alt="Yetkazib berish xaritasi"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Pastki oq qism */}
      <div className="bg-white -mt-8 px-6 pt-8 pb-10">

        {/* Vaqt */}
        <div className="text-center mb-8">
          <p className="text-sm t bg-blue-300ext-gray-600">Yetkazib berish vaqtimiz</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">12:40–13:30</p>
        </div>

        {/* Statuslar */}
        <div className="flex justify-around mb-10">
            <div className="text-center">
            <div className="w-14 h-14 bg-[#00BCE4] rounded-full flex items-center justify-center mx-auto mb-2">
              <CheckCheck className="w-7 h-7 text-white" />
            </div>
            <p className="text-medium text-gray-600">Qabul qildi</p>
          </div>

          <div className="text-center">
            <div className="w-14 h-14 bg-[#00BCE4] rounded-full flex items-center justify-center mx-auto mb-2">
              <BaggageClaim className="w-7 h-7 text-white" />
            </div>
            <p className="text-medium text-gray-600">Yuklanmoqda</p>
          </div>

          <div className="text-center">
            <div className="w-14 h-14 bg-[#00BCE4] rounded-full flex items-center justify-center mx-auto mb-2">
              <Truck className="w-7 h-7 text-white" />
            </div>
            <p className="text-medium text-gray-600">Yo‘lda</p>
          </div>

          <div className="text-center">
            <div className="w-14 h-14 bg-[#00BCE4] rounded-full flex items-center justify-center mx-auto mb-2">
              <CheckCircle className="w-7 h-7 text-white" />
            </div>
            <p className="text-medium text-gray-600">Yetkazib berildi</p>
          </div>

          <div className="text-center">
            <div className="w-14 h-14 bg-[#00BCE4] rounded-full flex items-center justify-center mx-auto mb-2">
              <UserCheck className="w-7 h-7 text-white" />
            </div>
            <p className="text-medium text-gray-600">Dental olindi</p>
          </div>
        </div>
        <div className="bg-white border border-gray-300 rounded-2xl">

        {/* Kuryer */}
        <div className=" rounded-2xl p-5 flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <img
              src={Profile}
              alt="Kuryer"
              className="w-16 h-16 rounded-full object-cover"
              />
            <div>
              <p className="text-sm text-gray-600">Yetkazib beruvchi</p>
              <p className="font-semibold text-gray-900">Muzaffar</p>
            </div>
          </div>
          <button className="bg-[#00BCE4] flex items-center justify-center gap-3 py-3 px-5 rounded-full text-white shadow-lg">
            <Phone className="w-4 h-4" /> Qo'ng'iroq qilish
          </button>
        </div>

        {/* Manzil */}
        <div className="px-5 py-4 rounded-b-2xl border-t border-gray-200 flex items-center justify-between">
  <div>
    <p className="text-sm text-gray-600 font-medium">Yetkazib berish manzili</p>
    <p className="text-[13px] text-gray-700 mt-1">Toshkent Yunusobod</p>
  </div>

  <div className="w-12 h-12 bg-[#00BCE4] rounded-full flex items-center justify-center shadow">
<House className='text-white'/>
  </div>
</div>

              </div>

      </div>
    </div>
  );
}

export default YetkazibBerish;
