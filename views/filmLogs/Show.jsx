const React = require("react")
const Layout = require("../components/Layout")

class Show extends React.Component {
    render() {
        const {filmLog} = this.props
        return (
            <Layout title={`Film Log - Roll ${filmLog.rollNumber}`}>
                <h2>Roll {filmLog.rollNumber}</h2>
                <ul>
                    <li><strong>MANUFACTURER:</strong> {filmLog.filmManufacturer}</li>
                    <li><strong>TYPE:</strong> {filmLog.filmType}</li>
                    <li><strong>COLOR:</strong> {filmLog.filmColor}</li>
                    <li><strong>CAMERA:</strong> {filmLog.camera}</li>
                    {/* <li><strong>Date:</strong> {filmLog.date}</li> */}
                    <li><strong>ISO:</strong> {filmLog.ISO}</li>
                    <li><strong>LENS:</strong> {filmLog.lens}</li>
                    <li><strong>EXPOSURE:</strong> {filmLog.exposure}</li>
                    <li><strong>NOTES:</strong> {filmLog.notes}</li>
                </ul>
                <div className="button_div">
                    <form action={`/filmLogs/${filmLog._id}?_method=DELETE`} method="post">
                        <input className="button" type="submit" value="Delete"/>
                    </form>
                    <a href={`/filmLogs/edit/${filmLog._id}`}><button className="button">Edit</button></a>
                    <a href={`/filmLogs/`}><button className="button">Back</button></a>
                </div>
            </Layout>
        )
    }
}

module.exports = Show