import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const projects = [
    {
        id: 1,
        title: 'Eco-Friendly High Rise',
        category: 'Architecture',
        image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80',
        tags: ['Sustainability', 'Residential'],
    },
    {
        id: 2,
        title: 'Community Center Design',
        category: 'Urban Planning',
        image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
        tags: ['Public Space', 'Community'],
    },
    {
        id: 3,
        title: 'Parametric Pavilion',
        category: 'Computational Design',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
        tags: ['Grasshopper', 'Fabrication'],
    },
];

export default function PortfolioTab() {
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-all cursor-pointer group">
                    <div className="relative aspect-video overflow-hidden">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                    <CardHeader className="p-4">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-xs text-muted-foreground mb-1">{project.category}</p>
                                <CardTitle className="text-lg">{project.title}</CardTitle>
                            </div>
                        </div>
                    </CardHeader>
                    <CardFooter className="p-4 pt-0 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                            </Badge>
                        ))}
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
