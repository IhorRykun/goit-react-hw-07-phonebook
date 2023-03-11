import PropTypes from 'prop-types';
import css from '../Filter/Filterds.module.css';
import { useDispatch } from 'react-redux';
import { isFilter } from 'Redux/phonebook/phonebookSlice';



export const Filterds = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        onChange={e => dispatch(isFilter(e.target.value))}
      />
    </div>
  );
};

Filterds.propTypes = {
  onInput: PropTypes.func,
};
