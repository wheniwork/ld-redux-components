import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlagContext from '../utils/FlagContext';

class Variant extends Component {
  render() {
    const { children, variation, isDefault } = this.props;
    return (
      <FlagContext.Consumer>
        {flagValue =>
          ((variation !== undefined && flagValue === variation) ||
            ([null, undefined].includes(flagValue) && isDefault)) &&
          children
        }
      </FlagContext.Consumer>
    );
  }
}

Variant.propTypes = {
  children: PropTypes.node.isRequired,
  variation: PropTypes.string,
  isDefault: PropTypes.bool,
};

export default Variant;
