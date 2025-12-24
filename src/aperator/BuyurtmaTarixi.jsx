import React, { use, useState } from 'react';
import { MdOutlineModeEditOutline, MdDeleteOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function Aperator() {
  const navigate = useNavigate();
  const YetkazibBerish = () => {
    navigate('/yetkazibberish');
  }
  const [orders, setOrders] = useState([
    {
      id: 1234,
      mahsulotNomi: 'Ortopediya',
      soni: 5,
      mijoz: 'Ali Aliyev',
      narxi: "1,250,000 so'm",
      yetkazibBeruvchi: 'Yandex Go, Tadbirkor, BTC',
      tadbirkorlar: "Orifjanov Bilolxon",
      umumiyTarix: "1234mln",
      status: "yaxshi",
      manzil: 'Toshkent Yunusobod'
    },
    {
      id: 2345,
      mahsulotNomi: 'Ortopediya',
      soni: 5,
      mijoz: 'Ali Aliyev',
      narxi: "1,250,000 so'm",
      yetkazibBeruvchi: 'Yandex Go, Tadbirkor, BTC',
      tadbirkorlar: "Orifjanov Bilolxon",
      umumiyTarix: "1234mln",
      status: "o'rtacha",
      manzil: 'Toshkent Yunusobod'
    },
    {
      id: 3456,
      mahsulotNomi: 'Ortopediya',
      soni: 5,
      mijoz: 'Ali Aliyev',
      narxi: "1,250,000 so'm",
      yetkazibBeruvchi: 'Yandex Go, Tadbirkor, BTC',
      tadbirkorlar: "Orifjanov Bilolxon",
      umumiyTarix: "1234mln",
      status: "yaxshi",
      manzil: 'Toshkent Yunusobod'
    },
    {
      id: 4567,
      mahsulotNomi: 'Ortopediya',
      soni: 5,
      mijoz: 'Ali Aliyev',
      narxi: "1,250,000 so'm",
      yetkazibBeruvchi: 'Yandex Go, Tadbirkor, BTC',
      tadbirkorlar: "Orifjanov Bilolxon",
      umumiyTarix: "1234mln",
      status: "yomon",
      manzil: 'Toshkent Yunusobod'
    },
    {
      id: 5678,
      mahsulotNomi: 'Ortopediya',
      soni: 5,
      mijoz: 'Ali Aliyev',
      narxi: "1,250,000 so'm",
      yetkazibBeruvchi: 'Yandex Go, Tadbirkor, BTC',
      tadbirkorlar: "Orifjanov Bilolxon",
      umumiyTarix: "1234mln",
      status: "o'rtacha",
      manzil: 'Toshkent Yunusobod'
    }
  ]);



  const handleDelete = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  return (
    <div className='mt-[60px] px-6'>
  <h1 className="text-3xl font-medium mb-6">Buyurtmalar tarixi</h1>

  <div className="bg-white rounded-lg shadow">
    {/* Responsive scroll */}
    <div className="overflow-x-auto">
      <table className="w-full min-w-[900px]">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="px-6 py-6 text-center text-[10px] font-medium cursor-pointer text-gray-700">Buyurtma ID si</th>
            <th className="px-6 py-6 text-center text-[10px] font-medium cursor-pointer text-gray-700">Mahsulot nomi</th>
            <th className="px-6 py-6 text-center text-[10px] font-medium cursor-pointer text-gray-700">Tadbirkorlar</th>
            <th className="px-6 py-6 text-center text-[10px] font-medium cursor-pointer text-gray-700">Soni</th>
            <th className="px-6 py-6 text-center text-[10px] font-medium cursor-pointer text-gray-700">Mijoz</th>
            <th className="px-6 py-6 text-center text-[10px] font-medium cursor-pointer text-gray-700">Umumiy tarixi</th>
            <th className="px-6 py-6 text-center text-[10px] font-medium cursor-pointer text-gray-700">Narxi</th>
            <th
             className="px-6 py-6 text-center text-[10px] font-medium cursor-pointer text-gray-700"
             onClick={YetkazibBerish}
             >Yetkazib beruvchi</th>
            <th className="px-6 py-6 text-[10px] font-medium cursor-pointer text-center  text-gray-700">Status</th>
            <th className="px-6 py-6 text-center text-[10px] font-medium cursor-pointer text-gray-700">Manzil</th>
            <th className="px-6 py-6 text-left text-[10px] font-medium cursor-pointer text-gray-700">Amallar</th>
          </tr>
        </thead>


        <tbody className="divide-y divide-gray-200">
          {orders.map((order, index) => (
            <tr key={order.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="px-6 text-center py-6 text-[10px]">{order.id}</td>
              <td className="px-6 text-center py-6 text-[10px]">{order.mahsulotNomi}</td>
              <td className="px-6 text-center py-6 text-[10px]">{order.tadbirkorlar}</td>
              <td className="px-6 text-center py-6 text-[10px]">{order.soni}</td>
              <td className="px-6 text-center py-6 text-[10px]">{order.mijoz}</td>
              <td className="px-6 text-center py-6 text-[10px]">{order.umumiyTarix}</td>
              <td className="px-6 text-center py-6 text-[10px]">{order.narxi}</td>
              <td className="px-6 text-center py-6 text-[10px]">{order.yetkazibBeruvchi}</td>
              <td className="px-6 py-6 text-[10px] bg-red-600 text-white cursor-pointer text-center" onClick={YetkazibBerish}>{order.status}</td>
              <td className="px-6 text-center py-6 text-[10px]">{order.manzil}</td>
              <td className="px-6 py-6">
                <div className="flex gap-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    <MdOutlineModeEditOutline size={18} />
                  </button>
                  <button onClick={handleDelete} className="text-red-600 hover:text-red-800">
                    <MdDeleteOutline size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  </div>
</div>

  );
}

export default Aperator;
