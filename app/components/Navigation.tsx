import Link from "next/link";
import { FC } from "react";
import { NavLink } from "./NavLink";

export const Navigation: FC = () => {
    return (
        <nav className="container mx-auto flex justify-center space-x-4 mt-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/releases">Releases</NavLink>
            <NavLink href="/contact">Contact</NavLink>
        </nav>
    );
};