import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import {increaseCounter} from "../redux/actions/counterActions"
import { connect } from 'react-redux'

class Increase extends Component {
  render() {
    return (
      <div>
        <button onClick={e=>{
          this.props.dispatch(increaseCounter());
        }}>
          1 increase
        </button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {actions:bindActionCreators(increaseCounter,dispatch)}   //->counterActions
}


export default connect(mapDispatchToProps)(Increase);