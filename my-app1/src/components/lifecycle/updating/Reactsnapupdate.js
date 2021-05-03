import React, { Component } from 'react'

 
export default class ReactSnapUpdate extends Component {
    constructor(props) {
        super(props)

 
        this.state = {
            technologyStack: 'MEAN STACK'
        }
    }

 
    componentDidMount() {
        setTimeout(() => {
            this.setState({ technologyStack: 'MERN STACK' })
        }, 3000)
    }

 
    getSnapshotBeforeUpdate(prevProps, prevState) {
      return (
        document.getElementById('BeforeUpdate').innerHTML = 'Before Update the Value was '
            + prevState.technologyStack
            )
    }

 
    componentDidUpdate(prevProps, prevState, snapshot) {
        document.getElementById('AfterUpdate').innerHTML = 'After Update the Value was' + 
        this.state.technologyStack;
        console.log(snapshot);

    }

 
    render() {
        return (
            <div>
                <h2>{this.state.technologyStack}</h2>
                <div id="BeforeUpdate"></div>
                <div id="AfterUpdate"></div>
            </div>
        )
    }
}