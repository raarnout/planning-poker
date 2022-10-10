import { FormEvent, Fragment, useEffect, useState } from 'react';
import Button, { ButtonType } from '../../1-atoms/Button';
import DropDown, { Options } from '../../1-atoms/Dropdown';
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

    const votingOptions: Array<Options> = [
        { text: '1,2,3,5,8', key: 'one', value: 'one' },
        { text: '1,2,4,8,16', key: 'two', value: 'two' },
        { text: 'xs,s,m,l,xl', key: 'three', value: 'three' }
    ];

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
                <div>
                    <DropDown
                        label='Voting System'
                        options={votingOptions}
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
