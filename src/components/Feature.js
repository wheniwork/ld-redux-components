import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FlagContext from '../utils/FlagContext';
import Config from '../config';

export class Feature extends Component {
  componentDidMount() {
    if (this.props.flags.isLDReady && this.props.onReady) {
      this.props.onReady();
    }
  }

  componentDidUpdate(prevProps) {
    if (
      !prevProps.flags.isLDReady &&
      this.props.flags.isLDReady &&
      this.props.onReady
    ) {
      this.props.onReady();
    }
  }

  shouldComponentUpdate(nextProps) {
    const { liveUpdate } = this.props;
    if (liveUpdate || nextProps.liveUpdate) {
      return true;
    }
    //either on initial load, or the first load
    if (!this.props.flags.isLDReady) {
      return true;
    }
    return false;
  }

  render() {
    const { children, flagId, variation, flags, waitForLD } = this.props;

    let variationMatch = false;
    if (Array.isArray(variation)) {
      variationMatch = variation.includes(flags[flagId]);
    } else if (['string', 'boolean', 'null'].includes(typeof variation)) {
      variationMatch = flags[flagId] === variation;
    }

    if (variation !== undefined && !variationMatch) {
      return null;
    } 
    if (waitForLD && !flags.isLDReady) {
      return null;
    }

    return (
      <FlagContext.Provider value={ flags[flagId] }>
        {children}
      </FlagContext.Provider>
    );
  }
}

Feature.propTypes = {
  children: PropTypes.node,
  flagId: PropTypes.string.isRequired,
  variation: PropTypes.any,
  flags: PropTypes.object.isRequired,
  onReady: PropTypes.func,
  waitForLD: PropTypes.bool,
  liveUpdate: PropTypes.bool,
};

Feature.defaultProps = {
  liveUpdate: true,
};

const mapStateToProps = state => ({
  flags: state[Config.settings.reduxKey],
});

export default connect(mapStateToProps)(Feature);
