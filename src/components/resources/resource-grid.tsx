'use client';

import { useState } from 'react';
import ResourceCard from './resource-card';
import ResourceViewer from './resource-viewer';

// Mock Data
const MOCK_RESOURCES = [
    {
        id: 1,
        title: 'Introduction to Parametric Design in Grasshopper',
        description: 'A comprehensive guide to getting started with algorithmic modeling using Grasshopper for Rhino. Learn the basics of lists, data trees, and component logic.',
        category: 'Parametric Design',
        type: 'Video',
        thumbnail: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
        author: 'Aether Academy',
        url: '#',
    },
    {
        id: 2,
        title: 'Sustainable Materials Library 2025',
        description: 'A curated list of eco-friendly building materials available in West Africa, including bamboo, laterite, and recycled composites.',
        category: 'Sustainable Design',
        type: 'Guide',
        thumbnail: 'https://images.unsplash.com/photo-1518542331925-4e91e9aa0074?w=800&q=80',
        author: 'Green Build Africa',
        url: '#',
    },
    {
        id: 3,
        title: 'Mastering Revit Families',
        description: 'Learn how to create complex, parametric families in Revit. This tutorial covers nested families, formulas, and shared parameters.',
        category: 'BIM & Revit',
        type: 'Article',
        thumbnail: 'https://images.unsplash.com/photo-1581094794329-cd1361ddee2d?w=800&q=80',
        author: 'BIM Guru',
        url: '#',
    },
    {
        id: 4,
        title: 'Architectural Visualization with Twinmotion',
        description: 'Tips and tricks for achieving photorealistic renders in real-time using Twinmotion.',
        category: 'Visualization',
        type: 'Video',
        thumbnail: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80',
        author: 'Render Weekly',
        url: '#',
    },
];

export default function ResourceGrid() {
    const [selectedResource, setSelectedResource] = useState<typeof MOCK_RESOURCES[0] | null>(null);

    return (
        <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {MOCK_RESOURCES.map((resource) => (
                    <ResourceCard
                        key={resource.id}
                        resource={resource}
                        onClick={() => setSelectedResource(resource)}
                    />
                ))}
            </div>

            <ResourceViewer
                isOpen={!!selectedResource}
                onClose={() => setSelectedResource(null)}
                resource={selectedResource}
            />
        </>
    );
}
