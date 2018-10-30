import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import SidebarLink from  '../SidebarLink';
import './styles.scss';
import InlineSVG from 'svg-inline-react';
import dashboardIcon from '../../static/icons/dashboard_icon.svg';
import conversationsIcon from '../../static/icons/conversations_icon.svg';
import filesboardIcon from '../../static/icons/files_board_icon.svg';
import meetingsIcon from '../../static/icons/meetings_icon.svg';
import sessionsIcon from '../../static/icons/sessions_icon.svg';
import settingsIcon from '../../static/icons/settings_icon.svg';

class Sidebar extends React.Component {
  propTypes = {};
  state = {};

  constructor() {
    super();
  }

  get links() {
    return [
      {
        to: '/wow',
        label: 'Wow',
        icon: dashboardIcon,
      },
      {
        to: '/home',
        label: 'Home',
        icon: meetingsIcon
      },
      {
        to: '/home',
        label: 'Home',
        icon: sessionsIcon
      },
      {
        to: '/home',
        label: 'Home',
        icon: filesboardIcon
      },
      {
        to: '/home',
        label: 'Home',
        icon: conversationsIcon
      },
      {
        to: '/home',
        label: 'Home',
        icon: settingsIcon
      },
    ];
  }

  renderLinks() {
    return this.links.map((link, i) => {
      return <SidebarLink
        key={i}
        to={link.to}
        {...this.props}>
        <InlineSVG src={link.icon}/>
      </SidebarLink>;
    });
  }

  render() {
    console.log(this.props)
    return (
      <nav className='sidebar'>
        <div className='sidebar--icon-container'>
          {this.renderLinks()}
        </div>
      </nav>
    );
  }
}

export default withRouter(Sidebar);
