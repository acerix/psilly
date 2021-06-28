export default `precision lowp float;
uniform float u_random;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
  gl_FragColor.r = rand(vec2(gl_FragCoord.x + u_random, gl_FragCoord.y + u_random));
  gl_FragColor.g = rand(vec2(gl_FragCoord.x, gl_FragCoord.y + u_random));
  gl_FragColor.b = rand(vec2(gl_FragCoord.x + u_random, gl_FragCoord.y));
}`
