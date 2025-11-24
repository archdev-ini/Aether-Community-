import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';

export default function LearningProgress() {
    return (
        <Card className="col-span-1 md:col-span-2 lg:col-span-2">
            <CardHeader>
                <CardTitle>Continue Learning</CardTitle>
                <CardDescription>Pick up where you left off.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">Advanced BIM Workflows</span>
                        <span className="text-muted-foreground">65% Complete</span>
                    </div>
                    <Progress value={65} className="h-2" />
                </div>
                <div className="rounded-lg border bg-muted/40 p-4">
                    <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <PlayCircle className="h-6 w-6" />
                        </div>
                        <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium leading-none">Next Lesson: Parametric Families</p>
                            <p className="text-xs text-muted-foreground">15 mins • Video Guide</p>
                        </div>
                        <Button size="sm" variant="secondary">Resume</Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
