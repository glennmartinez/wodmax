import React, { PureComponent, PropTypes } from 'react';
import { Link } from 'react-router';
import Nav, {
  AkContainerItem,
  AkContainerTitle,
  AkCreateDrawer,
  AkSearchDrawer,
} from '@atlaskit/navigation';

import DashboardIcon from '@atlaskit/icon/glyph/dashboard';
import PullRequestsIcon from '@atlaskit/icon/glyph/bitbucket/pullrequests';
import GearIcon from '@atlaskit/icon/glyph/settings';
import SearchIcon from '@atlaskit/icon/glyph/search';
import CreateIcon from '@atlaskit/icon/glyph/add';

// import CreateDrawer from '../components/CreateDrawer';
// import SearchDrawer from '../components/SearchDrawer';
// import HelpDropdownMenu from '../components/HelpDropdownMenu';
// import AccountDropdownMenu from '../components/AccountDropdownMenu';

import AtlassianIcon from '@atlaskit/icon/glyph/atlassian';
import ArrowleftIcon from '@atlaskit/icon/glyph/arrowleft';

// import nucleusImage from '../../public/nucleus.png';
// import image from './logo.svg';
import graduationImage from './graduates.png';

export default class StarterNavigation extends PureComponent {
  state = {
    navLinks: [
      ['/', 'Home', DashboardIcon],
      ['/wods', 'New Tutorials', PullRequestsIcon],
      ['/lifts', 'Top Rated', GearIcon],
    ]
  };

  static contextTypes = {
    navOpenState: PropTypes.object,
    router: PropTypes.object,
  };

  openDrawer = (openDrawer) => {
    this.setState({ openDrawer });
  };

  shouldComponentUpdate(nextProps, nextContext) {
    return true;
  };

  render() {
    const backIcon = <ArrowleftIcon label="Back icon" size="medium" />;
    const globalPrimaryIcon = <AtlassianIcon label="Atlassian icon" size="medium" />;

    return (
      <Nav
        isOpen={this.context.navOpenState.isOpen}
        width={this.context.navOpenState.width}
        onResize={this.props.onNavResize}
        containerHeaderComponent={() => (
          <AkContainerTitle
            href="#foo"
            icon={
              <img alt="nucleus" src={graduationImage} />
            }
            text="Conf Academy"
          />
        )}
        globalPrimaryIcon={globalPrimaryIcon}
        globalPrimaryItemHref="/"
        globalSearchIcon={<SearchIcon label="Search icon" />}
        hasBlanket
  
         
        globalCreateIcon={<CreateIcon label="Create icon" />}
        
        onSearchDrawerOpen={() => this.openDrawer('search')}
        onCreateDrawerOpen={() => this.openDrawer('create')}
      >
        {
          this.state.navLinks.map(link => {
            const [url, title, Icon] = link;
            return (
              <Link key={url} to={url}>
                <AkContainerItem
                  icon={<Icon label={title} />}
                  text={title}
                  isSelected={this.context.router.isActive(url, true)}
                />
              </Link>
            );
          }, this)
        }
      </Nav>
    );
  }
}
