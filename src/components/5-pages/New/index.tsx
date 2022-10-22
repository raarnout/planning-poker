import { ChangeEvent, FormEvent, Fragment, useEffect, useState } from 'react';
import Button, { ButtonType } from '../../1-atoms/Button';
import DropDown, { Options } from '../../1-atoms/Dropdown';
import { addUser } from '../../../persistence/users';
import { addGame } from '../../../persistence/games';
import { useNavigate } from 'react-router-dom';

export const New = () => {
	const navigate = useNavigate();
	const [title, setTitle] = useState('');
	const [username, setUsername] = useState('');
	const [disabled, setDisabled] = useState(true);
	const [votingSystem, setVotingSystem] = useState('0,1,2,3,5,8,13,21,34,55');

	const handleChangeTitle = (event: FormEvent<HTMLInputElement>) => {
		event.preventDefault();
		setTitle(event.currentTarget.value);
	};

	const handleChangeUsername = (event: FormEvent<HTMLInputElement>) => {
		event.preventDefault();
		setUsername(event.currentTarget.value);
	};

<<<<<<< HEAD
	const handleDropdownChanged = (event: ChangeEvent<HTMLSelectElement>) => {
		event.preventDefault();
		setVotingSystem(event.currentTarget.value);
=======
	const handleDropdownChanged = (event: FormEvent<HTMLSelectElement>) => {
		console.log('handleDropdownChanged', event.currentTarget.value);
>>>>>>> cfeee526d6db9c2b6159cafb522ac9ca1860d2f4
	};

	const create = async () => {
		const userKey = await addUser({
			name: username
		});

		if (userKey === null) return;

		const gameKey = await addGame({
			title,
			host: userKey,
			votingSystem
		});
		navigate(`/${gameKey}`);
	};

	const votingOptions: Array<Options> = [
		{
			text: 'Fibonacci',
			key: 'fibonacci',
			value: '0,1,2,3,5,8,13,21,34,55'
		},
		{
			text: 'Modified Fibonacci',
			key: 'modified-fibonacci',
			value: '0,0.5,1,2,3,5,8,13,20,40'
		},
		{
			text: 'T-Shirt',
			key: 't-shirt',
			value: 'xxs,xs,s,m,l,xl,xxl'
		}
	];

	useEffect(() => {
		setDisabled(title === '' || username === '');
	}, [title, username]);

	return (
		<Fragment>
			<div>
				<div>
					<span>Title</span>
					<input
						placeholder="Title..."
						value={title}
						onChange={handleChangeTitle}
					></input>
				</div>
				<div>
					<span>Username</span>
					<input
						placeholder="Username..."
						value={username}
						onChange={handleChangeUsername}
					></input>
				</div>
				<div>
					<DropDown
						label="Voting System"
						options={votingOptions}
						onChange={handleDropdownChanged}
					></DropDown>
				</div>
			</div>
			<Button
				label={'Create Game'}
				type={ButtonType.SUBMIT}
				onClick={create}
				disabled={disabled}
			></Button>
		</Fragment>
	);
};
