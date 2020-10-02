const React = require("react")
const Layout = require("../components/Layout")

class Show extends React.Component {
    render() {
        const {filmLog} = this.props
        return (
            <Layout title="Film Log - Roll Info">
                <h1>Roll {filmLog.rollNumber}</h1>
                <ul>
                    <li>{filmLog.filmManufacturer}</li>
                    <li>{filmLog.filmType}</li>
                    <li>{filmLog.filmColor}</li>
                    <li>{filmLog.camera}</li>
                    {/* <li>{filmLog.date}</li> */}
                    <li>{filmLog.ISO}</li>
                    <li>{filmLog.lens}</li>
                    <li>{filmLog.exposure}</li>
                    <li>{filmLog.notes}</li>
                </ul>
                <button><a href={`/filmLogs/${filmLog._id}`}>Edit</a></button><br />
                <form action={`/filmLogs/${filmLog._id}?_method=DELETE`} method="post">
                    <input type="submit" value="Delete this Roll"/>
                </form>
            </Layout>
        )
    }
}

module.exports = Show