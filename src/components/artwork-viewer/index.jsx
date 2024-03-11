import { React, Suspense, useState } from "react";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion';
import { artwork } from "../../constants/arrays";
import "./style.scss";
import Artwork from "./artwork";
import ContentLoader from "../../animations/content-loader";

export default function ArtworkViewer() {
  const [currArtwork, setSelectedArtwork] = useState(null); // Index value of artwork
  
  function artworkSelected(index) {
    setSelectedArtwork(index);
  }

  const variants = {
    initial: {
      opacity: 0
    },
    display: {
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        duration: 1,
      }
    }
  };

  return (
    <>
      <motion.div 
        variants={variants}
        initial="initial"
        whileInView='display'
        className="artview-container"
      >
        <Link to={'/'} style={{color: 'white', position: 'fixed', left: 10, top: 10, fontFamily: 'against', zIndex: 20}}>&lt; BACK TO PORTOFLIO</Link>
        <section className="art-view">
          {currArtwork !== null ? (
            <Suspense fallback={<ContentLoader/>}>
              <Artwork curr={Number(currArtwork)} />
            </Suspense>
          ) : (
            <div
              style={{ height: "100%", width: "100%" }}
              className="info-container"
            >
              <p>SELECT AN ARTWORK TO VIEW IN 3D</p>
            </div>
          )}
          <section className="art-details">
            <div className="art-details-text">
              <p style={{ fontWeight: 800 }}>
                {currArtwork !== null ? (
                  artwork[currArtwork].name.toUpperCase()
                ) : (
                  <></>
                )}
              </p>
              <p style={{ fontWeight: 100 }}>
                {currArtwork !== null ? artwork[currArtwork].date : <></>}
              </p>
            </div>
            <section className="art-selection">
              <div className="art-image">
                {artwork.map((art, index) => (
                  <Suspense fallback={<ContentLoader/>} key={index}>
                    <img
                      loading="lazy"
                      src={art.image}
                      alt="3D Rendered Oil Painting"
                      height={200}
                      width={150}
                      onClick={() => artworkSelected(index)}
                    />
                  </Suspense>
                ))}
              </div>
            </section>
          </section>
        </section>
      </motion.div>
    </>
  );
}