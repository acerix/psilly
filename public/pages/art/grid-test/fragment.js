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
  
  // unit circle (0 = x² + y²)
  float radius_squared = m_0*m_0 + m_1*m_1;
  fragmentColor.r = fragmentColor.g = fragmentColor.b = radius_squared < 1.0 ? radius_squared : 1.0 / radius_squared;
  fragmentColor.r = 1.0;
}
`
