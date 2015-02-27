var React = require('react'),
    Bootstrap = require('react-bootstrap'),
    MUI = require('material-ui');

var Panel = Bootstrap.Panel,
    TextField = MUI.TextField,
    RaisedButton = MUI.RaisedButton,
    FlatButton = MUI.FlatButton;

var title = (
    <h3>Login</h3>
  );

var LoginPanel = React.createClass({
    getInitialState: function() {
        return {
            username: "kevin",
            password: ""
        };
    },
    
    login: function(event) {
        console.log(this.state.username);
        console.log(this.state.password);
        //console.log(this.refs.aaa.getDOMNode());        
    },
    
    onInputTextChanged: function(event) {
        var state = {};
        state[event.target.name] = event.target.value;
        this.setState(state);
    },
    
    render: function() {
        var username = this.state.username;
        var password = this.state.password;
        
        var onInputTextChanged = this.onInputTextChanged;
        
        return (
            <div className="col-sm-6 col-md-4 col-md-offset-4">
            <Panel header={title} bsStyle="primary">
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-md-offset-4">
                        <TextField hintText={username} floatingLabelText="User name" name="username" onChange={onInputTextChanged} />
                    </div>
                </div>                
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-md-offset-4">
                        <TextField hintText={password} floatingLabelText="Password" type="password" name="password" onChange={onInputTextChanged} />
                    </div>
                </div>

                <div className="row top-buffer">                    
                    <div className="col-sm-6 col-md-4 col-md-offset-4">
                        <RaisedButton label="Login" primary={true} onTouchTap={this.login} />
                    </div>
                </div>

                <div className="row top-buffer">                    
                    <div className="col-sm-6 col-md-4 col-md-offset-4">
                        <FlatButton label="Register" secondary={true} onTouchTap={this._handleTouchTap} />
                    </div>
                </div>
            </Panel>   
            </div>
        );
        
        /*
        <div class="card blue-grey darken-1">
        return (
            <div className="col-sm-6 col-md-4 col-md-offset-4">
            <Panel header={title} bsStyle="primary">
                <TextField hintText="" floatingLabelText="User name" />
                <TextField hintText="" floatingLabelText="Password" type="password"/>
                <RaisedButton label="Login" primary={true} onTouchTap={this._handleTouchTap} />
                <div><a href="#">Register</a></div>
            </Panel>
            </div>
        );*/
    }
});

module.exports = LoginPanel;
