const React = require("react")
const Layout = require("../components/Layout")

class Index extends React.Component {
    render() {
        const {filmLogs} = this.props
        return (
            <Layout title="All Logs">
                <h1>All</h1>
                <a href="/filmLogs/new"><button>Enter New Log</button></a>
                {filmLogs.map((log) => {
                    <p>{filmLogs.rollNumber}</p>
                })}
            </Layout>
        )
    }
}

module.exports = Index