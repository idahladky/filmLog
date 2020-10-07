const React = require("react")
const Layout = require("../components/authLayout")

class Index extends React.Component {
    render() {
        return (
            <Layout title="Film Log - Sign Up">
                <div>
                    <div className="container">
                        <h2>Sign Up</h2>
                        <form action="/auth/signup" method="post">
                            <hr/>
                            <input type="text" name="username" placeholder="Username" />
                            <hr/>
                            <input type="text" name="password" placeholder="Password" autoComplete="off"/>
                            <hr className="bottom_rule"/>
                            <input type="submit" id="button" value="Sign Up" />
                        </form>
                    </div>
                </div>
            </Layout>
        )
    }
}

module.exports = Index
