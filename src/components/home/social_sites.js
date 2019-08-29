import React from "react";
import Avatar from '@material-ui/core/Avatar';

const socials = [
  {
    href: "https://github.com/zemuldo",
    className: "github",
    icon_className: "fa fa-github"
  },
  {
    href: "https://gitlab.com/zemuldo",
    className: "github",
    icon_className: "fa fa-gitlab color-orange"
  },
  {
    href: "https://stackoverflow.com/users/story/6856820",
    className: "stackoverflow",
    icon_className: "fa fa-stack-overflow"
  },
  {
    href: "https://medium.com/@zemuldo",
    className: "medium",
    icon_className: "fa fa-medium color-green"
  },
  {
    href: "https://stackshare.io/zemuldo",
    className: "medium",
    icon_className: "fa fa-share-alt-square color-blue"
  },
  {
    href: "https://twitter.com/zemuldo",
    className: "twitter",
    icon_className: "fa fa-twitter color-6"
  },
  {
    href: "https://www.linkedin.com/in/zemuldo",
    className: "linkedin",
    icon_className: "fa fa-linkedin color-6"
  },
  {
    href: "https://app.pluralsight.com/profile/zemuldo",
    className: "facebook",
    icon_className: "fa fa-arrow-circle-right color-1"
  },
  {
    href: "https://web.facebook.com/zemuldo",
    className: "facebook",
    icon_className: "fa fa-facebook color-blue"
  },
  {
    href: "mailto:danstan@zemuldo.com",
    className: "facebook",
    icon_className: "fa fa-envelope-o color-gmail"
  }
];

export default () => {
  return (
    <div>
      <ul className="social-icon">
        <h3>Find me on</h3>
        <li>
          <a href="/blog">
            <img style={{ marginBottom: "-12%", width: "55%", height: "55%" }} alt="Remy Sharp" src="/static/images/blog2.png" />
          </a>
        </li>
        <li>
          <a href="https://dev.to/zemuldo" target="_blank">
            <img style={{ marginBottom: "-15%", width: "65%", height: "65%" }} alt="Remy Sharp" src="/static/images/dev.to.png" />
          </a>
        </li>
        
        {socials.map(s => {
          return (
            <li key={s.href}>
              <a href={s.href} target="_blank" className={s.className}>
                <i className={s.icon_className} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
