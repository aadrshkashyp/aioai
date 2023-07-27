"use client"

import { Card } from "@/components/ui/card";
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const tools = [

    {
        label: "Conversation",
        icon: MessageSquare,
        href: "/conversation",
        color: "text-yellow-500",
        bgColor: "bg-yellow-500/10",
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        href: "/image",
        color: "text-amber-500",
        bgColor: "bg-amber-500/10",
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        href: "/video",
        color: "text-red-500",
        bgColor: "bg-red-500/10",
    },
    {
        label: "Music Generation",
        icon: Music,
        href: "/music",
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
    },
    {
        label: "Code Generation",
        icon: Code,
        href: "/code",
        color: "text-green-500",
        bgColor: "bg-green-500/10",
    },
    {
        label: "Settings",
        icon: Settings,
        href: "/settings",
        color: "text-white-500",
        bgColor: "bg-white-500/10",
    },
]

const DashbaordPage = () => {
    const router = useRouter();
    return (
        <div>
            <div className="mb-8 space-y-4">
                <h2 className="text-2xl md:text-4xl font-bold text-center">
                    Explore AIOAI
                </h2>

                <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
                    All in One Ai Powered Platform
                </p>

            </div>

            <div className="px-4 md:px-20 lg:px-32 space-y-4">

                {tools.map((tool) => (

                    <Card
                        onClick={() => router.push(tool.href)}
                        key={tool.href}
                        className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer  transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                    >

                        <div className="flex items-center gap-x-4">
                            <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}
                            >
                                <tool.icon className={cn("w-8 h-8", tool.color)} />

                            </div>

                            <div className="font-semibold">
                                {tool.label}
                            </div>

                        </div>

                        <ArrowRight className="w-5 h-5" />


                    </Card>


                ))}


            </div>

        </div >

    )
}

export default DashbaordPage;
