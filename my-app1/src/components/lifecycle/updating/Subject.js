import React, { Component } from 'react'

 
export default class Subject extends Component {
    constructor(props) {
        super(props)

 
        this.state = {
            subject:'Maths'
        }
    }

 
    componentDidMount() {
        setTimeout(() => {
            this.setState({ subject: 'kannada' })
        }, 3000)
    }

 
    getSnapshotBeforeUpdate(prevProps, prevState) {
      return (
        document.getElementById('BeforeUpdate').innerHTML = 'Before Update the Value was '
            + prevState.subject
            )
    }

 
    componentDidUpdate(prevProps, prevState, snapshot) {
        document.getElementById('AfterUpdate').innerHTML = 'After Update the Value was' + 
        this.state.subject;
        console.log(snapshot);

    }

 
    render() {
        return (
            <div>
                <h2>{this.state.subject}</h2>
                <div id="BeforeUpdate"></div>
                <div id="AfterUpdate"></div>
            </div>
        )
    }
}