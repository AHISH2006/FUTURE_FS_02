// ✅ 1. Import all product images at the top of the file
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.jpg';
import img7 from '../assets/7.jpg';
import img8 from '../assets/8.jpg';
import img9 from '../assets/9.jpg';
import img10 from '../assets/10.jpg';
import img11 from '../assets/11.jpg';
import img12 from '../assets/12.jpg';
import img13 from '../assets/13.jpg';
import img14 from '../assets/14.jpg';
import img15 from '../assets/15.jpg';
import img16 from '../assets/16.jpg';
import img17 from '../assets/17.jpg';
import img18 from '../assets/18.jpg';
import img19 from '../assets/19.jpg';
import img20 from '../assets/20.jpg';
import img21 from '../assets/21.jpg';
import img22 from '../assets/22.jpg';
import img23 from '../assets/23.jpg';
import img24 from '../assets/24.jpg';
import img25 from '../assets/25.jpg';
import img26 from '../assets/26.jpg';
import img27 from '../assets/27.jpg';
import img28 from '../assets/28.jpg';
import img29 from '../assets/29.jpg';
import img30 from '../assets/30.jpg';
import img31 from '../assets/31.jpg';
import img32 from '../assets/32.jpg';
import img33 from '../assets/33.jpg';
import img34 from '../assets/34.jpg';
import img35 from '../assets/35.jpg';
import img36 from '../assets/36.jpg';
import img37 from '../assets/37.jpg';
import img38 from '../assets/38.jpg';
import img39 from '../assets/39.jpg';
import img40 from '../assets/40.jpg';
import img41 from '../assets/41.jpg';
import img42 from '../assets/42.jpg';
import img43 from '../assets/43.jpg';
import img44 from '../assets/44.jpg';
import img45 from '../assets/45.jpg';
import img46 from '../assets/46.jpg';
import img47 from '../assets/47.jpg';
import img48 from '../assets/48.jpg';
import img49 from '../assets/49.jpg';
import img50 from '../assets/50.jpg';
import img51 from '../assets/51.jpg';
import img52 from '../assets/52.jpg';
import img53 from '../assets/53.jpg';
import img54 from '../assets/54.jpg';
import img55 from '../assets/55.jpg';
import img56 from '../assets/56.jpg';
import img57 from '../assets/57.jpg';
import img58 from '../assets/58.jpg';
import img59 from '../assets/59.jpg';


// ✅ 2. Use the imported variables in the 'image' property
const products = [
  // === GPUs ===
  {
    id: 1,
    name: "NVIDIA GeForce RTX 4090",
    category: "GPU",
    price: 132717,
    rating: 5,
    description: "The ultimate GPU for gamers and creators.",
    image: img1,
  },
  {
    id: 2,
    name: "NVIDIA GeForce RTX 4080",
    category: "GPU",
    price: 99517,
    rating: 4.8,
    description: "High-end gaming graphics card.",
    image: img2,
  },
  {
    id: 3,
    name: "AMD Radeon RX 7900 XTX",
    category: "GPU",
    price: 82917,
    rating: 4.7,
    description: "Flagship AMD GPU for high-end gaming.",
    image: img3,
  },
  {
    id: 4,
    name: "GIGABYTE GeForce RTX 3060",
    category: "GPU",
    price: 29050,
    rating: 4.2,
    description: "Mid-range gaming graphics card.",
    image: img4,
  },
  {
    id: 12,
    name: "NVIDIA GeForce RTX 4070 Ti",
    category: "GPU",
    price: 66337,
    rating: 4.6,
    description: "Excellent performance for 1440p gaming.",
    image: img5,
  },
  {
    id: 13,
    name: "AMD Radeon RX 7800 XT",
    category: "GPU",
    price: 41417,
    rating: 4.5,
    description: "Great value mainstream GPU from AMD.",
    image: img6,
  },
  {
    id: 43,
    name: "Basic GT 1030",
    category: "GPU",
    price: 7470,
    rating: 3.2,
    description: "Entry-level card for basic display output.",
    image: img7,
  },
  {
    id: 54,
    name: "Used GTX 750 Ti",
    category: "GPU",
    price: 4980,
    rating: 2.6,
    description: "An old card for very light, older games.",
    image: img8,
  },

  // === CPUs ===
  {
    id: 5,
    name: "Intel Core i9-13900K",
    category: "CPU",
    price: 49717,
    rating: 4.5,
    description: "Powerful 13th Gen Intel processor.",
    image: img9,
  },
  {
    id: 6,
    name: "Intel Core i7-13700K",
    category: "CPU",
    price: 35607,
    rating: 4.4,
    description: "Great performance for gamers.",
    image: img10,
  },
  {
    id: 7,
    name: "AMD Ryzen 9 7950X",
    category: "CPU",
    price: 58017,
    rating: 4.6,
    description: "Top-tier AMD processor.",
    image: img11,
  },
  {
    id: 8,
    name: "AMD Ryzen 7 7700X",
    category: "CPU",
    price: 33117,
    rating: 4.3,
    description: "High-performance AMD CPU for gaming.",
    image: img12,
  },
  {
    id: 14,
    name: "Intel Core i5-13600K",
    category: "CPU",
    price: 25657,
    rating: 4.7,
    description: "The best mid-range gaming CPU.",
    image: img13,
  },
  {
    id: 15,
    name: "AMD Ryzen 5 7600X",
    category: "CPU",
    price: 19007,
    rating: 4.5,
    description: "Affordable and efficient gaming processor.",
    image: img14,
  },
  {
    id: 44,
    name: "Intel Celeron G5905",
    category: "CPU",
    price: 4150,
    rating: 3.5,
    description: "Budget processor for basic computing tasks.",
    image: img15,
  },
  {
    id: 55,
    name: "AMD Athlon 3000G",
    category: "CPU",
    price: 5810,
    rating: 3.1,
    description: "Entry-level APU with integrated graphics.",
    image: img16,
  },

  // === RAM ===
  {
    id: 9,
    name: "Corsair Vengeance DDR5 32GB",
    category: "RAM",
    price: 12450,
    rating: 4.0,
    description: "High-speed DDR5 memory.",
    image: img17,
  },
  {
    id: 10,
    name: "G.Skill Trident Z RGB 32GB",
    category: "RAM",
    price: 14110,
    rating: 4.5,
    description: "RGB DDR4 memory with great performance.",
    image: img18,
  },
  {
    id: 11,
    name: "Kingston Fury Beast DDR4 16GB",
    category: "RAM",
    price: 6640,
    rating: 3.9,
    description: "Reliable DDR4 memory.",
    image: img19,
  },
  {
    id: 16,
    name: "Crucial Pro DDR5 32GB Kit",
    category: "RAM",
    price: 8290,
    rating: 4.3,
    description: "No-fuss, high-performance DDR5 RAM.",
    image: img20,
  },
  {
    id: 45,
    name: "ValueRAM DDR4 8GB",
    category: "RAM",
    price: 2490,
    rating: 3.1,
    description: "Basic memory for office and home PCs.",
    image: img21,
  },
  {
    id: 56,
    name: "Generic DDR3 4GB Stick",
    category: "RAM",
    price: 1245,
    rating: 2.2,
    description: "Older memory for legacy systems.",
    image: img22,
  },

  // === Storage ===
  {
    id: 17,
    name: "Samsung 980 Pro SSD 1TB",
    category: "Storage",
    price: 9960,
    rating: 4.7,
    description: "Blazing fast NVMe SSD.",
    image: img23,
  },
  {
    id: 18,
    name: "WD Black SN850X 2TB",
    category: "Storage",
    price: 14940,
    rating: 4.8,
    description: "High-performance NVMe storage with huge capacity.",
    image: img24,
  },
  {
    id: 19,
    name: "Seagate Barracuda 4TB HDD",
    category: "Storage",
    price: 7470,
    rating: 4.3,
    description: "Reliable storage for large files and games.",
    image: img25,
  },
  {
    id: 20,
    name: "Crucial MX500 1TB SSD",
    category: "Storage",
    price: 7885,
    rating: 4.5,
    description: "Affordable SATA SSD for fast boot times.",
    image: img26,
  },
  {
    id: 46,
    name: "Generic 240GB SATA SSD",
    category: "Storage",
    price: 2075,
    rating: 2.8,
    description: "A basic SSD for operating system installation.",
    image: img27,
  },
  {
    id: 57,
    name: "Used 500GB HDD",
    category: "Storage",
    price: 830,
    rating: 1.9,
    description: "Slow, second-hand storage for non-critical data.",
    image: img28,
  },

  // === Motherboards ===
  {
    id: 21,
    name: "ASUS ROG MAXIMUS Z790",
    category: "Motherboard",
    price: 53950,
    rating: 4.8,
    description: "Premium motherboard for enthusiasts.",
    image: img29,
  },
  {
    id: 22,
    name: "MSI B550 Tomahawk",
    category: "Motherboard",
    price: 14940,
    rating: 4.4,
    description: "Solid mid-range AMD motherboard.",
    image: img30,
  },
  {
    id: 23,
    name: "Gigabyte B650 AORUS Elite",
    category: "Motherboard",
    price: 18260,
    rating: 4.6,
    description: "Feature-packed motherboard for AMD Ryzen 7000 series.",
    image: img31,
  },
  {
    id: 24,
    name: "ASRock Z790 Steel Legend",
    category: "Motherboard",
    price: 24900,
    rating: 4.5,
    description: "Great value Z790 motherboard with WiFi.",
    image: img32,
  },
  {
    id: 47,
    name: "Basic H610M Motherboard",
    category: "Motherboard",
    price: 5810,
    rating: 3.4,
    description: "A no-frills motherboard for budget Intel builds.",
    image: img33,
  },

  // === Monitors ===
  {
    id: 25,
    name: "LG UltraGear 27-inch 1440p",
    category: "Monitor",
    price: 24817,
    rating: 4.5,
    description: "High refresh rate 1440p gaming monitor.",
    image: img34,
  },
  {
    id: 26,
    name: "Samsung Odyssey G9 49-inch",
    category: "Monitor",
    price: 116117,
    rating: 4.9,
    description: "Super ultrawide 49-inch curved monitor.",
    image: img35,
  },
  {
    id: 27,
    name: "Dell 24-inch 1080p 165Hz",
    category: "Monitor",
    price: 16580,
    rating: 4.4,
    description: "Fast and affordable esports monitor.",
    image: img36,
  },
  {
    id: 28,
    name: "BenQ MOBIUZ 32-inch 4K",
    category: "Monitor",
    price: 66340,
    rating: 4.7,
    description: "Stunning 4K gaming monitor with great colors.",
    image: img37,
  },
  {
    id: 48,
    name: "Standard 21-inch Office Monitor",
    category: "Monitor",
    price: 7470,
    rating: 3.6,
    description: "A simple 1080p monitor for work or secondary display.",
    image: img38,
  },

  // === PSU ===
  {
    id: 29,
    name: "Corsair RM850x Power Supply",
    category: "PSU",
    price: 11620,
    rating: 4.8,
    description: "850W fully modular PSU with 80+ Gold certification.",
    image: img39,
  },
  {
    id: 30,
    name: "Seasonic Focus GX-750",
    category: "PSU",
    price: 10790,
    rating: 4.7,
    description: "750W fully modular PSU.",
    image: img40,
  },
  {
    id: 49,
    name: "Basic 450W PSU",
    category: "PSU",
    price: 2490,
    rating: 2.9,
    description: "Entry-level power supply for low-power systems.",
    image: img41,
  },

  // === Cases ===
  {
    id: 31,
    name: "NZXT H5 Flow Case",
    category: "Case",
    price: 8300,
    rating: 4.3,
    description: "Minimalistic ATX mid-tower case with great airflow.",
    image: img42,
  },
  {
    id: 32,
    name: "Lian Li PC-O11 Dynamic EVO",
    category: "Case",
    price: 13280,
    rating: 4.9,
    description: "Extremely popular and versatile case for builders.",
    image: img43,
  },
  {
    id: 50,
    name: "Standard Office PC Case",
    category: "Case",
    price: 2900,
    rating: 2.5,
    description: "A very basic case for non-gaming computers.",
    image: img44,
  },

  // === Cooling ===
  {
    id: 33,
    name: "Noctua NH-D15 Cooler",
    category: "Cooling",
    price: 9130,
    rating: 4.9,
    description: "Legendary air cooler for CPUs.",
    image: img45,
  },
  {
    id: 34,
    name: "Corsair iCUE H150i AIO",
    category: "Cooling",
    price: 14110,
    rating: 4.8,
    description: "360mm liquid cooler with RGB.",
    image: img46,
  },
  {
    id: 51,
    name: "Basic CPU Air Cooler",
    category: "Cooling",
    price: 1245,
    rating: 3.3,
    description: "A simple cooler, better than stock.",
    image: img47,
  },

  // === Peripherals ===
  {
    id: 35,
    name: "Logitech G Pro X Superlight",
    category: "Peripheral",
    price: 10790,
    rating: 4.7,
    description: "Ultralight wireless gaming mouse.",
    image: img48,
  },
  {
    id: 36,
    name: "Razer Huntsman V2 Keyboard",
    category: "Peripheral",
    price: 13280,
    rating: 4.6,
    description: "Optical mechanical keyboard for fast response.",
    image: img49,
  },
  {
    id: 37,
    name: "HyperX Cloud II Wireless",
    category: "Peripheral",
    price: 12450,
    rating: 4.5,
    description: "Comfortable wireless headset with immersive sound.",
    image: img50,
  },
  {
    id: 38,
    name: "SteelSeries QcK Heavy Mousepad",
    category: "Peripheral",
    price: 2490,
    rating: 4.8,
    description: "Extra thick cloth mousepad for maximum control.",
    image: img51,
  },
  {
    id: 52,
    name: "Office Keyboard & Mouse Combo",
    category: "Peripheral",
    price: 1660,
    rating: 2.7,
    description: "A basic wired keyboard and mouse set.",
    image: img52,
  },
  {
    id: 58,
    name: "Simple Stereo Speakers",
    category: "Peripheral",
    price: 830,
    rating: 2.1,
    description: "Basic speakers for system sounds and casual listening.",
    image: img53,
  },

  // === Accessories ===
  {
    id: 39,
    name: "Elgato Stream Deck MK.2",
    category: "Accessory",
    price: 12450,
    rating: 4.7,
    description: "Customizable control pad for streamers.",
    image: img54,
  },
  {
    id: 40,
    name: "Blue Yeti USB Microphone",
    category: "Accessory",
    price: 9960,
    rating: 4.6,
    description: "Popular USB microphone for streaming and recording.",
    image: img55,
  },
  {
    id: 41,
    name: "Logitech C922 Pro Stream Webcam",
    category: "Accessory",
    price: 8290,
    rating: 4.4,
    description: "High quality 1080p streaming webcam.",
    image: img56,
  },
  {
    id: 42,
    name: "Xbox Elite Series 2 Controller",
    category: "Accessory",
    price: 14940,
    rating: 4.6,
    description: "Pro-level customizable controller for PC & console.",
    image: img57,
  },
  {
    id: 53,
    name: "Basic 4-Port USB Hub",
    category: "Accessory",
    price: 499,
    rating: 3.0,
    description: "Expand your computer's USB ports.",
    image: img58,
  },
  {
    id: 59,
    name: "Generic 720p Webcam",
    category: "Accessory",
    price: 1245,
    rating: 2.4,
    description: "A simple webcam for video calls.",
    image: img59,
  },
];

export default products;
