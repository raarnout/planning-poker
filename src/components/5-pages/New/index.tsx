import { FormEvent, Fragment, useEffect, useState } from 'react';
import Button, { ButtonType } from '../../1-atoms/Button';
import { createGame } from '../../../api/games';
import { createUser } from '../../../api/users';
import { useNavigate } from 'react-router-dom';

export const New = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [username, setUsername] = useState('');
    const [disabled, setDisabled] = useState(true);

    const handleChangeTitle = (event: FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        setTitle(event.currentTarget.value);
    };

    const handleChangeUsername = (event: FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        setUsername(event.currentTarget.value);
    };

    const create = async () => {
        const userId: string = await createUser({
            name: username,
            role: 'HOST'
        });
        console.log(userId);
        const users = [userId]
        const gameId: string = await createGame('games', { title, users });
        navigate(`/${gameId}`);
    };

    useEffect(() => {
        setDisabled(title === '' || username === '');
    }, [title, username])

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
            </div>
            <Button
                label={'Create Game'}
                type={ButtonType.SUBMIT}
                onClick={create}
                disabled = {disabled}
            ></Button>
        </Fragment>
    );
};
