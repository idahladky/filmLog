const React = require("react")
const Layout = require("../components/authLayout")

class Login extends React.Component {
    render() {
        return (
            <Layout title="Film Log - Login">
                <div>
                    <div className="container">
                        <h2>Login</h2>
                        <form action="/auth/login" method="post">
                            <hr/>
                            <input type="text" name="username" placeholder="Username" />
                            <hr/>
                            <input type="text" name="password" placeholder="Password" />
                            <hr className="bottom_rule"/>
                            <input type="submit" id="button" value="Login" />
                        </form>
                    </div>
                </div>
            </Layout>
        )
    }
}

module.exports = Login