import React from 'react';
import { shallow } from 'enzyme';
import { Feature } from '../../src/components/Feature';

Feature.defaultProps = {
  flagId: 'testFlag',
  flags: { testFlag: true },
};

describe('Feature', () => {
  it('will render children when variation is not set', () => {
    const feature = shallow(
      <Feature>
        <div id="match">Hello</div>
      </Feature>
    );
    expect(feature.find('#match').length).toBe(1);
  });

  it('will render children if variation prop is set to the correct value', () => {
    const feature = shallow(
      <Feature variation={ true }>
        <div id="match">Hello</div>
      </Feature>
    );
    expect(feature.find('#match').length).toBe(1);
  });

  it('will not render children if variation prop is set to the incorrect value', () => {
    const feature = shallow(
      <Feature variation={ false }>
        <div id="match">Hello</div>
      </Feature>
    );
    expect(feature.find('#match').length).toBe(0);
  });
});
