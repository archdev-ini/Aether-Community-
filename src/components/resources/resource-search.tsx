'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, SlidersHorizontal } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

export default function ResourceSearch() {
    return (
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search for guides, tools, or tutorials..." className="pl-10" />
            </div>
            <div className="flex gap-2">
                <Select>
                    <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="video">Video</SelectItem>
                        <SelectItem value="article">Article</SelectItem>
                        <SelectItem value="guide">Guide</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Level" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Any Level</SelectItem>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                    <SlidersHorizontal className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}
