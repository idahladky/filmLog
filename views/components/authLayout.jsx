const React = require("react")

class Layout extends React.Component {
    render() {
        return (
            <html lang="en" dir="ltr">
                <head>
                    <meta charSet="utf-8"/>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="/css/authstyle.css" />
                    <script src="/js/app.js" />
                </head>
                <body>
                    <header>
                        <h1>Film<span>Log</span></h1>
                    </header>
                    <main>{this.props.children}</main>
                    <footer>
                        <div>&copy; 2020 IH Photography</div>
                    </footer>
                </body>
            </html>
        )
    }
}

module.exports = Layout