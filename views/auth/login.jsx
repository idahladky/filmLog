const React = require("react")
const Layout = require("../components/authLayout")

class Login extends React.Component {
    render() {
        return (
            <Layout title="Film Log - Login">
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