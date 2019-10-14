import React from 'react';

function jsonPost(data) {
    return fetch("http://students.a-level.com.ua:10012",{method:'POST',body:JSON.stringify(data)})
}
let receive = function recieveData() {
    return jsonPost({func: 'getMessages', messageId: 0})
}
receive().then(r=>r.json()).then(data=>console.log(data))
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nick:'',
            message:''
        }
        this.onChange=this.onChange.bind(this);
        this.onClick=this.onClick.bind(this);
    }
    onChange(e){
        this.setState({[e.target.id ]:[e.target.value]})
    }
    onClick() {
        jsonPost({func: 'addMessage',nick:this.state.nick,message:this.state.message})
    }
    
  render() {
    return (
        <div className="App">
            <input id="nick" type = "text" placeholder="nick" onChange={evt=>this.onChange(evt)}/>
            <input id="message" type="text" placeholder="message" onChange={evt=>this.onChange(evt)}/>
            <input id="input" type="button" value = 'submit' onClick={this.onClick}/>
            <div id='container'></div>
        </div>
    );
  }
}

export default App;
