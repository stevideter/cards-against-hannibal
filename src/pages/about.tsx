import Link from 'next/link';

interface AboutProps {
    nickname: string;
}
const About = (props: AboutProps): JSX.Element => {
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
