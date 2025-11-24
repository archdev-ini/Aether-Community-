'use client';

import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Image as ImageIcon, Link, Send } from 'lucide-react';

export default function CreatePostBox() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [postType, setPostType] = useState('post');

    return (
        <Card className="w-full">
            <CardContent className="p-4">
                <div className="flex gap-4">
                    <Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback>IO</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-4">
                        {!isExpanded ? (
                            <div
                                onClick={() => setIsExpanded(true)}
                                className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm text-muted-foreground shadow-sm cursor-text hover:bg-accent/50"
                            >
                                Start a discussion, share a project, or ask a question...
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <Tabs defaultValue="post" onValueChange={setPostType} className="w-full">
                                    <TabsList className="grid w-full grid-cols-4">
                                        <TabsTrigger value="post">Post</TabsTrigger>
                                        <TabsTrigger value="question">Question</TabsTrigger>
                                        <TabsTrigger value="showcase">Showcase</TabsTrigger>
                                        <TabsTrigger value="resource">Resource</TabsTrigger>
                                    </TabsList>
                                </Tabs>

                                <Textarea
                                    placeholder={
                                        postType === 'question' ? "Ask the community anything..." :
                                            postType === 'showcase' ? "Tell us about your project..." :
                                                "What's on your mind?"
                                    }
                                    className="min-h-[100px]"
                                />

                                {postType === 'showcase' && (
                                    <Input placeholder="Project URL (optional)" />
                                )}

                                <div className="flex justify-between items-center pt-2">
                                    <div className="flex gap-2">
                                        <Button variant="ghost" size="icon" title="Add Image">
                                            <ImageIcon className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" title="Add Link">
                                            <Link className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button variant="ghost" onClick={() => setIsExpanded(false)}>Cancel</Button>
                                        <Button>
                                            <Send className="mr-2 h-4 w-4" />
                                            Publish
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
