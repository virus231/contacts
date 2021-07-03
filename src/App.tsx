import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {getContacts} from "./api/contactsApi";
import {fetchContacts} from "./redux/contacts/contacts.action";
import {useAppDispatch, useAppSelector} from './app/hooks';
import * as contactsSelector from './redux/contacts/selectors'
import { Contacts } from './pages/Contacts';

function App() {
  const dispatch = useAppDispatch()
  const contacts = useAppSelector(contactsSelector.contacts)

  console.log(contacts)

  React.useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch])



  return (
    <div className="App">
      <Contacts/>
    </div>
  );
}

export default App;
