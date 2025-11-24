'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AboutTab from './tabs/about-tab';
import PortfolioTab from './tabs/portfolio-tab';
import ActivityTab from './tabs/activity-tab';
import BadgesTab from './tabs/badges-tab';

export default function ProfileTabs() {
    return (
        <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-4 lg:w-[400px]">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="badges">Badges</TabsTrigger>
            </TabsList>
            <div className="mt-6">
                <TabsContent value="about">
                    <AboutTab />
                </TabsContent>
                <TabsContent value="portfolio">
                    <PortfolioTab />
                </TabsContent>
                <TabsContent value="activity">
                    <ActivityTab />
                </TabsContent>
                <TabsContent value="badges">
                    <BadgesTab />
                </TabsContent>
            </div>
        </Tabs>
    );
}
