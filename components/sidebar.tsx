"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";

import { cn } from "@/lib/utils";
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from "lucide-react";

const montserrat = Montserrat({
    weight: "600",
    subsets: ["latin"],
});

const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-blue-500",
    },
    {
        label: "Coversation",
        icon: MessageSquare,
        href: "/coversation",
        color: "text-yellow-500",
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        href: "/image",
        color: "text-amber-700",
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        href: "/video",
        color: "text-red-500",
    },
    {
        label: "Music Generation",
        icon: Music,
        href: "/music",
        color: "text-purple-500",
    },
    {
        label: "Code Generation",
        icon: Code,
        href: "/code",
        color: "text-green-500",
    },
    {
        label: "Settings",
        icon: Settings,
        href: "/settings",
        color: "text-white-500",
    },
];

const Sidebar = () => {
    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#11827] text-white">

            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative w-16 h-16 mr-8">
                        <Image
                            fill
                            alt="Logo"
                            src="/logo.png"
                        />
                    </div>
                    <h1 className={cn("text-2xl font-bold", montserrat.className)}>
                        AIOAI
                    </h1>
                </Link>
                <div className="space-y-3">
                    {routes.map((route) => (
                        <Link
                            href="{route.href}"
                            key={route.href}
                            className="text-sm group flex p-3 w-full justify-start 
                            font-medium cursor-pointer 
                           
                            hover:text-white hover:bg-white/10 rounded-lg trasition transition-transform duration-200 ease-in-out transform hover:-translate-x-2 hover:scale-90 hover:duration-300"
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                {route.label}
                            </div>

                        </Link>
                    ))}
                </div>
            </div>

        </div >
    );

}

export default Sidebar;