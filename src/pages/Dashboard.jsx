import NepaliDate from 'nepali-date-converter'

//  Dyanamic value of current day, month & year 
// source: https://www.w3schools.com/js/js_dates.asp

let date = new Date();
let year = date.getFullYear();
let day = date.getDate();

// to get day name based on day value (eg: 3 = tuesday) => chatgpt response

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// currentDayName is being assigned based on where the dayNames month name array value is positioned

const currentDayName = dayNames[day];

let months = date.getMonth();
// to get month name based on month value (eg: 12 = november) => chatgpt response

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
// currentMonthName is being assigned based on where the monthNames month name array value is positioned

const currentMonthName = monthNames[months];





export default function Dashboard() {
  return (
    <>
      <section className="mx-auto	">
        <div className="bg-red-700 py-5 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center flex-wrap gap-4 lg:gap-0 mx-4 lg:mx-0">
              <div>
                <div className="logo">
                  <div className="date">
                    <span className="nep text-3xl">
                      {day} {currentMonthName} {year},<br /> {currentDayName}
                    </span>
                  </div>
                  <div style={{ margin: '10px 0', color: 'white', fontSize: '1.3rem' }}>
                    कार्तिक शुक्ल एकादशी
                  </div>
                  <div style={{ lineHeight: 1.9 }}>
                    पञ्चाङ्ग: हर्षण विष्टि/भद्रा पूर्वभाद्र
                  </div>
                  <div className="time">
                    <span> दिउँसोको ०२ : १७</span><br />
                    <span>Nov {day}, {year}</span>
                    <br />
                  </div>
                </div>
              </div>
              <div className=" mx-auto">
                <img src="https://www.hamropatro.com/images/rotating-ads//jyotish4.gif" className="w-[800px]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
