'use client';

import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';
import Link from 'next/link';

interface DashboardHeaderProps {
    userName: string;
}

export default function DashboardHeader({ userName }: DashboardHeaderProps) {
    const timeOfDay = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good morning';
        if (hour < 18) return 'Good afternoon';
        return 'Good evening';
    };

    return (
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">{timeOfDay()}, {userName}</h1>
                <p className="text-muted-foreground">
                    Here's what's happening in your creative ecosystem today.
                </p>
            </div>
            <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" asChild>
                    <Link href="/settings">
                        <Settings className="h-4 w-4" />
                        <span className="sr-only">Settings</span>
                    </Link>
                </Button>
                <Button asChild>
                    <Link href="/profile">View Profile</Link>
                </Button>
            </div>
        </div>
    );
}
