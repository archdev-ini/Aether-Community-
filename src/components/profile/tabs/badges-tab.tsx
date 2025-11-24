import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Star, Zap, BookOpen } from 'lucide-react';

const badges = [
    {
        id: 1,
        name: 'Early Adopter',
        description: 'Joined Aether in the first month.',
        icon: Star,
        color: 'text-yellow-500',
        bg: 'bg-yellow-500/10',
    },
    {
        id: 2,
        name: 'Active Learner',
        description: 'Completed 5 learning modules.',
        icon: BookOpen,
        color: 'text-blue-500',
        bg: 'bg-blue-500/10',
    },
    {
        id: 3,
        name: 'Contributor',
        description: 'Shared 3 projects with the community.',
        icon: Zap,
        color: 'text-purple-500',
        bg: 'bg-purple-500/10',
    },
];

export default function BadgesTab() {
    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {badges.map((badge) => (
                <Card key={badge.id} className="text-center">
                    <CardHeader className="flex flex-col items-center pb-2">
                        <div className={`p-3 rounded-full ${badge.bg} ${badge.color} mb-2`}>
                            <badge.icon className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-base">{badge.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">{badge.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
