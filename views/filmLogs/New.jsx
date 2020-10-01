const React = require("react")
const Layout = require("../components/Layout")

class New extends React.Component {
    render() {
        const {filmLogs} = this.props
        return (
            <Layout title="New Logs">
                <h1>New Log</h1>
                <form action="/filmLogs/" method="post">
                    <input /> 
                    {/* add all inputs for model */}
                </form>
            </Layout>
        )
    }
}

module.exports = New