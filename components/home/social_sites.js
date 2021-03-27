import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import MouseOverPopover from '../pop_overs';
import CustomLink from '../link';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    fontSize: '12px',
    backgroundColor: theme.palette.common.black,
  },
}));


function BootstrapTooltip(props) {
  const classes = useStylesBootstrap();

  return <Tooltip placement="bottom-start" arrow classes={classes} {...props} />;
}

const socials = [
  {
    href: 'https://www.linkedin.com/in/zemuldo',
    className: 'linkedin',
    icon_className: 'fa fa-linkedin color-6',
    hoverText: 'LinkedIn',
    color: '#08a6f3'
  },
  {
    href: 'https://github.com/zemuldo',
    className: 'github',
    icon_className: 'fa fa-github',
    hoverText: 'Github',
    color: 'white'
  },
  {
    href: 'https://twitter.com/zemuldo',
    className: 'twitter',
    icon_className: 'fa fa-twitter color-6',
    hoverText: 'Twitter',
    color: '#08a6f3'
  },
  {
    href: 'https://gitlab.com/zemuldo',
    className: 'github',
    icon_className: 'fa fa-gitlab color-orange',
    hoverText: 'GitLab',
    color: 'orange'
  },
  {
    href: 'https://stackoverflow.com/users/story/6856820',
    className: 'stackoverflow',
    icon_className: 'fa fa-stack-overflow',
    hoverText: 'StackOverflow',
    color: 'orange'
  },
  {
    href: 'https://medium.com/@zemuldo',
    className: 'medium',
    icon_className: 'fa fa-medium color-green',
    hoverText: 'Medium',
    color: 'green'
  },
  {
    href: 'https://stackshare.io/zemuldo',
    className: 'medium',
    icon_className: 'fa fa-share-alt-square color-blue',
    hoverText: 'StackShare',
    color: 'blue'
  },
  {
    href: 'https://app.pluralsight.com/profile/zemuldo',
    className: 'facebook',
    icon_className: 'fa fa-arrow-circle-right color-1',
    hoverText: 'PluralSight',
    color: '#f306a0'
  },
  {
    href: 'https://web.facebook.com/zemuldo',
    className: 'facebook',
    icon_className: 'fa fa-facebook color-blue',
    hoverText: 'FaceBook',
    color: 'blue'
  },
  {
    href: 'https://www.instagram.com/zemuldo',
    className: 'instagram',
    icon_className: 'fa fa-instagram color-instagram',
    hoverText: 'Instagram',
    color: 'blue'
  }
];

export default function SocialSites() {
  return (
    <div style={{ marginTop: '-20px' }}>
      <ul className="social-icon">
        <h3 className='color-1'>
          Find me on
        </h3>
        <div className='social-icon-wrapper'>
          <BootstrapTooltip title="My Blog">
            <li>
              <CustomLink href="/blog">
                <img style={{ marginBottom: '-12%', width: '55%', height: '55%', borderRadius: '50%' }} alt="Zemuldo Blog" src="/images/blog.png" />
              </CustomLink>
            </li>
          </BootstrapTooltip>
          {socials.map(s => {
            return (
              <BootstrapTooltip key={s.href} title={s.hoverText}>
                <li>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className={s.className}>
                    <i className={s.icon_className} />
                  </a>
                </li>
              </BootstrapTooltip>

            );
          })}
          <BootstrapTooltip title="Dev.To">
            <li>
              <a href="https://dev.to/zemuldo" target="_blank" rel="noopener noreferrer">
                <img style={{ marginBottom: '-15%', width: '65%', height: '65%' }} alt="Danstan Onyango on DEV" src="/images/dev.to.png" />
              </a>
            </li>
          </BootstrapTooltip>
        </div>
      </ul>
    </div>
  );
}
