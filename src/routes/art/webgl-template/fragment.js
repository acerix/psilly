export default `
precision lowp float;
uniform float u_time;
uniform float u_radius;
uniform vec2 u_translate;
uniform vec2 u_scale;

void main() {
  float m_0 = ( gl_FragCoord.x + u_translate.x ) * u_scale.x;
  float m_1 = ( gl_FragCoord.y + u_translate.y ) * u_scale.y;
  float radiusSquared = pow(sin(u_time/60.0), 2.0);
  bool inside = m_0*m_0 + m_1*m_1 < radiusSquared;
  gl_FragColor.r = gl_FragColor.b = inside ? 0.5 : 0.0;
}
`
