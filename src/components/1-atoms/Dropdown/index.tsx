import { ChangeEvent, useId } from 'react';

export interface DropDownProps {
	label: string;
	selected: string;
	options: Array<Options>;
	onChange: (voting: string) => void;
}

export type Options = {
	text: string;
	value: string;
	key: string;
};

/**
 * Primary UI component for user interaction
 */
const DropDown = ({ label, selected, onChange, options }: DropDownProps) => {
	const handleDropdownChanged = (event: ChangeEvent<HTMLSelectElement>) => {
		onChange(event.target.value as string);
	};

	return (
		<label key={`dropdown-${useId()}`}>
			{label}
			<select value={selected} onChange={handleDropdownChanged}>
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
