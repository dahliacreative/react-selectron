import React from 'react'
import ReactDOM from 'react-dom'

class Options extends React.Component {
  componentDidMount() {
    this.options = document.createElement('div')
    document.body.appendChild(this.options)
    this.renderOptions(this.props)
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.options)
    document.body.removeChild(this.options)
  }

  componentWillReceiveProps(nextProps) {
    this.renderOptions(nextProps)
  }

  renderOptions(props) {
    const { select } = props
    const style = {
      position: 'absolute',
      top: select.offsetTop + select.clientHeight,
      left: select.offsetLeft,
      width: select.clientWidth
    }
    ReactDOM.render(
      <div className="selectron__options" style={ style } ref={node => { this.wrapper = node }}>
        { props.children }
      </div>
    , this.options)
  }

  render() {
    return null
  }
}

export default Options