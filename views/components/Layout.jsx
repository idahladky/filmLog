const React = require("react")

class Layout extends React.Component {
    render () {
        return (
            <html lang="en" dir="ltr">
                <head>
                    <meta charSet="utf-8"/>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="/css/style.css" />
                    <script src="/js/app.js" />
                </head>
                <body>
                    <header>
                        <h1>Film Log</h1>
                    </header>
                    <main>{this.props.children}</main>
                    <footer>
                        <h2>created by Ida</h2>
                    </footer>
                </body>
            </html>
        )
    }
}

module.exports = Layout