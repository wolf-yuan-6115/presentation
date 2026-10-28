import Reveal from "reveal.js";
import Highlight from "reveal.js/plugin/highlight";
import Markdown from "reveal.js/plugin/markdown";
import Notes from "reveal.js/plugin/notes";

const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
const deck = new Reveal({
  plugins: [Markdown, Highlight, Notes],
  hash: true,
  width: 1100,
  height: 700,
  margin: 0.08,
  center: false,
  transition: reducedMotion ? "none" : "slide",
  autoAnimate: !reducedMotion,
  autoAnimateDuration: 0.6,
  autoAnimateEasing: "ease-out",
  pdfSeparateFragments: false,
  slideNumber: "c/t",
  highlight: { highlightOnLoad: true },
});
await deck.initialize();
