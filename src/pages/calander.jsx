import React from 'react'
import { CirclePlus } from 'lucide-react';


const events = [
    {
        id: 0,
        date: '4 Mangshir',
        event: 'Mangal Chauthi Toilet Day',
        time: 'after 2 days'
    },
    {
        id: 1,
        date: '8 Mangshir',
        event: 'Mangal Chauthi Toilet Day',
        time: 'after 2 days'
    },
    {
        id: 2,
        date: '12 Mangshir',
        event: 'Mangal Chauthi Toilet Day',
        time: 'after 2 days'
    },
    {
        id: 3,
        date: '18 Mangshir',
        event: 'Mangal Chauthi Toilet Day',
        time: 'after 2 days'
    },
    {
        id: 4,
        date: '26 Mangshir',
        event: 'Mangal Chauthi Toilet Day',
        time: 'after 2 days'
    },

]

const calander = () => {
    return (
        <>
            <section className='py-[10px] px-4 lg:px-0'>
                <div className='w-full mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-4'>
                    <div className='flex flex-col gap-4'>
                        <div className='p-[10px] border w-full'>
                            <h2 className='text-[#b34141] pb-2 font-bold text-center'><span><a href="/posts" className="headderNew">Upcomming Events</a></span></h2>
                            <hr />
                            <div className='overflow-y-scroll h-[260px]'>
                                {events.map((item) => (
                                    <>
                                        <div className='my-3 flex justify-around w-full gap-2 '>

                                            <div key={item.id} className='text-center bg-[#2282bc] text-white h-fit p-1 w-fit'>
                                                {item.date}
                                            </div>
                                            <div className='break-all '>
                                                <h2 className='break-all text-start text-ld font-thin'>
                                                    {item.event}
                                                </h2>
                                                <p className='text-gray-400 mt-1'>{item.time}</p>
                                            </div>
                                        </div><hr />
                                    </>
                                ))}
                            </div>
                        </div>
                        <div className='p-[10px] border w-full text-sm'>
                            <div className='flex flex-wrap items-center	justify-between mb-2'>
                                <div className='flex flex-col items-center'>
                                    <h2 className='text-[#b34141] pb-2 font-bold text-start'><span><a href="/posts" className="headderNew">My Notes</a></span></h2>
                                </div>
                                <div>
                                    <button className='px-2 py-1 bg-[#bd2226] text-white rounded-lg flex gap-2 items-center'>Add Notes <CirclePlus className='h-[15px] w-[15px]' />
                                    </button>
                                </div>
                            </div>
                            <hr />
                            <div className='py-4 my-4 flex flex-wrap flex-col items-center justify-center text-center'>
                                <p>You can add your notes here.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-3 w-full flex flex-col items-center text-center border'>
                        <h2 className='text-[#b34141] mt-2 font-bold text-center'><span><a href="/posts" className="headderNew">Calander</a></span></h2>
                    </div>
                    <div className='flex flex-col flex-wrap '>
                        <div className='grid grid-cols-2 gap-2'>
                            <div className='text-sm'>
                                <a href="https://remit.hamropatro.com" target="_self" className="bg-[#ffebed] font-bold rounded-lg flex justify-between py-[8px] px-[10px] uppercase text-[#6e6a6b]">Remit
                                    <img alt="remit" src="https://english.hamropatro.com/images/services/remit_50.webp" className='w-[20px] h-[20px]' />
                                </a>
                            </div>
                            <div className='text-sm'>
                                <a href="https://recharge.hamropatro.com" target="_self" className="bg-[#dff9ee] font-bold rounded-lg flex justify-between py-[8px] px-[10px] uppercase text-[#6e6a6b]">recharge
                                    <img alt="remit" src="https://english.hamropatro.com/images/services/remit_50.webp" className='w-[20px] h-[20px]' />
                                </a>
                            </div>
                            <div className='text-sm'>
                                <a href="https://gifts.hamropatro.com" target="_self" className="bg-[#fffde8] font-bold rounded-lg flex justify-between py-[8px] px-[10px] uppercase text-[#6e6a6b]">gifts
                                    <img alt="remit" src="https://english.hamropatro.com/images/services/remit_50.webp" className='w-[20px] h-[20px]' />
                                </a>
                            </div>
                            <div className='text-sm'>
                                <a href="https://english.hamropatro.com/nepali-public-holidays" target="_self" className="bg-[#fbe4ec] font-bold rounded-lg flex justify-between py-[8px] px-[10px] uppercase text-[#6e6a6b]">holiday
                                    <img alt="remit" src="https://english.hamropatro.com/images/services/remit_50.webp" className='w-[20px] h-[20px]' />
                                </a>
                            </div>
                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default calander