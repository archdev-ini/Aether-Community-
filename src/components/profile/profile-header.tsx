import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { MapPin, School } from 'lucide-react';
import EditProfileModal from './edit-profile-modal';

interface ProfileHeaderProps {
    user: {
        name: string;
        role: string;
        school: string;
        location: string;
        aetherId: string;
        avatarUrl?: string;
    };
}

export default function ProfileHeader({ user }: ProfileHeaderProps) {
    return (
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <Avatar className="h-24 w-24 border-4 border-background shadow-xl">
                    <AvatarImage src={user.avatarUrl} alt={user.name} />
                    <AvatarFallback className="text-2xl">{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="space-y-1 text-center md:text-left">
                    <h1 className="text-3xl font-bold">{user.name}</h1>
                    <p className="text-lg text-muted-foreground">{user.role}</p>
                    <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground md:justify-start">
                        <span className="flex items-center gap-1">
                            <School className="h-4 w-4" />
                            {user.school}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {user.location}
                        </span>
                    </div>
                    <div className="mt-2">
                        <Badge variant="secondary" className="font-mono">
                            ID: {user.aetherId}
                        </Badge>
                    </div>
                </div>
            </div>
            <div className="flex justify-center md:justify-end">
                <EditProfileModal />
            </div>
        </div>
    );
}
