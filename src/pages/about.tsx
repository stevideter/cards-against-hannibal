import Link from 'next/link';
import { NextPage } from 'next';

interface AboutProps {
    nickname: string;
}
const About: NextPage<AboutProps> = (props: AboutProps) => {
    const { nickname } = props;
    return (
        <div className="container">
            <p>Cards Against Humanity Clone</p>
            <p>nickname: {nickname}</p>
            <Link href="/">
                <a>Home</a>
            </Link>
        </div>
    );
};

export default About;
