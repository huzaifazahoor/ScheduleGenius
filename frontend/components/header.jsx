"use client";

import Logo from "./logo";

export default function Header({links}){


    return (
        <header className="flex justify-between">
            <Logo style={`text-3xl`} />
            <nav className="flex gap-x-5">
                {links.map((link,index) => (
                    <button key={index} className={`p-1 px-2 rounded-xl hover:text-black ${link?.class ?? ""}`}>
                        <a href={link.path}>
                            {link.name}
                        </a>
                    </button>
                ))}
            </nav>
        </header>
    )
}