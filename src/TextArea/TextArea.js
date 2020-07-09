import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon';
import s from './TextArea.scss';

const TextArea = ({ value, label, children, onChange, rows }) => {
  const [currentValue, setValue] = React.useState(value);

  const handleChange = e => {
    const val = e.target.value;
    setValue(val);
    onChange(val);
  };
  return (
    <div className={s.textArea}>
      <div className={s.textArea__labelContainer}>
        <span className={s.textArea__label}>{label || children}</span>
      </div>
      <div className={s.textArea__inputContainer}>
        <textarea
          className={s.textArea__input}
          type="text"
          value={currentValue}
          onChange={handleChange}
          rows={rows || 10}
        />
      </div>
    </div>
  );
};
TextArea.propTypes = {
  prop: PropTypes.string,
};

export default TextArea;
