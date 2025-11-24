'use client';

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bookmark, PlayCircle, FileText, Book } from 'lucide-react';
import Image from 'next/image';

interface ResourceCardProps {
    resource: {
        id: number;
        title: string;
        category: string;
        type: string;
        thumbnail: string;
        author: string;
    };
    onClick: () => void;
}

export default function ResourceCard({ resource, onClick }: ResourceCardProps) {
    const TypeIcon = resource.type === 'Video' ? PlayCircle : resource.type === 'Article' ? FileText : Book;

    return (
        <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all" onClick={onClick}>
            <div className="relative aspect-video overflow-hidden">
                <Image
                    src={resource.thumbnail}
                    alt={resource.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="secondary" size="sm">View Details</Button>
                </div>
                <div className="absolute top-2 right-2">
                    <Badge className="bg-background/80 text-foreground backdrop-blur-sm hover:bg-background/90">
                        {resource.type}
                    </Badge>
                </div>
            </div>
            <CardHeader className="p-4 pb-2">
                <div className="flex justify-between items-start">
                    <Badge variant="outline" className="mb-2">{resource.category}</Badge>
                </div>
                <h3 className="font-semibold leading-tight group-hover:text-primary transition-colors">
                    {resource.title}
                </h3>
            </CardHeader>
            <CardContent className="p-4 pt-0">
                <p className="text-xs text-muted-foreground">By {resource.author}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-end">
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={(e) => {
                    e.stopPropagation();
                    // Handle save logic
                }}>
                    <Bookmark className="h-4 w-4" />
                </Button>
            </CardFooter>
        </Card>
    );
}
