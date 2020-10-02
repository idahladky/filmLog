const React = require("react")
const Layout = require("../components/Layout")

class New extends React.Component {
    render() {
        return (
            <Layout title="Film Log - New">
                <h1>New Roll</h1>
                <form action="/filmLogs/" method="post">
                    Roll Number: <input type="number" name="rollNumber" min="1" /> <br/>
                    Film Manufacturer: <input type="text" name="filmManufacturer" placeholder="ex. Kodak" /> <br/>
                    Film Type: <input type="text" name="filmType" placeholder="ex. Ultramax" /> <br/>
                    Film Color: <input type="text" name="filmColor" placeholder="color/bw" /> <br/>
                    Camera: <input type="text" name="camera" placeholder="ex. Pentax K1000" /> <br/>
                    Date: <input type="date" name="date" /> <br/>
                    ISO: <input type="number" name="ISO" min="1" /> <br/>
                    Lens: <input type="text" name="lens" placeholder="ex. 52mm" /> <br/>
                    Exposure: <input type="text" name="exposure" placeholder="aperture/shutterspeed" /> <br/>
                    Notes: <input type="textarea" name="notes" placeholder="Enter here" /> <br/>
                    <input type="submit" name="" value="Create New Log" />
                </form>
            </Layout>
        )
    }
}

module.exports = New