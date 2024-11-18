import React from 'react'
import { CirclePlus } from 'lucide-react';


const events = [
    {
        id: 0,
        date: '04 Mangshir',
        event: 'Mangal Chauthi Toilet Day',
        time: 'after 2 days'
    },
    {
        id: 1,
        date: '10 Mangshir',
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
const jyotishData = [
    {
        id: 1,
        name: "Jyotish Khagendra Subedi",
        profileLink: "http://bit.ly/32rIfi8",
        imageLink: "https://images.hamro-files.com/R9h5glzuWo-BOZg31W8dg4Am3PY=/50x50/smart/https://everestdb.sgp1.cdn.digitaloceanspaces.com/parewa/consultant/9e2392c5-d134-4e33-b36d-9a0e21216e1b"
    },
    {
        id: 2,
        name: "Jyotish Dipendra Khatiwada",
        profileLink: "http://bit.ly/32rIfi8",
        imageLink: "https://images.hamro-files.com/rMXwGG3-HBxa-T_ArFW5YTqNBbI=/50x50/smart/https://everestdb.sgp1.cdn.digitaloceanspaces.com/parewa/consultant/b9c57237-56de-4639-a141-37e90be0fb15"
    },
    {
        id: 3,
        name: "Jyotish Ghanashyam Pokharel",
        profileLink: "http://bit.ly/32rIfi8",
        imageLink: "https://images.hamro-files.com/Bz73eask5Jcm0HHnx25bFRUkdXs=/50x50/smart/https://everestdb.sgp1.cdn.digitaloceanspaces.com/parewa/consultant/7069ca70-6c86-4e07-a886-8576d7ec9b2f"
    },
    {
        id: 4,
        name: "Jyotish Dr. Janak Bhatta",
        profileLink: "http://bit.ly/32rIfi8",
        imageLink: "https://images.hamro-files.com/FkNdLLKDrR9eAT7Z_AVQMH0rJnk=/50x50/smart/https://everestdb.sgp1.cdn.digitaloceanspaces.com/parewa/consultant/23249774-cb09-49d3-b03c-a6b329227f5c"
    },
    {
        id: 5,
        name: "Jyotish Krishna Prasad Bhandari",
        profileLink: "http://bit.ly/32rIfi8",
        imageLink: "https://images.hamro-files.com/aus0QevilqapDJBQxqUpPfqoTRM=/50x50/smart/https://everestdb.sgp1.cdn.digitaloceanspaces.com/parewa/consultant/c253391f-4105-48c1-8c21-75b3868aad7f"
    },
    {
        id: 6,
        name: "Jyotish Pandit Mukunda Nepal",
        profileLink: "http://bit.ly/32rIfi8",
        imageLink: "https://images.hamro-files.com/XiMXJowJpF1SRF25YuwK4sDJNGk=/50x50/smart/https://everestdb.sgp1.cdn.digitaloceanspaces.com/parewa/consultant/54e59b6f-e5df-41a9-b60c-2104966c14e7"
    },
    {
        id: 7,
        name: "Jyotish Amrit Paudel",
        profileLink: "http://bit.ly/32rIfi8",
        imageLink: "https://images.hamro-files.com/RWU6Vs0EY7OnvOXhI3VTieHLgkU=/50x50/smart/https://everestdb.sgp1.cdn.digitaloceanspaces.com/parewa/consultant/44437764-1ee4-4688-b865-b5a5912f1478"
    },
    {
        id: 8,
        name: "Jyotish Smarika Acharya",
        profileLink: "http://bit.ly/32rIfi8",
        imageLink: "https://images.hamro-files.com/uIQN77Ss4ykz9r6UK3b6wvEcBD8=/50x50/smart/https://everestdb.sgp1.cdn.digitaloceanspaces.com/parewa/consultant/a4c3d890-9233-4f30-89e6-45b972316c5e"
    },
    {
        id: 9,
        name: "Jyotish Mohan Ghimire",
        profileLink: "http://bit.ly/32rIfi8",
        imageLink: "https://images.hamro-files.com/y1IykrNiBr43QWWRhKGaMRQAIiE=/50x50/smart/https://everestdb.sgp1.cdn.digitaloceanspaces.com/parewa/consultant/4cdc791c-92c2-44ea-8c9c-2ac8b53669fd"
    }
];
const doctors = [
    {
        id: 0,
        name: 'Dr. Mukti Ghimire',
        specialty: 'MBBS, MD (Pediatrics)',
        imageUrl: 'https://images.hamro-files.com/hef9cMIvJojl5sm63ecNd_CzgbM=/50x50/smart/https://everestdb.sgp1.cdn.digitaloceanspaces.com/parewa/consultant/74856180-1cf8-48b8-835d-140bce9942b3',
        profileLink: 'https://health.hamropatro.com/doctors/dr_mukti_ghimire'
    },
    {
        id: 1,
        name: 'Dr. Smriti Mathema',
        specialty: 'MBBS, MD, Pediatrics',
        imageUrl: 'https://images.hamro-files.com/_2HSOToqxXw2408498fnCNyLDfU=/50x50/smart/https://everestdb.sgp1.cdn.digitaloceanspaces.com/parewa/consultant/531004d7-8348-4ada-a52c-57aee3219906',
        profileLink: 'https://health.hamropatro.com/doctors/dr_smriti_mathema'
    },
    {
        id: 2,
        name: 'Dr. Shambhu Dutta',
        specialty: 'MBBS, MD, Sexologist, Aesthetic and Hair Transplant...',
        imageUrl: 'https://images.hamro-files.com/02pCeRXTEi1uQageWK2oFh1O6TI=/50x50/smart/https://everestdb.sgp1.cdn.digitaloceanspaces.com/parewa/consultant/4a62c4f7-3cdb-4a84-aab9-a92f4e074dcf',
        profileLink: 'https://health.hamropatro.com/doctors/dr_shambhu_dutta_joshi'
    },
    {
        id: 3,
        name: 'Dr. Saroj Ojha',
        specialty: 'Professor of Psychiatry',
        imageUrl: 'https://images.hamro-files.com/Xk6AHO6qYHqa3TdP5NsqiNZBXFc=/50x50/smart/https://everestdb.sgp1.cdn.digitaloceanspaces.com/parewa/consultant/c5bd5dfd-a250-4a06-abaa-2c0c0b3a2815',
        profileLink: 'https://health.hamropatro.com/doctors/dr_saroj_prasad_ojha_1724'
    },
    {
        id: 4,
        name: 'Dr. Khagendra Kafle',
        specialty: 'MBBS, MD(Psychiatry)',
        imageUrl: 'https://images.hamro-files.com/7Bg0jbEKyPdTBw19goaois8GIt0=/50x50/smart/https://everestdb.sgp1.cdn.digitaloceanspaces.com/parewa/consultant/1b9e38b2-2150-4751-85f7-22253637c99f',
        profileLink: 'https://health.hamropatro.com/doctors/dr_khagendra_kafle_10505'
    },
    {
        id: 5,
        name: 'Dr. Laxman Adhikari',
        specialty: 'MBBS, MD, Internal Medicine / Nephrology',
        imageUrl: 'https://images.hamro-files.com/5ZM-M5_n7XJqrl7eFQTGyKrOAqM=/50x50/smart/https://everestdb.sgp1.cdn.digitaloceanspaces.com/parewa/consultant/67f3adeb-f0ad-4c98-9ccd-ffd26e42c073',
        profileLink: 'https://health.hamropatro.com/doctors/prof_dr_laxman_adhikari'
    },
    {
        id: 6,
        name: 'Dr. Neeta Timilsina',
        specialty: 'Obstetrics and Gynaecology, MBBS, MD',
        imageUrl: 'https://images.hamro-files.com/1IALXXL1XkJoUbv7RTFbxXVv2wU=/50x50/smart/https://everestdb.sgp1.cdn.digitaloceanspaces.com/parewa/consultant/69e271d3-6c8d-4800-9ab6-906653a44232',
        profileLink: 'https://health.hamropatro.com/doctors/dr_neeta_timilsina_13039'
    },
    {
        id: 7,
        name: 'Dr. Sweta Singh',
        specialty: 'MD, Obstetrics and gynecology',
        imageUrl: 'https://images.hamro-files.com/0fUPr1GXe_hiQKt17popPxKmYJ0=/50x50/smart/https://everestdb.sgp1.cdn.digitaloceanspaces.com/parewa/consultant/574a7db9-2afd-4215-a2e5-b18aa8fedc9d',
        profileLink: 'https://health.hamropatro.com/doctors/dr_sweta_singh_5333'
    },
    {
        id: 8,
        name: 'Dr. Sumedh Mishra',
        specialty: 'MBBS, MS, ENT/ HNS',
        imageUrl: 'https://images.hamro-files.com/y20EZpAtQIHtjvFG0TKHiCi1gsg=/50x50/smart/https://everestdb.sgp1.cdn.digitaloceanspaces.com/parewa/consultant/0470abcd-3659-4985-ac53-e22b87768fff',
        profileLink: 'https://health.hamropatro.com/doctors/dr_sumedh_mishra_15833'
    },
    {
        id: 9,
        name: 'Dr. Yujal Man Singh',
        specialty: 'MBBS, MD Psychiatry and Psychotherapy',
        imageUrl: 'https://images.hamro-files.com/Nzl4N1-cBWqc8T6m04IpSpc7dvg=/50x50/smart/https://everestdb.sgp1.cdn.digitaloceanspaces.com/parewa/consultant/1bc4b8c1-b164-4a71-91f1-0918a976ee85',
        profileLink: 'https://health.hamropatro.com/doctors/dr_yujal_man_singh_9988'
    },
    {
        id: 10,
        name: 'Dr. Mohan Raj Sharma',
        specialty: 'Neuro Surgeon',
        imageUrl: 'https://images.hamro-files.com/B1imvmedwQOmFVn_F2DADV6ryKM=/50x50/smart/https://everestdb.sgp1.cdn.digitaloceanspaces.com/parewa/consultant/00ea2ce5-33b9-4604-8ff0-7932b22e3663',
        profileLink: 'https://health.hamropatro.com/doctors/dr_mohan_raj_sharma_1720'
    }
];


const calander = () => {
    return (
        <>
            <section className='py-[10px] px-4 lg:px-0'>
                <div className='w-full mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                    <div className='flex flex-col gap-4 w-full'>
                        <div className='p-[10px] border w-full'>
                            <h2 className='text-[#b34141] pb-2 font-bold text-center'><span><a href="/posts" className="headderNew">Upcomming Events</a></span></h2>
                            <hr />
                            <div className='overflow-y-scroll h-fit lg:h-[464px]'>
                                {events.map((item) => (
                                    <>
                                        <div className='my-3 flex justify-around w-full gap-2 '>

                                            <div key={item.id} className='text-center bg-[#2282bc] flex flex-col items-center break-all text-white p-1'>
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
                    <div className='col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-3 w-full flex flex-col items-center text-center border'>
                        <h2 className='text-[#b34141] mt-2 font-bold text-center'><span><a href="/posts" className="headderNew">Calander</a></span></h2>
                    </div>
                    <div className='flex flex-col flex-wrap gap-4 w-full'>
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
                        <div className='p-[10px] border w-full'>
                            <h2 className='text-[#b34141] pb-2 font-bold text-center'><span><a href="/posts" className="headderNew">Doctors</a></span></h2>
                            <hr />
                            <div className="overflow-y-scroll h-[227px]">
                                {doctors.map((item) => (
                                    <div key={item.id} className="my-3 flex items-center gap-4">
                                        <img src={item.imageUrl} alt={item.name} className="w-12 h-12 rounded-full" />

                                        <div className="flex flex-col justify-center">
                                            <h2 className="text-sm font-semibold text-gray-800">
                                                {item.name}
                                            </h2>
                                            <p className="text-xs text-gray-500 mt-1">{item.specialty}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                        <div className='p-[10px] border w-full'>
                            <h2 className='text-[#b34141] pb-2 font-bold text-center'><span><a href="/posts" className="headderNew">Jyotish</a></span></h2>
                            <hr />
                            <div className="overflow-y-scroll h-[227px]">
                                {jyotishData.map((item) => (
                                    <div key={item.id} className="my-3 flex items-center gap-4">
                                        <img src={item.imageLink} alt={item.name} className="w-12 h-12 rounded-full" />

                                        <div className="flex flex-col justify-center">
                                            <h2 className="text-sm font-semibold text-gray-800">
                                                {item.name}
                                            </h2>
                                            <p className="text-xs text-gray-500 mt-1">{item.specialty}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default calander