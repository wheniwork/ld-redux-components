import React, { Component } from 'react';
import PropTypes from 'prop-types';

class VariantRenderer extends Component {
  render() {
    const { children, flagValue, variation, isDefault } = this.props;
    const variationMatch = variation !== undefined && flagValue === variation;
    const isDefaultMatch = [null, undefined].includes(flagValue) && isDefault;
    {
      if (variationMatch || isDefaultMatch) {
        return children;
      } else {
        return null;
      }
    }
  }
}

VariantRenderer.propTypes = {
  children: PropTypes.node.isRequired,
  flagValue: PropTypes.any,
  variation: PropTypes.any,
  isDefault: PropTypes.bool,
};

export default VariantRenderer;
