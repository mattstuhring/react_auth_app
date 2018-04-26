import React from 'react';
import Navigation from 'Navigation';

export default class Main extends React.Component {
  render(){
    return(
      <div>
        {/* TOP NAVBAR */}
        <Navigation/>
        
        <div className="container">
          <div className="row">
            <div>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
