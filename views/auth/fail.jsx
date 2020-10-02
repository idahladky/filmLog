const React = require("react")
const Layout = require("../components/authLayout")

class Fail extends React.Component {
    render() {
        return (
            <Layout title="Film Log - Login Fialed">
                <div>
                    <div className="container">
                        <h2>Failed to Login</h2>
                        <form action="/auth/signup">
                            <input type="submit" id="button" value="Sign Up" />
                        </form>
                    </div>
                </div>

            </Layout>
        )
    }
}

module.exports = Fail