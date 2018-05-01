import React, { Component } from "react";
import PropTypes from "prop-types";
import FlagContext from "./FlagContext";

class Variant extends Component {
  render() {
    const { children, name, isDefault } = this.props;
    return (
      <FlagContext.Consumer>
        {flagValue =>
          (flagValue === name || (flagValue === null && isDefault)) && children
        }
      </FlagContext.Consumer>
    );
  }
}

Variant.propTypes = {
  children: PropTypes.node.isRequired,
  variation: PropTypes.string,
  isDefault: PropTypes.bool
};

export default Variant;
