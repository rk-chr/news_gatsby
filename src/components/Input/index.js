/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
    label, htmlFor, type, placeholder, error, change
}) => {
    const InputClassName = error ? 'is-invalid' : null;
    return (
        <div className="form-group">
            <label htmlFor={htmlFor}>{label}</label>
            <input
                type={type}
                className={`form-control ${InputClassName}`}
                id={htmlFor}
                placeholder={placeholder}
                onChange={change}
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

Input.propTypes = {
    label: PropTypes.string.isRequired,
    htmlFor: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    change: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired,
};

export default Input;
