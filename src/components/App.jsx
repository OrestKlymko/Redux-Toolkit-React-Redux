import { Filter } from './filter/Filter';
import { Form } from './contacts/contacts';
import { ContactList } from './contactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, removeContact } from '../redux/contactSlice';
import { filterContacts } from '../redux/filterSlice';

export function App() {
  const contacts = useSelector(state => state.contacts.array);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const onInput = data => {
    dispatch(filterContacts(data.toLowerCase()));
  };

  const formSubmit = data => {
    if (Boolean(contacts.find(contact => contact.name === data.name))) {
      alert(`${data.name} is already in contacts`);
    } else {
      dispatch(addContact(data));
    }
  };

  const onDeleteContact = deleteItem => {
    dispatch(removeContact(deleteItem));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Form formSubmit={formSubmit} />
      <h2>Contacts</h2>
      <Filter onChange={onInput} />
      <ContactList
        onClick={onDeleteContact}
        contacts={contacts}
        filter={filter}
      />
    </div>
  );
}
