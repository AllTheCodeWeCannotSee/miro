import { Info } from "./info"
import { Participants } from "./participants"
import { Toolbar } from "./toolbar"


interface CanvasProps {
    boardId: string

};
export const Canvas = ({
    boardId
}: CanvasProps) => {
    return (
        <main className="relative h-full w-full bg-neutral-100 touch-none">

            <Info />
            <Participants />
            <Toolbar />
        </main>

    )
}