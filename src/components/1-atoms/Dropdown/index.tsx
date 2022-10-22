<<<<<<< HEAD
import { ChangeEvent, useId } from 'react';

export interface DropDownProps {
	label: string;
	options: Array<Options>;
	onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
=======
import { FormEvent, useState } from "react";

export interface DropDownProps {
    label: string;
    options: Array<Options>;
    onChange: (event: FormEvent<HTMLSelectElement>) => void;
>>>>>>> cfeee526d6db9c2b6159cafb522ac9ca1860d2f4
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
<<<<<<< HEAD
	const id = useId();
	return (
		<label key={`dropdown-${id}`}>
			{label}
			<select value={label} onChange={onChange}>
				{options.map(option => (
					<option value={option.value} key={option.key}>
						{option.text}
					</option>
				))}
			</select>
		</label>
	);
=======
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
>>>>>>> cfeee526d6db9c2b6159cafb522ac9ca1860d2f4
};

export default DropDown;
