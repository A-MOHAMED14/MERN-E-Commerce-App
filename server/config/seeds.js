const db = require("./connection");
const { User, Product, Category } = require("../models");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  await cleanDB("Category", "categories");
  await cleanDB("Product", "products");
  await cleanDB("User", "users");

  const categories = await Category.insertMany([
    { name: "Phones" },
    { name: "Laptops" },
    { name: "Monitors" },
    { name: "Earbuds" },
    { name: "Smart Watches" },
  ]);

  console.log("categories seeded 🌱");

  const products = await Product.insertMany([
    {
      name: "Iphone 16",
      description:
        "The iPhone 16 features a vibrant 6.1 inch Super Retina XDR display and is powered by the A18 chip with a 5-core GPU. It includes an advanced dual-camera system with 48MP Fusion and 12MP Ultra Wide for stunning photos. With Apple Intelligence for enhanced functionality, up to 27 hours of video playback, USB-C support, Face ID, and emergency SOS features, it combines sleek design with top-notch performance.",
      image: "iphone-16.jpg",
      category: categories[0]._id,
      price: 799.0,
      quantity: 1000,
    },
    {
      name: "Iphone 16 Pro Max",
      description:
        "The iPhone 16 Pro Max features a stunning 6.9 inch Super Retina XDR display with ProMotion and Always-On technology. Powered by the A18 Pro chip, it includes a pro camera system with 48MP Fusion, Ultra Wide, and Telephoto lenses for stunning photos and videos. With Apple Intelligence for enhanced features, up to 33 hours of video playback, USB-C support, Face ID, and emergency SOS capabilities, it combines performance and safety in a sleek titanium design.",
      image: "iphone-16-pro-max.jpg",
      category: categories[0]._id,
      price: 1199.0,
      quantity: 1000,
    },
    {
      name: "Samsung Galaxy S24",
      description:
        "The Samsung Galaxy S24 features a vibrant 6.2 inch FHD+ display and is built with space-grade aluminum for durability. It boasts a 50MP camera with enhanced AI for stunning low-light photos and advanced zoom capabilities. With IP68 water and dust resistance, a long-lasting battery, and powerful AI features for voice translation and photo editing, it's designed for both performance and adventure.",
      image: "S24.jpg",
      category: categories[0]._id,
      price: 799.0,
      quantity: 1000,
    },
    {
      name: "Samsung Galaxy S24 Ultra",
      description:
        "The Samsung Galaxy S24 Ultra features a stunning 6.8 inch display with 2600 nit brightness and is built with a durable titanium frame for superior protection. It boasts a groundbreaking 200MP camera with AI processing for incredible detail and night photography, along with advanced AI features for real-time translation and note summarization. The included S Pen allows for precise navigation and writing, while the long-lasting battery ensures you stay powered during your adventures. With IP68 water and dust resistance, it's ready for any challenge.",
      image: "S24-ultra.jpg",
      category: categories[0]._id,
      price: 1099.0,
      quantity: 1000,
    },
    {
      name: "Google Pixel 9",
      description:
        "The Google Pixel 9 features a 6.3-inch Actua Display with vibrant OLED and up to 2,700 nits brightness. It packs a powerful 50MP dual rear camera system with advanced photo editing tools and 4K video recording. Powered by the Google Tensor G4 chip and 12GB of RAM, it offers smooth performance and long battery life. With IP68 water resistance, a recycled aluminum frame, and seven years of updates, the Pixel 9 is both eco-friendly and secure. Enjoy seamless connectivity with 5G support and the latest Android 14 operating system.",
      image: "pixel-9.png",
      category: categories[0]._id,
      price: 799.0,
      quantity: 1000,
    },
    {
      name: "Google Pixel 9 Pro XL",
      description:
        "Experience cutting-edge technology with the Google Pixel 9 Pro XL. Featuring a stunning 6.8-inch LTPO OLED display with a 120 Hz refresh rate, this smartphone delivers vibrant visuals and smooth performance. Powered by the Google Tensor G4 processor and equipped with a triple rear camera system (50 MP wide, 48 MP ultrawide, 48 MP telephoto), capture stunning photos and 8K videos effortlessly. Enjoy all-day battery life with a 5,060 mAh battery and fast charging capabilities. With IP68 water resistance and seven years of software updates, the Pixel 9 Pro XL combines style, durability, and innovation.",
      image: "pixel-9-pro-xl.png",
      category: categories[0]._id,
      price: 1099.0,
      quantity: 1000,
    },
    {
      name: "APPLE MacBook Pro 14 inch - M3 Pro",
      description:
        "Experience unmatched performance with the M3 Pro chip featuring 11 CPU and 14 GPU cores. Enjoy stunning visuals on the 14 inch Liquid Retina XDR display with a 120 Hz refresh rate and up to 18 hours of battery life. Connect effortlessly with WiFi 6E, and enjoy superior audio with a six-speaker system. Unlock securely with Touch ID, and stay connected with multiple ports, including Thunderbolt 4 and HDMI. Ideal for editing, coding, and gaming.",
      image: "macbook-pro-14.jpg",
      category: categories[1]._id,
      price: 1949.0,
      quantity: 500,
    },
    {
      name: "APPLE MacBook Air 13.6 inch - M3 Chip",
      description:
        "The MacBook Air is powered by the M3 chip, offering up to 1.6x faster performance than the M1. Its 13 inch Liquid Retina display showcases a billion colors, perfect for creative projects and movie nights. Enjoy up to 18 hours of battery life, a fanless design, and a lightweight aluminum body. Features include a 1080p FaceTime HD camera, WiFi 6E, Touch ID for secure logins, and two Thunderbolt 4 ports. Experience immersive audio with a four-speaker sound system.",
      image: "macbook-air-13.6.jpg",
      category: categories[1]._id,
      price: 1076.0,
      quantity: 500,
    },
    {
      name: "LENOVO Yoga Slim 7X",
      description:
        "The Lenovo Yoga 7X features a powerful Snapdragon X Elite processor, offering up to 23.8 hours of battery life in a slim 1.29 kg design. Enjoy a stunning 3K OLED touchscreen with vibrant colors, perfect for entertainment and creative work. Equipped with 16 GB of DDR5 RAM, a Full HD webcam, WiFi 7, and Dolby Atmos quad speakers, this laptop is ideal for multitasking and immersive experiences.",
      image: "lenovo-yoga.jpg",
      category: categories[1]._id,
      price: 999.0,
      quantity: 500,
    },
    {
      name: "HP ENVY x360",
      description:
        "The HP Envy x360 features a versatile 360-degree hinge for laptop and tablet modes, powered by an AMD Ryzen 5 processor for seamless performance. Enjoy a Full HD+ touchscreen and immersive DTS Ultra speakers. With up to 15 hours of battery life, a 5 MP AI noise reduction webcam, and WiFi 6E, it's perfect for work and entertainment on the go.",
      image: "hp-envy.jpg",
      category: categories[1]._id,
      price: 599.0,
      quantity: 500,
    },
    {
      name: "Acer Swift Go",
      description:
        "Weighing just 1.32 kg, the Acer Swift Go features an Intel Core Ultra 5 processor with Intel AI Boost for enhanced performance. Enjoy stunning visuals on a 2.8K OLED display and up to 11.5 hours of battery life. With 16 GB DDR5 RAM, Intel® Arc™ graphics, a Quad HD webcam, and WiFi 6E, it’s perfect for work, play, and everything in between.",
      image: "acer-swift.jpg",
      category: categories[1]._id,
      price: 799.0,
      quantity: 500,
    },
    {
      name: `ACER KB242YEbi Full HD 23.8" IPS LCD Monitor`,
      description:
        "Experience vibrant colors and wide viewing angles on the Full HD 23.8 inch IPS display. With a 100 Hz refresh rate and AMD FreeSync, enjoy smooth gameplay and stunning visuals for work or entertainment. Easily adjust the tilt or mount it to save space.",
      image: "acer-monitor-24.jpg",
      category: categories[2]._id,
      price: 85.0,
      quantity: 250,
    },
    {
      name: `LG 27MS550-B.AEK Full HD 27" IPS LCD Monitor`,
      description:
        "Enhance your viewing experience with the 27 inch IPS display featuring Black Stabilizer for better detail in dark scenes. Eye care features like Flicker Safe and Reader Mode keep your eyes comfortable. Easily adjust settings with OnScreen Control, and mount it to save desk space.",
      image: "lg-monitor-27.jpg",
      category: categories[2]._id,
      price: 114.0,
      quantity: 250,
    },
    {
      name: `SAMSUNG LS34C500GAUXXU Wide Quad HD 34" VA LED Monitor`,
      description:
        "Boost your productivity with this ultra-wide 34 inch monitor featuring WQHD resolution for sharp details and vibrant colors. Intelligent Eye Care tech ensures comfortable viewing, while AMD FreeSync and a 100 Hz refresh rate deliver smooth gaming. Multiple ports and a borderless design make it ideal for multitasking and multi-monitor setups.",
      image: "samsung-ultrawide.jpg",
      category: categories[2]._id,
      price: 329.0,
      quantity: 250,
    },
    {
      name: `LG UltraWide 34WQ75C-B.AEK Quad HD 34" Curved IPS LCD Monitor`,
      description:
        "Enhance your multitasking with this curved UltraWide QHD monitor, featuring vibrant colors and 99% sRGB coverage for content creation. Enjoy immersive HDR10 visuals and MaxxAudio speakers. With USB Type-C for video and power delivery, plus multiple ports for easy connectivity, it’s perfect for any workspace.",
      image: "lg-curved.jpg",
      category: categories[2]._id,
      price: 449.0,
      quantity: 250,
    },
    {
      name: `BENQ PD2725U 4K Ultra HD 27" IPS Monitor`,
      description:
        "Bring your designs to life with this 4K monitor featuring AQ Colour technology for vivid color reproduction. With 95% P3 coverage and HDR support, enjoy superb color accuracy for your projects. Multiple connectivity options, including Thunderbolt 3, and a built-in KVM switch make it perfect for multitasking. Eye care features ensure comfort during long work sessions.",
      image: "benq-4k.jpg",
      category: categories[2]._id,
      price: 697.0,
      quantity: 250,
    },
    {
      name: "APPLE AirPods Pro 2",
      description:
        "Experience rich sound with Active Noise Cancellation and Adaptive Transparency, powered by the H2 chip for high-fidelity audio. Enjoy personalized Spatial Audio, touch controls for volume and calls, and up to 30 hours of listening with the charging case. Features like Precision Finding help you locate your case, while customisable settings enhance your listening experience.",
      image: "airpods-pro-2.jpg",
      category: categories[3]._id,
      price: 229.0,
      quantity: 325,
    },
    {
      name: "SAMSUNG Galaxy Buds3 Pro",
      description:
        "Enjoy immersive sound with AI-powered Active Noise Cancelling that blocks distractions while keeping you aware of your surroundings. These comfortable, snug-fitting earbuds feature touch controls, an IP57 rating for water and dust resistance, and long battery life. Effortlessly switch between Galaxy devices and use Real-Time Interpreter for seamless travel experiences.",
      image: "galaxy-buds3-pro.jpg",
      category: categories[3]._id,
      price: 169.0,
      quantity: 325,
    },
    {
      name: "Pixel Buds Pro 2",
      description:
        "Enjoy all-day comfort with lightweight design and a twist-to-adjust stabilizer. Active Noise Cancellation adapts to your environment, while Conversation Detection lets you chat hands-free. Powered by the Tensor A1 chip for superior sound, these earbuds offer spatial audio, Bluetooth Multipoint for easy device switching, and a full 5-band EQ for personalized audio. Track them easily with Find My Device.",
      image: "pixel-buds-pro-2.jpg",
      category: categories[3]._id,
      price: 219.0,
      quantity: 325,
    },
    {
      name: "BOSE QuietComfort Earbuds",
      description:
        "Experience powerful audio with deep bass and crisp vocals, enhanced by Active Noise Cancelling for distraction-free listening. With an IPX4 rating, they're sweat and water-resistant, perfect for workouts. Enjoy up to 8.5 hours of playback, quick charging, and a comfortable fit with multiple ear tip sizes. Easily switch between devices with Bluetooth Multipoint and control playback with customizable touch controls.",
      image: "bose-earbuds.jpg",
      category: categories[3]._id,
      price: 179.0,
      quantity: 325,
    },
    {
      name: "APPLE Watch Ultra 2 - 49 mm",
      description:
        "Adventure-ready with a bright Always-On Retina display and lightweight titanium case. Features include Double Tap for quick actions, up to 36 hours of battery life (72 hours in low-power mode), precision dual-frequency GPS, and 86 dB siren for emergencies. It’s EN13319 certified for underwater use up to 40 m and includes safety features like Crash Detection and Emergency SOS. Enjoy seamless Siri integration and enhanced app experience with watchOS 10.",
      image: "apple-watch-ultra-2.jpg",
      category: categories[4]._id,
      price: 799.0,
      quantity: 325,
    },
    {
      name: "Galaxy Watch Ultra - 47 mm",
      description:
        "Adventure-ready with a rugged titanium casing and military-grade durability. Features a BioActiveSensor for accurate health tracking, Galaxy AI-powered Energy Score for fitness insights, and an emergency siren. Enjoy smooth performance with a powerful Exynos processor, up to 48 hours of battery life, and a Dual GPS system. Water-resistant up to 100 meters, fast wireless charging, and 32 GB of storage for apps and music. Pair with your Galaxy phone for hands-free calling and seamless app access.",
      image: "galaxy-watch-ultra.jpg",
      category: categories[4]._id,
      price: 599.0,
      quantity: 325,
    },
    {
      name: "Pixel Watch 3 - 45 mm",
      description:
        "Elevate your fitness with the Google Pixel Watch 3, featuring custom workouts, real-time guidance, and advanced motion stats. Enjoy a larger, brighter Actua display, offline Google Maps, and Google Pay. Battery life lasts a day, extendable to 36 hours with Battery Saver mode. Quick charging, safety features like fall detection, and access to Fitbit Premium workouts make it perfect for training smarter and staying connected.",
      image: "pixel-watch-3.jpg",
      category: categories[4]._id,
      price: 499.0,
      quantity: 325,
    },
    {
      name: "GARMIN fenix 8 - 51 mm",
      description:
        "Gear up for any adventure with the Garmin fenix 8, featuring a bright 1.4” AMOLED display and durable construction. Track a variety of activities, monitor health metrics, and utilize PacePro technology for race prep. Enjoy up to 29 days of battery life in smartwatch mode, multi-band GPS for accurate navigation, and features like music storage and contactless payments. Built for toughness, it includes a flashlight for night runs and animated workout plans for fitness inspiration.",
      image: "garmin-fenix-8.jpg",
      category: categories[4]._id,
      price: 949.0,
      quantity: 325,
    },
  ]);

  console.log("products seeded 🌱");

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
    orders: [
      {
        products: [products[6]._id, products[7]._id, products[17]._id],
      },
    ],
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password98765",
  });

  console.log("users seeded 🌱");

  process.exit();
});
