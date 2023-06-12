import React, { Component } from 'react'

export class BankFormComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         firstName : '',
         lastName : '',
         phoneNumber : '',
         addressProof : '',
         fatherName : '',

      }
    }

    firstNameHandler = (event) =>{
        this.setState({
            firstName : event.target.value
        })
    }

    lastNameHandler = (event) =>{
        this.setState({
            lastName : event.target.value
        })
    }

    phoneNumberHandler = (event) =>{
        this.setState({
            phoneNumber : event.target.value
        })
    }



    addressProofHandler = (event) =>{
        this.setState({
            addressProof : event.target.value
        })
    }

    fatherNameHandler = (event) =>{
        this.setState({
            fatherName : event.target.value
        })
    }

    ageHandler = (event) =>{
        this.setState({
            age : event.target.value
        })
    }

    formSubmitHandler = (event)=>{
        event.preventDefault()

        console.log(this.state.firstName, this.state.lastName, this.state.phoneNumber, this.state.phoneNumber, this.state.addressProof, this.state.fatherName)
    }
    

  render() {

    const {firstName, lastName, age, phoneNumber,  addressProof, fatherName} = this.state
    return (
        <form onSubmit={this.formSubmitHandler } id='formdiv'>
        <div id='container'>
        <div>
           <label>First Name</label>
           <input 
                type="text" 
                name='firstName'
                placeholder='Enter your First Name'
                value={firstName}
                onChange={this.firstNameHandler}
                required
           /> 
        </div>

        <div>
           <label>Last Name</label>
           <input 
                type="text" 
                name='lastName'
                placeholder='Enter your Last Name'
                value={lastName}
                onChange={this.lastNameHandler}
                required
           /> 
        </div>

        <div>
           <label>Age</label>
           <input 
                type="text" 
                name='age'
                placeholder='Enter your Age'
                value={age}
                onChange={this.ageHandler}
                pattern='[0-9]{1,2}'
                required
           /> 
        </div>

        <div>
           <label>Phone Number</label>
           <input 
                type="text" 
                name='phoneNumber'
                placeholder='Enter your Phone Number'
                value={phoneNumber}
                onChange={this.phoneNumberHandler}
                pattern='[0-9]{10}'
                required
           /> 
        </div>
        
        <div>
           <label>Address Proof</label>
           <input 
                type="text" 
                name='addressProof'
                placeholder='Enter your First Name'
                value={addressProof}
                onChange={this.addressProofHandler}
                required
           /> 
        </div>

        <div>
           <label>Father Name</label>
           <input 
                type="text" 
                name='fatherName'
                placeholder="Enter your Father Name"
                value={fatherName}
                onChange={this.fatherNameHandler}
                required
           /> 
        </div>

        <div>
            <button type='submit'>Submit</button>
        </div>
        </div>
    </form>
    )
  }
}

export default BankFormComponent