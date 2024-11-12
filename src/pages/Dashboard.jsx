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
                      27 Kartik 2081,<br /> Tuesday
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
                    <span>Nov 12, 2024</span>
                    <br />
                  </div>
                </div>
              </div>
              <div className="">
                <img src="https://www.hamropatro.com/images/rotating-ads//bank1.gif" className="w-[800px]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
