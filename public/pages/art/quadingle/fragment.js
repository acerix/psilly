export default `#version 300 es
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_translate;
uniform sampler2D a_curve;
out vec4 fragmentColor;

void main() {
  float m_0 = gl_FragCoord.x + u_translate.x;
  float m_1 = gl_FragCoord.y + u_translate.y;

  // fragmentColor.r = (m_0*m_0+m_1*m_1)/1024.0;

  // fragmentColor = texture(a_curve, gl_FragCoord.xy);

  vec2 tex = vec2(m_0, m_1);
  fragmentColor = texture(a_curve, tex);

  fragmentColor.g = 0.3;
  fragmentColor.r = (m_0*m_0+m_1*m_1)/1024.0;
}
`
