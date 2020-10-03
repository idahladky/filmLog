const React = require("react")
const Layout = require("../components/Layout")

class New extends React.Component {
    render() {
        return (
            <Layout title="Film Log - New Roll">
                <h2>New Roll</h2>
                <form action="/filmLogs/" method="post">
                    <div className="field-wrap">
                        <label>Number:</label><input type="number" name="rollNumber" min="1" />
                    </div>
                    <div className="field-wrap">
                        <label>Manufacturer:</label><input type="text" name="filmManufacturer" placeholder="ex. Kodak" />
                    </div>
                    <div className="field-wrap">
                        <label>Type:</label><input type="text" name="filmType" placeholder="ex. Ultramax" />
                    </div>
                    <div className="field-wrap">
                        <label>Color:</label><input type="text" name="filmColor" placeholder="color/bw" />
                    </div>
                    <div className="field-wrap">
                        <label>Camera:</label><input type="text" name="camera" placeholder="ex. Pentax K1000" />
                    </div>
                    <div className="field-wrap">
                        <label>Date:</label><input type="date" name="date" />
                    </div>
                    <div className="field-wrap">
                        <label>ISO:</label><input type="number" name="ISO" min="1" />
                    </div>
                    <div className="field-wrap">
                        <label>Lens:</label><input type="text" name="lens" placeholder="ex. 52mm" />
                    </div>
                    <div className="field-wrap">
                        <label>Exposure:</label><input type="text" name="exposure" placeholder="aperture/shutterspeed" />
                    </div>
                    <div className="field-wrap">
                        <label>Notes:</label><input type="textarea" name="notes" placeholder="Enter here" />
                    </div>
                    <input className="button button-update" type="submit" name="" value="Create New Log" />
                </form>
                <a href={`/filmLogs/`}><button className="button button-update">Back</button></a>
            </Layout>
        )
    }
}

module.exports = New