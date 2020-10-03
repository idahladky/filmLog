const React = require("react")
const Layout = require("../components/Layout")

class Index extends React.Component {
    render() {
        const {filmLogs} = this.props
        return (
            <Layout title="Film Log">
                <ul>
                    {filmLogs.map((log, index) => {
                        return <a href={`/filmLogs/${log._id}`}>
                            <li key={index}>Roll {log.rollNumber}: <span>{log.filmManufacturer} {log.filmType}</span></li>
                        </a>
                    })}
                </ul>
            </Layout>
        )
    }
}

module.exports = Index