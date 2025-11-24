import DashboardHeader from '@/components/dashboard/dashboard-header';
import StatsOverview from '@/components/dashboard/stats-overview';
import UpcomingEventsList from '@/components/dashboard/upcoming-events-list';
import CommunityHighlights from '@/components/dashboard/community-highlights';
import LearningProgress from '@/components/dashboard/learning-progress';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function DashboardPage() {
    // Mock user data for now
    const user = {
        name: 'Inioluwa',
        stats: {
            eventsAttended: 12,
            projectsShared: 5,
            learningHours: 48,
            communityRank: 'Architect',
        },
    };

    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1 space-y-8 p-8 pt-24 container mx-auto">
                <DashboardHeader userName={user.name} />

                <StatsOverview stats={user.stats} />

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                    <UpcomingEventsList />
                    <div className="col-span-1 md:col-span-2 lg:col-span-4 grid gap-4">
                        <div className="grid gap-4 md:grid-cols-2">
                            <CommunityHighlights />
                            <LearningProgress />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
