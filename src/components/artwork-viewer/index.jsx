import { React, Suspense, useState } from "react";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion';
import { artwork, getPastelColor } from "../../constants/arrays";
import "./style.scss";
import Artwork from "./artwork";
import ContentLoader from "../../animations/content-loader";
import SpinningStar from "../../animations/spinning-star";

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
        <Link 
          to={'/'} 
          className="return-text"
        >
          &lt; BACK TO PORTOFLIO
        </Link>
        <section className="art-view">
          {currArtwork !== null ? (
          <div style={{
            height: '100%', 
            width: '100%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center'
          }}>
            <Suspense fallback={<ContentLoader/>}>  
              <Artwork curr={Number(currArtwork)} />  
            </Suspense>
          </div>
          ) : (
            <div
              style={{ height: "100%", width: "100%" }}
              className="info-container"
            >
              <p style={{display: 'flex'}}>SELECT AN ARTWORK TO VIEW IN 
                <motion.div 
                  style={{marginLeft: '10px'}}
                  animate={{
                    rotateY: 360,
                    rotateX: 360,
                    rotateZ: 360, 
                    transition:{
                      ease: 'easeInOut', 
                      duration: 5, 
                      repeat: Infinity, 
                      repeatType: 'linear'
                    }
                  }}>3D</motion.div>
              </p>
            </div>
          )}
          <section className="art-details">
            <div className="art-details-text">
              <p style={{ fontWeight: "bold" }}>
                {currArtwork !== null ? (
                  artwork[currArtwork].name.toUpperCase()
                ) : (
                  <></>
                )}
              </p>
              <div style={{display: 'flex', gap: '10px',justifyContent: 'center'}}>
              <p style={{ fontWeight: 100 }}>
                {currArtwork !== null ? artwork[currArtwork].size : <></>}
              </p>
              <span style={{ color: "rgba(255,255,255,0.8)" }}>✦</span>
              <p style={{ fontWeight: 100 }}>
                {currArtwork !== null ? artwork[currArtwork].date : <></>}
              </p>
              </div>
            </div>
            <section className="art-selection">
              <div className="art-image">
                {artwork.map((art, index) => (
                    <img
                      loading="lazy"
                      src={art.image}
                      alt="Image of an oil painting"
                      height={200}
                      width={150}
                      onClick={() => artworkSelected(index)}
                    />
                ))}
              </div>
            </section>
          </section>
        </section>
      </motion.div>
      {/* PAGE TRANSITION DIV */}
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "easeInOut" }}}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "easeInOut" }}}
        style={{ originX: 1 }}
        className='transition-screen'
      />
    </>
  );
}