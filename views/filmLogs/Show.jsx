const React = require("react")
const Layout = require("../components/Layout")

class Show extends React.Component {
    render() {
        const {filmLog} = this.props
        return (
            <Layout title="Individual Roll">
                <h1>Roll {filmLog.rollNumber}</h1>
                <p>{filmLog.notes}</p>
                {/* filmLog.rollNumber
                filmLog.filmManufacturer
                filmLog.filmType
                filmLog.filmColor
                filmLog.camera
        date: '2020-01-31',
        ISO: 300,
        lens: "52mm",
        exposure: "aperture 5.8, shutter speed 180",
        notes: "Frame 27 aperture changed to 4.0, shutter speed 250"
 */}
                <button><a href={`/filmLogs/${filmLog._id}`}>Edit</a></button><br />
                <form action={`/filmLogs/${filmLog._id}?_method=DELETE`} method="post">
                    <input type="submit" value="Delete this Roll"/>
                </form>
            </Layout>
        )
    }
}

module.exports = Show