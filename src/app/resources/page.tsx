import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ResourceSearch from '@/components/resources/resource-search';
import CategoryCards from '@/components/resources/category-cards';
import ResourceGrid from '@/components/resources/resource-grid';

export default function ResourcesPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1 container mx-auto p-4 pt-24 space-y-8">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight">Learning Resources</h1>
                    <p className="text-muted-foreground">
                        Expand your knowledge with curated guides, tutorials, and tools.
                    </p>
                </div>

                <ResourceSearch />
                <CategoryCards />

                <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Featured Resources</h2>
                    <ResourceGrid />
                </div>
            </main>
            <Footer />
        </div>
    );
}
