import logo from "../../../public/logo-w-s-black.svg";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
    return (
        <header className={'mb-4'}>
            <Link href="/">
                <Image src={logo} alt={'W&S Logo'} priority={true} />
            </Link>
        </header>
    );
};

export { Header };