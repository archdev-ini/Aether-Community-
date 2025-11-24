import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const activities = [
    {
        id: 1,
        type: 'Project',
        description: 'Published a new project: Eco-Friendly High Rise',
        date: '2 days ago',
    },
    {
        id: 2,
        type: 'Event',
        description: 'Registered for "Future of BIM in Africa" workshop',
        date: '1 week ago',
    },
    {
        id: 3,
        type: 'Comment',
        description: 'Commented on "Sustainable Materials" discussion',
        date: '2 weeks ago',
    },
];

export default function ActivityTab() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-8">
                    {activities.map((activity) => (
                        <div key={activity.id} className="flex items-start gap-4">
                            <div className="relative mt-1">
                                <div className="flex h-2 w-2 rounded-full bg-primary" />
                                <div className="absolute left-1 top-3 h-full w-px bg-border" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-medium">{activity.description}</p>
                                <p className="text-xs text-muted-foreground">{activity.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
