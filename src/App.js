import React, {useState, useEffect} from 'react';
import './App.css';
import {Button, FormControl, InputLabel, Input} from "@material-ui/core";
import Message from './Message';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(["hello, hii, whats'up"]);
  const [username, setUsername] = useState('');


  useEffect(() => {
    setUsername(prompt('please enter your name!'))
  }, [])


  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput('');
  }


  
  return (
    <div className="App">
      <h1>Messenger Clone</h1>
      
      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
          <Button disabled={!input} varient="contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button>
        </FormControl>
        
      </form>

      {
        messages.map(message => (
          <Message text={message} />
        ))
      }
    </div>
  );
}

export default App;
