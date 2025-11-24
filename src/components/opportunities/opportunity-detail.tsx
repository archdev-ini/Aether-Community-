'use client';

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetFooter,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building2, ExternalLink, Bookmark } from 'lucide-react';

interface OpportunityDetailProps {
    isOpen: boolean;
    onClose: () => void;
    opportunity: {
        id: number;
        title: string;
        organization: string;
        location: string;
        type: string;
        category: string;
        deadline: string;
        description: string;
        requirements: string[];
        applyUrl: string;
    } | null;
}

export default function OpportunityDetail({ isOpen, onClose, opportunity }: OpportunityDetailProps) {
    if (!opportunity) return null;

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className="w-full sm:max-w-xl overflow-y-auto">
                <SheetHeader className="space-y-4">
                    <div className="flex items-center gap-2">
                        <Badge variant="outline">{opportunity.type}</Badge>
                        <Badge variant="secondary">{opportunity.category}</Badge>
                    </div>
                    <SheetTitle className="text-2xl">{opportunity.title}</SheetTitle>
                    <SheetDescription className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <Building2 className="h-4 w-4" />
                            <span className="font-medium text-foreground">{opportunity.organization}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                            <span className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {opportunity.location}
                            </span>
                            <span className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                Deadline: {opportunity.deadline}
                            </span>
                        </div>
                    </SheetDescription>
                </SheetHeader>

                <div className="py-6 space-y-6">
                    <div className="space-y-2">
                        <h3 className="font-semibold text-lg">About the Role</h3>
                        <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                            {opportunity.description}
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-semibold text-lg">Requirements</h3>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                            {opportunity.requirements.map((req, index) => (
                                <li key={index}>{req}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <SheetFooter className="flex-col sm:flex-row gap-3 pt-6 border-t mt-auto">
                    <Button variant="outline" className="w-full sm:w-auto">
                        <Bookmark className="mr-2 h-4 w-4" />
                        Save for Later
                    </Button>
                    <Button className="w-full sm:w-auto" asChild>
                        <a href={opportunity.applyUrl} target="_blank" rel="noopener noreferrer">
                            Apply Now <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
