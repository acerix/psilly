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

  // lemniscate of bernoulli (0 = -2x² + x⁴ + 2y² + 2x²y² + y⁴)
  float z = -2.0*m_0*m_0 + m_0*m_0*m_0*m_0 + 2.0*m_1*m_1 + 2.0*m_0*m_0*m_1*m_1 + m_1*m_1*m_1*m_1;

  fragmentColor.g = z < 1.0 ? z : 1.0 / z;
  fragmentColor.r = mod(z + u_time * 0.007, 1.0);
  fragmentColor.b = mod(z - u_time * 0.011, 1.0);
}
`
