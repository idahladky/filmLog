const React = require("react")
const Layout = require("../components/authLayout")

class Logout extends React.Component {
    render() {
        return (
            <Layout title="Film Log - Logout">
                <div>
                    <div className="container">
                        <h2>You are now logged out</h2>
                        <a href="/auth/login" id="button">Login</a>
                    </div>
                </div>
            </Layout>
        )
    }
}

module.exports = Logout