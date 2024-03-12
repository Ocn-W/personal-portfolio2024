import React from "react";
import cssLogo from '../assets/svgs/cssLogo.svg';
import htmlLogo from '../assets/svgs/htmlLogo.svg';
import jsLogo from '../assets/svgs/jsLogo.svg';
import netlifyLogo from '../assets/svgs/netlifyLogo.svg';
import reactLogo from '../assets/svgs/reactLogo.svg';
import sassLogo from '../assets/svgs/sassLogo.svg';
import viteLogo from '../assets/svgs/viteLogo.svg';
import linkedInLogo from '../assets/svgs/LinkedIn-white.svg';
import githubLogo from '../assets/svgs/Github-white.svg';
import webGenerator from '../assets/images/WebsiteGenerator.jpg';
import playlistMaker from '../assets/images/PlaylistMaker.jpg';
import retailSite from '../assets/images/RetailSite.jpg';
import qrGenSite from '../assets/images/QRGeneratorSite.jpg';
import authySite from '../assets/images/TicketAuthSite.jpg';
import artistSite from '../assets/images/ArtistSite.png';
import cliquesSite from '../assets/images/CliquesWebsite.png';
import nonTechResume from '../assets/pdf/resume_01.pdf';
import techResume from '../assets/pdf/resume_02.pdf';

export const fonts = [
  "activist",
  "against",
  "freedom",
  "amsterdam",
  "aspect",
  "great victorian",
  "lover modern"
];

export const platformSvgs = {
  linkedin: linkedInLogo,
  github: githubLogo
}

export const svgs = [
  cssLogo,
  htmlLogo,
  jsLogo,
  netlifyLogo,
  reactLogo,
  sassLogo,
  viteLogo,
];

export const resume = {
  technical: techResume,
  nonTech: nonTechResume
}

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
    name: "Cliques",
    techstack: (
      <>
        <img
          src={reactLogo}
          alt="tech logo"
          width={30}
          height={40}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
        <img
          src={jsLogo}
          alt="tech logo"
          width={30}
          height={40}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
        <img
          src={cssLogo}
          alt="tech logo"
          width={30}
          height={40}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
        <p>REACT NATIVE</p>
        <p>GRADLE</p>
      </>
    ),
    dependencies: (
      <>
        <p>REST APIs</p>
        <p>Axios</p>
        <p>ANDROID STUDIOS</p>
        <p>Google Play Services</p>
        <p>BitBucket</p>
        <p>Firebase</p>
      </>
    ),
    description: (
      <>
        <p>
          I am the lead front end developer for this mobile application. I
          handle front end UI/UX as well as managing scheduled update releases
          on <em>Google Play Services</em>. Including creating visual documentation in <em>Figma</em>,
          marketing content in <em>Canva</em>, and database rule management in <em>FireBase</em>. Currently
          available on iOS and Google Play stores!
        </p>
      </>
    ),
    demoUrl: "https://cliques.co/",
    image: cliquesSite,
  },
  {
    name: "Artist Landing Page",
    techstack: (
      <>
        <img
          src={viteLogo}
          alt="tech logo"
          width={30}
          height={40}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
        <img
          src={reactLogo}
          alt="tech logo"
          width={30}
          height={40}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
        <img
          src={jsLogo}
          alt="tech logo"
          width={30}
          height={40}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
        <img
          src={sassLogo}
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
          src={netlifyLogo}
          alt="tech logo"
          width={75}
          height={20}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
        <p>React-Three-Fiber</p>
        <p>Blender</p>
        <p>TS-Particles</p>
      </>
    ),
    description: (
      <>
        <p>
          A unique, vibrant, and video-game inspired landing page with an infinite 3D movement effect.
          3D assets for this project created by me in <em>Blender</em> and brought to life on the web using{" "}
          <em>ThreeJS for React (R3F)</em>.
        </p>
      </>
    ),
    demoUrl: "https://vimarics.netlify.app/",
    image: artistSite,
  },
  {
    name: "Retail Website",
    techstack: (
      <>
        <img
          src={viteLogo}
          alt="tech logo"
          width={30}
          height={40}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
        <img
          src={reactLogo}
          alt="tech logo"
          width={30}
          height={40}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
        <img
          src={jsLogo}
          alt="tech logo"
          width={30}
          height={40}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
        <img
          src={sassLogo}
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
          src={netlifyLogo}
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
    image: retailSite,
  },
  {
    name: "QR Code Generator",
    techstack: (
      <>
        <img
          src={viteLogo}
          alt="tech logo"
          width={30}
          height={40}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
        <img
          src={reactLogo}
          alt="tech logo"
          width={30}
          height={40}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
        <img
          src={jsLogo}
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
          src={netlifyLogo}
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
    image: qrGenSite,
  },
  {
    name: "Spotify Playlist Maker",
    techstack: (
      <>
        <img
          src={reactLogo}
          alt="tech logo"
          width={30}
          height={40}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
        <img
          src={jsLogo}
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
          src={netlifyLogo}
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
          This web application makes use of the SpotifyAPI to search your
          favorite songs and create custom playlists to upload directly to
          Spotify. The major features for this website include searching the
          Spotify database to find your favorite songs and creating/editing
          custom playlist to publish to your Spotify account. This project was
          my way of diving into understanding core concepts around{" "}
          <em>React Context</em>, <em>handling token requests and API data</em>,{" "}
          <em>
            hiding important API keys for production with dotenv and through
            Netlify
          </em>
          , <em>repository history management on GitHub with GitBash</em>, as
          well as the overall workflow for SPA&apos;s in React without using
          major libraries.{" "}
          <strong>
            <em>
              You do not need to authorize your account to create the playlist,
              only to upload!
            </em>
          </strong>
        </p>
      </>
    ),
    demoUrl: "https://soundstack.netlify.app",
    image: playlistMaker,
  },
  {
    name: "Ticket Authentication Site",
    techstack: (
      <>
        <img
          src={viteLogo}
          alt="tech logo"
          width={30}
          height={40}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
        <img
          src={reactLogo}
          alt="tech logo"
          width={30}
          height={40}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
        <img
          src={jsLogo}
          alt="tech logo"
          width={30}
          height={40}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
        <img
          src={sassLogo}
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
          src={netlifyLogo}
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
    image: authySite,
  },
  {
    name: "Random Website Generator",
    techstack: (
      <>
        <img
          src={htmlLogo}
          alt="tech logo"
          width={30}
          height={40}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
        <img
          src={cssLogo}
          alt="tech logo"
          width={30}
          height={40}
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
        <img
          src={jsLogo}
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
          src={netlifyLogo}
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
    image: webGenerator,
  },
];

export const artwork = [
  {
      name: 'Biblically Accurate Angels',
      date: '2023',
      size: '30in x 40in',
      price: '$200',
      image: '/artwork-images/BBAImg.JPG',
      GLTF: '/blender-objects/bba-painting-exp.gltf',
  },
  {
      name: 'End Game',
      date: '2023',
      size: '30in x 40in',
      price: '$200',
      image: '/artwork-images/EndGameImg.JPG',
      GLTF: '/blender-objects/endgame-exp.gltf',
  },
  {
      name: 'Essay',
      date: '2023',
      size: '30in x 40in',
      price: '$200',
      image: '/artwork-images/EssayImg.JPG',
      GLTF: '/blender-objects/essay-exp.gltf',
  },
  {
      name: 'Go!',
      date: '2023',
      size: '30in x 40in',
      price: '$200',
      image: '/artwork-images/GoImg.JPG',
      GLTF: '/blender-objects/go!-exp.gltf',
  },
  {
      name: 'Race Races Racer',
      date: '2023',
      size: '30in x 40in',
      price: '$200',
      image: '/artwork-images/ThreeRsImg.JPG',
      GLTF: '/blender-objects/threeRs-exp.gltf',
  }
]