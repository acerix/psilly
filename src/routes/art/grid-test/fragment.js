export default `#version 300 es
precision lowp float;
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

  // grid lines
  if (mod(m_0, 1.0) < u_scale.x) {
    fragmentColor.r = fragmentColor.g = 0.2;
  }
  if (mod(m_1, 1.0) < u_scale.y) {
    fragmentColor.b = 0.33;
  }
}
`
