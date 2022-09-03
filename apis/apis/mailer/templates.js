module.exports = {
  resume: () => {
    return `
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
    <meta name="viewport" content="width=3Ddevice-width" />
    <meta http-equiv="Content-Type" content="text/html; charset=3DUTF-8" />
    <title>Welcome to Fyipe.</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        font-family: "Helvetica Neue", Helvetica, Helvetica, Arial, sans-serif;
        font-size: 100%;
        line-height: 1.6;
      }

      img {
        max-width: 100%;
      }

      body {
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: none;
        width: 100% !important;
        height: 100%;
      }

      a {
        color: #08a6f3;
      }

      .btn-primary,
      .btn-secondary {
        text-decoration: none;
        color: #fff;
        background-color: #348eda;
        padding: 10px 20px;
        font-weight: 700;
        margin: 20px 10px 20px 0;
        text-align: center;
        cursor: pointer;
        display: inline-block;
        border-radius: 25px;
      }

      .btn-secondary {
        background: #aaa;
      }

      .last {
        margin-bottom: 0;
      }

      .first {
        margin-top: 0;
      }

      table.body-wrap {
        width: 100%;
      }

      table.body-wrap .container {
        border: 1px solid #f0f0f0;
      }

      table.footer-wrap {
        width: 100%;
        clear: both !important;
      }

      .footer-wrap .container p {
        font-size: 12px;
        color: #666;
      }

      table.footer-wrap a {
        color: #999;
      }

      h1,
      h2,
      h3,
      h4 {
        font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande",
          sans-ser=if;
        line-height: 1.1;
        margin-bottom: 15px;
        color: #000;
        margin: 30px 0 30px;
        line-height: 1.2;
        font-weight: 200;
      }

      h1 {
        font-size: 36px;
      }

      h2 {
        font-size: 28px;
      }

      h3,
      h4 {
        font-size: 22px;
      }

      p,
      ul {
        margin-bottom: 10px;
        font-weight: 400;
        font-size: 14px;
      }

      ul li {
        margin-left: 5px;
        list-style-position: inside;
      }

      .container {
        display: block !important;
        max-width: 700px !important;
        margin: 0 auto !important;
        clear: both !important;
      }

      .content {
        padding: 20px;
        max-width: 700px;
        margin: 0 auto;
        display: block;
      }

      .content table {
        width: 100%;
      }

      .center {
        margin-left: auto;
        margin-right: auto;
        display: block;
      }

      .join-button {
        text-align: center;
        max-width: 200px;
        box-shadow: inset 0 -3px 7px 0 #29bbff;
        background-color: #2dabf9;
        border-radius: 2px;
        cursor: pointer;
        color: #fff;
        font-family: Arial;
        font-size: 18px;
        padding: 16px;
        text-decoration: none;
      }

      .logo-top {
        max-width: 30%;
      }

      .footer-info {
        margin: 0;
        color: #08a6f3;
      }
    </style>
    </head>

      <body bgcolor="#f6f6f6">
      <!-- body -->
      <table class="body-wrap">
        <tbody>
          <tr>
            <td></td>
            <td class="container" bgcolor="#FFFFFF">
              <!-- content -->
              <div class="content">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <div>
                          <h3>Hello, Please find the attached resume.</h3>
                        </div>

                        <div>
                          <h4>
                              For any other infomation about this resume, feel free to send an email to the address
                              attached at bottom.
                          </h4>
                        </div>

                        <div>
                          <h4>
                            Please note that the information included in this resume is private and
                            must be treated as such. You may not copy, share
                            or post this resume to any other source without my consent.
                          </h4>
                        </div>

                       <div>
                          <h4>
                            Thanks, Regards.
                          </h4>
                       </div>
                        <div>
                          <p>Danstan Onyango</p>
                          <p>
                            Email:
                            <span class="footer-info">danstan@zemuldo.com</span>
                          </p>
                          <p>
                            Site:
                            <span class="footer-info">
                              <a> www.zemuldo.com </a>
                            </span>
                          </p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /content -->
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <!-- /body -->
      </body>
    </html>
        `;
  }
};