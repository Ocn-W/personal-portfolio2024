import React from "react";
import cssLogo from '../assets/svgs/cssLogo.svg';
import htmlLogo from '../assets/svgs/htmlLogo.svg';
import jsLogo from '../assets/svgs/jsLogo.svg';
import netlifyLogo from '../assets/svgs/netlifyLogo.svg';
import reactLogo from '../assets/svgs/reactLogo.svg';
import sassLogo from '../assets/svgs/sassLogo.svg';
import viteLogo from '../assets/svgs/viteLogo.svg';

export const fonts = [
  "activist",
  "against",
  "freedom",
  "amsterdam",
  "aspect",
  "great victorian",
  "lover modern"
];

export const svgs = [
  cssLogo,
  htmlLogo,
  jsLogo,
  netlifyLogo,
  reactLogo,
  sassLogo,
  viteLogo
];

export function getRandomFont() {
  const filteredFonts = fonts.filter((font) => font !== "sans-serif");
  const randomIndex = Math.floor(Math.random() * filteredFonts.length);
  return filteredFonts[randomIndex];
}

export const colors = [
  "#FF0000", // Red
  "#FF7F00", // Orange
  "#FFFF00", // Yellow
  "#7FFF00", // Chartreuse
  "#00FF00", // Lime
  "#00FF7F", // Spring Green
  "#00FFFF", // Cyan
  "#007FFF", // Azure
  "#0000FF", // Blue
  "#7F00FF", // Violet
  "#FF00FF", // Magenta
  "#FF007F", // Rose
  "#FF4500", // Orange Red
  "#FF6347", // Tomato
  "#FF8C00", // Dark Orange
  "#FFD700", // Gold
  "#FFA500", // Orange
  "#FF6347", // Tomato
  "#FF8C00", // Dark Orange
  "#FFD700", // Gold
  "#FFA500", // Orange
  "#FF6347", // Tomato
];

const pastelMutedColors = [
  "#B19CD9", // Lavender
  "#A7D7C5", // Mint Green
  "#F2B880", // Peach
  "#B8D9C8", // Soft Green
  "#F0C987", // Apricot
  "#D9B9A8", // Dusty Rose
  "#92A8D1", // Periwinkle
  "#D2DDC5", // Pale Sage
  "#FFD3B5", // Blush
  "#B3C7D6", // Powder Blue
  "#E5D4E5", // Mauve
  "#C1CDC0", // Sage Green
  "#FFCCCB", // Pink Lemonade
  "#9FB7B9", // Misty Blue
  "#D9B5A5", // Tuscany
  "#A8D8EA", // Baby Blue
  "#D8E2DC", // Powdered Sugar
  "#FFE5D9", // Pale Coral
  "#C7CEEA", // Languid Lavender
  "#B2C9AB", // Tea Green
];

export function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

export function getPastelColor() {
  const randomIndex = Math.floor(Math.random() * pastelMutedColors.length);
  return pastelMutedColors[randomIndex];
}

export const getWidth = () => {
  return typeof window !== 'undefined' ? window.innerWidth : null;
};

export const getHeight = () => {
  return typeof window !== 'undefined' ? window.innerHeight : null;
};

export const projects = [
  {
    name: "Retail Website",
    techstack: (
      <>
        <img
          src={"/svgs/viteLogo.svg"}
          alt="tech logo"
          width={30}
          height={40}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
        <img
          src={"/svgs/reactLogo.svg"}
          alt="tech logo"
          width={30}
          height={40}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
        <img
          src={"/svgs/jsLogo.svg"}
          alt="tech logo"
          width={30}
          height={40}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
        <img
          src={"/svgs/sassLogo.svg"}
          alt="tech logo"
          width={30}
          height={40}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
      </>
    ),
    dependencies: (
      <>
        <img
          src={"/svgs/netlifyLogo.svg"}
          alt="tech logo"
          width={75}
          height={20}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
        <p>Jotai</p>
        <p>React Router</p>
      </>
    ),
    description: (
      <>
        <p>
          This is a mock e-commerce website using front-end features combined
          with <em>global state management handled by Jotai</em> and{" "}
          <em>pagination with React Router</em>. Features include a randomly
          generated list of clothing items to select your desired purchase,
          filtering clothing items on the clothing page by price or rating,
          adding items from your shopping or favorites cart, and a checkout page
          to view your total and mock form to complete purchases.
        </p>
      </>
    ),
    demoUrl: "https://voguevalue.netlify.app",
    img: "/imgs/RetailSite.jpg",
  },
  {
    name: "QR Code Generator",
    techstack: (
      <>
        <img
          src={"/svgs/viteLogo.svg"}
          alt="tech logo"
          width={30}
          height={40}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
        <img
          src={"/svgs/reactLogo.svg"}
          alt="tech logo"
          width={30}
          height={40}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
        <img
          src={"/svgs/jsLogo.svg"}
          alt="tech logo"
          width={30}
          height={40}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
      </>
    ),
    dependencies: (
      <>
        <img
          src={"/svgs/netlifyLogo.svg"}
          alt="tech logo"
          width={75}
          height={20}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
        <p>react-qr-code</p>
      </>
    ),
    description: (
      <>
        <p>
          This website makes use of the library react-qr-code to generate,
          customize, and download your own QR Codes for websites, business
          cards, social media, you name it! This project highlights some
          interesting features possible with the library such as{" "}
          <em>SVG to PNG conversion for file downloads</em> and{" "}
          <em>state management to handle the styling of SVG elements</em>.
        </p>
      </>
    ),
    demoUrl: "https://qrbox.netlify.app/",
    img: "/imgs/QRGeneratorSite.jpg",
  },
  {
    name: "Spotify Playlist Maker",
    techstack: (
      <>
        <img
          src={"/svgs/reactLogo.svg"}
          alt="tech logo"
          width={30}
          height={40}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
        <img
          src={"/svgs/jsLogo.svg"}
          alt="tech logo"
          width={30}
          height={40}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
      </>
    ),
    dependencies: (
      <>
        <img
          src={"/svgs/netlifyLogo.svg"}
          alt="tech logo"
          width={75}
          height={20}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
        <p>React-Context</p>
        <p>Spotify API</p>
      </>
    ),
    description: (
      <>
        <p>
          This web application makes use of the SpotifyAPI to search your favorite songs and create custom playlists to upload directly to Spotify. The major features for this website include searching the Spotify database to find your favorite songs and creating/editing custom playlist to publish to your Spotify account. This project was my way of diving into understanding core concepts around {" "}
          <em>React Context</em>, {" "}
          <em>handling token requests and API data</em>, {" "}
          <em>hiding important API keys for production with dotenv and through Netlify</em>, {" "}
          <em>repository history management on GitHub with GitBash</em>, {" "}
          as well as the overall workflow for SPA&apos;s in React without using major libraries. {" "}
          <strong>
            <em>
              You do not need to authorize your account to create the playlist, only to upload!
            </em>
          </strong>
        </p>
      </>
    ),
    demoUrl: "https://soundstack.netlify.app",
    img: "/imgs/PlaylistMaker.jpg",
  },
  {
    name: "Ticket Authentication Site",
    techstack: (
      <>
        <img
          src={"/svgs/viteLogo.svg"}
          alt="tech logo"
          width={30}
          height={40}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
        <img
          src={"/svgs/reactLogo.svg"}
          alt="tech logo"
          width={30}
          height={40}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
        <img
          src={"/svgs/jsLogo.svg"}
          alt="tech logo"
          width={30}
          height={40}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
        <img
          src={"/svgs/sassLogo.svg"}
          alt="tech logo"
          width={30}
          height={40}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
      </>
    ),
    dependencies: (
      <>
        <img
          src={"/svgs/netlifyLogo.svg"}
          alt="tech logo"
          width={75}
          height={20}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
        <p>React Context</p>
      </>
    ),
    description: (
      <>
        <p>
          This website explores mock <em>form validation techniques</em> with
          features such as being able to generate a randomized custom ticket in
          similar format to a gift or CC. The form may only be submitted if the
          proper mock data is supplied to the appropriate fields.
        </p>
      </>
    ),
    demoUrl: "https://authentix.netlify.app/",
    img: "/imgs/TicketAuthSite.jpg",
  },
  {
    name: "Random Website Generator",
    techstack: (
      <>
        <img
          src={"/svgs/htmlLogo.svg"}
          alt="tech logo"
          width={30}
          height={40}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
        <img
          src={"/svgs/cssLogo.svg"}
          alt="tech logo"
          width={30}
          height={40}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
        <img
          src={"/svgs/jsLogo.svg"}
          alt="tech logo"
          width={30}
          height={40}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
      </>
    ),
    dependencies: (
      <>
        <img
          src={"/svgs/netlifyLogo.svg"}
          alt="tech logo"
          width={75}
          height={20}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
      </>
    ),
    description: (
      <>
        <p>
          This website is powered by HTML, CSS, JavaScript and{" "}
          <em>deployed with Netlify</em>. This tool immerses users in a
          recreation of the Windows XP operating system, complete with a pseudo
          Microsoft Paint allowing users to create digital artworks and save
          them locally, a pseudo Internet Explorer that serves as a random
          website generator allowing users to visit over 100 websites from all
          corners of the internet, and a live messaging system to chat with
          other visitors who have visited, this project transports users back in
          time in a trip down memory lane to relive the charm of the past
          through a modern lens.
        </p>
      </>
    ),
    demoUrl: "https://thedesktop.netlify.app",
    img: "/imgs/WebsiteGenerator.jpg",
  },
];

export const artwork = [
  {
      name: 'Biblically Accurate Angels',
      date: '2023',
      size: '30in x 40in',
      price: '$200',
      img: '/artwork-imgs/BBAImg.JPG',
      GLTF: '/blender-objects/bba-painting-exp.gltf',
  },
  {
      name: 'End Game',
      date: '2023',
      size: '30in x 40in',
      price: '$200',
      img: '/artwork-imgs/EndGameImg.JPG',
      GLTF: '/blender-objects/endgame-exp.gltf',
  },
  {
      name: 'Essay',
      date: '2023',
      size: '30in x 40in',
      price: '$200',
      img: '/artwork-imgs/EssayImg.JPG',
      GLTF: '/blender-objects/essay-exp.gltf',
  },
  {
      name: 'Go!',
      date: '2023',
      size: '30in x 40in',
      price: '$200',
      img: '/artwork-imgs/GoImg.JPG',
      GLTF: '/blender-objects/go!-exp.gltf',
  },
  {
      name: 'Race Races Racer',
      date: '2023',
      size: '30in x 40in',
      price: '$200',
      img: '/artwork-imgs/ThreeRsImg.JPG',
      GLTF: '/blender-objects/threeRs-exp.gltf',
  }
]
