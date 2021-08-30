export default `#version 300 es
precision lowp float;
uniform float u_time;
uniform vec2 u_translate;
uniform sampler2D a_curve;
out vec4 fragmentColor;

void main() {
  float m_0 = gl_FragCoord.x + u_translate.x;
  float m_1 = gl_FragCoord.y + u_translate.y;

  fragmentColor.r = ((m_0*m_0)+(m_1*m_1))/123456.7;

  // fragmentColor.r = texture(u_hilbert, gl_FragCoord.xy);

  // if (m_0 > 20.0 && m_1 > 10.0) {
  //   fragmentColor.r = 0.8;
  // }

  // fragmentColor.r = ((m_0*m_0)+(m_1*m_1))/123456.7;

}
`
