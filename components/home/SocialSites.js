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

        </div>
      </ul>
    </div>
  );
}

export default SocialSites;