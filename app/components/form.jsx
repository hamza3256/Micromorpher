import React from 'react';
import PropTypes from 'prop-types'
import Select from 'react-select';

class Heading extends React.Component {

  /* constructor(props) {
    super(props)
  } */

  render () {
    return (
      <div className="heading">
        <h2 className="section-heading">{this.props.heading}</h2>
      </div>
    )
  }
}

Heading.propTypes = {
  heading: PropTypes.string
}

class TextOutput extends React.Component {

  /* constructor(props) {
    super(props)
  } */

  render () {
    return (
      <div className="section">
        <h2 className="section-heading">{this.props.label}</h2>
        <p>{this.props.result}</p>
      </div>
    )
  }
}

TextOutput.propTypes = {
  label: PropTypes.string,
  result: PropTypes.string
}

class TextInput extends React.Component {

  /* constructor(props) {
    super(props)
  } */

  _handleChange (e) {
    this.props.parentFunc(e.target.value)
  }

  render () {
    return (
      <div className="textInput">
        <h2>{this.props.label}
          <input
            type="text"
            placeholder={this.props.placeHolder}
            onChange={this._handleChange.bind(this)}
          />
      </h2>
      </div>
    )
  }
}

TextInput.propTypes = {
  parentFunc: PropTypes.func,
  placeHolder: PropTypes.string,
  label: PropTypes.string
}

class TextAreaInput extends React.Component {

  /* constructor(props) {
    super(props)
  } */

  _handleChange (e) {
    this.props.parentFunc(e.target.value)
  }

  render () {
    return (
      <div className="textAreaInput">
        <h2>{this.props.label}
          <textarea
            placeholder={this.props.placeHolder}
            onChange={this._handleChange.bind(this)}
          />
      </h2>
      </div>
    )
  }
}

TextAreaInput.propTypes = {
  parentFunc: PropTypes.func,
  placeHolder: PropTypes.string,
  label: PropTypes.string
}

class TextSelect extends React.Component {

  /* constructor(props) {
    super(props)
  } */

  _handleChange (value) {
    this.props.parentFunc(value)
  }

  render () {
    return (
      <div className="select">
        <h2>{this.props.label}</h2>
        <Select
          placeholder={this.props.placeHolder}
          searchable={this.props.searchable}
          disabled={this.props.disabled}
          clearable={this.props.clearable}
          options={this.props.selections}
          value={this.props.selection}
          onChange={this._handleChange.bind(this)}
        />
      </div>
    )
  }
}

TextSelect.propTypes = {
  parentFunc: PropTypes.func,
  selections: PropTypes.array,
  selection: PropTypes.number,
  searchable: PropTypes.bool,
  placeHolder: PropTypes.string,
  label: PropTypes.string
}

TextSelect.defaultProps = {
  disabled: false,
  clearable: true,
  searchable: true
}

class TextSelectPlus extends React.Component {

  /* constructor(props) {
    super(props)
  } */

  _handleChange (value) {
    this.props.parentFunc(value)
  }

  render () {
    return (
      <div className="select">
        <h2>{this.props.label}</h2>
        <Select.Creatable
          placeholder={this.props.placeHolder}
          searchable={this.props.searchable}
          disabled={this.props.disabled}
          clearable={this.props.clearable}
          options={this.props.selections}
          value={this.props.selection}
          onChange={this._handleChange.bind(this)}
        />
      </div>
    )
  }
}

TextSelectPlus.propTypes = {
  parentFunc: PropTypes.func,
  selections: PropTypes.array,
  // selection: PropTypes.string,
  searchable: PropTypes.bool,
  placeHolder: PropTypes.string,
  label: PropTypes.string
}

TextSelectPlus.defaultProps = {
  disabled: false,
  clearable: true,
  searchable: true
}

class FormSubmit extends React.Component {

  constructor(props) {
    super(props);
  }

  _handleSubmit() {
    this.props.parentFunc()
  }

  render() {
    return (
      <div className="section">
        <h2 className="section-heading">{this.props.label}</h2>
        <button onClick={this._handleSubmit.bind(this)}>{this.props.buttonLabel}</button>
      </div>
    );
  }
}

FormSubmit.propTypes = {
  parentFunc:PropTypes.func,
  label:PropTypes.string,
  buttonLabel:PropTypes.string
}

export {Heading, TextOutput, TextInput, TextAreaInput, TextSelect, TextSelectPlus, FormSubmit}
