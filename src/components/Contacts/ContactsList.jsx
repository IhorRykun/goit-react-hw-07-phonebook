import css from '../Contacts/ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import {
  deleteContact,
  fetchContacts,
} from 'Redux/phonebook/phonebookOperation';
import {
  getLoading,
  getStoreContacts,
  getStoreFilter,
} from 'Redux/phonebook/phonebookSlice';

export const ContactsList = () => {
  const contactsGallery = useSelector(getStoreContacts);
  const filter = useSelector(getStoreFilter);
  const loading = useSelector(getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const henandleDelete = id => {
    dispatch(deleteContact(id));
  };

  let rendered = [];
  const normalizedFilter = filter.toLowerCase().trim();
  const filterContacts = contactsGallery.filter(cont =>
    cont.name.toLowerCase().includes(normalizedFilter)
  );

  filter.length === 0
    ? (rendered = contactsGallery)
    : (rendered = filterContacts);

  return (
    <>
      {loading && <Loader />}
      <ul className={css.list}>
        {rendered.map(cont => (
          <li className={css.item} key={cont.id}>
            <img
              className={css.avatar__img}
              src={cont.avatar}
              alt={cont.name}
              width="32px"
            />
            <span>{cont.name}: </span>
            <span>{cont.number}</span>
            <button
              type="submit"
              className={css.button__del}
              onClick={e => henandleDelete(cont.id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
