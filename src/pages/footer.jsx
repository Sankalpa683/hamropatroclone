import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export default function footer() {
  return (
    <footer className="bg-[#0a1929] text-gray-300 py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Nepali Calendar 2081 */}
          <div>
            <h2 className="text-white font-medium mb-4">Nepali Calendar 2081</h2>
            <ul className="space-y-2">
              {["Baishakh", "Jeth", "Aashadha", "Shrawan", "Bhadra", "Ashwin", "Kartik", "Mangsir", "Paush", "Magh", "Falgun", "Chaitra"].map((month) => (
                <li key={month}>
                  <a href="#" className="hover:text-white transition-colors">
                    {month}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Rashifal */}
          <div>
            <h2 className="text-white font-medium mb-4">Rashifal</h2>
            <ul className="space-y-2">
              {["Mesh", "Brish", "Mithun", "Karkat", "Singha", "Kanya", "Tula", "Brischik", "Dhanu", "Makar", "Kumbha", "Meen"].map((sign) => (
                <li key={sign}>
                  <a href="#" className="hover:text-white transition-colors">
                    {sign}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-white font-medium mb-4">Features</h2>
            <ul className="space-y-2">
              {["Jyotish", "Gold-Silver", "Forex", "Date Converter", "Notes", "Feature Requests"].map((feature) => (
                <li key={feature}>
                  <a href="#" className="hover:text-white transition-colors">
                    {feature}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* News */}
          <div>
            <h2 className="text-white font-medium mb-4">News</h2>
            <ul className="space-y-2">
              {["Latest News", "Popular", "National", "Literature", "Technology", "Entertainment"].map((category) => (
                <li key={category}>
                  <a href="#" className="hover:text-white transition-colors">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hamro Apps */}
          <div>
            <h2 className="text-white font-medium mb-4">Hamro Apps</h2>
            <ul className="space-y-2">
              {[
                "Hamro Patro",
                "Nepali Keyboard",
                "Nepali Dictionary",
                "Ludo Pro Hamro Games",
                "Call Break & Jutpatti",
                "Hamro News & Magazine",
              ].map((app) => (
                <li key={app}>
                  <a href="#" className="hover:text-white transition-colors">
                    {app}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-12 border-t border-gray-700 pt-8">
          <h2 className="text-white text-xl mb-4">Hamro Patro - Connecting Nepali Communities</h2>
          <p className="text-sm text-gray-400 mb-8">
            Hamro Patro is one of the first Nepali app to include Nepali Patro, launched in 2010. We started with a Nepali Calendar mobile app to help Nepalese living abroad stay in touch with Nepalese festivals and important dates in Nepali calendar year. Later on, to cater to the people who couldn&apos;t type in Nepali using fonts like Preeti, Ganesh and even Nepali Unicode, we built nepali mobile keyboard called Hamro Nepali keyboard.
          </p>

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <img src="https://english.hamropatro.com/images/hamropatro.png" alt="Hamro Patro Logo" className="h-8 w-8" />
              <span className="text-sm">
                © Hamro Patro 2024, All Rights Reserved | <a href="#" className="hover:text-white">Privacy</a> | <a href="#" className="hover:text-white">Terms of Service</a>
              </span>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}