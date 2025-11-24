'use client';

import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const filters = [
    'All',
    'Discussions',
    'Questions',
    'Showcase',
    'Resources',
    'Events',
    'Opportunities'
];

export default function FeedFilters() {
    return (
        <ScrollArea className="w-full whitespace-nowrap rounded-md border bg-background p-1">
            <div className="flex w-max space-x-2 p-2">
                {filters.map((filter, i) => (
                    <Button
                        key={filter}
                        variant={i === 0 ? "default" : "ghost"}
                        size="sm"
                        className="rounded-full"
                    >
                        {filter}
                    </Button>
                ))}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    );
}
