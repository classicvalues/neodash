import React from 'react';
import { ColorPicker } from 'mui-color';

const NeoColorPicker = ({ value, onChange, defaultValue, label, style }) => {
  return (
    <div style={style}>
      <div className='ndl-form-item ndl-type-text ndl-small'>
        <label htmlFor={label} className='ndl-form-item-label ndl-fluid'>
          <div className='ndl-input-wrapper'>
            <ColorPicker
              key={label}
              defaultValue={defaultValue}
              value={value}
              onChange={(e) => onChange(e.css.backgroundColor)}
            />
          </div>
          <div className='ndl-form-item-wrapper'>
            <span className='ndl-form-label-text'>{label}</span>
          </div>
        </label>
      </div>
    </div>
  );
};

export default NeoColorPicker;
