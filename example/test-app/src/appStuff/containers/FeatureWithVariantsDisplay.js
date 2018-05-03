import React, { Component, Fragment } from 'react';
import Item from './../components/item';
import { Feature, Variant } from 'ld-redux-components';

export default class FeatureWithVariantsDisplay extends Component {
  render() {
    return (
      <Fragment>
        <Feature flagId="test-flag-id">
          <Variant name={ true }>
            <Item name="FLAG IS TRUE" icon="smile" color="green" />
          </Variant>
          <Variant name={ false }>
            <Item name="FLAG IS FALSE" icon="frown" color="red" />
          </Variant>
          <Variant isDefault>
            <Item name="FLAG IS NULL" icon="meh" color="blue" />
          </Variant>
        </Feature>
      </Fragment>
    );
  }
}
