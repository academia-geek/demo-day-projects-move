export const templateEmailValidation = (name: string, code: string) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <h1>Hola ${name}</h1>
        <a
            style="text-decoration: none"
            href="http://localhost:5000/auth/activation-email/${code}"
        >
            <button
            style="
                background-color: #00b2ee;
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

    </body>
    </html>`
}