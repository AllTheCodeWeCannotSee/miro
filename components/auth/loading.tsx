import Image from 'next/image'

export default function Loading() {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center bg-neutral-800">
            <Image
                src="/logo.svg"
                alt="Logo"
                width={120}
                height={120}
                className="animate-pulse"
            />
        </div>
    )
}