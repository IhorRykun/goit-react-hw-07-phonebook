import { useEffect } from 'react';
import css from '../App/App.module.css';
import { Forma } from 'components/ContactForm/Forma';
import { Filterds } from 'components/Filter/Filterds';
import { ContactsList } from 'components/Contacts/ContactsList';
import { useDispatch } from 'react-redux';

const LOCALSTORAGE_KEY = 'contact';

export const App = () => {
 const dispatch = useDispatch();
 

  useEffect(() => {
   dispatch(fac)
  }, []);


  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <Forma addContact={addContact} contacts={contacts} />

      <h1>Contacts</h1>
      <Filterds onInput={onInput} />
      <ContactsList
        contacts={contacts}
        filter={filter}
        filtered={filtered}
        deleteItem={deleteItem}
      />
    </div>
  );
};
