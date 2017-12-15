const React = require("react");
const { Component } = React;
const invariant = require("invariant");

class Uniform extends Component {
  render () {
    invariant(
      false,
      "GL.Uniform elements are for GL.Node configuration only and should not be rendered"
    );
  }
}

Uniform.isGLUniform = true;

Uniform.displayName = "GL.Uniform";


module.exports = Uniform;
