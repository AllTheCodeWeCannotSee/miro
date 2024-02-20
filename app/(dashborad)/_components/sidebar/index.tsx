import { List } from "./list";
import { NewButton } from "./new-button";


export const Sidebar = () => {
    return (
        <aside className="h-full w-[60px] flex flex-col p-3 gap-y-4 bg-blue-950 text-white">
            <List />
            <NewButton />
        </aside>

    );
}

