export const site = {
  name: "Red Table",
  legalName: "Red Table Catering & Events",
  tagline: "Good, thoughtfully, and properly cooked food, served on time.",
  summary:
    "Weddings, corporate events, and private dinners across Lahore for over twenty years.",
  about:
    "Red Table has been feeding Lahore's weddings, offices, and family dinners for over twenty years. Our promise is simple: generous food, cooked right, on the table when we said it would be.",
  phoneDisplay: "+92 321 840 5177",
  phoneHref: "tel:+923218405177",
  email: "redtableev@gmail.com",
  emailHref: "mailto:redtableev@gmail.com",
  address: "202-A Gul Mohar, Main Gulberg, Lahore.",
  mapsHref:
    "https://maps.app.goo.gl/pLhPyhTYkvuEGCz98",
  whatsappHref: "https://wa.me/923218405177",
  whatsappDefaultMessage:
    "Hello Red Table, I would like to discuss catering for an upcoming event.",
  instagramHref: "https://www.instagram.com/redtableevents_/",
  instagramLabel: "Instagram",
} as const;

export function whatsappLink(message?: string) {
  return `${site.whatsappHref}?text=${encodeURIComponent(
    message ?? site.whatsappDefaultMessage,
  )}`;
}

export const routes = {
  home: "/",
  services: "/catering-services",
  weddings: "/wedding-catering",
  corporate: "/corporate-catering",
  live: "/live-stations",
  menus: "/menus",
  gallery: "/gallery",
  contact: "/contact",
} as const;

export const nav = [
  { label: "Services", href: routes.services },
  { label: "Weddings", href: routes.weddings },
  { label: "Menus", href: routes.menus },
  { label: "Gallery", href: routes.gallery },
  { label: "Contact", href: routes.contact },
] as const;


export const serviceLinks = [
  { label: "All Services", href: routes.services },
  { label: "Corporate Catering", href: routes.corporate },
  { label: "Live BBQ Stations", href: routes.live },
  {label: "Wedding Catering", href: routes.weddings},
] as const;

export const footerLinks = [
  ...nav,
  { label: "Corporate Catering", href: routes.corporate },
  { label: "Live BBQ Stations", href: routes.live },
] as const;

export const faqs = {
  home: [
    {
      q: "Which areas of Lahore do you cater?",
      a: "Anywhere in the city: farmhouses, open lanws, hotels, homes, and corporate venues.",
    },
    {
      q: "How does pricing work?",
      a: "We price per head, so the rate depends on your guest count. Share your date, venue, and number of guests on WhatsApp and we'll send a quote.",
    },
    {
      q: "What's included in your service?",
      a: "Everything you need to serve your guests: staff and waiters, crockery, cutlery, and setup, including tables, chairs, and the buffet.",
    },
    {
      q: "Can we taste the food before booking?",
      a: "Yes, we offer tastings. Send us a WhatsApp message with your event details and we'll walk you through the options.",
    },
    {
      q: "How far in advance should I book catering in Lahore?",
      a: "For weddings in peak season (October to March), book several months ahead. Corporate lunches and private dinners can often be arranged with a few weeks' notice. WhatsApp us your date and guest count and we'll confirm availability.",
    },
    {
      q: "How does the deposit work?",
      a: "We take 50% to confirm your date and the remaining 50% on the day of the event.",
    },
    {
      q: "Do you customise catering menus?",
      a: "Yes. Our menu packages are starting points. We'll adjust the menu around your guests' preferences, live stations, and dietary needs.",
    },
  ],
  services: [
    {
      q: "What's included in your service?",
      a: "Everything you need to serve your guests: staff and waiters, crockery, cutlery, and setup, including tables, chairs, and the buffet.",
    },
    {
      q: "How does pricing work?",
      a: "We price per head, so the rate depends on your guest count. Share your date, venue, and number of guests on WhatsApp and we'll send a quote.",
    },
  ],
  weddings: [
    {
      q: "Which wedding functions do you cater?",
      a: "Any event such as Walima, Nikkah, or Barat. We can cater a single event or all event days.",
    },
    {
      q: "Can you handle large wedding guest lists?",
      a: "Yes. We regularly cater large weddings as well as small family dinners, with the same care for taste, quantity, and timing.",
    },
    {
      q: "How far ahead should we book?",
      a: "For weddings in peak season (October to March), book several months ahead. Corporate lunches and private dinners can often be arranged with a few weeks' notice. WhatsApp us your date and guest count and we'll confirm availability.",
    },
  ],
  corporate: [
    {
      q: "Which corporate events do you cater?",
      a: "Conferences, executive lunches, company milestones, award nights, and retreats. Continental and Pakistani menus are available, with live stations for evening events.",
    },
    {
      q: "How much notice do you need?",
      a: "Corporate lunches can often be arranged with a few weeks' notice. Send us the agenda, venue, and headcount on WhatsApp and we'll confirm availability and suggest a menu that fits your programme.",
    },
    {
      q: "What's included in your service?",
      a: "Everything you need to serve your guests: staff and waiters, crockery, cutlery, and setup, including tables, chairs, and the buffet.",
    },
    {
      q: "How does pricing work?",
      a: "We price per head, so the rate depends on your guest count. Share your date, venue, and number of guests on WhatsApp and we'll send a quote.",
    },
  ],
  live: [
    {
      q: "What live stations can you set up?",
      a: "Live BBQ (chicken malai boti, kababs, sajji, chops), live tandoor, tawa and street-food counters (pathooray chanay, tawa karahi, bun kabab, jalebi), and an Asian live kitchen.",
    },
    {
      q: "Can live stations work indoors or at any venue?",
      a: "Most venues, but we need to check the space first, since grills and tandoors need ventilation and room to work safely. Share your venue when you contact us and we'll tell you what works.",
    },
    {
      q: "Can we add stations to a buffet menu?",
      a: "Yes. Stations can stand alone or sit beside a banquet buffet. Tell us your guest count and we'll suggest how many counters the event needs.",
    },
  ],
  menus: [
    {
      q: "What menu packages do you offer?",
      a: "We have six to start from: Traditional Feast, Signature Royal, Live Street & Tawa, Continental & Asian Live, Classic Chicken Banquet, and Mutton & Biryani Grand. Each one can be changed to suit your event.",
    },
    {
      q: "Can we taste the food before booking?",
      a: "Yes, we offer food tastings. Contact us and we'll guide you through how it works.",
    },
    
  ],
} as const;

export const services = [
  {
    number: "01",
    title: "Corporate Functions",
    copy: "Conferences, company milestones, executive lunches, and large-scale retreats. Delivered with exact schedule timing and consistent scale.",
  },
  {
    number: "02",
    title: "Private Celebrations",
    copy: "Weddings, intimate family dinners, and milestone parties. Custom multi-course menus created specifically around your guests' preferences.",
  },
  {
    number: "03",
    title: "Live Culinary Stations",
    copy: "Interactive live cooking, dynamic grill stations, and fresh artisanal table spreads that bring visual warmth and energy to the venue.",
  },
] as const;

export type MenuPackage = {
  number: string;
  name: string;
  courses: { label: string; items: string[] }[];
};

export const menus: MenuPackage[] = [
  {
    number: "01",
    name: "Traditional Feast",
    courses: [
      {
        label: "Starters",
        items: ["Dynamite Chicken", "Soup OR Seasonal Juice"],
      },
      {
        label: "Entrées",
        items: [
          "Mutton Kunnah",
          "Chicken Afghani Pulao",
          "Chicken Malai Boti (Live BBQ)",
          "Chicken Kabab (Live BBQ)",
          "Assorted Naan (Live Tandoor)",
          "Variety of Salads • Fresh Raita",
        ],
      },
      {
        label: "Desserts",
        items: ["Halwa Gajar • Gulab Jaman"],
      },
      {
        label: "Drinks",
        items: ["Soft Drinks (Cans) • Mineral Water • Kashmiri Tea"],
      },
    ],
  },
  {
    number: "02",
    name: "Signature Royal",
    courses: [
      {
        label: "Starters",
        items: ["Fish Tempura", "Soup OR Seasonal Juice"],
      },
      {
        label: "Entrées",
        items: [
          "Mutton Quorma",
          "Beef Chapli Kabab (Live)",
          "Chicken Pulao",
          "Chicken Tawa Karahi (Live)",
          "Chicken Sajji (Live)",
          "Chicken Steam Roast",
          "Assorted Naan (Live Tandoor)",
          "Variety of Salads • Fresh Raita",
        ],
      },
      {
        label: "Dessert",
        items: ["Ras Malai • Blueberry Trifle"],
      },
      {
        label: "Drinks",
        items: ["Soft Drinks (Cans) • Mineral Water • Kashmiri Tea"],
      },
    ],
  },
  {
    number: "03",
    name: "Live Street & Tawa",
    courses: [
      {
        label: "Starters",
        items: [
          "Dahi Bhallay • Chana Chaat",
          "Laddu Peethi (Live)",
          "Bun Kabab (Live)",
        ],
      },
      {
        label: "Entrées",
        items: [
          "Mutton Qeema Chops on Tawa (Live)",
          "Chicken Kabab (Live)",
          "Chicken Sajji (Live)",
          "Zeera Pulao",
          "Pathooray Chanay (Live)",
        ],
      },
      {
        label: "Desserts",
        items: ["Jalebi (Live) • Gulab Jaman"],
      },
      {
        label: "Drinks",
        items: ["Soft Drinks (Cans) • Mineral Water • Kashmiri Tea"],
      },
    ],
  },
  {
    number: "04",
    name: "Continental & Asian Live",
    courses: [
      {
        label: "Starters",
        items: ["Pina Colada", "Chicken Tempura"],
      },
      {
        label: "Entrées",
        items: [
          "Chicken Tawa Karahi (Live)",
          "Beef Chapli Kabab (Live)",
          "Naan (Live Tandoor)",
          "Egg Fried Rice (Live Kitchen)",
          "Chicken Tarragon (Live Kitchen)",
          "Kung Pao Chicken (Live Kitchen)",
        ],
      },
      {
        label: "Dessert",
        items: ["Caramelised Peaches with Butterscotch Sauce"],
      },
      {
        label: "Drinks",
        items: ["Assorted Soft Drinks (Cans) • Mineral Water • Tea / Coffee"],
      },
    ],
  },
  {
    number: "05",
    name: "Classic Chicken Banquet",
    courses: [
      {
        label: "Starters",
        items: ["Chicken Tempura", "Soup OR Seasonal Juice"],
      },
      {
        label: "Entrées",
        items: [
          "Chicken Biryani",
          "Chicken Quorma",
          "Assorted Naan (Live Tandoor)",
          "Variety of Salads • Fresh Raita",
        ],
      },
      {
        label: "Dessert (pick any one)",
        items: ["Halwa Gajar / Khoya Kheer / Gulab Jaman / Kulfa / Ice Cream"],
      },
      {
        label: "Drinks",
        items: ["Soft Drinks (Cans) • Mineral Water • Kashmiri Tea"],
      },
    ],
  },
  {
    number: "06",
    name: "Mutton & Biryani Grand",
    courses: [
      {
        label: "Starters",
        items: ["Chicken Tempura", "Soup OR Seasonal Juice"],
      },
      {
        label: "Entrées",
        items: [
          "Mutton Quorma",
          "Chicken Biryani",
          "Assorted Naan (Live Tandoor)",
          "Variety of Salads • Fresh Raita",
        ],
      },
      {
        label: "Dessert (pick any one)",
        items: ["Halwa Gajar / Khoya Kheer / Gulab Jaman / Kulfa / Ice Cream"],
      },
      {
        label: "Drinks",
        items: ["Soft Drinks (Cans) • Mineral Water • Kashmiri Tea"],
      },
    ],
  },
];

export type GalleryItem = {
  type?: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
  caption: string;
  span: "lg" | "md" | "sm";
};

export const gallery: GalleryItem[] = [
  {
    src: "/img3.jpg",
    alt: "Gold flatware and folded linen at a Red Table place setting",
    caption: "Table Architecture",
    span: "lg",
  },
  {
    src: "/img1.jpg",
    alt: "Continental buffet station with polished chafing dishes",
    caption: "Signature Buffet Stations",
    span: "md",
  },
  {
    src: "/img8.jpg",
    alt: "Live grilled mutton chops over open fire",
    caption: "Live Fire & Carvery",
    span: "md",
  },
  {
    src: "/img2.jpg",
    alt: "Fresh gajar halwa served in a brass chafing dish",
    caption: "Fresh Gajar Halwa",
    span: "sm",
  },
  {
    src: "/img4.jpg",
    alt: "Premium salad bar and artisanal cheese board",
    caption: "Premium Salad Bar",
    span: "sm",
  },
  {
    src: "/img6.jpg",
    alt: "Spinach and cheese quiche arranged on a wooden board",
    caption: "Quiche Board",
    span: "sm",
  },
  {
    src: "/img5.jpg",
    alt: "Individual blueberry trifle cups",
    caption: "Blueberry Trifle",
    span: "sm",
  },
  {
    src: "/img7.png",
    alt: "Chicken tempura single servings with dipping sauce",
    caption: "Chicken Tempura",
    span: "sm",
  },
  {
    src: "/img9.jpg",
    alt: "Sparkling Buffet dishes",
    caption: "Elegant Buffet Station",
    span: "sm",
  },
  {
    type: "video",
    src: "/videos/vid1.mp4",
    poster: "/poster1.png",
    alt: "Live BBQ station at a Red Table event",
    caption: "Live BBQ in Action",
    span: "md",
  },
  {
    type: "video",
    src: "/videos/vid2.mp4",
    poster: "/poster2.png",
    alt: "Live BBQ station at a Red Table event",
    caption: "Live BBQ in Action",
    span: "md",
  },
  {
    type: "video",
    src: "/videos/vid3.mp4",
    poster: "/poster3.png",
    alt: "Live BBQ station at a Red Table event",
    caption: "Live BBQ in Action",
    span: "md",
  },
  {
    type: "video",
    src: "/videos/vid5.mp4",
    poster: "/poster4.png",
    alt: "Live BBQ station at a Red Table event",
    caption: "Live BBQ in Action",
    span: "md",
  },
];

export const testimonials = [
  {
    quote:
      "We cannot thank your catering and decor team enough for making our son's wedding events truly spectacular. The food was absolutely outstanding, with every dish perfectly prepared, beautifully presented, and highly praised by all our guests. Equally breathtaking was the decor, which transformed the venue into a stunning, elegant space that exceeded our highest expectations. Your team's flawless coordination, professionalism, and meticulous attention to detail allowed us to fully enjoy the celebrations without a single worry. You played a massive role in creating unforgettable memories for our family, and we highly recommend your exceptional services.",
    name: "Imtiaz Malik",
    event: "Wedding Celebration",
  },
  {
    quote:
      "We chose Red Table for my daughter's three-day wedding functions, and they exceeded our expectations in every way. The food was consistently delicious throughout all events, with excellent taste, quality, and presentation. Every dish was fresh and well-prepared, and our guests repeatedly complimented the food. The service was professional, organized, and attentive, ensuring everything ran smoothly from start to finish. Thank you for helping make such a special family occasion even more memorable. Highly recommended for anyone looking for quality catering and exceptional service.",
    name: "Muhammad Akmal",
    event: "3-Day Wedding Functions",
  },
  {
    quote:
      "Red Table! I had several experiences of engaging their services over last 6 years, every time they were perfect on service delivery, arrangements quality was perfect, delicious taste of food, quantity of food served was always as promised, services were personalized and excellent, even beyond whenever asked to arrange special arrangements they exceeded expectations. Highly recommend them for your special celebrations.",
    name: "Aamir Mehmood",
    event: "Wedding & Family Celebrations",
  },
] as const;

export const eventTypes = [
  "Wedding Event",
  "Corporate Function",
  "Private Celebration",
  "Live Culinary Stations",
  "Other",
] as const;
