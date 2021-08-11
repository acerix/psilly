export default `#version 300 es
precision lowp float;
uniform float u_time;
uniform vec2 u_translate;
// uniform vec2 u_scale;
out vec4 fragmentColor;

void main() {
  float m_0 = gl_FragCoord.x + u_translate.x;
  float m_1 = gl_FragCoord.y + u_translate.y;
  float t = m_0 / 1024.0;
  // fragmentColor.r = fragmentColor.b = (m_0*m_0 + m_1*m_1) / 536.0;
  fragmentColor.r = fragmentColor.b = t;
}
`
