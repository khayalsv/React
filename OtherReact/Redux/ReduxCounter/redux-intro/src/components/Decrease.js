import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { decreaseCounter } from "../redux/actions/counterActions"
import { connect } from 'react-redux'

class Decrease extends Component {
  render() {
    return (
      <div>
        <button onClick={e => {
          this.props.dispatch(decreaseCounter());
        }}>
          1 decreaseCounter
        </button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(decreaseCounter, dispatch) }   //->counterActions
}


export default connect(mapDispatchToProps)(Decrease);