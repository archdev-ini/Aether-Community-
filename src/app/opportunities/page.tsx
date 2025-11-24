import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import OpportunityFilters from '@/components/opportunities/opportunity-filters';
import OpportunityList from '@/components/opportunities/opportunity-list';

export default function OpportunitiesPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1 container mx-auto p-4 pt-24 space-y-8">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight">Opportunities Board</h1>
                    <p className="text-muted-foreground">
                        Find your next role, competition, or grant in the African architecture space.
                    </p>
                </div>

                <OpportunityFilters />
                <OpportunityList />
            </main>
            <Footer />
        </div>
    );
}
