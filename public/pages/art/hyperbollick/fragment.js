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

  // hyperbola (xy = 1)
  float z = x * y - 1.0;

  fragmentColor.r = mod(z - u_time / 96911.0 * 94111.0, 1.0);
  fragmentColor.g = z < 1.0 ? z : 1.0 / z;
  fragmentColor.b = mod(z - u_time / 96931.0 * 94111.0, 1.0);
}
`
