"use client";

import { Hint } from "@/components/hint";
import { DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs"
import { Dialog } from "@radix-ui/react-dialog";
import { Plus } from "lucide-react";

export const NewButton = () => {
    return (

        <Dialog>
            <DialogTrigger asChild>

                <div className="aspect-square">
                    <Hint
                        label="Create organization"
                        side="right"
                        align="center"
                        sideOffset={18}
                    >
                        <button className="h-full w-full flex items-center justify-center bg-white/25 rounded-md opacity-60 hover:opacity-100 transition">
                            <Plus className="text-white" />
                        </button>
                    </Hint>
                </div>

            </DialogTrigger>
            <DialogContent className="flex p-0 bg-transparent border-none">
                <CreateOrganization />
            </DialogContent>
        </Dialog>

    )

}