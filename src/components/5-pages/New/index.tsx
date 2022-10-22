import { FormEvent, Fragment, useEffect, useState } from 'react';
import Button, { ButtonType } from '../../1-atoms/Button';
import DropDown, { Options } from '../../1-atoms/Dropdown';
import { addUser } from '../../../persistence/users';
import { addGame } from '../../../persistence/games';
import { useNavigate } from 'react-router-dom';
import { VotingSystem } from '../../../constants/enums/voting-systems';
import { Roles } from '../../../constants/enums/roles';

const getVotingValues = (system: string) => {
	let votingValues = '';
	switch (system) {
		case VotingSystem.MODIFIED_FIBONACCI:
			votingValues = '0,0.5,1,2,3,5,8,13,20,40';
			break;
		case VotingSystem.T_SHIRT:
			votingValues = '0,0.5,1,2,3,5,8,13,20,40';
			break;
		default:
			votingValues = 'xxs,xs,s,m,l,xl,xxl';
	}
	return votingValues;
};

export const New = () => {
	const navigate = useNavigate();
	const [title, setTitle] = useState('');
	const [username, setUsername] = useState('');
	const [disabled, setDisabled] = useState(true);
	const [voting, setVoting] = useState(VotingSystem.FIBONACCI as string);

	const handleTitleChanged = (event: FormEvent<HTMLInputElement>) => {
		event.preventDefault();
		setTitle(event.currentTarget.value);
	};

	const handleUsernameChanged = (event: FormEvent<HTMLInputElement>) => {
		event.preventDefault();
		setUsername(event.currentTarget.value);
	};

	const handleVotingChanged = (voting: string) => {
		setVoting(voting);
	};

	const create = async () => {
		const userKey = await addUser({
			name: username,
			role: Roles.HOST
		});

		if (userKey === null) return;

		const gameKey = await addGame({
			title,
			users: [userKey],
			voting: getVotingValues(voting)
		});
		navigate(`/${gameKey}`);
	};

	const votingOptions: Array<Options> = [
		{
			text: 'Fibonacci (0,1,2,3,5,8,13,21,34,55)',
			value: VotingSystem.FIBONACCI,
			key: `option-${VotingSystem.FIBONACCI}`
		},
		{
			text: 'Modified Fibonacci (0,0.5,1,2,3,5,8,13,20,40)',
			value: VotingSystem.MODIFIED_FIBONACCI,
			key: `option-${VotingSystem.MODIFIED_FIBONACCI}`
		},
		{
			text: 'T-Shirt (xxs,xs,s,m,l,xl,xxl)',
			value: VotingSystem.T_SHIRT,
			key: `option-${VotingSystem.T_SHIRT}`
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
						onChange={handleTitleChanged}
					></input>
				</div>
				<div>
					<span>Username</span>
					<input
						placeholder="Username..."
						value={username}
						onChange={handleUsernameChanged}
					></input>
				</div>
				<div>
					<DropDown
						label="Voting System"
						selected={voting}
						options={votingOptions}
						onChange={handleVotingChanged}
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
