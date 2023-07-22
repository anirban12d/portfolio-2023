/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { Player } from "@lottiefiles/react-lottie-player";

// card 1

function WebOptimization() {
  return (
    <>
      <Player
        autoplay={true}
        loop={true}
        speed={1.0}
        src="/animations/websiteOptimization.json"
        style={{ height: "100%", width: "100%" }}
      ></Player>
    </>
  );
}

// Card 2

function UserCentric() {
  return (
    <>
      <Player
        autoplay={true}
        loop={true}
        speed={1.0}
        src="/animations/UserCentricDesign.json"
        style={{ height: "100%", width: "100%" }}
      ></Player>
    </>
  );
}

// Card 3

function GoalOriented() {
  return (
    <>
      <Player
        autoplay={true}
        loop={true}
        speed={1.0}
        src="/animations/goalOriented.json"
        style={{ height: "100%", width: "100%" }}
      ></Player>
    </>
  );
}

// Card 4

function Personalized() {
  return (
    <>
      <Player
        autoplay={true}
        loop={true}
        speed={1.0}
        src="/animations/personalizedSolutions.json"
        style={{ height: "100%", width: "100%" }}
      ></Player>
    </>
  );
}

// Card 5

function QualityTesting() {
  return (
    <>
      <Player
        autoplay={true}
        loop={true}
        speed={1.0}
        src="/animations/qualityTesting.json"
        style={{ height: "100%", width: "100%" }}
      ></Player>
    </>
  );
}

// Card 6

function Support() {
  return (
    <>
      <Player
        autoplay={true}
        loop={true}
        speed={1.0}
        src="/animations/support.json"
        style={{ height: "100%", width: "100%" }}
      ></Player>
    </>
  );
}

// Card 7

function SEO() {
  return (
    <>
      <Player
        autoplay={true}
        loop={true}
        speed={1.0}
        src="/animations/seo.json"
        style={{ height: "100%", width: "100%" }}
      ></Player>
    </>
  );
}

// Card 8

function Collaborative() {
  return (
    <>
      <Player
        autoplay={true}
        loop={true}
        speed={1.0}
        src="/animations/collaboration.json"
        style={{ height: "100%", width: "100%" }}
      ></Player>
    </>
  );
}

// Convert React component to Qwik component
export const QWebOptimization = qwikify$(WebOptimization, {
  eagerness: "load",
});
export const QUserCentric = qwikify$(UserCentric, { eagerness: "load" });
export const QGoalOriented = qwikify$(GoalOriented, { eagerness: "load" });
export const QPersonalized = qwikify$(Personalized, { eagerness: "load" });
export const QQualityTesting = qwikify$(QualityTesting, { eagerness: "load" });
export const QSupport = qwikify$(Support, { eagerness: "load" });
export const QSEO = qwikify$(SEO, { eagerness: "load" });
export const QCollaborative = qwikify$(Collaborative, { eagerness: "load" });
