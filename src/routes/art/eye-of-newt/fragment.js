export default `#version 300 es
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_translate;
uniform vec2 u_scale;
out vec4 fragmentColor;

void main() {
  float x = ( gl_FragCoord.x + u_translate.x ) * u_scale.x;
  float y = ( gl_FragCoord.y + u_translate.y ) * u_scale.y;
  float x2 = x*x;
  float y2 = y*y;

  // lemniscate of bernoulli (0 = -2x² + x⁴ + 2y² + 2x²y² + y⁴)
  float z = -2.0*x2 + x2*x2 + 2.0*y2 + 2.0*x2*y2 + y2*y2;

  fragmentColor.r = mod(z + u_time / 43.0, 1.0);
  fragmentColor.g = z < 1.0 ? z : 1.0 / z;
  fragmentColor.b = mod(z - u_time / 73.0, 1.0);
}
`
