import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FlagContext from '../utils/FlagContext';
import Config from '../config';

export class Feature extends Component {
  render() {
    const { children, flagId, variation, flags } = this.props;

    let variationMatch = false;
    if (Array.isArray(variation)) {
      variationMatch = variation.includes(flags[flagId]);
    } else if (['string', 'boolean', 'null'].includes(typeof variation)) {
      variationMatch = flags[flagId] === variation;
    }
    const renderNode =
      variation !== undefined ? variationMatch && children : children;

    return (
      <FlagContext.Provider value={ flags[flagId] }>
        {renderNode}
      </FlagContext.Provider>
    );
  }
}

Feature.propTypes = {
  children: PropTypes.node,
  flagId: PropTypes.string.isRequired,
  variation: PropTypes.any,
  flags: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  flags: state[Config.settings.reduxKey],
});

export default connect(mapStateToProps)(Feature);
