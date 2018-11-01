import React from 'react';
import {shallow} from 'enzyme';
import SidebarLink from './SidebarLink';

describe('SidebarLink', () => {
  it('should render', () => {
    const wrapper = shallow(<SidebarLink/>);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render children', () => {
    const children = 'Test 123';
    const wrapper = shallow(<SidebarLink>{children}</SidebarLink>);
    const result = wrapper.find('.sidebar-link--icon').text();
    expect(result).toBe(children);
  });

  it('should render a nav link', () => {
    const wrapper = shallow(<SidebarLink/>);
    expect(wrapper.find('NavLink')).toHaveLength(1);
  });

  it('should render a nav link and apply the to property', () => {
    const path = '/the-place';
    const wrapper = shallow(<SidebarLink to={path}/>);
    const navLink = wrapper.find('NavLink');
    expect(navLink.props().to).toEqual(path);
  });
});
