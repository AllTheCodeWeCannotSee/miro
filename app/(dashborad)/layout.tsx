import React from "react";
import { Sidebar } from "./_components/sidebar";
import { OrgSidebar } from "./_components/org-sidebar";
import { Navbar } from "./_components/navbar";


interface DashboardLayoutProps {
    children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <main className="h-full">
            <div className="fixed h-full z-[1] left-0">
                <Sidebar />
            </div>
            <div className="h-full pl-[60px] flex gap-x-3">
                <div className="hidden lg:flex h-full">
                    <OrgSidebar />
                </div>
                <div className="flex-1">
                    <Navbar />
                    {children}
                </div>
            </div>
        </main>
    )

}