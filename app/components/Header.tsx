import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

export const Header: FC = () => {
    return (
        <header className="container mx-auto px-4 pt-4">
            <Link href="/" className="block mx-auto w-fit hover:animate-wobble">
                <Image
                    src="https://raw.githubusercontent.com/willhofbauer/thirdplacerecords.com/main/public/website-logo.png"
                    alt="Third Place Records Logo"
                    width={260}
                    height={130}
                    priority
                    className="h-auto mx-auto my-0"
                />
            </Link>
        </header>
    );
};
