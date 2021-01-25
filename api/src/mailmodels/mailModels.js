const confirmEmailHtml = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body
    style="
      font-family: 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande',
        sans-serif;
      padding: 2rem;
      background: #e8e8e8;
      font-size: 14px;
    "
  >
    <div
      style="
        margin: 20px auto;
        width: 400px;
        padding: 2rem;
        border-radius: 5px;
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
        background: white;
        color: black;
        ">
      <p>
        <img
          width="100px"
          src="https://alterra.com.ar/dubsnip/Logo-light-bkg.png"
          alt="dubsNip Store"
        />
      </p>
      <p>Hi %name%!</p>
      <p>
        Thanks for joining us! 
        <br/>
        Please confirm your email address by clicking on the button below
        <br/>
        <br/>
        <br/>
        <a
          style="
            background: #d55730;
            border: 1px solid white;
            border-radius: 5px;
            color: white;
            text-decoration: none;
            padding: 1rem 1.5rem;
            font-weight: bold;
          "
          href="%url%"
        >Confirm email</a>
        <br/>
        <br/>
        If this was not you, please disregard this email.
        </p>
        </div>
        </body>
        </html>
`;

const resetEmailHtml = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body
    style="
      font-family: 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande',
        sans-serif;
      padding: 2rem;
      background: #e8e8e8;
      font-size: 14px;
    "
  >
    <div
      style="
        margin: 20px auto;
        width: 400px;
        padding: 2rem;
        border-radius: 5px;
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
        background: white;
      "
    >
      <p>
        <img
          width="100px"
          src="https://alterra.com.ar/dubsnip/Logo-light-bkg.png"
          alt="dubsNip Store"
        />
      </p>
      <p>Hi %name%!</p>
      <p>
        Someone requested a password reset for your account.
        <br />
        If this was not you, please disregard this email.
        <br />
        If you'd like to continue click the link below.
        <br />
        <br />
        <br />
        <a
          style="
            background: #d55730;
            border: 1px solid white;
            border-radius: 5px;
            color: white;
            text-decoration: none;
            padding: 1rem 1.5rem;
            font-weight: bold;
          "
          href="%url%"
          >Reset my password</a
        >
      </p>
    </div>
  </body>
</html>
`;

const dispatchHtml = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body
    style="
      font-family: 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande',
        sans-serif;
      padding: 2rem;
      background: #e8e8e8;
      font-size: 14px;
    "
  >
    <div
      style="
        margin: 20px auto;
        width: 400px;
        padding: 2rem;
        border-radius: 5px;
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
        background: white;
      "
    >
      <p>Hi %name%, you're product is being sended to %address%!</p>
      <p>
        You buyed: 
        %listProducts%
        <br />
        <br />
        <br />
        <a
          style="
            background: #d55730;
            border: 1px solid white;
            border-radius: 5px;
            color: white;
            text-decoration: none;
            padding: 1rem 1.5rem;
            font-weight: bold;
          "
          href="%url%"
          >See my ticket</a
        >
      </p>
    </div>
  </body>
</html>
`;

module.exports = {
  confirmEmailHtml,
  resetEmailHtml,
  dispatchHtml,
};
