import { ChevronLeft, ChevronRight, Grid, List } from 'lucide-react';

export default function Calendar() {
  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8 hidden" id="calendar_layout">
      <div className="container mx-auto font-sans flex flex-col gap-4 max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
          {/* Left Sidebar */}
          <div className="md:col-span-1 space-y-4">
            <div className="bg-white p-4 rounded shadow-md">
              <h2 className="text-lg sm:text-xl text-red-600 border-b-2 border-red-600 pb-2 mb-4">Upcoming Events</h2>
              <div className="bg-blue-500 text-white p-2 rounded">
                <div className="text-xl sm:text-2xl">29</div>
                <div>Kartik</div>
              </div>
              <p className="mt-2 text-sm sm:text-base">
                Baikuntha Chaturdashi Vrata/World Diabetes Day/International Day against Illicit Trafficking in Cultural Property
              </p>
              <p className="text-xs sm:text-sm text-gray-600">today</p>

              <br />

              <div className="bg-blue-500 text-white p-2 rounded">
                <div className="text-xl sm:text-2xl">15</div>
                <div>Mangshir</div>
              </div>
              <p className="mt-2 text-sm sm:text-base">Bala Chaturdashi Vrata (Shatbij Chharne Din)</p>
              <p className="text-xs sm:text-sm text-gray-600">16 days remaining</p>
            </div>
            <div className="bg-white p-4 rounded shadow-md">
              <h2 className="text-lg sm:text-xl text-red-600 border-b-2 border-red-600 pb-2 mb-4">My Notes</h2>
              <button className="bg-red-600 text-white px-4 py-2 rounded flex items-center text-sm sm:text-base">
                Add Note <span className="ml-2 text-xl sm:text-2xl">+</span>
              </button>
              <p className="mt-2 text-xs sm:text-sm text-gray-600">You can add your notes here.</p>
            </div>
          </div>

          {/* Main Calendar */}
          <div className="md:col-span-2 bg-white p-4 rounded">
            <div className="flex flex-wrap justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 bg-gray-200 rounded text-sm">Today</button>
                <button className="p-1 bg-gray-200 rounded"><Grid size={18} /></button>
                <button className="p-1 bg-gray-200 rounded"><List size={18} /></button>
              </div>
              <div className="flex items-center space-x-2">
                <ChevronLeft size={18} />
                <select className="bg-gray-200 rounded px-2 py-1 text-sm">
                  <option>2081</option>
                </select>
                <select className="bg-gray-200 rounded px-2 py-1 text-sm">
                  <option>Kartik</option>
                </select>
                <ChevronRight size={18} />
              </div>
              <div className="text-sm text-red-600">२०८१ Kartik | Oct/Nov 2024</div>
            </div>
            <table className="w-full border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-gray-100">
                  {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(day => (
                    <th key={day} className="border p-2">{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[...Array(5)].map((_, weekIndex) => (
                  <tr key={weekIndex}>
                    {[...Array(7)].map((_, dayIndex) => (
                      <td key={dayIndex} className="border p-2 h-20 align-top">
                        <div>{weekIndex * 7 + dayIndex + 1}</div>
                        <div className="text-gray-600 text-xs">Event</div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right Sidebar */}
          <div className="md:col-span-1 space-y-4">
            <div className="bg-white p-4 rounded shadow-md">
              <div className="flex justify-between items-center mb-4 flex-wrap">
                <button className="px-3 py-1 bg-pink-100 text-pink-600 rounded text-sm">REMIT</button>
                <button className="px-3 py-1 bg-green-100 text-green-600 rounded text-sm">RECHARGE</button>
              </div>
              <div className="flex justify-between items-center flex-wrap">
                <button className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded text-sm">GIFTS</button>
                <button className="px-3 py-1 bg-red-100 text-red-600 rounded text-sm">HOLIDAYS</button>
              </div>
            </div>
            <div className="bg-white p-4 rounded shadow-md">
              <h2 className="text-lg sm:text-xl text-red-600 border-b-2 border-red-600 pb-2 mb-4">Doctors</h2>
              {[1, 2].map(doctor => (
                <div key={doctor} className="flex items-center space-x-2 mb-2">
                  <img src="/placeholder.svg?height=10&width=40" alt={`Doctor ${doctor}`} width={40} height={40} className="rounded-full" />
                  <div>
                    <div>Dr. Name</div>
                    <div className="text-xs text-gray-600">Specialization</div>
                  </div>
                </div>
              ))}
              <button className="w-full bg-blue-500 text-white py-2 rounded mt-4 text-sm">TALK TO DOCTORS</button>
            </div>
            <div className="bg-white p-4 rounded shadow-md">
              <h2 className="text-lg sm:text-xl text-red-600 border-b-2 border-red-600 pb-2 mb-4">Jyotish</h2>
              {[1, 2].map(astrologer => (
                <div key={astrologer} className="flex items-center space-x-2 mb-2">
                  <img src="/placeholder.svg?height=40&width=40" alt={`Astrologer ${astrologer}`} width={40} height={40} className="rounded-full" />
                  <div>
                    <div>Astrologer Name</div>
                    <div className="text-xs text-gray-600">Specialization</div>
                  </div>
                </div>
              ))}
              <button className="w-full bg-green-500 text-white py-2 rounded mt-4 text-sm">TALK TO DOCTORS</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
