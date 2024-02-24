import { Skeleton } from "@/components/ui/skeleton"


export const Participants = () => {
    return (
        <div className="absolute top-2 right-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
            List of users
        </div>
    )
}

export const ParticipantsSkeleton = () => {
    return (
        <div className="absolute top-2 right-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-[100px]">
            <Skeleton className="w-full h-full bg-muted-400" />
        </div>
    )
}