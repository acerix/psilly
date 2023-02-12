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
  float m_0 = ( gl_FragCoord.x + u_translate.x ) * u_scale.x;
  float m_1 = ( gl_FragCoord.y + u_translate.y ) * u_scale.y;
  float z = m_0 / m_1;
  fragmentColor.r = fragmentColor.g = fragmentColor.b = z < 1.0 ? z : 1.0 / z;
}
`
