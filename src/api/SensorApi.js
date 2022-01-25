import Axios from 'axios';
const URI = "https://automated-glasshouse-service.herokuapp.com/";

export default class SensorApi {

    static getCurrentData() {
        return new Promise((resolve, reject) => {
            const url = URI + "api/sensorNow/current";
            Axios.get(url).then(response => {
                resolve(response && response.data);
            }).catch(err => {
                reject(err);
            })
        })
    }

    static getTimedData(data) {
        return new Promise((resolve, reject) => {
            const url = URI + "api/sensor/timed";
            Axios.post(url, data).then(response => {
                resolve(response && response.data);
            }).catch(err => {
                reject(err);
            })
        })
    }

};

