const axios = require('axios');

module.exports = {
    getLaunches: async (req, res) => {
        try {
            const launch = await axios.get('https://api.spacexdata.com/v3/launches');
            // console.log(launch.data);

            if (launch.data != null || launch.data == undefined) {
                res.status(200).send({ launch: launch.data })
            } else {
                res.status(404).send({ Message: "Unable to reach your request" })
            }
        } catch (error) {
            console.log("error", err);
            res.status(404).send({ "Error": err })

        }
    }

}
