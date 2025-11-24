'use client';

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Building2, ArrowRight } from 'lucide-react';

interface OpportunityCardProps {
    opportunity: {
        id: number;
        title: string;
        organization: string;
        location: string;
        type: string;
        category: string;
        deadline: string;
        isUrgent?: boolean;
    };
    onClick: () => void;
}

export default function OpportunityCard({ opportunity, onClick }: OpportunityCardProps) {
    return (
        <Card className="group cursor-pointer hover:border-primary/50 transition-all hover:shadow-md" onClick={onClick}>
            <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="font-normal">{opportunity.type}</Badge>
                    {opportunity.isUrgent && (
                        <Badge variant="destructive" className="animate-pulse">Urgent</Badge>
                    )}
                </div>
                <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                    {opportunity.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <Building2 className="h-4 w-4" />
                    <span>{opportunity.organization}</span>
                </div>
            </CardHeader>
            <CardContent className="pb-3">
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{opportunity.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>Deadline: {opportunity.deadline}</span>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="pt-0 flex justify-end">
                <Button variant="ghost" size="sm" className="gap-1 group-hover:translate-x-1 transition-transform">
                    View Details <ArrowRight className="h-4 w-4" />
                </Button>
            </CardFooter>
        </Card>
    );
}
