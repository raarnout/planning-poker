import { ChangeEventHandler } from 'react';

export interface DropDownProps {
    label: string;
    options: Array<Options>;
}

export type Options = {
    text: string;
    key: string;
    value: string;
}

const onChange = (event: ChangeEventHandler<HTMLSelectElement>) => {
    console.log('dorpdown value changed');
}

/**
 * Primary UI component for user interaction
 */
const DropDown = ({
    label, options
}: DropDownProps) => {
    return (
        <label>
            {label}
            <select value={label} onChange={onChange}>
                {options.map(option => (
                    <option value={option.value} key={option.key}>{option.text}</option>
                ))}
            </select>
        </label>
    );
};

export default DropDown;
