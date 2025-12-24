import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { MdDeleteOutline, MdOutlineModeEditOutline } from 'react-icons/md';
import { FaCheck } from "react-icons/fa";
import { HiX } from "react-icons/hi";

function ZubTexnik() {
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
      TushganPul: 'Tishlar uchun apparat',
      BizgaUtgan: "2025-12-20",
      Maxsulotlat: '2025-12-30',
      utkazganM: "10 kun",
      tel: '+998901234567',
      seller: 'Alisher Karimov',
      date: '2025-12-10',
      status: 'completed', // Faqat status saqlanadi
    },
    {
      id: 2,
      TushganPul: 'Yurak uchun dori',
      BizgaUtgan: "2025-12-22",
      Maxsulotlat: '2026-01-05',
      utkazganM: "14 kun",
      tel: '+998901234568',
      seller: 'Dilshod Toshmatov',
      date: '2025-12-12',
      status: 'cancelled',
    },
    {
      id: 3,
      TushganPul: 'Bosh og\'rig\'i tabletkasi',
      BizgaUtgan: "2025-12-01",
      Maxsulotlat: '2025-12-10',
      utkazganM: "9 kun",
      tel: '+998901234569',
      seller: 'Alisher Karimov',
      date: '2025-12-14',
      status: 'completed',
    },
    {
      id: 4,
      TushganPul: 'Ko\'z uchun tomchi',
      BizgaUtgan: "2025-11-15",
      Maxsulotlat: '2025-12-15',
      utkazganM: "1 oy",
      tel: '+998901234570',
      seller: 'Malika Rahimova',
      date: '2025-12-15',
      status: 'completed',
    },
    {
      id: 5,
      TushganPul: 'Vitamin kompleksi',
      BizgaUtgan: "2025-12-10",
      Maxsulotlat: '2025-12-20',
      utkazganM: "10 kun",
      tel: '+998901234571',
      seller: 'Dilshod Toshmatov',
      date: '2025-12-16',
      status: 'cancelled',
    },
    {
      id: 6,
      TushganPul: 'Antibiotic kursak',
      BizgaUtgan: "2025-11-28",
      Maxsulotlat: '2025-12-05',
      utkazganM: "7 kun",
      tel: '+998901234572',
      seller: 'Alisher Karimov',
      date: '2025-12-08',
      status: 'completed',
    },
    {
      id: 7,
      TushganPul: 'Asab tizimi uchun dori',
      BizgaUtgan: "2025-12-05",
      Maxsulotlat: '2025-12-25',
      utkazganM: "20 kun",
      tel: '+998901234573',
      seller: 'Malika Rahimova',
      date: '2025-12-09',
      status: 'cancelled',
    },
    {
      id: 8,
      TushganPul: 'Shamollash dorisi',
      BizgaUtgan: "2025-12-08",
      Maxsulotlat: '2025-12-18',
      utkazganM: "10 kun",
      tel: '+998901234574',
      seller: 'Dilshod Toshmatov',
      date: '2025-12-11',
      status: 'cancelled',
    },
    {
      id: 9,
      TushganPul: 'Qon bosimi tabletkasi',
      BizgaUtgan: "2025-12-10",
      Maxsulotlat: '2026-01-10',
      utkazganM: "1 oy",
      tel: '+998901234575',
      seller: 'Alisher Karimov',
      date: '2025-12-13',
      status: 'cancelled',
    },
    {
      id: 10,
      TushganPul: 'Oshqozon uchun dori',
      BizgaUtgan: "2025-12-15",
      Maxsulotlat: '2025-12-29',
      utkazganM: "14 kun",
      tel: '+998901234576',
      seller: 'Malika Rahimova',
      date: '2025-12-14',
      status: 'completed',
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

  // Iconlarni ko'rsatish uchun funksiya
  const renderStatusIcon = (status) => {
    switch(status) {
      case 'completed':
        return <FaCheck className="text-green-500 text-lg mx-auto" />;
      case 'cancelled':
        return <HiX className="text-red-500 text-2xl mx-auto" />;
      default:
        return null;
    }
  };

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

          {(selectedDate || selectedSeller) && (
            <button
              onClick={() => {
                setSelectedDate('');
                setSelectedSeller('');
              }}
              className="py-2 px-4 rounded-md border border-red-500 text-red-500 hover:bg-red-50"
            >
              Tozalash
            </button>
          )}
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-6 text-center text-sm font-medium text-gray-700">Buyurtma ID si</th>
                  <th className="px-6 py-6 text-center text-sm font-medium text-gray-700">Xaridor</th>
                  <th className="px-6 py-6 text-center text-sm font-medium text-gray-700">Olgan Maxsuloti</th>
                  <th className="px-6 py-6 text-center text-sm font-medium text-gray-700">Qachon olgan</th>
                  <th className="px-6 py-6 text-center text-sm font-medium text-gray-700">Qachon qaytaradi</th>
                  <th className="px-6 py-6 text-center text-sm font-medium text-gray-700">Qolgan vaqt</th>
                  <th className="px-6 py-6 text-center text-sm font-medium text-gray-700">Telefon</th>
                  <th className="px-6 py-6 text-center text-sm font-medium text-gray-700">Qabul qilgani</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {filteredOrders.length > 0 ? (
                  filteredOrders.map((order, index) => (
                    <tr key={order.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 text-center py-6 text-sm">{order.id}</td>
                      <td className="px-6 text-center py-6 text-sm">{order.seller}</td>
                      <td className="px-6 text-center py-6 text-sm">{order.TushganPul}</td>
                      <td className="px-6 text-center py-6 text-sm">{order.BizgaUtgan}</td>
                      <td className="px-6 text-center py-6 text-sm">{order.Maxsulotlat}</td>
                      <td className="px-6 text-center py-6 text-sm">{order.utkazganM}</td>
                      <td className="px-6 text-center py-6 text-sm">{order.tel}</td>
                      <td className="px-6 text-center py-6">
                        {renderStatusIcon(order.status)}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="px-6 py-12 text-center text-gray-500">
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

export default ZubTexnik;
