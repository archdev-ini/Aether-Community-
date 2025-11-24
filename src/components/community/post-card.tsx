'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, MessageSquare, Share2, Bookmark } from 'lucide-react';

interface PostCardProps {
    post: {
        id: number;
        author: {
            name: string;
            role: string;
            avatar?: string;
        };
        content: string;
        type: string;
        timestamp: string;
        likes: number;
        comments: number;
        tags?: string[];
    };
    onCommentClick: (id: number) => void;
}

export default function PostCard({ post, onCommentClick }: PostCardProps) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-2">
                <Avatar>
                    <AvatarImage src={post.author.avatar} />
                    <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="font-semibold text-sm">{post.author.name}</h4>
                            <p className="text-xs text-muted-foreground">{post.author.role} • {post.timestamp}</p>
                        </div>
                        <Badge variant="secondary" className="capitalize">{post.type}</Badge>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="pb-2">
                <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {post.content}
                </p>
                {post.tags && (
                    <div className="flex gap-2 mt-4">
                        {post.tags.map(tag => (
                            <span key={tag} className="text-xs text-primary hover:underline cursor-pointer">#{tag}</span>
                        ))}
                    </div>
                )}
            </CardContent>
            <CardFooter className="border-t pt-2 pb-2">
                <div className="flex w-full justify-between">
                    <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-red-500">
                        <Heart className="h-4 w-4" />
                        <span>{post.likes}</span>
                    </Button>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="gap-2 text-muted-foreground hover:text-primary"
                        onClick={() => onCommentClick(post.id)}
                    >
                        <MessageSquare className="h-4 w-4" />
                        <span>{post.comments}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary">
                        <Share2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary">
                        <Bookmark className="h-4 w-4" />
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}
