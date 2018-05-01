import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FlagContext from "./FlagContext";
import Config from "../config";

class Feature extends Component {
  render() {
    const { children, flagId, variation, flags } = this.props;

    const renderNode =
      variation !== undefined
        ? flags[flagId] === variation && children
        : children;

    return (
      <FlagContext.Provider value={flags[flagId]}>
        {renderNode}
      </FlagContext.Provider>
    );
  }
}

Feature.propTypes = {
  children: PropTypes.node.isRequired,
  flagId: PropTypes.string.isRequired,
  variation: PropTypes.any,
  flags: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  flags: state[Config.settings.reduxKey]
});

export default connect(mapStateToProps)(Feature);
