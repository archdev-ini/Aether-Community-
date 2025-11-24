'use client';

import { useState } from 'react';
import PostCard from './post-card';
import CommentPanel from './comment-panel';

// Mock Data
const MOCK_POSTS = [
    {
        id: 1,
        author: {
            name: 'Sarah Chen',
            role: 'Architect',
            avatar: '',
        },
        type: 'showcase',
        content: 'Just finished the initial rendering for the Lagos Urban Regeneration project. Focusing heavily on sustainable materials and natural ventilation. Thoughts on the facade treatment?',
        timestamp: '2h ago',
        likes: 24,
        comments: 5,
        tags: ['rendering', 'sustainability', 'urban-design'],
    },
    {
        id: 2,
        author: {
            name: 'David Okonjo',
            role: 'Student',
            avatar: '',
        },
        type: 'question',
        content: 'Does anyone have recommendations for good Grasshopper plugins for structural analysis? Trying to optimize a shell structure for my thesis.',
        timestamp: '4h ago',
        likes: 12,
        comments: 8,
        tags: ['grasshopper', 'structural-analysis', 'help'],
    },
    {
        id: 3,
        author: {
            name: 'Aether Team',
            role: 'Admin',
            avatar: '',
        },
        type: 'resource',
        content: 'We just dropped a new library of parametric families for Revit 2025. Check it out in the Resources tab! 🚀',
        timestamp: '1d ago',
        likes: 156,
        comments: 12,
        tags: ['revit', 'resources', 'update'],
    },
];

export default function FeedList() {
    const [activeCommentPostId, setActiveCommentPostId] = useState<number | null>(null);

    return (
        <>
            <div className="space-y-6">
                {MOCK_POSTS.map((post) => (
                    <PostCard
                        key={post.id}
                        post={post}
                        onCommentClick={setActiveCommentPostId}
                    />
                ))}

                <div className="py-8 text-center text-sm text-muted-foreground">
                    You've reached the end of the feed.
                </div>
            </div>

            <CommentPanel
                isOpen={!!activeCommentPostId}
                onClose={() => setActiveCommentPostId(null)}
                postId={activeCommentPostId}
            />
        </>
    );
}
