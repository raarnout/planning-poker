import { FormEvent, Fragment, useState } from 'react';
import Button, { ButtonType } from '../../1-atoms/Button';
import { createDoc } from '../../../api/firebase';
import { useNavigate } from 'react-router-dom';

export const New = () => {
	const navigate = useNavigate();
	const [title, setTitle] = useState('');

	const handleChangeTitle = (event: FormEvent<HTMLInputElement>) => {
		event.preventDefault();
		setTitle(event.currentTarget.value);
	};

	const create = async () => {
		const gameId: string = await createDoc('games', { title });
		navigate(`/${gameId}`);
	};

	return (
		<Fragment>
			<div>
				<span>Title</span>
				<input
					placeholder="Title..."
					value={title}
					onChange={handleChangeTitle}
				></input>
			</div>
			<Button
				label={'Create Game'}
				type={ButtonType.SUBMIT}
				onClick={create}
			></Button>
		</Fragment>
	);
};
