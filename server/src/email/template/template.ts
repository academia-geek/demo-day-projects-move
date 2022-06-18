export const templateEmailValidation = (name: string, code: string) => {
    return `<!DOCTYPE html>

    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>Completed · Email</title>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <style>
          * {
            margin: 0;
          }
    
          body,
          table,
          td,
          p {
            font-family: "IBM Plex Sans", Verdana, Helvetica, sans-serif !important;
            text-align: left;
            color: #1b365d;
          }
    
          body {
            background: #f3f3f3;
          }
    
          .text-center {
            text-align: center;
          }
    
          h1 {
            padding: 0;
            color: #243062;
            font-size: 32px;
            font-weight: bold;
            font-family: "IBM Plex Sans", Verdana, Helvetica, sans-serif !important;
          }
    
          p {
            mso-line-height-rule: exactly;
            padding: 0;
            margin: 0;
            font-size: 16px;
            font-weight: normal;
            line-height: 20px;
            font-family: "IBM Plex Sans", Verdana, Helvetica, sans-serif !important;
          }
    
          small {
            font-size: 16px;
          }
    
          a {
            color: inherit;
          }
    
          img {
            display: block;
            margin: auto;
          }
    
          .wrapper {
            max-width: 600px;
            margin: auto;
            border-collapse: collapse;
          }
    
          .card {
            background: #fefefe;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
            text-align: center;
          }
    
          .header {
            border-collapse: collapse;
            width: 100%;
            padding-top: 24px;
          }
    
          .main {
            padding: 16px 8px;
            background-color: #fefefe;
          }
    
          .main-darker {
            background: #f5f9fc;
          }
    
          @media (min-width: 640px) {
            .main {
              padding: 32px 24px;
            }
          }
    
          .footer {
            padding: 24px 16px;
          }
    
          @media (min-width: 640px) {
            .footer {
              padding: 48px 24px;
            }
          }
    
          .box-background-image {
            background-image: url("https://storage.googleapis.com/semillero-sas/move.png");
            background-position: left;
            background-repeat: no-repeat;
            background-color: #050505;
            background-size: cover;
          }
    
          .box-background-gradient {
            background-image: radial-gradient(400px at 50% 0%, #050505, #325c48);
            background-position: center center;
            background-repeat: no-repeat;
            background-color: #050505;
            background-size: cover;
          }
    
          .footer p {
            color: #fff;
          }
    
          .main-button {
            display: inline-block;
            padding: 0 25px;
            border-radius: 10px;
            margin: 0 auto;
            background: #ff9f3d;
            color: #fff;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 0.44px;
            line-height: 48px;
            text-decoration: none;
            text-transform: uppercase;
          }
    
          .main-button:hover {
            background: #ff9f3d;
          }
    
          .text-highlighted {
            color: #ff9f3d;
          }
    
          .disclaimer {
            color: #aaa;
            text-align: center;
          }
    
          .simple-link {
            color: #aaa;
          }
    
          .simple-link:hover {
            color: #050505;
          }
    
          .cell-white {
            background: linear-gradient(
              to bottom,
              transparent,
              transparent 80%,
              #fff 80%
            );
          }
    
          table {
            width: 100%;
            border-collapse: collapse;
          }
    
          .header-h1 {
            max-width: 600px;
            margin: auto;
            color: #fff;
            line-height: 1.2;
            text-align: center;
          }
    
          .background-white td {
            background: #fefefe;
          }
    
          @media (min-width: 640px) {
            .header-h1 {
              font-size: 36px;
              line-height: 52px;
            }
          }
    
          @media only screen and (max-width: 480px) {
            .templateColumnContainer {
              display: block !important;
              width: 100% !important;
            }
          }
        </style>
    
        <!--[if mso]>
          <style type="text/css">
            body,
            table,
            td {
              font-family: Verdana, Helvetica, sans-serif !important;
            }
          </style>
        <![endif]-->
      </head>
    
      <body>
        <table class="wrapper" cellpadding="0" cellspascing="0">
          <tbody>
            <tr>
              <td height="8" colspan="3"></td>
            </tr>
            <tr>
              <td></td>
              <td width="600">
                <div class="card">
                  <table cellpadding="0" cellspascing="0">
                    <tr>
                      <td>
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          width="100%"
                        >
                          <tr>
                            <td bgcolor="#050505" width="600" valign="top">
                              <table
                                class="wrapper header"
                                align="center"
                                style="
                                  border-spacing: 0;
                                  border-collapse: collapse;
                                  padding: 0;
                                  vertical-align: top;
                                  text-align: left;
                                  width: 100%;
                                  background: #050505;
                                "
                              >
                                <tr
                                  style="
                                    padding: 0;
                                    vertical-align: top;
                                    text-align: left;
                                  "
                                >
                                  <td
                                    class="wrapper-inner"
                                    style="
                                      padding: 24px;
                                      vertical-align: top;
                                      text-align: left;
                                      color: #050505;
                                      font-family: Verdana, sans-serif;
                                      font-weight: normal;
                                      margin: 0;
                                      line-height: 1.3;
                                      font-size: 14px;
                                      border-collapse: collapse !important;
                                    "
                                  >
                                    <table
                                      align="center"
                                      class="container"
                                      style="
                                        border-spacing: 0;
                                        border-collapse: collapse;
                                        padding: 0;
                                        vertical-align: top;
                                        text-align: inherit;
                                        background: 0 0;
                                      "
                                    >
                                      <tbody>
                                        <tr
                                          style="
                                            padding: 0;
                                            vertical-align: top;
                                            text-align: left;
                                          "
                                        >
                                          <td
                                            style="
                                              padding: 0;
                                              vertical-align: top;
                                              text-align: left;
                                              color: #2a8562;
                                              font-family: Verdana, sans-serif;
                                              font-weight: normal;
                                              margin: 0;
                                              line-height: 1.3;
                                              font-size: 14px;
                                              border-collapse: collapse !important;
                                            "
                                          >
                                            <table
                                              class="row collapse"
                                              style="
                                                border-spacing: 0;
                                                border-collapse: collapse;
                                                padding: 0;
                                                vertical-align: top;
                                                text-align: left;
                                                width: 100%;
                                                position: relative;
                                                display: table;
                                              "
                                            >
                                              <tbody>
                                                <tr
                                                  style="
                                                    padding: 0;
                                                    vertical-align: top;
                                                    text-align: left;
                                                  "
                                                >
                                                  <th
                                                    class="small-6 large-6 columns first"
                                                    style="
                                                      background-color: #050505;
                                                      color: #050505;
                                                      font-family: Verdana,
                                                        sans-serif;
                                                      font-weight: normal;
                                                      padding: 0;
                                                      margin: 0 auto;
                                                      text-align: left;
                                                      line-height: 1.3;
                                                      font-size: 14px;
                                                      padding-left: 0 !important;
                                                      width: 50% !important;
                                                      padding-right: 0 !important;
                                                      padding-bottom: 0;
                                                      -moz-box-sizing: border-box;
                                                      -webkit-box-sizing: border-box;
                                                      box-sizing: border-box;
                                                      display: inline-block !important;
                                                      height: auto !important;
                                                    "
                                                  >
                                                    <table
                                                      style="
                                                        border-spacing: 0;
                                                        border-collapse: collapse;
                                                        padding: 0;
                                                        vertical-align: top;
                                                        text-align: left;
                                                        width: 100%;
                                                      "
                                                    >
                                                      <tr
                                                        style="
                                                          padding: 0;
                                                          vertical-align: top;
                                                          text-align: left;
                                                        "
                                                      >
                                                        <th
                                                          style="
                                                            background-color: #050505;
                                                            color: #050505;
                                                            font-family: Verdana,
                                                              sans-serif;
                                                            font-weight: normal;
                                                            padding: 0;
                                                            margin: 0;
                                                            text-align: left;
                                                            line-height: 1.3;
                                                            font-size: 14px;
                                                          "
                                                        >
                                                          <img
                                                            src="https://storage.googleapis.com/semillero-sas/move.png"
                                                            alt="Connect logo"
                                                            height="48"
                                                            style="
                                                              outline: 0;
                                                              text-decoration: none;
                                                              -ms-interpolation-mode: bicubic;
                                                              width: auto;
                                                              max-width: 100%;
                                                              clear: both;
                                                              display: block;
                                                              margin: 0;
                                                            "
                                                          />
                                                        </th>
                                                      </tr>
                                                    </table>
                                                  </th>
                                                  <th
                                                    class="small-6 large-6 columns last"
                                                    style="
                                                      background-color: #050505;
                                                      color: #050505;
                                                      font-family: Verdana,
                                                        sans-serif;
                                                      font-weight: normal;
                                                      padding: 0;
                                                      margin: 0 auto;
                                                      text-align: left;
                                                      line-height: 1.3;
                                                      font-size: 14px;
                                                      padding-left: 0 !important;
                                                      width: 50% !important;
                                                      padding-right: 0 !important;
                                                      padding-bottom: 0;
                                                      -moz-box-sizing: border-box;
                                                      -webkit-box-sizing: border-box;
                                                      box-sizing: border-box;
                                                      display: inline-block !important;
                                                      height: auto !important;
                                                    "
                                                  >
                                                    <table
                                                      style="
                                                        border-spacing: 0;
                                                        border-collapse: collapse;
                                                        padding: 0;
                                                        vertical-align: top;
                                                        text-align: left;
                                                        width: 100%;
                                                      "
                                                    >
                                                      <tr
                                                        style="
                                                          padding: 0;
                                                          vertical-align: top;
                                                          text-align: left;
                                                        "
                                                      >
                                                        <th
                                                          style="
                                                            background-color: #050505;
                                                            color: #050505;
                                                            font-family: Verdana,
                                                              sans-serif;
                                                            font-weight: normal;
                                                            padding: 0;
                                                            margin: 0;
                                                            text-align: left;
                                                            line-height: 1.3;
                                                            font-size: 14px;
                                                          "
                                                        ></th>
                                                      </tr>
                                                    </table>
                                                  </th>
                                                </tr>
                                                <tr>
                                                  <th height="16"></th>
                                                  <th height="16"></th>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <table
                          class="background-white"
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                        >
                          <tr>
                            <td colspan="3" height="16" bgcolor="#ffffff"></td>
                          </tr>
                          <tr>
                            <td width="24" bgcolor="#ffffff"></td>
                            <td bgcolor="#ffffff">
                              <table>
                                <tr>
                                  <td>
                                    <table
                                      cellpadding="0"
                                      cellspacing="0"
                                      border="0"
                                      width="100%"
                                    >
                                      <tr>
                                        <td height="16" bgcolor="#ffffff"></td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <h2>Hola ${name},</h2>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td height="24" bgcolor="#ffffff"></td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <p>
                                            Active su cuenta dando click en el
                                            siguiente boton:
                                          </p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td height="32" bgcolor="#ffffff"></td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <a
                                            style="
                                              text-decoration: none;
                                              text-align: center;
                                            "
                                            href="http://35.211.155.160:5000/auth/activation-email/${code}"
                                          >
                                            <button
                                              style="
                                                background-color: #050505;
                                                border: none;
                                                color: white;
                                                padding: 7px 13px;
                                                text-align: center;
                                                text-decoration: none;
                                                display: inline-block;
                                                font-size: 12px;
                                                margin: 4px 2px;
                                                cursor: pointer;
                                                border-radius: 12px;
                                              "
                                              type="button"
                                            >
                                              Verificar email
                                            </button></a
                                          >
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <p>
                                            <br /><br />Si no puedes acceder al link comunicate al correo:
                                            <a
                                              href="mailto:cuentacorreomove@gmail.com"
                                              style="color: #ff9f3d"
                                              >cuentacorreomove@gmail.com</a
                                            ><br />
                                          </p>
                                        </td>
                                      </tr>
                                    </table>
                                    <table class="background-white">
                                      <tbody>
                                        <tr>
                                          <td
                                            height="24"
                                            colspan="3"
                                            bgcolor="#ffffff"
                                          ></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td height="24" bgcolor="#ffffff"></td>
                                </tr>
                              </table>
                            </td>
                            <td width="24" bgcolor="#ffffff"></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                  <table
                    style="background: #050505"
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td style="background: #050505" height="24">&nbsp;</td>
                      </tr>
                      <tr>
                        <td>
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            border="0"
                            width="100%"
                          >
                            <tbody>
                              <tr>
                                <td width="24"></td>
                                <td>
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                    width="100%"
                                  >
                                    <tbody>
                                      <tr>
                                        <td>
                                          <p>
                                            <a
                                              href="https://move-89a33.web.app/"
                                              style="
                                                color: #fff;
                                                text-decoration: none;
                                              "
                                              >move-89a33.web.app</a
                                            >
                                          </p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td height="16"></td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <p style="color: #fff">
                                            Por favor, no responda a este correo electrónico. Se trata de
                                            una dirección de correo electrónico no controlada y su
                                            mensaje no será recibido. Si tiene
                                            tiene alguna pregunta, póngase en contacto con nosotros en
                                            <a
                                              href="mailto:cuentacorreomove@gmail.com"
                                              style="
                                                color: #fff;
                                                text-decoration: none;
                                              "
                                              >cuentacorreomove@gmail.com</a
                                            >.
                                          </p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td height="16"></td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <p style="color: #808ab1">
                                            Copyright &copy; 2022 MovE.
                                          </p>
                                          <p style="color: #808ab1">
                                            Todos los derechos reservados.
                                          </p>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                                <td width="24"></td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td height="24"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
    `
}

export const templateEmailAdmin = (message: string, name?:string)=> {
    return `<!DOCTYPE html>

    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>Completed · Email</title>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <style>
          * {
            margin: 0;
          }
    
          body,
          table,
          td,
          p {
            font-family: "IBM Plex Sans", Verdana, Helvetica, sans-serif !important;
            text-align: left;
            color: #1b365d;
          }
    
          body {
            background: #f3f3f3;
          }
    
          .text-center {
            text-align: center;
          }
    
          h1 {
            padding: 0;
            color: #243062;
            font-size: 32px;
            font-weight: bold;
            font-family: "IBM Plex Sans", Verdana, Helvetica, sans-serif !important;
          }
    
          p {
            mso-line-height-rule: exactly;
            padding: 0;
            margin: 0;
            font-size: 16px;
            font-weight: normal;
            line-height: 20px;
            font-family: "IBM Plex Sans", Verdana, Helvetica, sans-serif !important;
          }
    
          small {
            font-size: 16px;
          }
    
          a {
            color: inherit;
          }
    
          img {
            display: block;
            margin: auto;
          }
    
          .wrapper {
            max-width: 600px;
            margin: auto;
            border-collapse: collapse;
          }
    
          .card {
            background: #fefefe;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
            text-align: center;
          }
    
          .header {
            border-collapse: collapse;
            width: 100%;
            padding-top: 24px;
          }
    
          .main {
            padding: 16px 8px;
            background-color: #fefefe;
          }
    
          .main-darker {
            background: #f5f9fc;
          }
    
          @media (min-width: 640px) {
            .main {
              padding: 32px 24px;
            }
          }
    
          .footer {
            padding: 24px 16px;
          }
    
          @media (min-width: 640px) {
            .footer {
              padding: 48px 24px;
            }
          }
    
          .box-background-image {
            background-image: url("https://storage.googleapis.com/semillero-sas/move.png");
            background-position: left;
            background-repeat: no-repeat;
            background-color: #050505;
            background-size: cover;
          }
    
          .box-background-gradient {
            background-image: radial-gradient(400px at 50% 0%, #050505, #325c48);
            background-position: center center;
            background-repeat: no-repeat;
            background-color: #050505;
            background-size: cover;
          }
    
          .footer p {
            color: #fff;
          }
    
          .main-button {
            display: inline-block;
            padding: 0 25px;
            border-radius: 10px;
            margin: 0 auto;
            background: #ff9f3d;
            color: #fff;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 0.44px;
            line-height: 48px;
            text-decoration: none;
            text-transform: uppercase;
          }
    
          .main-button:hover {
            background: #ff9f3d;
          }
    
          .text-highlighted {
            color: #ff9f3d;
          }
    
          .disclaimer {
            color: #aaa;
            text-align: center;
          }
    
          .simple-link {
            color: #aaa;
          }
    
          .simple-link:hover {
            color: #050505;
          }
    
          .cell-white {
            background: linear-gradient(
              to bottom,
              transparent,
              transparent 80%,
              #fff 80%
            );
          }
    
          table {
            width: 100%;
            border-collapse: collapse;
          }
    
          .header-h1 {
            max-width: 600px;
            margin: auto;
            color: #fff;
            line-height: 1.2;
            text-align: center;
          }
    
          .background-white td {
            background: #fefefe;
          }
    
          @media (min-width: 640px) {
            .header-h1 {
              font-size: 36px;
              line-height: 52px;
            }
          }
    
          @media only screen and (max-width: 480px) {
            .templateColumnContainer {
              display: block !important;
              width: 100% !important;
            }
          }
        </style>
    
        <!--[if mso]>
          <style type="text/css">
            body,
            table,
            td {
              font-family: Verdana, Helvetica, sans-serif !important;
            }
          </style>
        <![endif]-->
      </head>
    
      <body>
        <table class="wrapper" cellpadding="0" cellspascing="0">
          <tbody>
            <tr>
              <td height="8" colspan="3"></td>
            </tr>
            <tr>
              <td></td>
              <td width="600">
                <div class="card">
                  <table cellpadding="0" cellspascing="0">
                    <tr>
                      <td>
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          width="100%"
                        >
                          <tr>
                            <td bgcolor="#050505" width="600" valign="top">
                              <table
                                class="wrapper header"
                                align="center"
                                style="
                                  border-spacing: 0;
                                  border-collapse: collapse;
                                  padding: 0;
                                  vertical-align: top;
                                  text-align: left;
                                  width: 100%;
                                  background: #050505;
                                "
                              >
                                <tr
                                  style="
                                    padding: 0;
                                    vertical-align: top;
                                    text-align: left;
                                  "
                                >
                                  <td
                                    class="wrapper-inner"
                                    style="
                                      padding: 24px;
                                      vertical-align: top;
                                      text-align: left;
                                      color: #050505;
                                      font-family: Verdana, sans-serif;
                                      font-weight: normal;
                                      margin: 0;
                                      line-height: 1.3;
                                      font-size: 14px;
                                      border-collapse: collapse !important;
                                    "
                                  >
                                    <table
                                      align="center"
                                      class="container"
                                      style="
                                        border-spacing: 0;
                                        border-collapse: collapse;
                                        padding: 0;
                                        vertical-align: top;
                                        text-align: inherit;
                                        background: 0 0;
                                      "
                                    >
                                      <tbody>
                                        <tr
                                          style="
                                            padding: 0;
                                            vertical-align: top;
                                            text-align: left;
                                          "
                                        >
                                          <td
                                            style="
                                              padding: 0;
                                              vertical-align: top;
                                              text-align: left;
                                              color: #2a8562;
                                              font-family: Verdana, sans-serif;
                                              font-weight: normal;
                                              margin: 0;
                                              line-height: 1.3;
                                              font-size: 14px;
                                              border-collapse: collapse !important;
                                            "
                                          >
                                            <table
                                              class="row collapse"
                                              style="
                                                border-spacing: 0;
                                                border-collapse: collapse;
                                                padding: 0;
                                                vertical-align: top;
                                                text-align: left;
                                                width: 100%;
                                                position: relative;
                                                display: table;
                                              "
                                            >
                                              <tbody>
                                                <tr
                                                  style="
                                                    padding: 0;
                                                    vertical-align: top;
                                                    text-align: left;
                                                  "
                                                >
                                                  <th
                                                    class="small-6 large-6 columns first"
                                                    style="
                                                      background-color: #050505;
                                                      color: #050505;
                                                      font-family: Verdana,
                                                        sans-serif;
                                                      font-weight: normal;
                                                      padding: 0;
                                                      margin: 0 auto;
                                                      text-align: left;
                                                      line-height: 1.3;
                                                      font-size: 14px;
                                                      padding-left: 0 !important;
                                                      width: 50% !important;
                                                      padding-right: 0 !important;
                                                      padding-bottom: 0;
                                                      -moz-box-sizing: border-box;
                                                      -webkit-box-sizing: border-box;
                                                      box-sizing: border-box;
                                                      display: inline-block !important;
                                                      height: auto !important;
                                                    "
                                                  >
                                                    <table
                                                      style="
                                                        border-spacing: 0;
                                                        border-collapse: collapse;
                                                        padding: 0;
                                                        vertical-align: top;
                                                        text-align: left;
                                                        width: 100%;
                                                      "
                                                    >
                                                      <tr
                                                        style="
                                                          padding: 0;
                                                          vertical-align: top;
                                                          text-align: left;
                                                        "
                                                      >
                                                        <th
                                                          style="
                                                            background-color: #050505;
                                                            color: #050505;
                                                            font-family: Verdana,
                                                              sans-serif;
                                                            font-weight: normal;
                                                            padding: 0;
                                                            margin: 0;
                                                            text-align: left;
                                                            line-height: 1.3;
                                                            font-size: 14px;
                                                          "
                                                        >
                                                          <img
                                                            src="https://storage.googleapis.com/semillero-sas/move.png"
                                                            alt="Connect logo"
                                                            height="48"
                                                            style="
                                                              outline: 0;
                                                              text-decoration: none;
                                                              -ms-interpolation-mode: bicubic;
                                                              width: auto;
                                                              max-width: 100%;
                                                              clear: both;
                                                              display: block;
                                                              margin: 0;
                                                            "
                                                          />
                                                        </th>
                                                      </tr>
                                                    </table>
                                                  </th>
                                                  <th
                                                    class="small-6 large-6 columns last"
                                                    style="
                                                      background-color: #050505;
                                                      color: #050505;
                                                      font-family: Verdana,
                                                        sans-serif;
                                                      font-weight: normal;
                                                      padding: 0;
                                                      margin: 0 auto;
                                                      text-align: left;
                                                      line-height: 1.3;
                                                      font-size: 14px;
                                                      padding-left: 0 !important;
                                                      width: 50% !important;
                                                      padding-right: 0 !important;
                                                      padding-bottom: 0;
                                                      -moz-box-sizing: border-box;
                                                      -webkit-box-sizing: border-box;
                                                      box-sizing: border-box;
                                                      display: inline-block !important;
                                                      height: auto !important;
                                                    "
                                                  >
                                                    <table
                                                      style="
                                                        border-spacing: 0;
                                                        border-collapse: collapse;
                                                        padding: 0;
                                                        vertical-align: top;
                                                        text-align: left;
                                                        width: 100%;
                                                      "
                                                    >
                                                      <tr
                                                        style="
                                                          padding: 0;
                                                          vertical-align: top;
                                                          text-align: left;
                                                        "
                                                      >
                                                        <th
                                                          style="
                                                            background-color: #050505;
                                                            color: #050505;
                                                            font-family: Verdana,
                                                              sans-serif;
                                                            font-weight: normal;
                                                            padding: 0;
                                                            margin: 0;
                                                            text-align: left;
                                                            line-height: 1.3;
                                                            font-size: 14px;
                                                          "
                                                        ></th>
                                                      </tr>
                                                    </table>
                                                  </th>
                                                </tr>
                                                <tr>
                                                  <th height="16"></th>
                                                  <th height="16"></th>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <table
                          class="background-white"
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                        >
                          <tr>
                            <td colspan="3" height="16" bgcolor="#ffffff"></td>
                          </tr>
                          <tr>
                            <td width="24" bgcolor="#ffffff"></td>
                            <td bgcolor="#ffffff">
                              <table>
                                <tr>
                                  <td>
                                    <table
                                      cellpadding="0"
                                      cellspacing="0"
                                      border="0"
                                      width="100%"
                                    >
                                      <tr>
                                        <td height="16" bgcolor="#ffffff"></td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <h2>Hola ${name},</h2>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td height="24" bgcolor="#ffffff"></td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <p>
                                            ${message}
                                          </p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td height="32" bgcolor="#ffffff"></td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <a
                                            style="
                                              text-decoration: none;
                                              text-align: center;
                                            "
                                            href="https://move-89a33.web.app/login"
                                          >
                                            <button
                                              style="
                                                background-color: #050505;
                                                border: none;
                                                color: white;
                                                padding: 7px 13px;
                                                text-align: center;
                                                text-decoration: none;
                                                display: inline-block;
                                                font-size: 12px;
                                                margin: 4px 2px;
                                                cursor: pointer;
                                                border-radius: 12px;
                                              "
                                              type="button"
                                            >
                                              Ingresar
                                            </button></a
                                          >
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <p>
                                            <br /><br />Si no puedes acceder al link comunicate al correo:
                                            <a
                                              href="mailto:cuentacorreomove@gmail.com"
                                              style="color: #ff9f3d"
                                              >cuentacorreomove@gmail.com</a
                                            ><br />
                                          </p>
                                        </td>
                                      </tr>
                                    </table>
                                    <table class="background-white">
                                      <tbody>
                                        <tr>
                                          <td
                                            height="24"
                                            colspan="3"
                                            bgcolor="#ffffff"
                                          ></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td height="24" bgcolor="#ffffff"></td>
                                </tr>
                              </table>
                            </td>
                            <td width="24" bgcolor="#ffffff"></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                  <table
                    style="background: #050505"
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td style="background: #050505" height="24">&nbsp;</td>
                      </tr>
                      <tr>
                        <td>
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            border="0"
                            width="100%"
                          >
                            <tbody>
                              <tr>
                                <td width="24"></td>
                                <td>
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                    width="100%"
                                  >
                                    <tbody>
                                      <tr>
                                        <td>
                                          <p>
                                            <a
                                              href="https://move-89a33.web.app/"
                                              style="
                                                color: #fff;
                                                text-decoration: none;
                                              "
                                              >move-89a33.web.app</a
                                            >
                                          </p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td height="16"></td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <p style="color: #fff">
                                            Por favor, no responda a este correo electrónico. Se trata de
                                            una dirección de correo electrónico no controlada y su
                                            mensaje no será recibido. Si tiene
                                            tiene alguna pregunta, póngase en contacto con nosotros en
                                            <a
                                              href="mailto:cuentacorreomove@gmail.com"
                                              style="
                                                color: #fff;
                                                text-decoration: none;
                                              "
                                              >cuentacorreomove@gmail.com</a
                                            >.
                                          </p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td height="16"></td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <p style="color: #808ab1">
                                            Copyright &copy; 2022 MovE.
                                          </p>
                                          <p style="color: #808ab1">
                                            Todos los derechos reservados.
                                          </p>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                                <td width="24"></td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td height="24"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
    `
}