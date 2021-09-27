import 'core-js/stable'
import 'regenerator-runtime/runtime'
import BézierCurve, { Point } from '../bézier-curve'

export interface ColorSpaceProps {
  path?: BézierCurve;
}

class ColorSpace {
  points: Point[] = []
  constructor(points: Point[]) {
    this.points = points
  }
}

export default ColorSpace
