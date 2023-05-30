import React, { Component } from "react";
import css from "./ContactForm.module.css";
import PropTypes from 'prop-types';

export class ContactForm extends Component {

static propTypes = {
    onSabmit: PropTypes.func.isRequired,
};

state = {
    name : '',
    number: '',
}

handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name] : value });
}

handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSabmit({...this.state});

    this.reset();
}

reset = () => {
    this.setState({ name : '' , number : ''});
  }

render () {
    const { number, name } = this.state;
    
    return (
        <form onSubmit={this.handleSubmit} className={css.form}>
            <label className={css.label}>
                Name
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.handleChange}
                value={name}
                className={css.input}
            />
            </label>
            <label className={css.label}>
                Number
            <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={this.handleChange}
                value={number}
                className={css.input}
            />
            </label>
            <div className={css.btnContainer}>
                <button type="submit" className={css.button}>Add contact</button>
            </div>
        </form>
    );
}
}