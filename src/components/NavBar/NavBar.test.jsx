import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import {shallow, render} from 'enzyme';
import NavBar from './NavBar';

describe('NavBar', () => {
  it('should render', () => {
    const wrapper = shallow(<NavBar links={[]}/>);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render children', () => {
    const wrapper = render(
      <MemoryRouter>
        <NavBar links={[{to: '/', label: 'Test'}]}/>
      </MemoryRouter>
    );

    expect(wrapper.text()).toBe('Test');
  });
});

