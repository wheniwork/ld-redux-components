import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlagContext from '../utils/FlagContext';

class Variant extends Component {
  render() {
    const { variation, isDefault } = this.props;
    return (
      <FlagContext.Consumer>
        {flagValue => (
          <VariantRenderer { ...props } { ...this.props } flagValue={ flagValue } />
        )}
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
