import React, { Suspense } from "react";
import './style.scss';
import NavOptions from "../navigation";
import ScrollArrow from "../../animations/scroll-arrow";
import SpinningStar from "../../animations/spinning-star";

export default function Home() {
  return (
    <Suspense fallback={null}>
      <main>
        <section className="intro">
          <h1>OCEAN</h1>
          <span>
            <SpinningStar text={'✦'}/>
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
