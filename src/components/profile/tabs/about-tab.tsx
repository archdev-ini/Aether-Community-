import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Globe } from 'lucide-react';
import Link from 'next/link';

export default function AboutTab() {
    return (
        <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2 space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Bio</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                            Passionate architecture student with a focus on sustainable design and BIM technologies.
                            I love exploring the intersection of traditional African architecture and modern parametric design.
                            Currently working on a thesis project about urban regeneration in Lagos.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Skills & Interests</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            {['Revit', 'Rhino', 'Grasshopper', 'Sustainable Design', 'Urban Planning', 'Python', 'React'].map((skill) => (
                                <Badge key={skill} variant="outline">{skill}</Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Connect</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Link href="#" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                            <Linkedin className="h-5 w-5" />
                            <span>LinkedIn</span>
                        </Link>
                        <Link href="#" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                            <Github className="h-5 w-5" />
                            <span>GitHub</span>
                        </Link>
                        <Link href="#" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                            <Globe className="h-5 w-5" />
                            <span>Portfolio Site</span>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
