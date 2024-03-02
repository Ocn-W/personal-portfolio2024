import React, { Suspense } from "react";
import './style.scss';
import NavOptions from "../navigation";
import ScrollArrow from "../../animations/scroll-arrow";

export default function Home() {
  return (
    <Suspense fallback={null}>
      <main>
        <section className="intro">
          <h1>OCEAN</h1>
          <span 
            style={{ 
              fontSize: "100px", 
              color: "rgba(255, 255, 255, 0.8)" 
            }}
          >
            ✦
          </span>
        </section>
        <section className="nav">
          <NavOptions/>
        </section>
        <div className="scroll-footer">
          <ScrollArrow />
        </div>
      </main>
    </Suspense>
  );
}
