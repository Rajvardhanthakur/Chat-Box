import React, {useState, useEffect} from 'react';
import './App.css';
import {Button, FormControl, InputLabel, Input} from "@material-ui/core";
import Message from './Message';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{username: "Pradeep", text: "Hii guys"}, {username: "Partik", text: "YOo budy"}]);
  const [username, setUsername] = useState('');


  useEffect(() => {
    setUsername(prompt('please enter your name!'))
  }, [])


  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, {username: username, text: input}]);
    setInput('');
  }


  
  return (
    <div className="App">
      <h1>Messenger Clone</h1>
      <h1>Welcome {username}</h1>     
      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
          <Button disabled={!input} varient="contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button>
        </FormControl>
        
      </form>

      {
        messages.map(message => (
          <Message username={message.username} text={message.text} />
        ))
      }
    </div>
  );
}

export default App;
