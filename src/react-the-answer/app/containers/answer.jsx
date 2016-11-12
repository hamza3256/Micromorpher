import React from 'react'
import {Question, QuestionSubmit, Answer} from '../components/answer'

class TheAnswer extends React.Component {

    constructor (props) {
        super(props)
        const theAnswer = this.props.theAnswer
        const questionEvent = theAnswer.Question()
        this.state = {
            theAnswer: theAnswer,
            questionEvent: questionEvent,
            question: "",
            answer: ""
        }

        this._setQuestionEvent()

    }

    _setQuestionEvent() {
        const theAnswer = this.state.theAnswer
        const questionEvent = this.state.questionEvent
        const thisJs = this
        questionEvent.watch(function(error, result) {
            if (!error) {
                console.log('Question set! ' + result.args.question.toString())
                const answer = result.args.answer.toString()
                thisJs.setState({answer: answer})
                console.log('Got Answer ' + answer)
            } else {
                console.error(result)
            }
        })
    }

    _handleQuestion(value) {
        this.setState({question: value})
        console.log('Question is ' + value)
    }

    _handleQuestionSubmit(value) {
      const theAnswer = this.state.theAnswer
      const question = this.state.question
      console.log('The Question to Ask Is ' + question)
      console.log('Address is ' + JSON.stringify(theAnswer))
      this.setState({answer: 0})
      theAnswer.setQuestion(question)
    }

    render() {
        return (
            <div>
                <Question parentFunc={this._handleQuestion.bind(this)}/>
                <QuestionSubmit parentFunc={this._handleQuestionSubmit.bind(this)}/>
                <Answer answer={this.state.answer}/>
            </div>
        )
    }

}

TheAnswer.propTypes = {
    theAnswer: React.PropTypes.object
}

export default TheAnswer
