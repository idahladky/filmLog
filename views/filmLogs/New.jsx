const React = require("react")
const Layout = require("../components/Layout")

class Index extends React.Component {
    render() {
        const {filmLogs} = this.props
        return (
            <Layout title="All Logs">
                <h1>All</h1>
                {filmLogs.map((log) => {
                    <p>{filmLogs.rollNumber}</p>
                })}
            </Layout>
        )
    }
}