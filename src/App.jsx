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
import islamabadIcon from "./assets/Islamabadicon.png"
import bhawalpurIcon from './assets/bhawalpuricon.png'
import hyderabadIcon from './assets/hyderabadicon.png'
import multanIcon from './assets/multanicon.png'
import quttaIcon from './assets/queetaicon.png'
import peshawerIcon from './assets/peshawericon.png'
import sialkotIcon from './assets/sialkoticon.png'
import carollaCarImag from './assets/toyotacarollaimg.jpg'
import nissanCarImg from './assets/nissanleafimg.jpg'
import civicCarImg from './assets/civicimg.jpg'
import markXCarImg from './assets/markximg.jpg'
import hondaCity1CarImg from './assets/hondacityimg.jpg'
import yarisCarImg from './assets/toyotayarisimg.jpg'
import peouguCarImg from './assets/peugocarimg.jpg'
import hondaCity2CarImg from './assets/hondacity2.jpg'
import carollaCarImag2 from './assets/toyotacarollabalck.jpg'
import toyotaIqCarImg from './assets/totoytaiqimg.jpg'
import carwithmobile from './assets/carwithmobile.png'
import bankalfalah from './assets/bankalfalah.png'
import bankalhabib from './assets/al-habib.png'
import jazzcash from './assets/jazzcash.png'
import nbp from './assets/nbp.png'
import payfast from './assets/PayFast.png'
import gradient from './assets/gradent.png'
import gmedal from './assets/gradentmedal.png'
import gcardollar from './assets/gcardollar.png'
import gtag from './assets/goffertag.png'
import gcompare from './assets/gcarcompare.png'

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

const FeaturedCarData = [
  {
    image: carollaCarImag,
    title: "Toyota Corolla 2022",
    price: "PKR 56 lacs",
    location: "Karachi",
  },
  {
    image: nissanCarImg,
    title: "Nissan Leaf 2021",
    price: "PKR 73 lacs",
    location: "Karachi",
  },
  {
    image: civicCarImg,
    title: "Honda Civic 2018",
    price: "PKR 48.25 lacs",
    location: "Karachi",
  },
  {
    image: markXCarImg,
    title: "Toyota Mark X 2005",
    price: "Call for price",
    location: "Karachi",
  },
  {
    image: hondaCity1CarImg,
    title: "Honda City 2013",
    price: "Call for price",
    location: "Karachi",
  },
  {
    image: yarisCarImg,
    title: "Toyota Yaris 2021",
    price: "PKR 46.5 lacs",
    location: "Karachi",
  },
  {
    image: peouguCarImg,
    title: "Peugeot 2008 2023",
    price: "PKR 66 lacs",
    location: "Karachi",
  },
  {
    image: hondaCity2CarImg,
    title: "Honda City 2021",
    price: "PKR 42 lacs",
    location: "Karachi",
  },
  {
    image: carollaCarImag2,
    title: "Toyota Corolla 2021",
    price: "Call for price",
    location: "Karachi",
  },
  {
    image: toyotaIqCarImg,
    title: "Toyota IQ 2008",
    price: "Call for price",
    location: "Karachi",
  },
];

const payment = [
  {
    image: jazzcash
  },
  {
    image: payfast
  },
  {
    image: bankalfalah
  },
  {
    image: bankalhabib
  },
  {
    image: nbp
  },
]


const gardientIcon = [
  {
    image: gmedal,
    title: "Pakistan’s No 1",
    desc: "Live Bidding Portal"
  },
  {
    image: gcardollar,
    title: "Car Sold",
    desc: "Every 15 Minutes"
  },
  {
    image: gtag,
    title: "Offers",
    desc: "Stay updated pay less"
  },
  {
    image: gcompare,
    title: "Compare",
    desc: "Decode the right car"
  },
]

function App() {

  return (
    <div className="">

      {/* top header */}

      <div style={{ backgroundImage: `url(${karachi})` }} className="relative h-[530px] bg-cover bg-center" >
        {/* black shadow */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-transparent to-black/75"></div>

        <div className='container mx-auto px-8 md:px-20 w-full items-center relative z-10 flex justify-between p-2 text-white'>
          <div className='flex items-center gap-2'>
            <img className='h-[16px]' src={pakistan} />
            <h5 className='text-[18px] text-white font-medium'>Pakistan</h5>
          </div>
          <button>Login</button>
        </div>


        {/* tarnsparent header */}
        {/* <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
          <div className=" mt-12 ml-20 fixed top-0 left-0 w-[90%]  bg-white/20 backdrop-blur-md z-50 p-5 rounded-[50px_50px_0_50px]">
            <div className="flex justify-between items-center max-w-7xl mx-auto"> */}
        {/* Logo */}
        {/* <img src={logo} alt="Logo" className="h-[40px] object-contain" /> */}

        {/* Navigation Links */}
        {/* <ul className="flex space-x-6 text-white font-semibold">
                <li className="cursor-pointer hover:text-red-500">Used Cars</li>
                <li className="cursor-pointer hover:text-red-500">New Cars</li>
                <li className="cursor-pointer hover:text-red-500">Bikes</li>
                <li className="cursor-pointer hover:text-red-500">Inspection</li>
                <li className="cursor-pointer hover:text-red-500">Bidding</li>
                <li className="cursor-pointer hover:text-red-500">Blog</li>
                <li className="cursor-pointer hover:text-red-500">More</li>
              </ul> */}

        {/* Post Ad Button */}
        {/* <button className="bg-red-600 hover:bg-red-700  text-white  px-6 py-2 rounded-3xl sm:text-blue-400">
                Post Your Ad
              </button>
            </div>
          </div> */}

        {/* hero section */}

        <div className="relative flex justify-center items-center mt-40 px-4 text-center">
          <div className="max-w-[90%] z-10 sm:max-w-[80%] md:max-w-[70%]">
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Discover, Buy & Sell Cars in Pakistan
            </h1>
            <div className="flex justify-center items-center mt-4">
              <p className="font-medium text-sm sm:text-lg md:text-xl lg:text-2xl text-[#F8F9FA]">
                Smart Choices, Smooth Rides – Your Trusted Platform
              </p>
            </div>
          </div>
        </div>


        {/* search box */}
        {/* <div className="flex justify-center items-center mt-44 z-10 px-4">
          <div className="w-full max-w-3xl bg-white p-4 rounded-md shadow-lg flex flex-col md:flex-row items-center gap-4">
            <input
              type="text"
              placeholder="Select Make"
              className="border border-gray-300 px-3 py-2 rounded-md outline-none w-full md:w-[40%]"
            />
            <input
              type="text"
              placeholder="Select City"
              className="border border-gray-300 px-3 py-2 rounded-md outline-none w-full md:w-[40%]"
            />
            <div className="flex w-full md:w-auto gap-2">
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md w-full md:w-auto">
                Search
              </button>
              <button className="border border-gray-500 hover:bg-gray-600 hover:text-white text-gray-700 px-4 py-2 rounded-md w-full md:w-auto">
                Advance Search
              </button>
            </div>
          </div>
        </div> */}
      </div>

      {/* cards */}

      < div className="container mx-auto px-4 grid  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20" >
        {
          cardsData.map((data) => (
            <a
              href="#"
              className="flex flex-col sm:flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 h-auto rounded-t-lg object-contain"
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

      </div >

      {/* // logo cards */}

      < h1 className='container mx-auto px-4 flex justify-start font-bold text-3xl p-5 m-10 0 5 5 ' > Browse Cars by Make</h1 >
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mt-10">
        {cardsLogoData.map((data, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg flex flex-col items-center p-4">
            <img className="w-20 h-20 object-contain" src={data.image} alt={data.title} />
            <p className="mt-2 text-gray-700 font-medium text-center">{data.title}</p>
          </div>
        ))}
      </div>


      {/* black car */}

      <div className="bg-[#1a1a1a] mt-30">
        <div style={{ backgroundImage: `url(${blackcar})` }}
          className="relative h-[500px] bg-cover bg-center flex flex-col items-center">
          <h1 className="text-white text-3xl font-black mt-10 text-center">
            FameWheels Car Suggest
          </h1>
          <div className="container mx-auto px-6 sm:px-10 bg-white/20 backdrop-blur-md z-50 flex flex-col lg:flex-row justify-between items-center rounded-2xl mt-6 max-w-[90%] sm:max-w-[80%] h-auto md:h-[340px] p-6 gap-10 lg:gap-16">
            <div className="text-white text-center lg:text-left w-full lg:w-1/2">
              <h6 className="text-sm sm:text-lg md:text-xl lg:text-2xl">Not Sure,</h6>
              <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl">Which car to buy?</h1>
              <p className="text-sm sm:text-base mt-2">Let us help you find the dream car</p>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
              <img className="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] object-contain" src={searchbluecar} alt="Search Car" />
            </div>
          </div>
        </div>
      </div>




      {/* city icon */}

      <h1 className='container mx-auto px-4 flex justify-start font-bold text-3xl p-5 m-10 0 5 5 '>Browse Used Cars by Category</h1>
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-10">
        {cityIcons.map((data, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg flex flex-col items-center p-4">
            <img className="w-20 h-20 object-contain" src={data.image} alt={data.title} />
            <p className="mt-2 text-gray-700 font-medium text-center">{data.title}</p>
          </div>
        ))}
      </div>

      {/* featured car*/}

      <h1 className='container mx-auto px-4 flex justify-start font-bold text-3xl p-5 m-5 0 1 2 '>Featured Used Cars</h1>
      <div className="container mx-auto px-4 text-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
        {FeaturedCarData.map((car, index) => (
          <div key={index} className="gap-10 bg-gray-100 border rounded-lg shadow-md p-3">
            <img
              src={car.image}
              alt={car.title}
              className="w-full h-32 object-cover rounded-lg"
            />
            <div className='items-center mt-2 bg-white border rounded-lg shadow-md p-3'>
              <h5 className="text-black text-md font-bold mt-2">{car.title}</h5>
              <p className="text-sm text-gray-600">{car.price}</p>
              <p className="text-sm text-red-500">{car.location}</p>
            </div>
          </div>
        ))}
      </div>


      {/* carwithmobile*/}

      <div className="bg-gray-100 flex py-10 sm:py-0 md:py-0 lg:py-0 justify-center mt-20">
        <div className="border border-gray-300 bg-white w-[90%] sm:w-[80%] flex flex-col md:flex-row justify-center items-center gap-10 lg:gap-24 rounded-2xl p-5">

          <div className="flex flex-col text-black text-center md:text-left w-full md:w-1/2">
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">
              Famewheels Car Inspection
            </h1>
            <p className="mt-5 text-gray-500 text-sm sm:text-base leading-relaxed">
              Get a professional and reliable car inspection service with FameWheels across
              major cities like Karachi, Lahore, and Islamabad. Your trusted partner for used car
              evaluations in Pakistan.
            </p>
            <button className="mt-6 font-medium bg-red-500 rounded-md  px-5 py-3 text-white">
              GET YOUR CAR INSPECTED
            </button>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <img className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] object-cover" src={carwithmobile} alt="Car Inspection" />
          </div>

        </div>
      </div>

      {/* Borwser Video */}
      <h1 className="container mx-auto px-20 flex justify-start font-bold text-3xl m-10">Browse Our Videos</h1>
      <div className="container mx-auto px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <iframe className="w-full h-[250px] md:h-[350px] lg:h-[400px]"
          src="https://www.youtube.com/embed/jziuHVZC5N8"
          title="Place your bid now &amp; drive your dream car."
          frameBorder="0" allowFullScreen></iframe>

        <iframe className="w-full h-[250px] md:h-[350px] lg:h-[400px]"
          src="https://www.youtube.com/embed/8u4GO1-Xa54"
          title="Buy or Sell Your Dream Car in Minutes!"
          frameBorder="0" allowFullScreen></iframe>

        <iframe className="w-full h-[250px] md:h-[350px] lg:h-[400px]"
          src="https://www.youtube.com/embed/l8eXjui_wAg"
          title="Expert Car Inspections for a Safer Drive"
          frameBorder="0" allowFullScreen></iframe>

        <iframe className="w-full h-[250px] md:h-[350px] lg:h-[400px]"
          src="https://www.youtube.com/embed/8Xmbz5VQjzs"
          title="Dealers, It’s Time to Bid &amp; Win!"
          frameBorder="0" allowFullScreen></iframe>
      </div>

      {/* our payment method */}
      <div className='container mx-auto px-20 text-center'>
        <h1 className="container mx-auto px-4 text-left font-bold text-3xl py-5 mt-10">
          Our Payment Partners
        </h1>
        <div className="container mx-auto px-4 text-center grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-5 mb-20">
          {payment.map((data, index) => (
            <div
              key={index}
              className="bg-gray-100 shadow-lg rounded-2xl flex flex-col items-center justify-center p-6 w-32 h-32 md:w-40 md:h-40"
            >
              <img className="w-20 h-20 md:w-24 md:h-24 object-contain" src={data.image} alt={data.title} />
            </div>
          ))}
        </div>
      </div>

      {/* gradient */}

      <div
        style={{ backgroundImage: `url(${gradient})` }}
        className="relative h-auto bg-cover bg-center flex flex-wrap justify-center md:justify-around items-center text-white px-6 py-4"
      >
        {gardientIcon.map((data, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
          >
            <img className="w-[70px] h-[70px] mb-2" src={data.image} alt="icon" />
            <h1 className="text-lg font-bold">{data.title}</h1>
            <p className="text-sm">{data.desc}</p>
          </div>
        ))}
      </div>

      {/* Footer */}

      <div className="bg-gray-100 py-10 px-6">
        {/* Newsletter Section */}
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row  justify-around items-center  max-w-5xl mx-auto text-center bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-black">
            Subscribe to our <span className="text-red-600">Newsletter</span>
          </h2>
          <div className="mt-4 flex flex-col gap-2 sm:flex-col md:flex-row lg:flex-row justify-center shadow-1xl">
            <input
              type="email"
              placeholder="Enter your email address"
              className="border border-gray-300 p-3 rounded-l-lg w-72 focus:outline-none"
            />
            <button className="bg-red-600 text-white px-6 py-3 rounded-r-lg font-semibold">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="max-w-6xl mx-auto mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 text-gray-700">
          {/* Column 1 */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Company</h3>
            <ul className="space-y-1 text-sm">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>FAQ’s</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Refund Policy</li>
              <li>Subscribe To Live Bidding</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Cars By Make</h3>
            <ul className="space-y-1 text-sm">
              <li>Jetour Cars For Sale</li>
              <li>Toyota Cars For Sale</li>
              <li>Suzuki Cars For Sale</li>
              <li>Honda Cars For Sale</li>
              <li>Daihatsu Cars For Sale</li>
              <li>KIA Cars For Sale</li>
              <li>Hyundai Cars For Sale</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Cars By Cities</h3>
            <ul className="space-y-1 text-sm">
              <li>Cars In Karachi</li>
              <li>Cars In Lahore</li>
              <li>Cars In Faisalabad</li>
              <li>Cars In Islamabad</li>
              <li>Cars In Quetta</li>
              <li>Cars In Multan</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Sell On FameWheels</h3>
            <ul className="space-y-1 text-sm">
              <li>Sell On FameWheels</li>
              <li>Sell To FameWheels</li>
              <li>Become A Member</li>
            </ul>
          </div>
        </div>
      </div>



    </div >


  )
}


export default App

