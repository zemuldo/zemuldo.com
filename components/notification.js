
import React, {Component} from 'react';

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      message: '',
      options: {}
    };
  }

  componentDidMount() {
    if (window) {
      window.notification = (message, _options) => {
        let timeout;
        clearTimeout(timeout);
        let options = _options || {};
        let visible = true, transparent = false;
        this.setState({ message, visible, transparent, options });

        timeout = setTimeout(() => {
          this.setState({ transparent: true, options: {} });
        },4000);
        return message;
      };
    }
  }

  getStyle() {
    return {
      opacity: this.state.transparent ? 0 : 1,
      display: 'flex',
      position: 'fixed',
      top: 10,
      right: 10,
      alignItems: 'center',
      paddingLeft: 7,
      paddingRight: 7,
      transition: 'all 1s',
      borderRadius: 3,
      color: this.state.options.error ? 'red' : 'white',
      fontSize: '18px',
      maxWidth: 100,
      height: 50,
      zIndex: 700000
    };
  }

  render() {
    if (this.state.visible === true) {
      return <div style={ this.getStyle() }>{this.state.message}</div>;
    } else {
      return null;
    }
  }
}