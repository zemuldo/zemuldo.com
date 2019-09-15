import React from 'react';

export default function JourneyItem() {
  return (
    <div id="item-6919178" className="story-item project github" data-order-by="20190809-000-0006919178">
      <header>
        <span className="story-item-type">Open source</span>
        <div className="icon-settings-off hover edit-item">
          <ul className="dropdown edit-item-menu">
            <li className="item-edit-button"><a href="/users/story/edit/6856820/item/6919178#item-6919178" className="js-loader" title="Edit">Edit</a></li>
            <li className="item-delete-button">
              <form method="POST" action="/users/story/edit/6856820/delete/submit">
                <input type="hidden" name="itemId" defaultValue={6919178} />
                <input type="hidden" name="fkey" defaultValue="476ecdd418b4f73ba6dcdef68d13d7035d2217d1261075e737e4d9b8b49b8159" />
                <input type="submit" className="dno" id="submit-delete-6919178" />
                <label htmlFor="submit-delete-6919178">Delete</label>
              </form>
            </li>
          </ul>
        </div>
        <span className="story-item-date">
         Aug 2017 → Current
          <span>(2 years)</span>
        </span>
      </header>
      <div className="story-item-content with-description">
        <div className="img logo" />
        <div className="story-item-text">
          <div className="story-item-title">
            <a href="https://github.com/zemuldo/iso_8583" rel="nofollow">zemuldo/iso_8583</a>
          </div>
          <div className="-commits _last">Last commit on Jul 10, 19</div>
          <div className="-commits">
            <span>267 Commits / </span>
            <span className="-additions">41,318 ++ </span>
            <span>/</span>
            <span className="-deletions">17,620 --</span>
          </div>
          <div className="story-item-paragraph">
            <div className="description">
              <input className="dno description-expander" id="item-6919178-collapsible-description" type="checkbox" />
              <span className="description-content-full">
                <p>:credit_card::moneybag: JavaScript library for iso 8583
                 messaging. Handles message validation &amp; conversion between
                 interfaces using iso 8583 standard. Contributors are welcome.
                </p>
              </span>
              <span className="description-content-truncated">
                <p>:credit_card::moneybag: JavaScript library for iso 8583
                 messaging. Handles message validation &amp; conversion between
                 interfaces using iso 8583 standard. Contributors are welcome.
                </p>
              </span>
              <label className="description-expander-label" htmlFor="item-6919178-collapsible-description" data-less="Less" data-more="Read more" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
    
}