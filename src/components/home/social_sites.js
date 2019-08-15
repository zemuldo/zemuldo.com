import React from "react";

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
    icon_className: "fa fa-arrow-circle-right color-1"
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
