import React from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions'

class UserHeader extends React.Component {
  render () {
    const renderedUser = this.props.user ? <div className='header' >{this.props.user.name}</div> : null
    return renderedUser
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users[ownProps.id] }
}
export default connect(mapStateToProps, { fetchUser })(UserHeader)
