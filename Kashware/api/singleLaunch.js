const axios = require('axios');

module.exports = {
    particularLaunch: async (req, res) => {
        try {
            const flight_number = req.body.flight_number;
            const url = "https://api.spacexdata.com/v3/launches/" + flight_number;
            const launch = await axios.get(url);

            if (launch.data != null || launch.data == undefined) {
                console.log(launch.data.launch_site.site_id);
                const launchPad = await axios.get("https://api.spacexdata.com/v3/launchpads/" + launch.data.launch_site.site_id);
                console.log("launchPad", launchPad.data);

                if (launchPad.data) {
                    res.status(200).send({ "launch": launch.data, "launchPad": launchPad.data });
                } else {
                    res.status(404).send({ Message: "Unable to reach your request" });
                }

            } else {
                res.status(404).send({ Message: "Unable to reach your request" });
            }

        } catch (error) {
            res.send({ Error: error });
        }

    }
}