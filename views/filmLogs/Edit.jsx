const React = require("react")
const Layout = require("../components/Layout")

class Edit extends React.Component {
    render() {
        const { filmLog } = this.props
        return (
            <Layout title={`Edit Roll ${filmLog.rollNumber}`}>
                <h2><span>Edit</span> Roll {filmLog.rollNumber}</h2>
                <form action={`/filmLogs/edit/${filmLog._id}?_method=PUT`} method="post">
                    <div className="field-wrap">
                        <label>MANUFACTURER:</label><input type="text" name="filmManufacturer" value={filmLog.filmManufacturer} />
                    </div>
                    <div className="field-wrap">
                        <label>TYPE:</label><input type="text" name="filmType" value={filmLog.filmType} />
                    </div>
                    <div className="field-wrap">
                        <label>COLOR:</label><input type="text" name="filmColor" value={filmLog.filmColor} />
                    </div>
                    <div className="field-wrap">
                        <label>CAMERA:</label><input type="text" name="camera" value={filmLog.camera} />
                    </div>
                    <div className="field-wrap">
                        <label>DATE:</label><input type="date" name="date" /> <br/>
                    </div>
                    <div className="field-wrap">
                        <label>ISO:</label><input type="number" name="ISO" min="1" value={filmLog.ISO} />
                    </div>
                    <div className="field-wrap">
                        <label>LENS:</label><input type="text" name="lens" value={filmLog.lens} />
                    </div>
                    <div className="field-wrap">
                        <label>EXPOSURE:</label><input type="text" name="exposure" value={filmLog.exposure} />
                    </div>
                    <div className="field-wrap">
                        <label>NOTES:</label><input type="textarea" name="notes" value={filmLog.notes} />
                    </div>
                    <input className="button button-update" type="submit" name="" value="Update" />
                </form>
                <a href={`/filmLogs/${filmLog._id}`}><button className="button button-update">Back</button></a>
            </Layout>
        )
    }
}

module.exports = Edit