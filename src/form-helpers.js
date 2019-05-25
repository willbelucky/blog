import React from 'react';

export const renderField = ({
                         name,
                         input,
                         label,
                         type,
                         meta: {touched, error, warning, invalid}
                     }) => (
    <div className={`form-group`}>
        <label htmlFor={name}>{label}</label>
        {type === 'textarea'
            ? <textarea {...input} placeholder={label}
                        className={`form-control ${touched && invalid ? 'is-invalid' : ''}`}/>
            : <input {...input}
                     placeholder={label}
                     type={type}
                     className={`form-control ${touched && invalid ? 'is-invalid' : ''}`}/>}
        <div className="invalid-feedback">
            {touched &&
            ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
    </div>
);