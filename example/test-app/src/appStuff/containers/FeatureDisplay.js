import React, { Component, Fragment } from "react";
import Item from "./../components/item";
import { Feature, Variant } from "ld-redux-components";

export default class FeatureDisplay extends Component {
  render() {
    return (
      <Fragment>
        <Feature flagId="test-flag-id" variation={true}>
          <Item name="FLAG IS TRUE" icon="smile" color="green" />
        </Feature>
        <Feature flagId="test-flag-id" variation={false}>
          <Item name="FLAG IS FALSE" icon="frown" color="red" />
        </Feature>
        <Feature flagId="test-flag-id" variation={null}>
          <Item name="FLAG IS NULL" icon="meh" color="blue" />
        </Feature>
      </Fragment>
    );
  }
}
