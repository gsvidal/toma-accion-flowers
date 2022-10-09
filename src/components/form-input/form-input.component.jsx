import './form-input.styles.scss';

export const FormInput = ({ label, ...inputProps }) => {
  return (
    <div className="form-group">
      <input className="form-input" {...inputProps} />
      {label && (
        <label
          className={`form-input-label ${inputProps.value.length && 'shrink'}`}
          htmlFor={inputProps.id}
        >
          {label}
        </label>
      )}
    </div>
  );
};
