const React = require("react")
const Layout = require("../components/Layout")

class Index extends React.Component {
    render() {
        return (
            <Layout title="SIGNUP">
                <form action="/auth/signup" method="post">
                    <input type="text" name="username" placeholder="Username" />
                    <input type="text" name="password" placeholder="Password" />
                    <input type="submit" value="signup" />
                </form>
            </Layout>
        )
    }
}

module.exports = Index