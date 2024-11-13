import React from 'react'
import Select from 'react-select'


const options = [
    { value: 'Kartik', label: 'Kartik Snan Samapti' },
    { value: 'Trayodashi', label: 'Trayodashi Shraddha' },
    { value: 'Chaturthi', label: 'Chaturthi Shraddha' },
    { value: 'Gunla', label: 'Gunla Parwa Samapti' },
    { value: 'Dhanu', label: 'Dhanu Sankranti' },
    { value: 'Khasti', label: 'Khasti Shraddha'},
]

const search = () => {
    return (
        <>
            <section className='py-4 bg-[#F7F7F7] mx-4 lg:mx-0'>
                <div className='flex max-w-7xl mx-auto gap-4 flex-wrap justify-between items-center'>
                    <div>
                        <p className='text-[#7b7873] text-xl'>Nepali Calendar 2081</p>
                    </div>
                    <div className='w-[100%] lg:w-[26%]'>
                        <Select options={options} className="w-full" defaultValue={options[1]}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default search