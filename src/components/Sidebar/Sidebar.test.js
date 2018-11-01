import React from 'react';
import {shallow} from 'enzyme';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  it('should render', () => {
    const wrapper = shallow(<Sidebar/>);
    expect(wrapper.exists()).toBe(true);
  });
});
