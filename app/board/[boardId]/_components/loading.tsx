import { Loader } from "lucide-react"
import { Info } from "./info"
import { Participants } from "./participants"
import { Toolbar } from "./toolbar"


export const Loading = () => {
    return (
        <main className="h-full w-full flex bg-neutral-100 items-center justify-center touch-none">
            <Loader className="animate-spin h-6 w-6 text-muted-foreground" />
            <Info.Skeleton />
            <Participants.Skeleton />
            <Toolbar.Skeleton />
        </main>
    )
}