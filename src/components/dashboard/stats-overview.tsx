import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Trophy, BookOpen, Users } from 'lucide-react';

interface StatsOverviewProps {
    stats: {
        eventsAttended: number;
        projectsShared: number;
        learningHours: number;
        communityRank: string;
    };
}

export default function StatsOverview({ stats }: StatsOverviewProps) {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Events Attended</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{stats.eventsAttended}</div>
                    <p className="text-xs text-muted-foreground">
                        +1 from last month
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Projects Shared</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{stats.projectsShared}</div>
                    <p className="text-xs text-muted-foreground">
                        Top 10% of contributors
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Learning Hours</CardTitle>
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{stats.learningHours}h</div>
                    <p className="text-xs text-muted-foreground">
                        +2.5h this week
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Community Rank</CardTitle>
                    <Trophy className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{stats.communityRank}</div>
                    <p className="text-xs text-muted-foreground">
                        Rising Star
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
