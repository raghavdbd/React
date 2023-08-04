import React from "react";

class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userInfo:{
                name:"DummyName",
                location:"Dummylocation"
            }

         

        }



    }
  async  componentDidMount(){

    const data=await fetch("https://api.github.com/users/raghavdbd")
    const json=await data.json()

    this.setState({
        userInfo:json
    })


    }
    render(){

        return( 
            <>
        <h1>This is my profile</h1>
        <h2>{this.props.name}</h2>
        </>
    )}
}

export default Profile