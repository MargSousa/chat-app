import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: props.online
    }
  }

  render() {
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt={this.props.name}/>
        <div>
          <h4 className="name">{this.props.name}</h4>
          <div className="status">
            <span 
            className={this.state.online ? 'status-online' : 'status-offline'}
            onClick={ event => {
              let newState = !this.state.online;
              this.setState({ online: newState })
            }}
            >
            </span> 
            <p className="status-text">{this.state.online ? 'Online' : 'Offline'}</p>
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  online: PropTypes.bool
};

export default Contact;
