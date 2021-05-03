import React, { Component } from 'react'
import { UserConsumer } from '../../useContext'

export default class ComponentF extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
{(username)=>{
  return <h2>Hello {username}</h2>
}}

        </UserConsumer>
      </div>
    )
  }
}
