import React from 'react';
import { whiteText, greenText, getYearsBetween } from '../helpers/utils';
import Typed from 'react-typed';

function type_message() {
  const waitAndBreak = '^700 <br/>';
  const start = '<span class="margin-left--10 color-blue font-size-14 !important">➜:~</span>';
  const myStack =
    start +
    whiteText('Skill Set?') +
    waitAndBreak +
    greenText([
      'Nodejs',
      'ReactJS',
      'Elixir',
      'Docker',
      'Python for Data',
      'Kubernetes',
      'GCP',
      'Heroku',
      'AWS.',
    ]).join(',^500 ');
  const experience = getYearsBetween(new Date('February 1 2016 00:00'));
  const yearsOfExperience = waitAndBreak + start + whiteText('Experience?') + waitAndBreak + greenText([experience]);
  const funGames = greenText(['Chess,' + ' Music and ' + 'Dancing']).join('^500, ');
  const currentStatus = waitAndBreak + start + whiteText('My Fun time?') + waitAndBreak + funGames;
  return [myStack + yearsOfExperience + currentStatus];
}

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <section id="home">
          <div className="home-section-background" data-stellar-background-ratio="0.6">
            <div className="display-table">
              <div className="display-table-cell">
                <div className="container">
                  <div className="row">
                    <div className="header-section">
                      <div className="header-frame">
                        <h1 className="color-6">Danstan Onyango</h1>
                        <h3>Software Engineer</h3>
                        <hr />
                        <h4 className="font-c-cn-m">
                          Currently being awesome at SafeBoda and formely at HackerBay Inc.
                        </h4>
                        <h3 className="color-orange">Nairobi, Kenya</h3>
                        <br />
                        <h4>Blog</h4>
                      </div>
                      <div id="me-pic-wrapper" className="img-frame border-color-green">
                        <img id="me-pic" src="/static/images/logo/black.jpg" alt="" />
                      </div>
                    </div>
                    <div className="col-md-12 text-center">
                      {/*Bash*/}
                      <div className="head-wrap">
                        <div className="text-editor-wrap">
                          <hr />
                          <div className="text-body">
                            <Typed
                              style={{ color: 'white' }}
                              strings={type_message()}
                              typeSpeed={120}
                            />
                          </div>
                        </div>
                      </div>
                      {/*End of Bash*/}
                    </div>
                  </div>
                </div>
                {/* Social Media Profiles */}
                <div>
                  <ul className="social-icon">
                    <h3>Find me on</h3>
                    <li>
                      <a href="https://github.com/zemuldo" target="_blank" className="github">
                        <i className="fa fa-github" />
                      </a>
                    </li>
                    <li>
                      <a href="https://gitlab.com/zemuldo" target="_blank" className="github">
                        <i className="fa fa-gitlab color-orange" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://stackoverflow.com/users/story/6856820"
                        target="_blank"
                        className="stackoverflow"
                      >
                        <i className="fa fa-stack-overflow" />
                      </a>
                    </li>
                    <li>
                      <a href="https://medium.com/@zemuldo" target="_blank" className="medium">
                        <i className="fa fa-medium color-green" />
                      </a>
                    </li>
                    <li>
                      <a href="https://stackshare.io/zemuldo" target="_blank" className="medium">
                        <i className="fa fa-medium color-green" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/zemuldo" target="_blank" className="twitter">
                        <i className="fa fa-twitter color-6" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/zemuldo"
                        target="_blank"
                        className="linkedin"
                      >
                        <i className="fa fa-linkedin color-6" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://app.pluralsight.com/profile/zemuldo"
                        target="_blank"
                        className="facebook"
                      >
                        <i className="fa fa-arrow-circle-right color-1" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://web.facebook.com/zemuldo"
                        target="_blank"
                        className="facebook"
                      >
                        <i className="fa fa-facebook color-blue" />
                      </a>
                    </li>
                    <li>
                      <a href="mailto:danstan@zemuldo.com" target="_blank" className="facebook">
                        <i className="fa fa-envelope-o color-gmail" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
