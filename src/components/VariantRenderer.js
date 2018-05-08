import React, { Component } from 'react';
import PropTypes from 'prop-types';

class VariantRenderer extends Component {
  render() {
    const { children, flagValue, variation, isDefault } = this.props;

    let variationMatch = false;
    if (Array.isArray(variation)) {
      variationMatch = variation.includes(flagValue);
    } else if (['string', 'boolean', 'null'].includes(typeof variation)) {
      variationMatch = flagValue === variation;
    }

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
