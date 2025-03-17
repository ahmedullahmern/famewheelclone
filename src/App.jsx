import logo from './assets/logo.png'
import logo2 from './assets/logo2.jpg'
import pakistan from './assets/pakistan.png'
import karachi from './assets/karachi.webp'
import carwithremote from './assets/carwithremote.png'
import inspection from './assets/carinspaction.png'
import insurance from './assets/carinsurance.png'
import auction from './assets/sellbilding.png'
import carfinance from './assets/carfinance.png'
import jetour from './assets/jetourlogo.png'
import toyota from './assets/toyotalodo.png'
import suzuki from './assets/suzukilogo.png'
import honda from './assets/hundalogo.png'
import daihatsu from './assets/daihatsulogo.png'
import kia from './assets/kialogo.png'
import peugeot from './assets/peugologo.png'
import hyundai from './assets/hyundai.png'
import haval from './assets/havallogo.png'
import changan from './assets/changelogo.png'
import dfsk from './assets/dfsklogo.png'
import mg from './assets/mglogo.png'
import audi from './assets/audilogo.png'
import faw from './assets/fawlogo.png'
import blackcar from './assets/blackcar.png'
import searchbluecar from './assets/searchbluecar.png'
import karachiIcon from './assets/karachiicon.png'
import faislabadIcon from './assets/faislabadicon.png'
import sukhurIcon from './assets/sukhuricon.png'
import sahiwalIcon from './assets/sahiwalicon.png'
import lahoreIcon from './assets/lahoreicon.png'
import islamabadIcon from './assets/islamabadicon.png'
import bhawalpurIcon from './assets/bhawalpuricon.png'
import hyderabadIcon from './assets/hyderabadicon.png'
import multanIcon from './assets/multanicon.png'
import quttaIcon from './assets/queetaicon.png'
import peshawerIcon from './assets/peshawericon.png'
import sialkotIcon from './assets/sialkoticon.png'
import './App.css'

const cardsData = [
  {
    id: 1,
    title: "Sell Your Car",
    description: "Easiest way to sell your car at the best price.",
    image: carwithremote,
    link: "#",
  },
  {
    id: 2,
    title: "Car Inspection",
    description: "Get a detailed car inspection report at the comfort of your home.",
    image: inspection,
    link: "#",
  },
  {
    id: 3,
    title: "Car Insurance",
    description: "Get reliable car insurance and drive worry-free.",
    image: insurance,
    link: "#",
  },
  {
    id: 4,
    title: "Sell Through Live Bidding",
    description: "Join our live auction platform and get the best price for your car.",
    image: auction,
    link: "#",
  },
  {
    id: 5,
    title: "Sell Through Famewheels",
    description: "Dedicated Sales Expert to Sell your Car. We Bargain for you",
    image: carwithremote,
    link: "#",
  },
  {
    id: 6,
    title: "Car Finance",
    description: "FameWheels proudly offers premier Financing services in Pakistan.",
    image: carfinance,
    link: "#",
  },

];

const cardsLogoData = [
  { image: jetour, title: "Jetour" },
  { image: toyota, title: "Toyota" },
  { image: suzuki, title: "Suzuki" },
  { image: honda, title: "Honda" },
  { image: daihatsu, title: "Daihatsu" },
  { image: kia, title: "KIA" },
  { image: peugeot, title: "Peugeot" },
  { image: hyundai, title: "Hyundai" },
  { image: haval, title: "Haval" },
  { image: changan, title: "Changan" },
  { image: dfsk, title: "DFSK" },
  { image: mg, title: "MG" },
  { image: audi, title: "Audi" },
  { image: faw, title: "FAW" },
];

const cityIcons = [
  { image: karachiIcon, title: "Karachi" },
  { image: faislabadIcon, title: "Faislabad" },
  { image: sukhurIcon, title: "Sukkur" },
  { image: sahiwalIcon, title: "Sahiwal" },
  { image: lahoreIcon, title: "Lahore" },
  { image: islamabadIcon, title: "Islamabad" },
  { image: bhawalpurIcon, title: "Bahawalpur" },
  { image: hyderabadIcon, title: "Hyderabad" },
  { image: multanIcon, title: "Multan" },
  { image: quttaIcon, title: "Quetta" },
  { image: peshawerIcon, title: "Peshawar" },
  { image: sialkotIcon, title: "Sialkot" },
];


function App() {

  return (
    <>

      {/* top header */}
      <div style={{ backgroundImage: `url(${karachi})` }} className="relative h-[530px] bg-cover bg-center" >

        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-transparent to-black/75"></div>

        <div className='w-[90%] ml-20 items-center  relative z-10 flex justify-between p-2 text-white'>
          <div className='flex items-center gap-2'>
            <img className='h-[16px]' src={pakistan} />
            <h5 className='text-18px text-white font-medium'>Pakistan</h5>
          </div>
          <button>Login</button>
        </div>

        {/* tarnsparent header */}

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

        {/* hero section */}

        <div className="relative z-10 flex justify-center items-center mt-40">
          <div className="">
            <h1 className='text-5xl font-bold text-white'>Discover, Buy & Sell Cars in Pakistan</h1>
            <div className='flex justify-center items-center mt-7'>
              <p className='font-medium text-2xl text-[#F8F9fA]'>Smart Choices, Smooth Rides – Your Trusted Platform</p>
            </div>
          </div>
        </div>

        {/* search box */}

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

      {/* cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 px-10">
        {
          cardsData.map((data) => (
            <a
              href="#"
              className="flex flex-col sm:flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="sm:w-[33.33333333%] sm:h-10 object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={data.image}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-[20px] font-bold tracking-tight text-gray-900 dark:text-white">
                  {data.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {data.description}

                </p>

              </div>
            </a>
          ))
        }

      </div>

      {/* // logo cards */}

      <h1 className='flex justify-start font-bold text-3xl p-5 m-10 0 5 5 '>Browse Cars by Make</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mt-10 px-10">
        {cardsLogoData.map((data, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg flex flex-col items-center p-4">
            <img className="w-20 h-20 object-contain" src={data.image} alt={data.title} />
            <p className="mt-2 text-gray-700 font-medium text-center">{data.title}</p>
          </div>
        ))}
      </div>


      {/* black car */}
      <div className='bg-[#1a1a1a] mt-30'>
        <div style={{ backgroundImage: `url(${blackcar})` }}
          className="relative h-[500px] bg-cover bg-center" >
          <div className='flex justify-center items-center'>
            <h1 className='text-white text-3xl font-black  mt-10'>
              FameWheels Car suggest
            </h1>
          </div>
          <div className='bg-white/20 backdrop-blur-md z-50  flex justify-center items-center ml-30 rounded-2xl mt-6 0 0 w-7xl h-[340px] '>
            <div className='flex items-center gap-[550px]'>
              <div className='flex-col text-white'>
                <h6 className='text-2xl'>Not Sure,</h6>
                <h1 className='font-black text-4xl'>Which car to buy?</h1>
                <p>Let us help you find the dream car</p>
              </div>
              <img src={searchbluecar} />
            </div>
          </div>
        </div>
      </div>

      {/* city icon */}

      <h1 className='flex justify-start font-bold text-3xl p-5 m-10 0 5 5 '>Browse Used Cars by Category</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-10 px-10">
        {cityIcons.map((data, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg flex flex-col items-center p-4">
            <img className="w-20 h-20 object-contain" src={data.image} alt={data.title} />
            <p className="mt-2 text-gray-700 font-medium text-center">{data.title}</p>
          </div>
        ))}
      </div>

    </>

  )
}


export default App
