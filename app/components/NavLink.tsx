"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

export const NavLink: FC<NavLinkProps> = ({ href, children }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={
                `inline-flex h-10 items-center justify-center rounded-full px-8 font-medium text-white transition-colors bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 ring-slate-400 ring-offset-2 ring-offset-slate-50 ${isActive && "ring-2"}`}
        >
            {children}
        </Link>
    );
};

