/**
 * Header Component
 *
 * This component displays the application header with the W&S logo.
 * The logo serves as a navigation link back to the homepage.
 */
import logo from "../../../public/logo-w-s-black.svg";
import Image from "next/image";
import Link from "next/link";

/**
 * Header Component
 *
 * @returns {JSX.Element} - Rendered Header component with W&S logo and homepage link
 */
const Header = () => {
    return (
        <header className={'mb-4'}>
            {/* Logo with link to homepage */}
            <Link href="/">
                {/*
                  W&S Logo image with priority loading
                  The priority attribute ensures the logo loads with high priority
                  as it's an important above-the-fold element
                */}
                <Image src={logo} alt={'W&S Logo'} priority={true} />
            </Link>
        </header>
    );
};

// Export the component for use in other parts of the application
export { Header };