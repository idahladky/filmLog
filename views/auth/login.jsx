const React = require("react")
const Layout = require("../components/Layout")

class Login extends React.Component {
    render() {
        return (
            <Layout title="LOGIN">
                <form action="/auth/login" method="post">
                    <input type="text" name="username" placeholder="Username" />
                    <input type="text" name="password" placeholder="Password" />
                    <input type="submit" value="login" />
                </form>
            </Layout>
        )
    }
}

module.exports = Login