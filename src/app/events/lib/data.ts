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
    registrationUrl?: string;
    category: string;
    eventCode?: string;
};

const events: Event[] = [
    {
        id: '1',
        title: 'Design Education in Nigeria',
        description: 'AETHER’s Launch Webinar discussing the current state and future of architectural and design education in Nigeria. This session brings together leading educators, practitioners, and policymakers to debate and propose innovative models for design education that are relevant to Nigeria\'s unique context and challenges. Topics include curriculum reform, industry collaboration, and the role of technology.',
        date: 'October 28, 2024',
        time: '4:00 PM WAT',
        location: 'Online',
        imageUrl: 'https://picsum.photos/seed/event1/1200/600',
        status: 'Upcoming',
        registrationUrl: 'https://lu.ma/aether-launch',
        category: 'Launch & Awareness',
        eventCode: 'AELW-001'
    },
    {
        id: '2',
        title: 'Sustainable Urbanism in Lagos',
        description: 'Exploring innovative approaches to create sustainable and resilient urban environments in Lagos. This full-day conference features keynote presentations, panel discussions, and case studies on green infrastructure, waste management, and community-led urban development projects. Join us to explore the future of Africa\'s largest metropolis.',
        date: 'November 15, 2024',
        time: '2:00 PM WAT',
        location: 'Eko Hotel & Suites, Lagos',
        imageUrl: 'https://picsum.photos/seed/event2/1200/600',
        status: 'Upcoming',
        category: 'Heritage & Research Talks',
        eventCode: 'SUL-001'
    },
    {
        id: '3',
        title: 'The Art of Biomimicry',
        description: 'A hands-on workshop on how nature can inspire architectural innovation and sustainable design solutions. Participants will learn the principles of biomimicry and apply them to a design challenge, mentored by leading experts in the field. This workshop is ideal for architects, designers, and engineers looking to integrate nature-inspired strategies into their practice.',
        date: 'September 5, 2024',
        time: '10:00 AM WAT',
        location: 'Online',
        imageUrl: 'https://picsum.photos/seed/event3/1200/600',
        status: 'Past',
        category: 'Skill-Building Workshops',
        eventCode: 'AOB-001'
    },
     {
        id: '4',
        title: 'Future of African Cities',
        description: 'A thought-provoking panel discussion with leading architects on the pressing challenges and exciting opportunities for urban development across Africa. The conversation will cover topics such as housing, transportation, public space, and the integration of smart technologies in city planning. The event will conclude with a networking reception.',
        date: 'August 12, 2024',
        time: '6:00 PM WAT',
        location: 'Kempinski Hotel, Accra',
        imageUrl: 'https://picsum.photos/seed/event4/1200/600',
        status: 'Past',
        category: 'Networking & Community Meetups',
        eventCode: 'FAC-001'
    }
];

// Simulate a database query
export async function fetchEvents(category?: string): Promise<Event[]> {
  // In a real app, you would fetch this data from a database.
  // To simulate network latency, we can add a small delay.
  await new Promise(resolve => setTimeout(resolve, 500));
  
  if (category && category !== 'All') {
    return events.filter(event => event.category === category);
  }
  
  return events;
}

export async function fetchEventById(id: string): Promise<Event | undefined> {
  await new Promise(resolve => setTimeout(resolve, 500));
  return events.find(event => event.id === id);
}
