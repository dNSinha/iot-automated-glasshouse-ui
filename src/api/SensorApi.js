import Axios from 'axios';
const URI = "https://automated-glasshouse-service.herokuapp.com/";

export default class SensorApi {

    static getCurrentData(data) {
        return new Promise((resolve, reject) => {
            const url = URI + "api/sensor/current";
            Axios.post(url, data).then(response => {
                resolve(response && response.data);
            }).catch(err => {
                reject(err);
            })
        })
    }

};

