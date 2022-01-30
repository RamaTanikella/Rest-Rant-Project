const React = require('react')

function Wrapper (content) {
    return (
        <html>
            <head>
                <title>RestRant Live Demo</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossOrigin="anonymous" />
                <link rel="stylesheet" href="wrapper.css"/>
                <link rel="manifest" href="/site.webmanifest"></link>
            </head>
            <body>
                <nav className="navbar-nav">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/places">Places</a></li>
                        <li><a href="/places/new">New Place</a></li>
                    </ul>
                </nav>
                {content.children}
            </body>
        </html>
    )
}

module.exports = Wrapper