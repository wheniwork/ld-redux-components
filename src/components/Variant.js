import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlagContext from '../utils/FlagContext';
import VariantRenderer from './VariantRenderer';

class Variant extends Component {
  render() {
    return (
      <FlagContext.Consumer>
        {flagValue => <VariantRenderer { ...this.props } flagValue={ flagValue } />}
      </FlagContext.Consumer>
    );
  }
}

Variant.propTypes = {
  children: PropTypes.node.isRequired,
  variation: PropTypes.any,
  isDefault: PropTypes.bool,
};

export default Variant;
