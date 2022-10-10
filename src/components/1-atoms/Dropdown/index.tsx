export interface DropDownProps {
	label: string;
	options: Array<Options>;
	onChange: () => void;
}

export type Options = {
	text: string;
	key: string;
	value: string;
};

/**
 * Primary UI component for user interaction
 */
const DropDown = ({ label, options }: DropDownProps) => {
	return (
		<label>
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
};

export default DropDown;
