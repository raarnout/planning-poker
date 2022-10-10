import { FormEvent, useState } from "react";

export interface DropDownProps {
    label: string;
    options: Array<Options>;
    onChange: (event: FormEvent<HTMLSelectElement>) => void;
}

export type Options = {
    text: string;
    key: string;
    value: string;
};

/**
 * Primary UI component for user interaction
 */
const DropDown = ({ label, options, onChange }: DropDownProps) => {
    const [selectedValue, setValue] = useState('default');

    const handleDropdownChanged = (event: FormEvent<HTMLSelectElement>) => {
        setValue(event.currentTarget.value);
    }

    return (
        <label>
            {label}
            <select value={selectedValue} onChange={handleDropdownChanged}>
                {options.map(option => (
                    <option value={option.value} key={option.key}>
                        {option.text}
                    </option>
                ))}
            </select>
        </label>
    );
};

export default DropDown;
