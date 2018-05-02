import React, { Component } from 'react';
import PropTypes from 'prop-types';

class VariantRenderer extends Component {
  render() {
    const { children, flagValue, variation, isDefault } = this.props;
    {
      if (
        (variation !== undefined && flagValue === variation) ||
        ([null, undefined].includes(flagValue) && isDefault)
      ) {
        return { children };
      }
    }
  }
}

VariantRender.propTypes = {
  children: PropTypes.node.isRequired,
  flagValue: PropTypes.any.isRequired,
  variation: PropTypes.any,
  isDefault: PropTypes.bool,
};

export default VariantRender;
