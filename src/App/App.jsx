import { useEffect } from 'react';
import css from '../App/App.module.css';
import { Forma } from 'components/ContactForm/Forma';
import { Filterds } from 'components/Filter/Filter';
import { ContactsList } from 'components/Contacts/ContactsList';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'Redux/phonebook/phonebookOperation';


export const App = () => {
 const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <Forma />

      <h1>Contacts</h1>
      <Filterds />
      <ContactsList
      />
    </div>
  );
};
