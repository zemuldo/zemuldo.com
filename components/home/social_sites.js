import React from 'react';
import MouseOverPopover from '../pop_overs';
import CustomLink from '../link';

const socials = [
  {
    href: 'https://github.com/zemuldo',
    className: 'github',
    icon_className: 'fa fa-github',
    hoverText: 'Github',
    color: 'white'
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
    href: 'https://twitter.com/zemuldo',
    className: 'twitter',
    icon_className: 'fa fa-twitter color-6',
    hoverText: 'Twitter',
    color: '#08a6f3'
  },
  {
    href: 'https://www.linkedin.com/in/zemuldo',
    className: 'linkedin',
    icon_className: 'fa fa-linkedin color-6',
    hoverText: 'LinkedIn',
    color: '#08a6f3'
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
    href: 'mailto:danstan@zemuldo.com',
    className: 'facebook',
    icon_className: 'fa fa-envelope-o color-gmail',
    hoverText: 'E-Mail',
    color: '#D44638'
  }
];

export default function SocialSites () {
  return (
    <div>
      <ul className="social-icon">
        <h3 className='color-1'>
        Find me on
        </h3>
        <div style={{marginTop: '20px'}}>
          <MouseOverPopover color='orange' hoverText="Blog">
            <li>
              <CustomLink href="/blog">
                <img style={{ marginBottom: '-12%', width: '55%', height: '55%', borderRadius: '50%' }} alt="Zemuldo Blog" src="/static/images/blog.png" />
              </CustomLink>
            </li>
          </MouseOverPopover>
          <MouseOverPopover color='white' hoverText="Dev.TO">
            <li>
              <a href="https://dev.to/zemuldo" target="_blank" rel="noopener noreferrer">
                <img style={{ marginBottom: '-15%', width: '65%', height: '65%' }} alt="Danstan Onyango on DEV" src="/static/images/dev.to.png" />
              </a>
            </li>
          </MouseOverPopover>
          {socials.map(s => {
            return (
              <MouseOverPopover color={s.color} key={s.href} hoverText={s.hoverText}>
                <li>
                  <a href={s.href} target="_blank"  rel="noopener noreferrer"className={s.className}>
                    <i className={s.icon_className} />
                  </a>
                </li>
              </MouseOverPopover>
            );
          })}
        </div>
      </ul>
    </div>
  );
}
