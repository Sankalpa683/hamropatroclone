import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const bulletinnews = [
  {
    id: 1,
    title: "ब्राजिलको सर्वोच्च अदालत परिसरमा विस्फोट",
    backgroundImage: "https://images.hamro-files.com/kLB5dMN4V-KqvanxP-m3tcw_jG0=/300x300/smart/https://img.setoparty.com/uploads/posts/brazil-blast-1731556090.jpg",
    logoimage: "http://storage.googleapis.com/hamropatro-storage/assets/hamropatro.com/images/9508bb6d-17cd-4692-8e0c-b11b85c9f7dd.jpg",
    newsurl: "https://english.hamropatro.com/newsStory/-OBdFTD1SQoAvnRKITNv#-OBdFTD1SQoAvnRKITNv"
  },
  {
    id: 2,
    title: "ब्राजिलको सर्वोच्च अदालत परिसरमा विस्फोट",
    backgroundImage: "https://images.hamro-files.com/2JuB-ojtGmRcixexa_VeI2GicxI=/300x300/smart/https://encdn.ratopati.com/media/news/real-sociedad_0kY7QXh796.webp",
    logoimage: "http://storage.googleapis.com/hamropatro-storage/assets/hamropatro.com/images/9508bb6d-17cd-4692-8e0c-b11b85c9f7dd.jpg",
    newsurl: "https://english.hamropatro.com/newsStory/-OBaff8D3J6L27kp7Dy5#-OBaff8D3J6L27kp7Dy5"
  },
  {
    id: 3,
    title: "ब्राजिलको सर्वोच्च अदालत परिसरमा विस्फोट",
    backgroundImage: "https://images.hamro-files.com/Jwl9h2v194BTi2FIhOItzKCjZ-U=/300x300/smart/https://npcdn.ratopati.com/media/news/barcelona_hVwL64Sfur.jpg",
    logoimage: "http://storage.googleapis.com/hamropatro-storage/assets/hamropatro.com/images/9508bb6d-17cd-4692-8e0c-b11b85c9f7dd.jpg",
    newsurl: "https://english.hamropatro.com/newsStory/-OB_ojLrLdEbwva3fLFH#-OB_ojLrLdEbwva3fLFH"
  },
  {
    id: 4,
    title: "ब्राजिलको सर्वोच्च अदालत परिसरमा विस्फोट",
    backgroundImage: "https://images.hamro-files.com/PxEuoJfNaWThvnGcDTjaqVvjvVs=/300x300/smart/https://annapurnapost.prixacdn.net/media/albums/Untitled-1_bMzZkGLZrJ_hOPz8kdLi6.jpg",
    logoimage: "http://storage.googleapis.com/hamropatro-storage/assets/hamropatro.com/images/9508bb6d-17cd-4692-8e0c-b11b85c9f7dd.jpg",
    newsurl: "https://english.hamropatro.com/newsStory/-OBdFTD1SQoAvnRKITNv#-OBdFTD1SQoAvnRKITNv"
  },
  {
    id: 5,
    title: "ब्राजिलको सर्वोच्च अदालत परिसरमा विस्फोट",
    backgroundImage: "https://images.hamro-files.com/yxMMQY_tCW1RwJB-C0y-3t3v18I=/300x300/smart/https://assets.deshsanchar.com/wp-content/uploads/2024/11/13190412/accident-2-sankhu.png",
    logoimage: "http://storage.googleapis.com/hamropatro-storage/assets/hamropatro.com/images/9508bb6d-17cd-4692-8e0c-b11b85c9f7dd.jpg",
    newsurl: "https://english.hamropatro.com/newsStory/-OBdFTD1SQoAvnRKITNv#-OBdFTD1SQoAvnRKITNv"
  },
  {
    id: 6,
    title: "ब्राजिलको सर्वोच्च अदालत परिसरमा विस्फोट",
    backgroundImage: "https://images.hamro-files.com/T6AvcHCb5UjWjM7Ori54l0TDCvU=/300x300/smart/https://assets.deshsanchar.com/wp-content/uploads/2024/11/13180308/462558205_469182532317293_3877642996602000530_n.png",
    logoimage: "http://storage.googleapis.com/hamropatro-storage/assets/hamropatro.com/images/9508bb6d-17cd-4692-8e0c-b11b85c9f7dd.jpg",
    newsurl: "https://english.hamropatro.com/newsStory/-OBdFTD1SQoAvnRKITNv#-OBdFTD1SQoAvnRKITNv"
  },
  {
    id: 7,
    title: "ब्राजिलको सर्वोच्च अदालत परिसरमा विस्फोट",
    backgroundImage: "https://images.hamro-files.com/7td1PUptf-ZnjMqnUaLtSB-_Dl0=/300x300/smart/https://www.onlinekhabar.com/wp-content/uploads/2024/11/purnabahadurko_sarangi-1.jpg",
    logoimage: "http://storage.googleapis.com/hamropatro-storage/assets/hamropatro.com/images/9508bb6d-17cd-4692-8e0c-b11b85c9f7dd.jpg",
    newsurl: "https://english.hamropatro.com/newsStory/-OBdFTD1SQoAvnRKITNv#-OBdFTD1SQoAvnRKITNv"
  },
  {
    id: 8,
    title: "ब्राजिलको सर्वोच्च अदालत परिसरमा विस्फोट",
    backgroundImage: "https://images.hamro-files.com/NTGmhNfNAcS7S8FtfsxzQiPCy6s=/300x300/smart/https://assets.deshsanchar.com/wp-content/uploads/2024/11/09075206/hejbollah.jpg",
    logoimage: "http://storage.googleapis.com/hamropatro-storage/assets/hamropatro.com/images/9508bb6d-17cd-4692-8e0c-b11b85c9f7dd.jpg",
    newsurl: "https://english.hamropatro.com/newsStory/-OBdFTD1SQoAvnRKITNv#-OBdFTD1SQoAvnRKITNv"
  },
  {
    id: 8,
    title: "ब्राजिलको सर्वोच्च अदालत परिसरमा विस्फोट",
    backgroundImage: "https://images.hamro-files.com/EhJdOA4KsGU1H_rvMFVlff9Jq8s=/300x300/smart/https://www.onlinekhabar.com/wp-content/uploads/2024/11/Himal-Kalapathar-Cover-1024x712.jpg",
    logoimage: "http://storage.googleapis.com/hamropatro-storage/assets/hamropatro.com/images/9508bb6d-17cd-4692-8e0c-b11b85c9f7dd.jpg",
    newsurl: "https://english.hamropatro.com/newsStory/-OBdFTD1SQoAvnRKITNv#-OBdFTD1SQoAvnRKITNv"
  },
  {
    id: 9,
    title: "ब्राजिलको सर्वोच्च अदालत परिसरमा विस्फोट",
    backgroundImage: "https://images.hamro-files.com/9Pbi-HUWnQsduYUMVnqRmW5hh4Q=/300x300/smart/https://www.khabarhub.com/wp-content/uploads/2024/11/milk-product-import-from-india.jpg",
    logoimage: "http://storage.googleapis.com/hamropatro-storage/assets/hamropatro.com/images/9508bb6d-17cd-4692-8e0c-b11b85c9f7dd.jpg",
    newsurl: "https://english.hamropatro.com/newsStory/-OBdFTD1SQoAvnRKITNv#-OBdFTD1SQoAvnRKITNv"
  },
  {
    id: 10,
    title: "ब्राजिलको सर्वोच्च अदालत परिसरमा विस्फोट",
    backgroundImage: "https://images.hamro-files.com/_S07Vrgf6ChJGxgObB8tSZmdaKY=/300x300/smart/https://encdn.ratopati.com/media/news/aalmat_td55KHsdwf.webp",
    logoimage: "http://storage.googleapis.com/hamropatro-storage/assets/hamropatro.com/images/9508bb6d-17cd-4692-8e0c-b11b85c9f7dd.jpg",
    newsurl: "https://english.hamropatro.com/newsStory/-OBdFTD1SQoAvnRKITNv#-OBdFTD1SQoAvnRKITNv"
  },
  {
    id: 11,
    title: "ब्राजिलको सर्वोच्च अदालत परिसरमा विस्फोट",
    backgroundImage: "https://images.hamro-files.com/9i1wVm-w-RB1yfvfwpLlvIub_nw=/300x300/smart/https://ichef.bbci.co.uk/news/raw/cpsprodpb/eb42/live/793f7350-a01a-11ef-a040-d74242d1f59e.jpg",
    logoimage: "http://storage.googleapis.com/hamropatro-storage/assets/hamropatro.com/images/9508bb6d-17cd-4692-8e0c-b11b85c9f7dd.jpg",
    newsurl: "https://english.hamropatro.com/newsStory/-OBdFTD1SQoAvnRKITNv#-OBdFTD1SQoAvnRKITNv"
  }
]
export default function Bulletin() {
  return (
    <section className="py-[30px] mx-4 lg:mx-0 z-0" id="bulletin">
      <div className="flex flex-col max-w-7xl gap-4 mx-auto w-full">
        <p className="font-medium text-lg/[18px]" id="bulletin_text">News Bulletin</p>

        {/* Swiper Wrapper */}
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            120: { slidesPerView: 1, spaceBetween: 0 },
            340: { slidesPerView: 2, spaceBetween: 2 },
            478: { slidesPerView: 3, spaceBetween: 20 },
            719: { slidesPerView: 4, spaceBetween: 30 },
            982: { slidesPerView: 5, spaceBetween: 30 },
            1008: { slidesPerView: 6, spaceBetween: 30 },
            1024: { slidesPerView: 7, spaceBetween: 30 },
            1228: { slidesPerView: 8, spaceBetween: 40 },
          }}
          className="w-full flex gap-2 justify-around"
        >
          {bulletinnews.map((item) => (
            <SwiperSlide key={item.id} className=''>
              <a
                href={item.newsurl}
                target="_blank"
                className="news-story-card block bg-cover bg-center h-[236px] w-[150px] rounded-[10px]"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              >
                <div className="p-4 bg-black bg-opacity-50 rounded-[10px] flex flex-col justify-between h-full">
                  <span className="text-white text-lg font-semibold">
                    {item.title}
                  </span>
                  <div className="mt-2">
                    <div className="flex items-center space-x-2">
                      <img
                        src={item.logoimage}
                        alt="Source"
                        className="w-6 h-6 rounded-[10px]"
                      />
                    </div>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
