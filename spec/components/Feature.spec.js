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

  it('will render children if variation prop is set to the flag value', () => {
    const feature = shallow(
      <Feature variation={ true }>
        <div id="match">Hello</div>
      </Feature>
    );
    expect(feature.find('#match').length).toBe(1);
  });

  it('will not render children if variation prop is set to the incorrect flag value', () => {
    const feature = shallow(
      <Feature variation={ false }>
        <div id="match">Hello</div>
      </Feature>
    );
    expect(feature.find('#match').length).toBe(0);
  });

  it('will render children if varation prop is an array and includes the flag value', () => {
    const feature = shallow(
      <Feature variation={ [true, 'test'] }>
        <div id="match">Hello</div>
      </Feature>
    );
    expect(feature.find('#match').length).toBe(1);
  });

  it('will not render children if varation prop is an array and does not include the flag value', () => {
    const feature = shallow(
      <Feature variation={ [false, 'test'] }>
        <div id="match">Hello</div>
      </Feature>
    );
    expect(feature.find('#match').length).toBe(0);
  });
});
