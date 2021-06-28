import React from 'react';
import SocialSite from './SocialSite';
import { useTheme } from '@material-ui/styles';


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
    light: 'black',
    dark: 'white'
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
    color: '#F76C00'
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
    href: 'https://www.instagram.com/zemuldo',
    className: 'instagram',
    icon_className: 'fa fa-instagram color-instagram',
    hoverText: 'Instagram',
    color: 'C235A6'
  }
];

function SocialSites() {
  const theme = useTheme();
  return (
    <div style={{ marginTop: '-20px' }}>
      <ul className="social-icon">

        <h3 className='color-1'>
          Find me on
        </h3>

        <div className='social-icon-wrapper'>

          <SocialSite themeType={theme.palette.type} s={{ href: '/blog', hoverText: 'My Blog' }}>
            <img style={{ marginBottom: '-12%', width: '55%', height: '55%', borderRadius: '50%' }} alt="Zemuldo Blog" src="/images/blog.png" />
          </SocialSite>

          {socials.map(s => <SocialSite themeType={theme.palette.type} s={s} key={s.href} />)}

          <SocialSite themeType={theme.palette.type} s={{ href: 'https://dev.to/zemuldo', hoverText: 'Dev.To' }}>
            <img style={{ marginBottom: '-15%', width: '65%', height: '65%' }} alt="Danstan Onyango on DEV" src="/images/dev.to.png" />
          </SocialSite>
          <SocialSite themeType={theme.palette.type} s={{ href: 'https://lichess.org/@/zemuldo', hoverText: 'Chess' }}>
            <svg style={{ marginBottom: '-7%', width: '55%', height: '55%', color: theme.palette.text.primary }} alt="Danstan Onyango on DEV" src="/images/chess-solid.svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chess" className="svg-inline--fa fa-chess fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M74 208H64a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h15.94A535.78 535.78 0 0 1 64 384h128a535.78 535.78 0 0 1-15.94-128H192a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16h-10l33.89-90.38a16 16 0 0 0-15-21.62H144V64h24a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8h-24V8a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v24H88a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h24v32H55.09a16 16 0 0 0-15 21.62zm173.16 251.58L224 448v-16a16 16 0 0 0-16-16H48a16 16 0 0 0-16 16v16L8.85 459.58A16 16 0 0 0 0 473.89V496a16 16 0 0 0 16 16h224a16 16 0 0 0 16-16v-22.11a16 16 0 0 0-8.84-14.31zm92.77-157.78l-3.29 82.2h126.72l-3.29-82.21 24.6-20.79A32 32 0 0 0 496 256.54V198a6 6 0 0 0-6-6h-26.38a6 6 0 0 0-6 6v26h-24.71v-26a6 6 0 0 0-6-6H373.1a6 6 0 0 0-6 6v26h-24.71v-26a6 6 0 0 0-6-6H310a6 6 0 0 0-6 6v58.6a32 32 0 0 0 11.36 24.4zM384 304a16 16 0 0 1 32 0v32h-32zm119.16 155.58L480 448v-16a16 16 0 0 0-16-16H336a16 16 0 0 0-16 16v16l-23.15 11.58a16 16 0 0 0-8.85 14.31V496a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-22.11a16 16 0 0 0-8.84-14.31z"></path></svg>
          </SocialSite>

        </div>
      </ul>
    </div>
  );
}

export default SocialSites;