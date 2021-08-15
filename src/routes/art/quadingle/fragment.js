export default `#version 300 es
precision lowp float;
uniform float u_time;
uniform vec2 u_translate;
uniform sampler2D state;
out vec4 fragmentColor;

void main() {
  // float m_0 = gl_FragCoord.x + u_translate.x;
  // float m_1 = gl_FragCoord.y + u_translate.y;
  // float t = m_0 / 1024.0;
  // // fragmentColor.r = fragmentColor.b = (m_0*m_0 + m_1*m_1) / 536.0;
  // fragmentColor.r = fragmentColor.b = t;

  
  float test = 1.0;
  float t = 0.0;
  if (test > 0.0) {
    t = 255.0;
  }
  fragmentColor.r = fragmentColor.b = t;


  // float m_0 = gl_FragCoord.x + u_translate.x;
  // float m_1 = gl_FragCoord.y + u_translate.y;
  // float t = m_0 / 1024.0;
  // // fragmentColor.r = fragmentColor.b = (m_0*m_0 + m_1*m_1) / 536.0;
  // fragmentColor.r = fragmentColor.b = t;
  // int test = int(texture2D(u_hilbert, gl_FragCoord.xy).r);
  // float test = texture2D(u_hilbert, gl_FragCoord.xy);
  // float t = 0.0;
  // if (test > 0.0) {
  //   t = 255.0;
  // }
  // fragmentColor.r = fragmentColor.b = t;
  // fragmentColor = texture2D(u_hilbert, gl_FragCoord.xy);
  // fragmentColor = vec4(2.0, 99.0, 233.0, 255.0);
}
`
