export default `#version 300 es

#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

in vec2 vTextureCoord;
in vec3 vLightWeighting;
in vec4 myOutputColor;

uniform sampler2D uSampler;

void main(void) {
  vec4 textureColor = texture(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));
  // myOutputColor = vec4(textureColor.rgb * vLightWeighting, textureColor.a);
}

`
