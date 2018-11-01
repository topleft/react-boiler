import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import SidebarLink from  '../SidebarLink';
import './styles.scss';
import InlineSVG from 'svg-inline-react';
import dashboardIcon from '../../static/icons/dashboard_icon.svg';
import conversationsIcon from '../../static/icons/conversations_icon.svg';
import filesboardIcon from '../../static/icons/files_board_icon.svg';
import eventsIcon from '../../static/icons/events_icon.svg';
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
        to: '/dashboard',
        label: 'Dashboard',
        icon: dashboardIcon,
      },
      {
        to: '/sessions',
        label: 'sessions',
        icon: sessionsIcon
      },
      {
        to: '/events',
        label: 'events',
        icon: eventsIcon
      },
      {
        to: '/files',
        label: 'Files',
        icon: filesboardIcon
      },
      {
        to: '/conversations',
        label: 'Conversations',
        icon: conversationsIcon
      },
      {
        to: '/Settings',
        label: 'Settings',
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
        {this.renderLinks()}
      </nav>
    );
  }
}

export default withRouter(Sidebar);
