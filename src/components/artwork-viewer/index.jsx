import { React, Suspense, useState } from "react";
import { artwork } from "../../constants/arrays";
import "./style.scss";
import Artwork from "./artwork";

export default function ArtworkViewer() {
  const [currArtwork, setSelectedArtwork] = useState(null); // Index value of artwork

  function artworkSelected(index) {
    setSelectedArtwork(index);
  }

  return (
    <>
      <div className="artview-container">
        <section className="art-view">
          {currArtwork !== null ? (
            <Artwork curr={Number(currArtwork)} />
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
                  <Suspense fallback={null}>
                    <img
                      loading="lazy"
                      src={art.image}
                      alt="3D Rendered Oil Painting"
                      key={index}
                      fill={false}
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
      </div>
    </>
  );
}