import { Loader } from "lucide-react"
import { InfoSkeleton } from "./info"
import { ParticipantsSkeleton } from "./participants"
import { ToolbarSkeleton } from "./toolbar"


export const Loading = () => {
    return (
        <main className="h-full w-full flex bg-neutral-100 items-center justify-center touch-none">
            <Loader className="animate-spin h-6 w-6 text-muted-foreground" />
            <InfoSkeleton />
            <ParticipantsSkeleton />
            <ToolbarSkeleton />
        </main>
    )
}