import { UserButton } from "@clerk/nextjs"


export const Navbar = () => {
    return (
        <div className="bg-indigo-500 flex items-center gap-x-4 p-5">
            <div className="hidden lg:flex lg:flex-1 bg-yellow-300">
                Search
            </div>
            <UserButton />
        </div>
    )
}