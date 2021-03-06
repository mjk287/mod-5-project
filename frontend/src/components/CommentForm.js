import React from 'react'
import { connect } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'

class CommentForm extends React.Component {
  state = {
    content: '',
    user_id: this.props.currentUser.id,
    post_id: this.props.postId
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return (
      <Form reply onSubmit ={(e) => this.props.handleSubmit(e, this.state)}>
        <Form.TextArea onChange={this.handleChange} value={this.state.content} name='content'  />
        <Button type='submit' basic>Add Reply!</Button>
      </Form>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(CommentForm)
