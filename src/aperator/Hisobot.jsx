import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { MdDeleteOutline, MdOutlineModeEditOutline } from 'react-icons/md';

function Hisobot() {
  const [selectedDate, setSelectedDate] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [showCalendar2, setShowCalendar2] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSeller, setSelectedSeller] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const months = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'];
  const daysOfWeek = ['Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh', 'Ya'];

  const [orders, setOrders] = useState([
    {
      id: 1,
      TushganPul: '12000$',
      BizgaUtgan: "10000$",
      Maxsulotlat: 'Tishlar uchun apparat',
      utkazganM: "400 ta",
      tel: '+998901234567',
      seller: 'Alisher Karimov',
      date: '2025-12-10'
    },
    {
      id: 2,
      TushganPul: '15000$',
      BizgaUtgan: "12000$",
      Maxsulotlat: 'Yurak uchun dori',
      utkazganM: "300 ta",
      tel: '+998901234568',
      seller: 'Dilshod Toshmatov',
      date: '2025-12-12'
    },
    {
      id: 3,
      TushganPul: '8000$',
      BizgaUtgan: "7000$",
      Maxsulotlat: 'Bosh og\'rig\'i tabletkasi',
      utkazganM: "500 ta",
      tel: '+998901234569',
      seller: 'Alisher Karimov',
      date: '2025-12-14'
    },
    {
      id: 4,
      TushganPul: '20000$',
      BizgaUtgan: "18000$",
      Maxsulotlat: 'Ko\'z uchun tomchi',
      utkazganM: "250 ta",
      tel: '+998901234570',
      seller: 'Malika Rahimova',
      date: '2025-12-15'
    },
    {
      id: 5,
      TushganPul: '9500$',
      BizgaUtgan: "8500$",
      Maxsulotlat: 'Vitamin kompleksi',
      utkazganM: "600 ta",
      tel: '+998901234571',
      seller: 'Dilshod Toshmatov',
      date: '2025-12-16'
    },
    {
      id: 6,
      TushganPul: '11000$',
      BizgaUtgan: "9500$",
      Maxsulotlat: 'Antibiotic kursak',
      utkazganM: "350 ta",
      tel: '+998901234572',
      seller: 'Alisher Karimov',
      date: '2025-12-08'
    },
    {
      id: 7,
      TushganPul: '13500$',
      BizgaUtgan: "11000$",
      Maxsulotlat: 'Asab tizimi uchun dori',
      utkazganM: "280 ta",
      tel: '+998901234573',
      seller: 'Malika Rahimova',
      date: '2025-12-09'
    },
    {
      id: 8,
      TushganPul: '7500$',
      BizgaUtgan: "6500$",
      Maxsulotlat: 'Shamollash dorisi',
      utkazganM: "450 ta",
      tel: '+998901234574',
      seller: 'Dilshod Toshmatov',
      date: '2025-12-11'
    },
    {
      id: 9,
      TushganPul: '16000$',
      BizgaUtgan: "14000$",
      Maxsulotlat: 'Qon bosimi tabletkasi',
      utkazganM: "320 ta",
      tel: '+998901234575',
      seller: 'Alisher Karimov',
      date: '2025-12-13'
    },
    {
      id: 10,
      TushganPul: '10500$',
      BizgaUtgan: "9000$",
      Maxsulotlat: 'Oshqozon uchun dori',
      utkazganM: "380 ta",
      tel: '+998901234576',
      seller: 'Malika Rahimova',
      date: '2025-12-14'
    }
  ]);

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;

    return { daysInMonth, startingDayOfWeek };
  };

  const handleDateSelect = (day) => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    setSelectedDate(dateStr);
    setShowCalendar(false);
    setShowCalendar2(false);
  };

  const changeMonth = (direction) => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(currentMonth.getMonth() + direction);
    setCurrentMonth(newMonth);
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);
  const today = new Date().getDate();
  const isCurrentMonth = currentMonth.getMonth() === new Date().getMonth() &&
    currentMonth.getFullYear() === new Date().getFullYear();

  // Get unique sellers from orders
  const allSellers = [...new Set(orders.map(order => order.seller))];

  // Filter sellers based on search term
  const filteredSellers = allSellers.filter(seller =>
    seller.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter orders based on selected seller and date
  const filteredOrders = orders.filter(order => {
    const matchesSeller = selectedSeller === '' || order.seller === selectedSeller;
    const matchesDate = selectedDate === '' || order.date === selectedDate;

    return matchesSeller && matchesDate;
  });

  const handleSellerClick = (seller) => {
    setSelectedSeller(seller);
    setSearchTerm('');
    setShowSuggestions(false);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(e.target.value.length > 0);
    if (e.target.value === '') {
      setSelectedSeller('');
    }
  };

  const CalendarComponent = ({ show, setShow }) => (
    show && (
      <div className="absolute top-full mt-2 left-0 bg-white rounded-lg shadow-lg border p-4 z-50 w-[320px]">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => changeMonth(-1)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="font-semibold">
            {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </div>

          <button
            onClick={() => changeMonth(1)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-2">
          {daysOfWeek.map(day => (
            <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: startingDayOfWeek }).map((_, index) => (
            <div key={`empty-${index}`} className="p-2"></div>
          ))}

          {Array.from({ length: daysInMonth }).map((_, index) => {
            const day = index + 1;
            const isToday = isCurrentMonth && day === today;
            const dateStr = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day).toISOString().split('T')[0];
            const isSelected = selectedDate === dateStr;

            return (
              <button
                key={day}
                onClick={() => handleDateSelect(day)}
                className={`p-2 text-center rounded hover:bg-blue-100 transition-colors ${
                  isToday ? 'border border-blue-600 text-blue-600' : ''
                } ${isSelected ? 'bg-blue-500 text-white' : ''}`}
              >
                {day}
              </button>
            );
          })}
        </div>

        <div className="flex justify-end gap-2 mt-4 pt-4 border-t">
          <button
            onClick={() => setShow(false)}
            className="px-4 py-2 text-sm rounded hover:bg-gray-100"
          >
            Bekor qilish
          </button>
          <button
            onClick={() => setShow(false)}
            className="px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Tanlash
          </button>
        </div>
      </div>
    )
  );

  return (
    <div className='py-[30px] px-[30px]'>
      <div className="search flex w-full gap-3 mb-6">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder='Sotuvchi ismini qidiring...'
            value={searchTerm}
            onChange={handleSearchChange}
            onFocus={() => setShowSuggestions(searchTerm.length > 0)}
            className='w-full p-2 rounded-md border outline-none'
          />

          {showSuggestions && filteredSellers.length > 0 && (
            <div className="absolute top-full mt-1 w-full bg-white border rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
              {filteredSellers.map((seller, index) => (
                <div
                  key={index}
                  onClick={() => handleSellerClick(seller)}
                  className="p-3 hover:bg-gray-100 cursor-pointer border-b last:border-b-0"
                >
                  <div className="font-medium text-gray-800">{seller}</div>
                  <div className="text-xs text-gray-500 mt-1">
                    {orders.filter(o => o.seller === seller).length} ta buyurtma
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={() => {
            setSearchTerm('');
            setSelectedSeller('');
            setShowSuggestions(false);
          }}
          className="py-1.5 px-6 rounded-md cursor-pointer border border-[#00BCE4] text-[#00BCE4] hover:bg-[#00BCE4] hover:text-white transition-all"
        >
          Tozalash
        </button>
      </div>

      <div className='mt-6'>
        {selectedSeller && (
          <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-blue-900">{selectedSeller}</h3>
                <p className="text-sm text-blue-700 mt-1">Jami {filteredOrders.length} ta buyurtma</p>
              </div>
              <button
                onClick={() => {
                  setSelectedSeller('');
                  setSelectedDate('');
                }}
                className="text-blue-600 hover:text-blue-800"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        <div className="flex gap-3 mb-6">
          <select
            value={selectedSeller}
            onChange={(e) => setSelectedSeller(e.target.value)}
            className="p-2 px-4 rounded-md border bg-white hover:bg-gray-50 outline-none cursor-pointer text-gray-700"
          >
            <option value="">Barcha sotuvchilar</option>
            {allSellers.map(seller => (
              <option key={seller} value={seller}>{seller}</option>
            ))}
          </select>

          <div className="relative">
            <button
              onClick={() => setShowCalendar2(!showCalendar2)}
              className="flex items-center gap-2 p-2 px-4 rounded-md border bg-white hover:bg-gray-50 min-w-[200px]"
            >
              <Calendar size={20} className="text-gray-500" />
              <span className="text-gray-700">
                {selectedDate || 'Sana bo\'yicha filter'}
              </span>
            </button>

            <CalendarComponent show={showCalendar2} setShow={setShowCalendar2} />
          </div>

          {(selectedDate || selectedSeller) && (
            <button
              onClick={() => {
                setSelectedDate('');
                setSelectedSeller('');
              }}
              className="py-2 px-4 rounded-md border border-red-500 text-red-500 hover:bg-red-50"
            >
              Filterni tozalash
            </button>
          )}
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-6 text-left text-sm font-medium text-gray-700">Sotuvchi</th>
                  <th className="px-6 py-6 text-left text-sm font-medium text-gray-700">Tushgan pul</th>
                  <th className="px-6 py-6 text-left text-sm font-medium text-gray-700">Bizga o'tgan</th>
                  <th className="px-6 py-6 text-left text-sm font-medium text-gray-700">Maxsulotlar</th>
                  <th className="px-6 py-6 text-left text-sm font-medium text-gray-700">O'tkazgan</th>
                  <th className="px-6 py-6 text-left text-sm font-medium text-gray-700">Telefon</th>
                  <th className="px-6 py-6 text-left text-sm font-medium text-gray-700">Sana</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {filteredOrders.length > 0 ? (
                  filteredOrders.map((order, index) => (
                    <tr key={order.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-6 text-sm">{order.seller}</td>
                      <td className="px-6 py-6 text-sm">{order.TushganPul}</td>
                      <td className="px-6 py-6 text-sm">{order.BizgaUtgan}</td>
                      <td className="px-6 py-6 text-sm">{order.Maxsulotlat}</td>
                      <td className="px-6 py-6 text-sm">{order.utkazganM}</td>
                      <td className="px-6 py-6 text-sm">{order.tel}</td>
                      <td className="px-6 py-6 text-sm">{order.date}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="px-6 py-12 text-center text-gray-500">
                      {selectedSeller || selectedDate ? 'Bu filter bo\'yicha ma\'lumot topilmadi' : 'Sotuvchi tanlang'}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-600">
          {selectedSeller && `${selectedSeller}: ${filteredOrders.length} ta natija`}
        </div>
      </div>
    </div>
  );
}

export default Hisobot;
