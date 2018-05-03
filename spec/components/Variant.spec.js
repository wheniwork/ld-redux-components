import React from 'react';
import { shallow } from 'enzyme';
import Variant from '../../src/components/Variant';

describe('Variant', () => {
  // THIS CANNOT BE TESTED UNTIL https://github.com/airbnb/enzyme/pull/1513 is released
  it.skip('will render children when variation is set to correct value', () => {
    const wrapper = shallow(
      <Variant variation={ true }>
        <div>Hello</div>
      </Variant>
    );
    expect(wrapper.props('flagValue')).to.equal(true);
  });
});
