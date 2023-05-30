import PropTypes from 'prop-types';
import css from './ContactsList.module.css'

export const ContactList = ({contacts, onDeleteContact}) => {
    return (
        <div className={css.container}>
          <ul className={css.list}>
            {contacts.map(({ id, name, number }) => {
              return (
                <li key={id} className={css.item}>
                    <p>{ name }: { number}</p>
                    <button type="button" onClick={() => onDeleteContact(id)} className={css.buttonDelete}>Delete</button>
                </li>
              );
            })}
          </ul>
        </div>
    )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};