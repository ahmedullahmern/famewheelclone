import logo from './assets/logo.png'
import logo2 from './assets/logo2.jpg'
import pakistan from './assets/pakistan.png'
import karachi from './assets/karachi.webp'
import './App.css'


function App() {

  return (
    <>
      <div style={{ backgroundImage: `url(${karachi})` }} className="relative h-[530px] bg-cover bg-center" >

        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-transparent to-black/75"></div>

        <div className='w-[90%] ml-20 items-center  relative z-10 flex justify-between p-2 text-white'>
          <div className='flex items-center gap-2'>
            <img className='h-[16px]' src={pakistan} />
            <h5 className='text-18px text-white font-medium'>Pakistan</h5>
          </div>
          <button>Login</button>
        </div>


        <div className="mt-12 ml-20 fixed top-0 left-0 w-[90%] bg-white/20 backdrop-blur-md z-50 p-5 rounded-[50px_50px_0_50px]">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            {/* Logo */}
            <img src={logo} alt="Logo" className="h-[40px] object-contain" />

            {/* Navigation Links */}
            <ul className="flex space-x-6 text-white font-semibold">
              <li className="cursor-pointer hover:text-red-500">Used Cars</li>
              <li className="cursor-pointer hover:text-red-500">New Cars</li>
              <li className="cursor-pointer hover:text-red-500">Bikes</li>
              <li className="cursor-pointer hover:text-red-500">Inspection</li>
              <li className="cursor-pointer hover:text-red-500">Bidding</li>
              <li className="cursor-pointer hover:text-red-500">Blog</li>
              <li className="cursor-pointer hover:text-red-500">More</li>
            </ul>

            {/* Post Ad Button */}
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-3xl">
              Post Your Ad
            </button>
          </div>
        </div>

        <div className="relative z-10 flex justify-center items-center mt-40">
          <div className="">
            <h1 className='text-5xl font-bold text-white'>Discover, Buy & Sell Cars in Pakistan</h1>
            <div className='flex justify-center items-center mt-7'>
              <p className='font-medium text-2xl text-[#F8F9fA]'>Smart Choices, Smooth Rides – Your Trusted Platform</p>
            </div>
          </div>
        </div>



        <div className="flex justify-center items-center mt-44">
          {/* Search Box Container */}
          <div className="w-[80%] z-10 flex items-center justify-around bg-white p-4 rounded-md shadow-lg gap-4">

            {/* Input Fields */}
            <input
              type="text"
              placeholder="Select Make"
              className="border border-gray-300 px-3 py-1.5 rounded-md outline-none w-[400px]"
            />
            <input
              type="text"
              placeholder="Select City"
              className="border border-gray-300 px-3 py-1.5 rounded-md outline-none w-[400px]"
            />

            {/* Buttons */}
            <div className="flex gap-2">
              <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-1 rounded-md">
                Search
              </button>
              <button className="border border-gray-500 hover:bg-gray-600  hover:text-white text-gray-700 px-6 py-2 rounded-md">
                Advance Search
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* <div>
        <a
          href="#"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="/docs/images/blog/image-4.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in
              reverse chronological order.
            </p>
          </div>
        </a>

      </div> */}
    </>

  )
}


export default App
