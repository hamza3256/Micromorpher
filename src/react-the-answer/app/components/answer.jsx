import React from 'react'

class Question extends React.Component {

  constructor (props) {
    super(props)
  }

  _handleQuestionChange (e) {
    this.props.parentFunc(e.target.value)
  }

  render () {
    return (
      <div className="section">
        <h2 className="section-heading">{this.props.label}</h2>
        <input
          type="text"
          placeholder="Is Donald Trump nuts and are we in for 'interesting times'?"
          value={this.props.question}
          onChange={this._handleQuestionChange.bind(this)}
        />
      </div>
    )
  }
}

Question.propTypes = {
  parentFunc: React.PropTypes.func,
  question: React.PropTypes.string,
  label: React.PropTypes.string
}

Question.defaultProps = {
  label: 'The Question:'
}

class QuestionSubmit extends React.Component {

  constructor (props) {
    super(props);
  }

  _handlePress() {
    this.props.parentFunc()
  }

  render() {
    return (
      <div className="section">
        <h2 className="section-heading">{this.props.label}</h2>
        <button onClick={this._handlePress.bind(this)}>Ask!</button>
      </div>
    )
  }
}

QuestionSubmit.defaultProps = {
  label: 'Confirm Question:'
}

class Answer extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="section">
        <h2 className="section-heading">{this.props.label}</h2>
        <p>{this.props.answer}</p>
      </div>
    )
  }
}

Answer.propTypes = {
  answer: React.PropTypes.string,
  label: React.PropTypes.string
}

Answer.defaultProps = {
  label: 'The Answer:'
}

export {Question, QuestionSubmit, Answer}
