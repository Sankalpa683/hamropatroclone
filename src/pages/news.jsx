import React from 'react'

const firstnews = [
  {
    id: 1,
    title: "PM Oli reaffirms anti-corruption stance, pledges action against misconduct",
    source: "kathmandupost.com",
  },
  {
    id: 2,
    title: "CAN to provide Rs 250,000 to each female cricket player",
    source: "risingnepaldaily.com",
  },
  {
    id: 3,
    title: "Focus on production to boost GDP: DPM Singh",
    source: "risingnepaldaily.com",
  },
  {
    id: 4,
    title: "US Special Envoy for Youth Affairs in Nepal visit",
    source: "risingnepaldaily.com",
  },
];

const secondnews = [
  {
    id: 5,
    title: "Human Rights Watch accuses Israel of war crimes over Gaza displacements",
    source: "kathmandupost.com",
  },
  {
    id: 6,
    title: "Foreign Minister Rana says coordinating with Nepali workers abroad an uphill task",
    source: "kathmandupost.com",
  },
  {
    id: 7,
    title: "World’s largest coral found in the Pacific",
    source: "risingnepaldaily.com",
  },
  {
    id: 8,
    title: "President Paudel and his Azerbaijani counterpart hold bilateral meeting",
    source: "risingnepaldaily.com",
  },
];

const thirdnews = [
  {
    id: 9,
    title: "President Paudel urges developed nations to fulfil their commitments to address climate change impacts",
    source: "kathmandupost.com",
  },
  {
    id: 10,
    title: "Contempt case filed at Supreme Court against RSP leaders",
    source: "en.setopati.com",
  },
  {
    id: 11,
    title: "Education Minister asks agencies to improve results of grade 11 and 12",
    source: "risingnepaldaily.com",
  },
  {
    id: 12,
    title: "More job creation likely thru IT industry, Communications Minister says",
    source: "risingnepaldaily.com",
  },
];

const fourthnews = [
  {
    id: 13,
    title: "Politics is service: DPM Singh",
    source: "risingnepaldaily.com",
  },
  {
    id: 14,
    title: "Balen Shah: The youth’s icon or a leader too confrontational for Nepal",
    source: "english.onlinekhabar.com",
  },
  {
    id: 15,
    title: "CPN (US) to finalize leadership responsibilities in Friday meeting",
    source: "english.ratopati.com",
  },
  {
    id: 16,
    title: "President Paudel departs Baku for Nepal",
    source: "english.ratopati.com",
  },
];


const news = () => {
  return (
    <>
      <section className='py-[20px] bg-[#f7f7f7] mx-4 lg:mx-0' id='news'>
        <div className='w-full mx-auto max-w-7xl'>
          <h1 className='uppercase font-medium text-[#a5282c]'>Latest News</h1>
          <div className='grid mt-4 gap-9 sm:gap-9 md:gap-7 lg:gap-6 xl:gap-5 grid-cols-1 py-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            <div className='flex flex-col gap-3'>
              {firstnews.map((item) => (
                <div key={item.id} className=''>
                  <p className='text-sm flex flex-col gap-2'>
                    {item.title}
                    <span>
                      Source: {item.source}
                    </span>
                    <hr />

                  </p>
                </div>
              ))}
            </div>
            <div className='flex flex-col gap-3'>
              {secondnews.map((item) => (
                <div key={item.id}>
                  <p className='text-sm flex flex-col gap-2'>
                    {item.title}
                    <span>
                      Source: {item.source}
                    </span>
                    <hr />
                  </p>
                </div>
              ))}
            </div>
            <div className='flex flex-col gap-3'>
              {thirdnews.map((item) => (
                <div key={item.id}>
                  <p className='text-sm flex flex-col gap-2'>
                    {item.title}
                    <span>
                      Source: {item.source}
                    </span>
                    <hr />
                  </p>
                </div>
              ))}
            </div>
            <div className='flex flex-col gap-3'>
              {fourthnews.map((item) => (
                <div key={item.id}>
                  <p className='text-sm flex flex-col gap-2'>
                    {item.title}
                    <span>
                      Source: {item.source}
                    </span>
                    <hr />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default news