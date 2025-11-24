'use client';

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

interface CommentPanelProps {
    isOpen: boolean;
    onClose: () => void;
    postId: number | null;
}

export default function CommentPanel({ isOpen, onClose, postId }: CommentPanelProps) {
    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className="w-full sm:max-w-md flex flex-col h-full">
                <SheetHeader>
                    <SheetTitle>Comments</SheetTitle>
                </SheetHeader>

                <div className="flex-1 overflow-y-auto py-6 space-y-6">
                    {/* Mock Comments */}
                    <div className="flex gap-3">
                        <Avatar className="h-8 w-8">
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-semibold">Jane Doe</span>
                                <span className="text-xs text-muted-foreground">2h ago</span>
                            </div>
                            <p className="text-sm text-foreground/90">
                                This is a really great insight! I've been thinking about this too.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <Avatar className="h-8 w-8">
                            <AvatarFallback>MK</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-semibold">Mike K.</span>
                                <span className="text-xs text-muted-foreground">5h ago</span>
                            </div>
                            <p className="text-sm text-foreground/90">
                                Could you share more details about the implementation?
                            </p>
                        </div>
                    </div>
                </div>

                <div className="pt-4 border-t mt-auto">
                    <div className="flex gap-2">
                        <Input placeholder="Write a comment..." />
                        <Button size="icon">
                            <Send className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
