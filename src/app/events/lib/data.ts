// This is a temporary data store.
// In a real application, you would fetch this data from a database.

export type Event = {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    imageUrl: string;
    status: 'Upcoming' | 'Past';
};

const events: Event[] = [
    {
        id: '1',
        title: 'Design Education in Nigeria',
        description: 'AETHER’s Launch Webinar discussing the current state and future of architectural and design education in Nigeria.',
        date: 'October 28, 2024',
        time: '4:00 PM WAT',
        location: 'Online',
        imageUrl: 'https://picsum.photos/seed/event1/600/400',
        status: 'Upcoming',
    },
    {
        id: '2',
        title: 'Sustainable Urbanism in Lagos',
        description: 'Exploring innovative approaches to create sustainable and resilient urban environments in Lagos.',
        date: 'November 15, 2024',
        time: '2:00 PM WAT',
        location: 'Eko Hotel & Suites, Lagos',
        imageUrl: 'https://picsum.photos/seed/event2/600/400',
        status: 'Upcoming',
    },
    {
        id: '3',
        title: 'The Art of Biomimicry',
        description: 'A workshop on how nature can inspire architectural innovation and sustainable design solutions.',
        date: 'September 5, 2024',
        time: '10:00 AM WAT',
        location: 'Online',
        imageUrl: 'https://picsum.photos/seed/event3/600/400',
        status: 'Past',
    },
     {
        id: '4',
        title: 'Future of African Cities',
        description: 'A panel discussion with leading architects on the challenges and opportunities for urban development across Africa.',
        date: 'August 12, 2024',
        time: '6:00 PM WAT',
        location: 'Kempinski Hotel, Accra',
        imageUrl: 'https://picsum.photos/seed/event4/600/400',
        status: 'Past',
    }
];

// Simulate a database query
export async function fetchEvents(): Promise<Event[]> {
  // In a real app, you would fetch this data from a database.
  // To simulate network latency, we can add a small delay.
  await new Promise(resolve => setTimeout(resolve, 500));
  return events;
}
