"use client";
import React from "react";
import Image from "next/image";
import "./style.scss";
import ReactCardFlip from "react-card-flip";
import { ParallaxLayer } from "@react-spring/parallax";
export default function ProjectOption({
  title,
  description,
  techStack,
  dependencies,
  demoLink,
  image,
  colorBackground,
  side,
}) {
  const [currCardSide, setCurrCardSide] = React.useState("front");
  const [turnCard, setTurnCard] = React.useState(false);
  const isEven = side === "even";
  const flipCard = () => {
    setCurrCardSide(currCardSide === "front" ? "back" : "front");
    setTurnCard(!turnCard);
  };

  return (
    <section
      className="option-container"
      style={{ flexDirection: isEven ? "row" : "row-reverse" }}
    >
      <section className="left-side">
        <Image
          src={image}
          alt="project image"
          fill={true}
          loading="lazy"
          style={{ objectFit: "cover" }}
        />
      </section>
      <ReactCardFlip
        flipDirection="horizontal"
        containerClassName="right-side"
        isFlipped={currCardSide === "front" ? false : true}
      >
        <section
          className="frontside"
          key={"front"}
          style={{ backgroundColor:colorBackground }}
        >
          
            <div className="info-container">
              <h2>{title.toUpperCase()}</h2>
            
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <button className="extra-details-btn" onClick={() => flipCard()}>
                <span style={{ color: "red" }}>+</span> more details
              </button>
              <a target="#" href={demoLink}>
                <span style={{ color: "skyblue" }}>://</span>website
              </a>
            </div>
     </div>
        </section>
        <section
          className="backside"
          key={"back"}
          style={{ backgroundColor:colorBackground }}
        >
          <div className="extra-info-container">
            <>
              <p className="container-title">Languages</p>
              <div className="techstack-logo-container">{techStack}</div>
            </>
            <>
              <p className="container-title">Primary Libraries</p>
              <div className="deps-logo-container">{dependencies}</div>
            </>
            <p className="description-container">{description}</p>
          
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <button className="extra-details-btn" onClick={() => flipCard()}>
              <span style={{ color: "red" }}>&lt;-</span> return
            </button>
            <a target="#" href={demoLink}>
              <span style={{ color: "skyblue" }}>://</span>website
            </a>
          </div>
          </div>
        </section>
      </ReactCardFlip>
    </section>
  );
}