import React from 'react'
import { Smartphone, Apple, Laptop, Calendar1, Bookmark, Gift, BoomBox } from 'lucide-react';

const foreignExchangeData = [
    { currency: 'Indian Rupee (100)', buy: 160, sell: 160.15 },
    { currency: 'U.S. dollar', buy: 134.74, sell: 135.34 },
    { currency: 'European Euro', buy: 141.61, sell: 142.24 },
    { currency: 'UK Pound Sterling', buy: 170.3, sell: 171.06 },
    { currency: 'Swiss Franc', buy: 151.3, sell: 151.97 },
    { currency: 'Australian dollar', buy: 87.05, sell: 87.44 },
    { currency: 'Canadian dollar', buy: 96.14, sell: 96.57 },
    { currency: 'Singapore dollar', buy: 100.02, sell: 100.47 },
    { currency: 'Japanese Yen (10)', buy: 8.63, sell: 8.67 }
];


const bottom = () => {
    return (
        <>
            <section className='py-8 bg-[#f7f7f7] px-4 lg:px-0' id='bottoms'>
                <div className='w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                    <div className=''>
                        <div className='mt-4'>
                            <h1 className='text-[18px] capitalize text-[#a44740] font-medium'>DOWNLOADS</h1>
                            <div className='my-4 flex flex-col gap-2'>
                                <div className='flex gap-4 items-center'>
                                    <Smartphone className='text-sm' />
                                    <span className='text-sm'>Android Application</span>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <Apple />
                                    <span className='text-sm'>Apple Application</span>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <Laptop />
                                    <span className='text-sm'>Web Application</span>
                                </div>
                            </div>
                        </div><br />
                        <div className=''>
                            <h1 className='text-[18px] capitalize text-[#a44740] font-medium'>TOOLS</h1>
                            <div className='my-4 flex flex-col gap-3'>
                                <div className='flex gap-4 items-center'>
                                    <Calendar1 className='text-sm' />
                                    <span className='text-sm'>Date Converter</span>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <Bookmark />
                                    <span className='text-sm'>Saved</span>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <Gift />
                                    <span className='text-sm'>Hamro Gifts</span>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <BoomBox />
                                    <span className='text-sm'>Radio</span>
                                </div>
                            </div>
                        </div><br />
                        <div className=''>
                            <h1 className='text-[18px] capitalize text-[#a44740] font-medium'>CONTACT</h1>
                            <p className='text-sm' id='contact'>
                                Siphal-8, Kathmandu (Nepal)<br />
                                Email: support@hamropatro.com
                            </p>
                        </div>
                    </div><br className='block lg:hidden' />
                    <div className='mt-4 '>
                        <div className="w-full max-w-3xl mx-auto">
                            <h1 className='text-[18px] capitalize text-[#a44740] font-medium'>
                                FOREIGN EXCHANGE
                            </h1>
                            <div className="overflow-x-auto my-3">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="text-left p-2 ">Currency</th>
                                            <th className="text-right p-2 ">Buy</th>
                                            <th className="text-right p-2 ">Sell</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {foreignExchangeData.map((rate, index) => (
                                            <tr key={index} className="border-b border-gray-200">
                                                <td className="text-left p-2 text-gray-600">{rate.currency}</td>
                                                <td className="text-right p-2 text-gray-800">{rate.buy}</td>
                                                <td className="text-right p-2 text-gray-800">{rate.sell}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div><br className='block lg:hidden' />
                    <div className='mt-4 flex flex-col items-start lg:items-center'>
                        <h1 className='text-[18px] capitalize text-[#a44740] font-medium'>
                            HAMRO TEAM
                        </h1>
                        <div className='my-4'>
                            <div>
                                <p className='text-[#a44740]'>Manager/Editor</p>
                                <span className='text-gray-700'>Sudina Gautam</span>
                            </div>
                            <div className='my-4'>
                                <p className='text-[#a44740]'>Photo Journalist</p>
                                <span className='text-gray-700'>Ananda Kumar</span>
                            </div>
                            <div>
                                <p className='text-[#a44740]'>Art Journalist</p>
                                <span className='text-gray-700'>Mandip Gautam</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default bottom