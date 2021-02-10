import { useEffect, useState } from 'react';
import './App.css';
import database from './firebase';
import firebase from 'firebase';
import { Button, TextField } from '@material-ui/core'


function App() {

  const[input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [userName, setUserName] = useState("Guest");

  useEffect(() => {
    const name = window.prompt("Enter a user name: ")
    setUserName (name);
  }, []);

  useEffect(() => {
    database.collection("messages").orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setList(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data(),
      })))
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    const chatMessage = {
      name: userName,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }
    database.collection('messages').add(chatMessage)
    setInput("")
  };

  return (
    <div className="app">

      <h1 className="app__header">Chat Application</h1>


        <table className="app__center">
          <tr>
            <th className="app__centerTH">UserName</th>
            <th className="app__centerTH">Message</th>
          </tr>
          {list.map(({id, data: {name, timestamp, message}}) => (
          <tr key={id}>
            <td className="app__centerTD"><h3 className="app__centerName">{name}</h3></td>
            <td className="app__centerTD"><h3 className="app__centerMessage">{message}</h3></td>
          </tr>
          ))}
        </table>

        
      <form>
      <TextField id="filled-basic" label="Filled" variant="filled"
         className="app__text"
        value={input} onChange={event => setInput(event.target.value)} 
      />

      <Button
        variant="contained"
        color="primary"
        onClick={sendMessage} 
        type="submit"
      >
        Send
      </Button>
      </form>
     
    </div>
  );
}

export default App;
