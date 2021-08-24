import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeCards from './HomeCards';
const axios = require('axios');


class Home extends React.Component {
  
  Constructor(props) {
  super(props);
  this.state = {
    homedata:[]
  }
  }
componentDidMount = async() => {
  const getHomeData = await axios.get (`${process.env.REACT_URL}/getFlower`);
  this.setState =({ 
    homedata: getHomeData.data
  })

  
};
  render() {

    return (
      <>
        <HomeCards 
        homedata = {this.state.homedata}
        />
      </>
    );
  };
}


export default Home;
