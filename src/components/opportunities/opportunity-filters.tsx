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

export default function OpportunityFilters() {
    return (
        <div className="flex flex-col gap-4 md:flex-row md:items-center bg-card p-4 rounded-lg border shadow-sm">
            <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search jobs, internships, grants..." className="pl-10" />
            </div>
            <div className="grid grid-cols-2 md:flex gap-2">
                <Select>
                    <SelectTrigger className="w-full md:w-[140px]">
                        <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="job">Job</SelectItem>
                        <SelectItem value="internship">Internship</SelectItem>
                        <SelectItem value="competition">Competition</SelectItem>
                        <SelectItem value="grant">Grant</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-full md:w-[140px]">
                        <SelectValue placeholder="Region" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Any Region</SelectItem>
                        <SelectItem value="lagos">Lagos</SelectItem>
                        <SelectItem value="abuja">Abuja</SelectItem>
                        <SelectItem value="accra">Accra</SelectItem>
                        <SelectItem value="nairobi">Nairobi</SelectItem>
                        <SelectItem value="remote">Remote</SelectItem>
                    </SelectContent>
                </Select>
                <Button variant="outline" size="icon" className="hidden md:flex">
                    <SlidersHorizontal className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}
