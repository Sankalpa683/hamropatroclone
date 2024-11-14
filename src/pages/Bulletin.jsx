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
    backgroundImage: "https://images.hamro-files.com/VgtLYgzEtCNhL6-v0Uj-lWByDe0=/300x300/smart/https://img.setoparty.com/uploads/posts/462565621_1018595219953300_7972512690194497473_n-1731468010.png",
    logoimage: "http://storage.googleapis.com/hamropatro-storage/assets/hamropatro.com/images/9508bb6d-17cd-4692-8e0c-b11b85c9f7dd.jpg",
    newsurl: "https://english.hamropatro.com/newsStory/-OBdFTD1SQoAvnRKITNv#-OBdFTD1SQoAvnRKITNv"
  }
]

export default function Bulletin() {
  return (
    <>
      <section className="py-[30px] mx-4 lg:mx-0" id="bulletin">
        <div className="flex flex-col max-w-7xl gap-4 mx-auto w-full flex-wrap">
          <p className="font-medium text-lg/[18px]" id="bulletin_text">News Bulletin</p>
          <div id="news-stories-wrapper no-scrollbar" className="flex items-center gap-1 justify-around flex-wrap">
            {bulletinnews.map((item) => (
              <div key={item.id}>
                <a
                  href={item.newsurl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="news-story-card block bg-cover bg-center h-[236px] w-[150px] rounded-[10px]"
                  style={{
                    backgroundImage: `url(${item.backgroundImage})`
                  }}
                >
                  <div className="p-4 bg-black bg-opacity-50 rounded-[10px] space-y-16">
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
