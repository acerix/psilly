import 'core-js/stable'
import 'regenerator-runtime/runtime'

// export type Color = Array<number> // [red, green, blue]
export type Color = Uint8Array // [red, green, blue]

type MutateColorFunction = (color: Color, iterationCount: number) => void

export interface ColorGeneratorProps {
  initialColor?: Color;
  mutate?: MutateColorFunction;
}

export const colorToCss = (color: Color): string => {
  return `rgb(${color.join(',')})`
}

const SIN_FACTOR = Math.PI / 60 // forgive me

function* ColorGenerator(props?: ColorGeneratorProps): Generator<Color> {
  const options = props ?? {}
  const color: Color = options.initialColor ?? new Uint8Array([128, 128, 128])
  const mutate = options.mutate ?? function(color: Color, iterationCount: number): void {
    color.fill( 128 + 127*Math.sin(SIN_FACTOR*iterationCount) )
  }
  for (let iterationCount = 0; true; iterationCount++) {
    yield color
    mutate(color, iterationCount)
  }
}

export default ColorGenerator
