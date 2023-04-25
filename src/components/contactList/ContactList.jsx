import css from './contactlist.module.css';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contactSlice';

export function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  console.log(contacts);

  const onDeleteContact = deleteItem => {
    dispatch(removeContact(deleteItem));
  };

  return (
    <>
      <ul>
        {contacts
          .filter(item => item.name.toLowerCase().includes(filter))
          .map(contact => {
            return (
              <li key={contact.name}>
                {contact.name}: {contact.number}
                <button
                  className={css.deleteBtn}
                  onClick={() => onDeleteContact(contact.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
}

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };
