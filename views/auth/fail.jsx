const React = require("react")
const Layout = require("../components/authLayout")

class Fail extends React.Component {
    render() {
        return (
            <Layout title="Film Log - Login Fialed">
                <h1>FAILED TO LOGIN</h1>
            </Layout>
        )
    }
}

module.exports = Fail