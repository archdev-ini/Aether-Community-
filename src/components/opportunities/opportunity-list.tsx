'use client';

import { useState } from 'react';
import OpportunityCard from './opportunity-card';
import OpportunityDetail from './opportunity-detail';

// Mock Data
const MOCK_OPPORTUNITIES = [
    {
        id: 1,
        title: 'Junior Architect',
        organization: 'Studio Contra',
        location: 'Lagos, Nigeria',
        type: 'Job',
        category: 'Architecture',
        deadline: 'Nov 30, 2025',
        isUrgent: true,
        description: 'We are looking for a Junior Architect to join our design team. You will be working on residential and commercial projects in Lagos.',
        requirements: [
            'Degree in Architecture',
            'Proficiency in Revit and AutoCAD',
            'Strong design portfolio',
            '1-2 years of experience'
        ],
        applyUrl: '#'
    },
    {
        id: 2,
        title: 'Sustainable Design Intern',
        organization: 'MASS Design Group',
        location: 'Kigali, Rwanda',
        type: 'Internship',
        category: 'Sustainability',
        deadline: 'Dec 15, 2025',
        isUrgent: false,
        description: 'Join our team in Kigali to work on impactful projects that improve health and well-being. You will assist with research and design development.',
        requirements: [
            'Current architecture student or recent graduate',
            'Interest in sustainable design and social impact',
            'Knowledge of Adobe Creative Suite'
        ],
        applyUrl: '#'
    },
    {
        id: 3,
        title: 'African Architecture Awards 2025',
        organization: 'Aether Community',
        location: 'Remote',
        type: 'Competition',
        category: 'Design',
        deadline: 'Jan 10, 2026',
        isUrgent: false,
        description: 'Submit your best student project for a chance to win the African Architecture Award. Open to all architecture students in Africa.',
        requirements: [
            'Must be a registered student',
            'Project must be located in Africa',
            'Submission format: A1 Poster + Design Statement'
        ],
        applyUrl: '#'
    },
    {
        id: 4,
        title: 'BIM Coordinator',
        organization: 'Barrow Construction',
        location: 'Accra, Ghana',
        type: 'Job',
        category: 'BIM',
        deadline: 'Dec 05, 2025',
        isUrgent: true,
        description: 'Seeking a BIM Coordinator to manage BIM processes and standards for large-scale construction projects.',
        requirements: [
            '3+ years of BIM experience',
            'Expertise in Revit and Navisworks',
            'Experience with clash detection'
        ],
        applyUrl: '#'
    },
];

export default function OpportunityList() {
    const [selectedOpportunity, setSelectedOpportunity] = useState<typeof MOCK_OPPORTUNITIES[0] | null>(null);

    return (
        <>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {MOCK_OPPORTUNITIES.map((opportunity) => (
                    <OpportunityCard
                        key={opportunity.id}
                        opportunity={opportunity}
                        onClick={() => setSelectedOpportunity(opportunity)}
                    />
                ))}
            </div>

            <OpportunityDetail
                isOpen={!!selectedOpportunity}
                onClose={() => setSelectedOpportunity(null)}
                opportunity={selectedOpportunity}
            />
        </>
    );
}
