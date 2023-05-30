import React from "react";
import css from './Filter.module.css'
import PropTypes from 'prop-types';

export const Filter = ({value, onChange}) => {
    return (
        <div className={css.container}>
          <label className={css.label}>
            Find contacts by name
          <input
              type="text"
              name="filter"
              title="Fiter"
              required
              onChange={onChange}
              value={value}
              className={css.input}
          />
          </label>
        </div>
        )
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
