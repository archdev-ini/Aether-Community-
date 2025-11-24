import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

const highlights = [
    {
        id: 1,
        user: 'Sarah M.',
        avatar: '',
        action: 'shared a new project',
        target: 'Sustainable Housing Complex',
        time: '2 hours ago',
    },
    {
        id: 2,
        user: 'David K.',
        avatar: '',
        action: 'commented on',
        target: 'Urban Planning Discussion',
        time: '4 hours ago',
    },
    {
        id: 3,
        user: 'Aether Team',
        avatar: '',
        action: 'posted a resource',
        target: 'Revit 2025 Tips & Tricks',
        time: '1 day ago',
    },
];

export default function CommunityHighlights() {
    return (
        <Card className="col-span-1 md:col-span-2 lg:col-span-2">
            <CardHeader>
                <CardTitle>Community Highlights</CardTitle>
                <CardDescription>See what others are building and discussing.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    {highlights.map((item) => (
                        <div key={item.id} className="flex items-start gap-4">
                            <Avatar className="h-9 w-9">
                                <AvatarImage src={item.avatar} alt={item.user} />
                                <AvatarFallback>{item.user.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">
                                    <span className="font-semibold">{item.user}</span> {item.action}{' '}
                                    <Link href="#" className="text-primary hover:underline">
                                        {item.target}
                                    </Link>
                                </p>
                                <p className="text-xs text-muted-foreground">{item.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
