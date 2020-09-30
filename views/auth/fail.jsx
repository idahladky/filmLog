const React = require("react")
const Layout = require("../components/Layout")

class Fail extends React.Component {
    render() {
        return (
            <Layout title="FAIL">
                <h1>FAILED TO LOGIN</h1>
            </Layout>
        )
    }
}

module.exports = Fail