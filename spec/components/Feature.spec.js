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

  it('will not break if no children are provided', () => {
    shallow(
      <Feature variation={ true } />
    );
  });

  it('will call onReady when launch darkly server has connected', () => {
    const onReadySpy = jest.fn();
    const wrapper = shallow(
      <Feature onReady={ onReadySpy } flags={ { isLDReady: false } } />
    );
    expect(onReadySpy).toHaveBeenCalledTimes(0);
    wrapper.setProps({ flags: { isLDReady: true } });
    expect(onReadySpy).toHaveBeenCalledTimes(1);
  });

  it('will call onReady when launch darkly server is already connected (only once)', () => {
    const onReadySpy = jest.fn();
    shallow(
      <Feature onReady={ onReadySpy } flags={ { isLDReady: true } } />
    );
    expect(onReadySpy).toHaveBeenCalledTimes(1);
  });

  it('will not render until ld server connects when "waitForLD" prop is set to true', () => {
    const wrapper = shallow(
      <Feature waitForLD flags={ { isLDReady: false } } >
        <div id="match">Hello</div>
      </Feature>
    );
    expect(wrapper.find('#match').length).toBe(0);
    wrapper.setProps({ flags: { isLDReady: true } });
    expect(wrapper.find('#match').length).toBe(1);
  });
});
