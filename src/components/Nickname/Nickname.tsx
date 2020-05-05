import { Dispatch, SetStateAction } from 'react';
interface NicknameProps {
    nickname: string;
    setNickname: Dispatch<SetStateAction<string>>;
}

const Nickname: React.FunctionComponent<NicknameProps> = (
    props: NicknameProps
) => {
    const { nickname, setNickname } = props;
    return (
        <>
            <label>Enter Nickname:</label>
            <input
                type="text"
                value={nickname}
                onChange={(event): void => setNickname(event.target.value)}
            />
        </>
    );
};

export default Nickname;
