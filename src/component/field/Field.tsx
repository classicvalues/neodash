import React from 'react';
import { Dropdown, TextInput } from '@neo4j-ndl/react';

const textFieldStyle = { width: '155px', marginBottom: '10px', marginRight: '10px', marginLeft: '10px' };

const NeoField = ({
  label,
  value,
  style = textFieldStyle,
  choices = [],
  onChange,
  onClick = () => {},
  numeric = false,
  select = false,
  disabled = undefined,
  variant = undefined,
  helperText = undefined,
  defaultValue = undefined,
  multiline = false,
  placeholder = '',
  size = 'small',
}) => {
  return select === true ? (
    <div style={style}>
      <Dropdown
        label={label}
        type='select'
        selectProps={{
          options: choices,
          onChange: (newValue) => onChange(newValue.value),
          value: value != null ? { label: value, value: value } : { label: defaultValue, value: defaultValue },
          menuPlacement: 'auto',
        }}
        disabled={disabled}
        helpText={helperText}
        placeholder={placeholder}
        size={size}
      ></Dropdown>
    </div>
  ) : (
    <div style={style}>
      <TextInput
        key={label}
        variant={variant}
        label={label}
        helpText={helperText}
        disabled={disabled}
        value={value != null ? value : defaultValue}
        multiline={multiline.toString()}
        fluid
        onClick={(e) => {
          onClick(e.target.textContent);
        }}
        onChange={(event) => {
          if (!numeric) {
            onChange(event.target.value);
          } else if (
            event.target.value.toString().length == 0 ||
            event.target.value.endsWith('.') ||
            event.target.value.startsWith('-')
          ) {
            onChange(event.target.value);
          } else if (!isNaN(event.target.value)) {
            onChange(Number(event.target.value));
          }
        }}
        placeholder={placeholder}
        size={size}
      ></TextInput>
    </div>
  );
};

export default NeoField;
