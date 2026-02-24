export const products = {engine: {
    id: "engine",
    title: "ENGINE AND TRANMISSION",
    title1: "Engineered for",
    title2: "Unmatched Durability",
    image: "/ex3.png",
    heroImage:"/he2.png",
    description: "Durable undercarriage parts and G.E.T. solutions for demanding operations. Built to withstand tough terrains while maintaining peak machinery performance.",
    types: [
      {
        name: "Track Chains",
        description: "Our track chains are crafted from high-strength steel, engineered for maximum durability and wear resistance. Designed for heavy machinery like excavators and dozers, they ensure stable traction and longevity, maintaining peak performance across rugged and demanding terrains.",
        specs: [
          { label: "Material", value: "High-strength steel" },
          { label: "Applications", value: "Excavators, Dozers" },
        ],
      },
      {
        name: "Track Shoes",
        description: "Track Shoes provide an extra layer of protection and superior wear resistance for undercarriage systems. Their wide range of sizes ensures compatibility and versatility for multiple machine models, helping to extend the life and performance of heavy equipment.",
        specs: [
          { label: "Wear Resistance", value: "High" },
          { label: "Width Range", value: "560mm - 915mm" },
        ],
      },
      {
        name: "Idlers",
        description: "Our idlers are forged from heavy-duty steel and feature sealed and lubricated components for extended service life. They play a vital role in maintaining track alignment and support, allowing machines to operate smoothly on rough and challenging surfaces.",
        specs: [
          { label: "Durability", value: "Heavy-duty forged steel" },
          { label: "Lubrication", value: "Sealed & Lubricated" },
        ],
      },
      {
        name: "Sprockets",
        description: "Engineered for compatibility with a wide range of machine models, these sprockets feature optimal hardness for wear resistance and long-term reliability. Their robust structure ensures efficient power transmission and performance in continuous heavy-duty use.",
        specs: [
          { label: "Compatibility", value: "Multiple models" },
          { label: "Hardness", value: "HRC 52-58" },
        ],
      },
    ],
  },
  undercarriage: {
    id: "undercarriage",
    title: "UNDERCARRIAGE / GROUND ENGAGING TOOLS",
    
    title1: "Engineered for",
    title2: "Unmatched Durability",
    image: "/pp2.png",
    heroImage:"/underpro.png",mainhead:"Leading Brands We Stock",
    para:"Our comprehensive range of undercarriage components is engineered for durability, precision, and smooth operation. Using high-grade wear-resistant steel and advanced surface treatments, each part is designed to minimize downtime, extend operational life, and fit seamlessly with your equipment. From standard machinery to specialized applications, we also offer customized undercarriage solutions tailored to your needs.",
     description: "Durable components that provide stability, traction, and superior ground contact, ensuring maximum productivity and reduced wear in tough operations.",
    types: [
      {
        name: "CF Undercarriage Parts",
        description:"CF is a globally recognized brand, trusted across Asia, the Middle East, Latin America, Africa, and Europe. Known for strength and longevity, CF parts are manufactured under strict quality management systems and serve industries including mining, forestry, and construction. They offer coverage for the widest range of makes and models in the market.",
       
      },
      {
        name: "AT Undercarriage Parts",
        description:"AT has been a trusted name in heavy construction machinery since 1997. Renowned for reliability and long service life, AT parts provide competitively priced aftermarket solutions for excavators, bulldozers, and other tracked machines, keeping operations running efficiently.",
       
      },
    ],
  },

  spares: {
    id: "spares",
    title: "Spare Parts / Reconditioned Assemblies",
    title1: "Ensuring",
    title2: "Reliable Performance",
    image: "/pp1.png",
    heroImage:"/recban.png",
    mainhead:"Categories of Reconditioned Sub-Assemblies:",
    para:"At Setlite Engineers Limited, we specialize in the comprehensive reconditioning of earthmoving machinery sub-assemblies, providing cost-effective solutions that restore performance and extend equipment life. Unlike intermediaries, we manage the entire process in-house—from teardown and inspection to reassembly and testing—ensuring each component meets or exceeds OEM standards. Our services support a wide range of heavy equipment models and brands, delivering reliable, ready-to-install sub-assemblies backed by technical support and warranty for minimal downtime and maximum operational efficiency.",
    description: "Quality spares and sub assemblies for HEMM. Each part is tested and rebuilt for consistent performance and long-term reliability.",
    types: [
      {
        name: "Engines & Powertrains",
        description:"Engines, transmissions, torque converters", image: {
      products: [
        "/rec1.jpg",
        "/rec2.png",
        "/rec3.jpg",
        "/rec4.jpg",
        "/rec5.png",
      
        
      ]
    }
       
      },
      {
        name: "Hydraulic Systems:",
        description:"Hydraulic pumps, hydraulic motors, cylinders",
       
      },
      {
        name: "Drivetrain Components:",
        description:"Final drives, differentials",
       
      },
      {
        name: "Supported Machinery:",
        description:"Excavators, bulldozers, wheel loaders, motor graders, dump trucks, track-type tractors",
       
      },
      {
        name: "Brands Covered:",
        description:"Caterpillar, Komatsu, Volvo, Hitachi, Doosan, JCB, Hyundai, Liebherr",
       
      },
     
    ],
  },

  avtec: {
    id: "avtec",
    title: "AVTEC TRANSMISSION",
    title1: "Delivering",
    title2: "Precision & Power",
    image: "/pp5.png",
    description: "AVTEC transmission systems for heavy-duty machines. Engineered for reliable power transfer and long-lasting performance in tough industrial conditions.",
    types: [
      {
        name: "CRT 5633",
        image:"/pt3.png",  images: ["/pt3.png"], // use 'images' key
        description: "CRT 5633 is a unique transmission with 3 forward and 3 reverse gears. This transmission is very popular in applications where large amounts of torque multiplication is required out of a small package. We offer flexibility of mounting direct and remote mount. We also offer the transmission with drop and inline output to suite the vehicle requirement. The gear shift mechanism has a flexibility of mechanical/electrical shift with engine driven PTO option.",
        specs: [
          { label: "Net Input Power", value: "430 hp (320kW)" },
          { label: "Net Input Torque", value: "900 lbft (1220 Nm)" }, 
          { label: "Input speed (max)", value: "Input speed (max)" }, 
        ],
      },
      {
        name: "T(R)T Series",
        image:"/tr2.png",  images: ["/q5.png"], // use 'images' key
        description: "TT/TRT 2000 series is a twin turbine transmission with high stall Torque ratio available with option for output disconnect. Short and Long drop output options are also available to suit various vehicle configurations. There is flexibility of mounting direct and remote. It has an automatic phase change mechanism with option of engine driven PTO option.",
        specs: [
          { label: "Net Input Power:", value: "175 hp (130kW)" },
          { label: "Net Input Torque", value: "310 lbft (420 Nm)" },
          { label: "Speeds(Twin turbine) ", value: "4F/2R,2F/2R,4F/4R" },
          { label: "Input speed (max) ", value: "3000 rpm" },
        ],
      },
      {
        name: "CT100",
        image:"/q5.png",
  images: ["/q5.png"], // use 'images' key
        description: "Designed for the largest industrial vehicles, Model Y1 excels in providing powerful torque and seamless performance. Its rugged build and advanced engineering set a new standard for transmission durability in mining and construction fleets.",
        specs: [
          { label: "Net Input Power", value: "100 hp (74.5 kW)" },
          { label: "Net Input Torque", value: "221 lbft (300 Nm)" },
          { label: "Input Speed (max)", value: "2500 RPM" },
          { label: "Speeds:", value: "23F/3R , 2F/2R" },
        ],
      },
      
      
    ],
  },

  hemm: {
    id: "hemm",
    title: "HEMM FOR SALE",
    title1: "Building",
    title2: "The Future of Earthmoving",
    heroImage:"/hemban.png",
    image: "/hem.png",
    mainhead:"Featured Equipment:",
    foot:"",
    para:"At Setlite Engineers Limited, we offer premium heavy earthmoving and construction machinery through a straightforward direct-sale approach, giving customers full control without auctions or bidding. All machines come with complete service histories and maintenance records, ensuring transparency and reliability. Serving the construction, mining, quarrying, and infrastructure sectors, our thoroughly inspected equipment is ready for immediate deployment. Whether expanding your fleet or starting a new project, we provide a smooth, transparent purchasing experience with no delays or middlemen. Our knowledgeable team is always available to offer expert advice and responsive support, helping you make informed decisions with confidence.",
    description: "Heavy Earth Moving Machinery available for sale. Built for efficiency, reliability, and superior performance on every construction site.",
    types: [
      {
        name: "Excavators",
image: {
      products: [
        "/hempic.png",
        "/hem.png",
        
        
      ]
    }
      },
      {
        name: "Bulldozers",
      },
      {
        name: "Dump Trucks",
      },
      {
        name: "Wheel Loaders",
      },
      {
        name: "Backhoe Loaders",
      },
      {
        name: "Skid Steers",
      },
      {
        name: "Motor Graders",
      },
      {
        name: "Compactors",
      },
      {
        name: "Tyre Handler",
      },
      {
        name: "Attachments and more",        specs: [
          { label: "All machinery listed is available for direct purchase, not auction. Detailed specifications, pricing, and inspection reports are provided upon request." },
   
        ],
      },
    ] 
  },
};
