import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Label } from 'recharts';
import SensorApi from '../../api/SensorApi';
import { helpers } from '../utilities/helper';
import './style.scss';

export class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [{
        time: null,
        soil_moisture: null,
        temperature: null,
        water_tank: null,
        humidity: null
      }]
    }

    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    const payloadData = {
      date: helpers.getDate(),
      time: helpers.getTime()
    };

    SensorApi.getCurrentData(payloadData).then(res => {
      let response = res.data && res.data.sensorValues && res.data.sensorValues[0];

      const sensorValue = { //Local testing
        time: response && response.time || helpers.getTime(),
        soil_moisture: response && response.soil_moisture && response.soil_moisture.toString() || Math.random() * 100,
        humidity: response && response.humidity && response.humidity.toString() || Math.random() * 100,
        temperature: response && response.temperature && response.temperature.toString() || Math.random() * 100,
        water_tank: response && response.water_tank && response.water_tank.toString() || Math.random() * 100
      }

      // const sensorValue = {
      //   time: response && response.time,
      //   soil_moisture: response && response.soil_moisture && response.soil_moisture.toString(),
      //   humidity: response && response.humidity && response.humidity.toString(),
      //   temperature: response && response.temperature && response.temperature.toString(),
      //   water_tank: response && response.water_tank && response.water_tank.toString()
      // }

      this.setState(prevState => ({ //To update the existing
        data: [...prevState.data, sensorValue]
      }));

    }).catch(err => {
      console.log(err);
    });
  }

  componentDidMount() {
    setInterval(() => {
      this.fetchData()
    }, 5000);
  }



  render() {
    return (
      <div className='container'>
        <div className='line-chart'>
          <LineChart width={750} height={250} data={this.state.data}>
            <Line type="monotone" dataKey="humidity" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="time"> <Label value="Humidity" offset={0} position="insideBottom" /> </XAxis>
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>
        <div className='line-chart'>
          <LineChart width={750} height={250} data={this.state.data}>
            <Line type="monotone" dataKey="soil_moisture" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="time"> <Label value="Soil Moisture" offset={0} position="insideBottom" /> </XAxis>
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>
        <div className='line-chart'>
          <LineChart width={750} height={250} data={this.state.data}>
            <Line type="monotone" dataKey="temperature" stroke="#82ca9d" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="time"> <Label value="Temperature" offset={0} position="insideBottom" /> </XAxis>
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>
        <div className='line-chart'>
          <LineChart width={750} height={250} data={this.state.data}>
            <Line type="monotone" dataKey="water_tank" stroke="#82ca9d" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="time"> <Label value="Water Tank" offset={0} position="insideBottom" /> </XAxis>
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>

      </div>
    );
  }
}

export default connect()(Home);