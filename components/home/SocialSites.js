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
            <svg style={{ marginBottom: '-6%', width: '40%', height: '40%', color: '#f306a0' }} alt="Zemuldo Blog" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="blog" className="svg-inline--fa fa-blog fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M172.2 226.8c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 22 18.2 6.8 31.3 24.4 31.3 45 0 26.5-21.5 48-48 48s-48-21.5-48-48V120c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v248c0 89.5 82.1 160.2 175 140.7 54.4-11.4 98.3-55.4 109.7-109.7 17.4-82.9-37-157.2-112.5-172.2zM209 0c-9.2-.5-17 6.8-17 16v31.6c0 8.5 6.6 15.5 15 15.9 129.4 7 233.4 112 240.9 241.5.5 8.4 7.5 15 15.9 15h32.1c9.2 0 16.5-7.8 16-17C503.4 139.8 372.2 8.6 209 0zm.3 96c-9.3-.7-17.3 6.7-17.3 16.1v32.1c0 8.4 6.5 15.3 14.8 15.9 76.8 6.3 138 68.2 144.9 145.2.8 8.3 7.6 14.7 15.9 14.7h32.2c9.3 0 16.8-8 16.1-17.3-8.4-110.1-96.5-198.2-206.6-206.7z"></path></svg>
          </SocialSite>

          {socials.map(s => <SocialSite themeType={theme.palette.type} s={s} key={s.href} />)}

          <SocialSite themeType={theme.palette.type} s={{ href: 'https://dev.to/zemuldo', hoverText: 'Dev.To' }}>
            <svg style={{ marginBottom: '-8%', width: '50%', height: '50%', color: theme.palette.text.primary }} alt="Danstan Onyango on DEV" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="dev" className="svg-inline--fa fa-dev fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z"></path></svg>
          </SocialSite>
          <SocialSite themeType={theme.palette.type} s={{ href: 'https://lichess.org/@/zemuldo', hoverText: 'Chess' }}>
            <svg style={{ marginBottom: '-7%', width: '50%', height: '50%', color: theme.palette.text.primary }} alt="Danstan Onyango on DEV" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chess" className="svg-inline--fa fa-chess fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M74 208H64a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h15.94A535.78 535.78 0 0 1 64 384h128a535.78 535.78 0 0 1-15.94-128H192a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16h-10l33.89-90.38a16 16 0 0 0-15-21.62H144V64h24a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8h-24V8a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v24H88a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h24v32H55.09a16 16 0 0 0-15 21.62zm173.16 251.58L224 448v-16a16 16 0 0 0-16-16H48a16 16 0 0 0-16 16v16L8.85 459.58A16 16 0 0 0 0 473.89V496a16 16 0 0 0 16 16h224a16 16 0 0 0 16-16v-22.11a16 16 0 0 0-8.84-14.31zm92.77-157.78l-3.29 82.2h126.72l-3.29-82.21 24.6-20.79A32 32 0 0 0 496 256.54V198a6 6 0 0 0-6-6h-26.38a6 6 0 0 0-6 6v26h-24.71v-26a6 6 0 0 0-6-6H373.1a6 6 0 0 0-6 6v26h-24.71v-26a6 6 0 0 0-6-6H310a6 6 0 0 0-6 6v58.6a32 32 0 0 0 11.36 24.4zM384 304a16 16 0 0 1 32 0v32h-32zm119.16 155.58L480 448v-16a16 16 0 0 0-16-16H336a16 16 0 0 0-16 16v16l-23.15 11.58a16 16 0 0 0-8.85 14.31V496a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-22.11a16 16 0 0 0-8.84-14.31z"></path></svg>
          </SocialSite>

        </div>
      </ul>
    </div>
  );
}

export default SocialSites;