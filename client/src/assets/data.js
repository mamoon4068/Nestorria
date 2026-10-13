import logoImg from "./logo.png";
import search from "./search.svg";
import user from "./user.svg";
import menu from "./menu.svg";
import close from "./close.svg";
import right from "./right.svg";
import pin from "./pin.svg";
import calendar from "./calendar.svg";
import users from "./users.svg";
import badge from "./badge.svg";
import star from "./star.svg";
import sliders from "./sliders.svg";
import bath from "./bath.svg";
import bed from "./bed.svg";
import car from "./car.svg";
import ruler from "./ruler.svg";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import twitter from "./twitter.svg";
import linkedin from "./linkedin.svg";
import rocket from "./rocket.svg";
import mail from "./mail.svg";
import phone from "./phone.svg";
import house from "./house.svg";
import dollar from "./dollar.svg";
import calendarCheck from "./calendar-check.svg";
import down from "./down.svg";
import calendarSecondary from "./calendar-secondary.svg";
import graph from "./graph.svg";
import pound from "./pound.svg";
import map from "./map.svg";
import list from "./list.svg";
import dashboard from "./dashboard.svg";
import housePlus from "./house-plus.svg";
import signature from "./signature.svg";
import userImg from "./user.png";
import user1 from "./user1.png";
import user2 from "./user2.png";
import user3 from "./user3.png";
import user4 from "./user4.png";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import img5 from "./img5.png";
import img6 from "./img6.png";
import pImg2 from "./pImg2.png";
import pImg3 from "./pImg3.png";
import pImg4 from "./pImg4.png";
import Client1 from "./client1.jpg";
import Client2 from "./client2.jpg";
import Client3 from "./client3.jpg";
import Client4 from "./client4.jpg";
import About from "./about.png";
import faq from "./faq.png";

export const assets = {
  logoImg,
  search,
  user,
  menu,
  close,
  right,
  pin,
  calendar,
  users,
  badge,
  star,
  sliders,
  bath,
  bed,
  car,
  ruler,
  facebook,
  instagram,
  twitter,
  linkedin,
  rocket,
  mail,
  phone,
  house,
  dollar,
  calendarCheck,
  down,
  graph,
  pound,
  calendarSecondary,
  map,
  dashboard,
  housePlus,
  list,
  signature,
  userImg,
  user1,
  user2,
  user3,
  user4,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  pImg2,
  pImg3,
  pImg4,
  Client1,
  Client2,
  Client3,
  Client4,
  About,
  faq,
};

export const cities = ["Abu Dhabi", "New York", "Toronto", "Los Angeles"];

export const dummyAgentData = {
  _id: "agent_2unqyL4diJFP1E3pIBnasc7w8hP",
  username: "Izabella Stress",
  image: userImg,
  role: "agencyOwner",
  createdAt: "2025-03-25T09:29:16.367Z",
  updatedAt: "2025-04-10T06:34:48.719Z",
  recentSearchedCities: ["Abu Dhabi", "New York", "Toronto", "Los Angeles"],
};

export const dummyAgencyData = {
  _id: "67f7642a197ac559e4089b99",
  name: "Prime Solutions",
  contact: "0123456789",
  email: "contact@agencyname.com",
  address: "Suite 405, Midtown Business Tower, Park Avenue",
  owner: null,
  city: "Los Angeles",
};

export const dummyProperties = [
  {
    _id: "67f7647c197ac559e4089b96",
    agency: null,
    title: "Oceanview Oasis Serenity Escape",
    description: "Discover a harmonious blend of modern luxury and timeless elegance.",
    address: "789 Park Lane, New York, USA",
    city: "New York",
    country: "USA",
    propertyType: "House",
    price: { rent: 299, sale: 33000 },
    facilities: { bedrooms: 3, bathrooms: 2, garages: 1 },
    area: 800,
    amenities: ["Balcony", "High-Speed Internet", "Backyard"],
    images: [img1, img2, img3, img4],
    isAvailable: true,
    status: "available",
  },
  {
    _id: "67f76452197ac559e4089b8e",
    agency: null,
    title: "Mountain Majesty Tranquility Haven",
    description: "This villa is a stunning masterpiece of luxury and art.",
    address: "301 Sunset Boulevard, Los Angeles, USA",
    city: "Los Angeles",
    country: "USA",
    propertyType: "Apartment",
    price: { rent: 599, sale: 99000 },
    facilities: { bedrooms: 2, bathrooms: 2, garages: 1 },
    area: 500,
    amenities: ["Backyard", "Garage", "Fireplace"],
    images: [img2, pImg2, pImg3, pImg4],
    isAvailable: true,
    status: "available",
  },
  {
    _id: "67f76406197ac559e4089b82",
    agency: null,
    title: "Urban Elegance Sophistication Haven",
    description: "A refined urban residence with modern finishes and spacious living zones.",
    address: "900 Bay Street, Toronto, Canada",
    city: "Toronto",
    country: "Canada",
    propertyType: "Villa",
    price: { rent: 299, sale: 20000 },
    facilities: { bedrooms: 2, bathrooms: 1, garages: 1 },
    area: 200,
    amenities: ["Balcony", "Kitchen Island", "Garden"],
    images: [img3, img4, img5, img6],
    isAvailable: true,
    status: "available",
  },
];

export const dummyBookingsData = [
  {
    _id: "booking_1",
    totalPrice: 2500,
    isPaid: true,
    checkInDate: "2025-04-01T00:00:00.000Z",
    checkOutDate: "2025-04-05T00:00:00.000Z",
    property: dummyProperties[0],
  },
  {
    _id: "booking_2",
    totalPrice: 3000,
    isPaid: false,
    checkInDate: "2025-05-01T00:00:00.000Z",
    checkOutDate: "2025-05-06T00:00:00.000Z",
    property: dummyProperties[1],
  },
];

export const dummyDashboardData = {
  totalBookings: 3,
  totalRevenue: 897,
  bookings: dummyBookingsData,
};

export const blogData = [
  { title: "How to stage a home for a faster sale", category: "Selling", image: img1, description: "Simple tips to make your home feel brighter and more attractive to buyers." },
  { title: "2025 Real Estate Forecast", category: "Market Trends", image: img2, description: "A quick overview of what buyers and sellers can expect next year." },
];

export const blogs = blogData;