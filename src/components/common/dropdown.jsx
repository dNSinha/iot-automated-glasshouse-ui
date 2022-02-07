import React from 'react';


export default function Dropdown(props) {
    return (
        <label>
            {props && props.label}
            <select value={props && props.value} onChange={props && props.onChange}>
                {props && props.options.map((option) => (
                    <option value={option && option.value}>{option && option.value}</option>
                ))}
            </select>
        </label>
    );
}
