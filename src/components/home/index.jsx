import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Label } from 'recharts';
import SensorApi from '../../api/SensorApi';
import { helpers } from '../utilities/helper';
import Dropdown from '../common/dropdown';
import './style.scss';

const sensorValue = (response) => {
  let formattedResponse = {
    time: response && response.time && response.time.substring(0, 5),
    avg_soil_moisture: response && response.avg_soil_moisture && response.avg_soil_moisture.toString(),
    soil_moisture1: response && response.soil_moisture1 && response.soil_moisture1.toString(),
    soil_moisture2: response && response.soil_moisture2 && response.soil_moisture2.toString(),
    soil_moisture3: response && response.soil_moisture3 && response.soil_moisture3.toString(),
    humidity: response && response.humidity && response.humidity.toString(),
    temperature: response && response.temperature && response.temperature.toString(),
    water_tank: response && response.water_tank && response.water_tank.toString(),
    light: response && response.water_tank && response.light.toString()
  }
   return formattedResponse;
}

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
      }],
      value: "",
      options: []
    }

    this.fetchData = this.fetchData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.fetchDate = this.fetchDate.bind(this);
    this.fetchDatedData = this.fetchDatedData.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({ value: event.target.value });
    this.fetchDatedData();
  };

  fetchDate() {
    SensorApi.getDate().then(res => {
      this.setState({
        options: res.data && res.data.sensorValues
      })
    }).catch(err => {
      console.log(err);
    });
  }

  fetchDatedData() {
    const payloadData = { //For Timed Data
      date: this.state.value
    };

    SensorApi.getDatedData(payloadData).then(res => {
      let response = res.data && res.data.sensorValues;
      console.log('response', response);
      let datedDate = [];
      response.forEach(element => {
        datedDate.push(sensorValue(element));
      });
      this.setState({ data: datedDate })
    }).catch(err => {
      console.log(err);
    });
  }

  fetchData() {
    // const payloadData = { //For Timed Data
    //   date: helpers.getDate(),
    //   time: helpers.getTime()
    // };

    SensorApi.getCurrentData().then(res => {
      let response = res.data && res.data.sensorValues && res.data.sensorValues[0];

      const sensorValue = {
        time: response && response.time && response.time.substring(0, 5),
        avg_soil_moisture: response && response.avg_soil_moisture && response.avg_soil_moisture.toString(),
        soil_moisture1: response && response.soil_moisture1 && response.soil_moisture1.toString(),
        soil_moisture2: response && response.soil_moisture2 && response.soil_moisture2.toString(),
        soil_moisture3: response && response.soil_moisture3 && response.soil_moisture3.toString(),
        humidity: response && response.humidity && response.humidity.toString(),
        temperature: response && response.temperature && response.temperature.toString(),
        water_tank: response && response.water_tank && response.water_tank.toString(),
        light: response && response.water_tank && response.light.toString()
      }

      const prevSensor = this.state.data.slice(-1) && this.state.data.slice(-1)[0];

      if (prevSensor.time !== sensorValue.time) {
        this.setState(prevState => ({ //To update the existing
          data: [...prevState.data, sensorValue]
        }));
      }

    }).catch(err => {
      console.log(err);
    });
  }

  componentDidMount() {
    this.fetchDate();
    // this.fetchDatedData();
    // setInterval(() => {
    //   this.fetchData()
    // }, 60000);
  }



  render() {
    return (
      <div className='container'>
        <Dropdown
          label="What do we eat?"
          options={this.state.options}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div className='line-chart'>
          <LineChart width={750} height={250} data={this.state.data}>
            <Line type="monotone" dataKey="avg_soil_moisture" stroke="#9b7653" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="time"> <Label value="Average Soil Moisture" offset={0} position="insideBottom" /> </XAxis>
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>
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
            <Line type="monotone" dataKey="temperature" stroke="#82ca9d" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="time"> <Label value="Temperature" offset={0} position="insideBottom" /> </XAxis>
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>
        <div className='line-chart'>
          <LineChart width={750} height={250} data={this.state.data}>
            <Line type="monotone" dataKey="water_tank" stroke="#412aef" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="time"> <Label value="Water Tank" offset={0} position="insideBottom" /> </XAxis>
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>
        <div className='line-chart'>
          <LineChart width={750} height={250} data={this.state.data}>
            <Line type="monotone" dataKey="light" stroke="#82ca9d" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="time"> <Label value="Light" offset={0} position="insideBottom" /> </XAxis>
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>

      </div>
    );
  }
}

export default connect()(Home);