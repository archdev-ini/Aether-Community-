import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import CreatePostBox from '@/components/community/create-post-box';
import FeedFilters from '@/components/community/feed-filters';
import FeedList from '@/components/community/feed-list';

export default function CommunityPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1 container mx-auto p-4 pt-24 max-w-3xl space-y-6">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight">Community Feed</h1>
                    <p className="text-muted-foreground">
                        Connect, share, and learn with fellow architects and designers.
                    </p>
                </div>

                <CreatePostBox />
                <FeedFilters />
                <FeedList />
            </main>
            <Footer />
        </div>
    );
}
