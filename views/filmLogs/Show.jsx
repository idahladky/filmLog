onst React = require("react")
const Layout = require("../components/Layout")

class Index extends React.Component {
    render() {
        const {filmLog} = this.props
        return (
            <Layout title="All Logs">
                <h1>Roll {filmLog.rollNumber}</h1>
                <p>{filmLog.notes}</p>
            </Layout>
        )
    }
}

module.exports = Show