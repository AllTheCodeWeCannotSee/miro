"use client";

import { Search } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";
import qs from "query-string";
import { useDebounce } from "usehooks-ts"

import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";


export const SearchInput = () => {

    const [value, setValue] = useState("");
    const router = useRouter();
    const debouncedValue = useDebounce(value, 500);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    useEffect(() => {
        const url = qs.stringifyUrl({
            url: "/",
            query: {
                search: debouncedValue
            }
        }, { skipEmptyString: true, skipNull: true });
        router.push(url);
    }, [debouncedValue, router]);

    return (
        <div className="w-full relative">
            <Search className="absolute top-1/2 left-3 transform -translate-y-1/2  text-muted-foreground  h-4 w-4" />
            <Input
                className="w-full  pl-9 focus-visible:ring-0"
                onChange={handleChange}
                value={value}
                placeholder="Search boards"
            />
        </div>
    )
}