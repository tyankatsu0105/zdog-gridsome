import * as Zdog from "zdog";

import { BRAND_COLOR_DARK_GREEN, BRAND_COLOR_GREEN } from "./const";

const element = '#canvas'

const illo = new Zdog.Illustration({
  element,
  dragRotate: true,
});

const base = new Zdog.Ellipse({
  addTo: illo,
  diameter: 100,
  quarters: 3,
  stroke: 20,
  color: BRAND_COLOR_DARK_GREEN,
  rotate: {
    y: Zdog.TAU/2
  }
})

new Zdog.Ellipse({
  addTo: base,
  diameter: 100,
  quarters: 1,
  stroke: 20,
  color: BRAND_COLOR_GREEN,
  translate: {
    z: -10
  }
})

new Zdog.Shape({
  addTo: base,
  path: [
    { x: -50 },
    { x: -30 },
  ],
  stroke: 20,
  color: BRAND_COLOR_GREEN,
  translate: {
    z: -10
  }
});

new Zdog.Shape({
  addTo: base,
  stroke: 20,
  color: BRAND_COLOR_GREEN,
});

export const animate = () => {
  // illo.rotate.y += isSpinning ? 0.03 : 0;
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}