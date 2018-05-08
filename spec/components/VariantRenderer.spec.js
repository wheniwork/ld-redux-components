import React from 'react';
import { shallow } from 'enzyme';
import VariantRenderer from '../../src/components/VariantRenderer';

describe('VariantRenderer', () => {
  it('will render children when variation prop matches flagValue prop', () => {
    const feature = shallow(
      <VariantRenderer flagValue={ true } variation={ true }>
        <div id="match">Hello</div>
      </VariantRenderer>
    );
    expect(feature.find('#match').length).toBe(1);
  });

  it('will not render children when variation prop does not match flagValue prop', () => {
    const feature = shallow(
      <VariantRenderer flagValue={ false } variation={ true }>
        <div id="match">Hello</div>
      </VariantRenderer>
    );
    expect(feature.find('#match').length).toBe(0);
  });

  it('will not render children if flagValue is undefined', () => {
    // For testing purposes, variation is set to undefined to ensure that
    // even if flagValue and variation are equal, nothing is rendered if
    // flagValue is equal to undefined
    const feature = shallow(
      <VariantRenderer flagValue={ undefined } variation={ undefined }>
        <div id="match">Hello</div>
      </VariantRenderer>
    );
    expect(feature.find('#match').length).toBe(0);
  });

  it('will render children if flagValue is undefined or null and isDefault prop is set', () => {
    const feature = shallow(
      <VariantRenderer flagValue={ undefined } isDefault>
        <div id="match">Hello</div>
      </VariantRenderer>
    );
    const feature2 = shallow(
      <VariantRenderer flagValue={ null } isDefault>
        <div id="match">Hello</div>
      </VariantRenderer>
    );
    expect(feature.find('#match').length).toBe(1);
    expect(feature2.find('#match').length).toBe(1);
  });

  it('will render children if varation prop is an array and includes the flag value', () => {
    const feature = shallow(
      <VariantRenderer flagValue={ true } variation={ ['test', true] }>
        <div id="match">Hello</div>
      </VariantRenderer>
    );
    expect(feature.find('#match').length).toBe(1);
  });

  it('will not ender children if varation prop is an array and does not include the flag value', () => {
    const feature = shallow(
      <VariantRenderer flagValue={ true } variation={ ['test', false] }>
        <div id="match">Hello</div>
      </VariantRenderer>
    );
    expect(feature.find('#match').length).toBe(0);
  });
});
