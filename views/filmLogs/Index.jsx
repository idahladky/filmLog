const React = require("react")
const Layout = require("../components/Layout")

class Index extends React.Component {
    render() {
        const {filmLogs} = this.props
        return (
            <Layout title="Film Log - All">
                <h1>All</h1>
                <a href="/filmLogs/new"><button>Enter New Log</button></a>
                <ul>
                    {filmLogs.map((log, index) => {
                        return <a href={`/filmLogs/${log._id}`}>
                            <li key={index}>Roll {log.rollNumber} {log.filmManufacturer} {log.filmType} ({log.filmColor})</li>
                        </a>
                    })}
                </ul>
            </Layout>
        )
    }
}

module.exports = Index