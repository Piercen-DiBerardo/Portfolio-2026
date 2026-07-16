"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Code2, Monitor, Smartphone } from "lucide-react";
import Image from "next/image";

<section id="axioma-scholar"></section>
const axiomaScreens = [
  {
    src: "/axioma-scholar/menu.png",
    alt: "Axioma Scholar main menu",
    label: "A clear starting point.",
    description:
    "Students can quickly choose how they want to learn, review, or continue practicing without navigating through a cluttered dashboard.",
  },
  {
    src: "/axioma-scholar/question.png",
    alt: "Axioma Scholar adaptive question interface",
    label: "Practice that responds to the student.",
    description:
    "The question experience combines adaptive difficulty, guided support, and immediate feedback to keep students challenged without overwhelming them.",
  },
  {
    src: "/axioma-scholar/stats.png",
    alt: "Axioma Scholar streak popup",
    label: "Progress worth coming back to.",
    description:
    "Streaks and session feedback reinforce consistency, helping students build stronger study habits over time.",
  },
];

<section id="healthcare"></section>
const myCareScreens = [
  { label: "Clinic search", icon: "⌖", title: "Find care nearby", body: "Location-aware results ranked by proximity and availability." },
  { label: "AI assistant", icon: "✦", title: "Ask in plain language", body: "Guided support for navigating services and physician availability." },
  { label: "Health alerts", icon: "!", title: "Stay informed", body: "Public-health, outbreak, recall, and emergency information in one place." },
];

<section id="auto-pricer"></section>
const myCareSlideVariants = {
  enter: (direction: 1 | -1) => ({
    x: direction === 1 ? 120 : -120,
    rotate: direction === 1 ? 5 : -5,
    opacity: 0,
    scale: 0.96,
  }),

  center: {
    x: 0,
    rotate: 0,
    opacity: 1,
    scale: 1,
  },

  exit: (direction: 1 | -1) => ({
    x: direction === 1 ? -120 : 120,
    rotate: direction === 1 ? -5 : 5,
    opacity: 0,
    scale: 0.96,
  }),
};

export function FeaturedProjects() {
  const [myCareIndex, setMyCareIndex] = useState(0);
  const [myCareDirection, setMyCareDirection] = useState<1 | -1>(1);
  const [trueCostView, setTrueCostView] = useState<"product" | "build">("product");

  const nextMyCare = () => {
    setMyCareDirection(1);

    setMyCareIndex(
      (current) => (current + 1) % myCareScreens.length
    );
  };

  const previousMyCare = () => {
    setMyCareDirection(-1);

    setMyCareIndex(
      (current) =>
        (current - 1 + myCareScreens.length) % myCareScreens.length
    );
  };

  return (
    <div className="featured-projects">
      <article className="axioma-feature" id="axioma-scholar">
        <div className="project-kicker">
          <span>01</span>
          <span>Flagship product</span>
        </div>

        <div className="axioma-intro">
          <div>
            <p className="project-eyebrow">Adaptive learning platform</p>
            <h3>Axioma Scholar</h3>
          </div>
          <p>
            A production math-learning platform built independently across product strategy, interface design,
            frontend, backend, data, deployment, accessibility, and adaptive learning logic.
          </p>
        </div>

        <div className="axioma-metrics" aria-label="Axioma Scholar project metrics">
          <div><strong>350K+</strong><span>questions managed</span></div>
          <div><strong>20+</strong><span>responsive pages</span></div>
          <div><strong>Full stack</strong><span>designed and built independently</span></div>
        </div>

        <div className="axioma-story">
          <aside className="axioma-story-copy">
            <span className="story-label">Scroll through the product</span>
            <h4>One platform, several connected learning systems.</h4>
            <p>
              Each screen highlights a different part of the student experience.
            </p>
            <a href="https://axiomascholar.com" target="_blank" rel="noreferrer" className="text-link">
              Visit Axioma Scholar <ArrowUpRight size={17} />
            </a>
          </aside>

          <div className="axioma-screens">
            {axiomaScreens.map((screen, index) => (
              <article className="axioma-screen" key={screen.src}>
                <div className="axioma-screen-frame">
                  <div className="browser-bar">
                    <i />
                    <i />
                    <i />
                  </div>

                  <div className="axioma-image-wrapper">
                    <Image
                      src={screen.src}
                      alt={screen.alt}
                      fill
                      sizes="(max-width: 900px) 100vw, 55vw"
                      className="axioma-image"
                      priority={index === 0}
                    />
                  </div>
                </div>

                <div className="axioma-screen-copy">
                  <span>0{index + 1}</span>

                  <div>
                    <h3>{screen.label}</h3>
                    <p>{screen.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </article>

      <article className="mycare-feature" id="healthcare">
        <div className="project-kicker light-kicker"><span>02</span><span>Cross-platform application</span></div>
        <div className="mycare-layout">
          <div className="mycare-copy">
            <p className="project-eyebrow">AI healthcare navigation</p>
            <h3>MyCare AI</h3>
            <p>
              A 13,000+ line Flutter application for finding healthcare services, public-health alerts,
              physician availability, and chatbot-guided support across Android, iOS, and web.
            </p>
            <div className="platform-list"><span><Smartphone size={16} /> iOS</span><span><Smartphone size={16} /> Android</span><span><Monitor size={16} /> Web</span></div>
            <div className="carousel-controls">
              <button onClick={previousMyCare} aria-label="Previous MyCare screen"><ArrowLeft size={19} /></button>
              <span>{String(myCareIndex + 1).padStart(2, "0")} / {String(myCareScreens.length).padStart(2, "0")}</span>
              <button onClick={nextMyCare} aria-label="Next MyCare screen"><ArrowRight size={19} /></button>
            </div>
          </div>

          <div className="device-stage" aria-live="polite">
            <div className="device-backdrop">
              <div className="desktop-window"><div /><div /><div /></div>
            </div>
            <div className="phone-frame">
              <div className="phone-notch" />
              <div className="phone-screen">
                <AnimatePresence
                  mode="wait"
                  initial={false}
                  custom={myCareDirection}
                >
                  <motion.div
                    key={myCareIndex}
                    custom={myCareDirection}
                    variants={myCareSlideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      duration: 0.22,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="phone-slide"
                  >
                    <span className="phone-icon">
                      {myCareScreens[myCareIndex].icon}
                    </span>

                    <small>{myCareScreens[myCareIndex].label}</small>

                    <h4>{myCareScreens[myCareIndex].title}</h4>

                    <p>{myCareScreens[myCareIndex].body}</p>

                    <div className="phone-card">
                      <span />
                      <span />
                      <span />
                    </div>

                    <button type="button" className="cursor-pointer" onClick={nextMyCare}>
                      {myCareIndex === myCareScreens.length - 1
                        ? "Start again"
                        : "Continue"}
                      <ArrowRight size={16} />
                    </button>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article className="truecost-feature" id="auto-pricer">
        <div className="project-kicker"><span>03</span><span>Data-driven web product</span></div>
        <div className="truecost-header">
          <div><p className="project-eyebrow">Canadian vehicle ownership calculator</p><h3>TrueCost Auto</h3></div>
          <p>A transparent cost engine that estimates what a vehicle will actually cost beyond its sticker price.</p>
        </div>

        <div className="view-toggle" role="group" aria-label="TrueCost project view">
          <button className={trueCostView === "product" ? "active" : ""} onClick={() => setTrueCostView("product")}>
            <Monitor size={16} /> Product view
          </button>
          <button className={trueCostView === "build" ? "active" : ""} onClick={() => setTrueCostView("build")}>
            <Code2 size={16} /> Behind the build
          </button>
        </div>

        <div className="truecost-panel">
          {trueCostView === "product" ? (
            <div className="truecost-image-frame">
              <div className="browser-bar">
                <i />
                <i />
                <i />
              </div>

              <div className="truecost-image-wrapper">
                <Image
                  src="/truecost/dashboard.png"
                  alt="TrueCost Auto vehicle ownership cost dashboard"
                  fill
                  sizes="(max-width: 900px) 100vw, 80vw"
                  className="truecost-image"
                />
              </div>
            </div>
          ) : (
            <div className="architecture-view">
              <div className="architecture-node source"><span>Market data</span><strong>Apify / AutoTrader</strong></div>
              <div className="architecture-arrow">→</div>
              <div className="architecture-node engine"><span>Calculation engine</span><strong>Taxes · Fuel · Insurance · Depreciation</strong></div>
              <div className="architecture-arrow">→</div>
              <div className="architecture-node result"><span>Transparent result</span><strong>Monthly and lifetime ownership cost</strong></div>
              <p>Next.js · TypeScript · Zod · Tailwind CSS · Provider-based data architecture</p>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
