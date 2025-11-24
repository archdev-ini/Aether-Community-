'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Layers, Leaf, Box, PenTool } from 'lucide-react';

const categories = [
    { id: 1, name: 'BIM & Revit', icon: Layers, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { id: 2, name: 'Sustainable Design', icon: Leaf, color: 'text-green-500', bg: 'bg-green-500/10' },
    { id: 3, name: 'Parametric Design', icon: Box, color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { id: 4, name: 'Visualization', icon: PenTool, color: 'text-orange-500', bg: 'bg-orange-500/10' },
];

export default function CategoryCards() {
    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {categories.map((cat) => (
                <Card
                    key={cat.id}
                    className="cursor-pointer hover:bg-accent/50 transition-colors border-none shadow-sm bg-secondary/30"
                >
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center gap-3">
                        <div className={`p-3 rounded-full ${cat.bg} ${cat.color}`}>
                            <cat.icon className="h-6 w-6" />
                        </div>
                        <span className="font-medium text-sm">{cat.name}</span>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
