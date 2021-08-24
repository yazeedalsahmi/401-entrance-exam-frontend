import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class FavFlowers extends React.Component {
  Constructor(props){
    super(props)
    this.state ={
      favFlowersData:[],
      show:false,
      name:'',
      photo:'',
      instructions:''

    }
  }
  componentDidMount = async () =>{
    const allfavflowers =await axios.get (`${process.env.REACT_URL}/getfavflowers`)
    this.setState({
      favFlowersData: allfavflowers.data
    })
    let updateflower = (index) =>{
      this.setState({
        show:true,
        photo:this.state.favFlowersData[index].photo,
        name:this.state.favFlowersData[index].photo,
        instructions:this.state.favFlowersData[index].photo,
      })
    }
  }
  handleclose =() =>{
    this.setState({
      show:false
    })
  }
  updateFavFlowesr= async(event) =>{
    event.preventdefualt()
    const id =this.state.favFlowersData[this.state.index].name
    const obj = {
      name:event.target.name.value,
      photo:event.target.photo.value,
      instructions:event.target.instructions.value
    }
    const updateDataArr= await axios.put(`${process.env.REACT_URL}/getFlower`)


  }
    render() {
    return(
      <>
        <h1>My Favorite Flowers</h1>
      </>
    )
  }
}

export default FavFlowers;
