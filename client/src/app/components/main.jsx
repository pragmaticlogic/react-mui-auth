var React = require('react'),
  MUI = require('material-ui');
  
var LoginPanel = require('./login-panel.jsx');  

var Main = React.createClass({

  render: function() {

    return (
      <div className="example-page">                
        <LoginPanel />
      </div>
    );
  },

  _handleTouchTap: function() {
    console.log('1-2-3-4-5');
  }
  
});

module.exports = Main;

/*
var React = require('react');
var Bootstrap = require('react-bootstrap');

var Navigation = require('./navigation.jsx');

var Main = React.createClass({

    render: function () {
        return (
            <div>

                <Navigation projectName="react-bootstrap-starter" />

                <div className="container">
                    <div className="starter-template">
                        <h1>Bootstrap starter template</h1>
                        <p className="lead">Use this document as a way to quickly start any new project.
                            <br />
                        All you get is this text and a mostly barebones HTML document.</p>
                    </div>
                </div>
            </div>
        );
    }

});

module.exports = Main;*/