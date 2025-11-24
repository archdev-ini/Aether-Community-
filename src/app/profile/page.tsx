import ProfileHeader from '@/components/profile/profile-header';
import ProfileTabs from '@/components/profile/profile-tabs';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function ProfilePage() {
    // Mock user data
    const user = {
        name: 'Inioluwa Oladipupo',
        role: 'Architecture Student',
        school: 'University of Lagos',
        location: 'Lagos, Nigeria',
        aetherId: 'AET-2025-0123',
        avatarUrl: '', // Add a real URL if available or leave empty for fallback
    };

    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1 container mx-auto p-4 pt-24 space-y-8">
                <ProfileHeader user={user} />
                <ProfileTabs />
            </main>
            <Footer />
        </div>
    );
}
