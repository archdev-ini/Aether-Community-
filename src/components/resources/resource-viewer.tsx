'use client';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Share2, Bookmark, ExternalLink } from 'lucide-react';

interface ResourceViewerProps {
    isOpen: boolean;
    onClose: () => void;
    resource: {
        id: number;
        title: string;
        description: string;
        type: string;
        category: string;
        author: string;
        url: string;
    } | null;
}

export default function ResourceViewer({ isOpen, onClose, resource }: ResourceViewerProps) {
    if (!resource) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                    <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{resource.category}</Badge>
                        <Badge variant="outline">{resource.type}</Badge>
                    </div>
                    <DialogTitle className="text-2xl">{resource.title}</DialogTitle>
                    <DialogDescription>
                        By {resource.author}
                    </DialogDescription>
                </DialogHeader>

                <div className="py-6 space-y-4">
                    <div className="aspect-video w-full bg-muted rounded-lg flex items-center justify-center">
                        <p className="text-muted-foreground">Preview / Embed Content Here</p>
                    </div>

                    <div className="space-y-2">
                        <h4 className="font-semibold">Description</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {resource.description}
                        </p>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                            <Bookmark className="mr-2 h-4 w-4" />
                            Save
                        </Button>
                        <Button variant="outline" size="sm">
                            <Share2 className="mr-2 h-4 w-4" />
                            Share
                        </Button>
                    </div>
                    <Button asChild>
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                            Open Resource <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
