export type Tournament = {
  id: string;
  name: string;
  year: number;
  category: string;
  type: string;
  description: string;
  location?: string;
  officialUrl?: string;
  fideEventUrl?: string;
  verified?: boolean;
  date?: string;
};

export const FIDE_PROFILE_URL = 'https://ratings.fide.com/profile/9957723';
export const FIDE_ID = '9957723';

export const tournaments: Tournament[] = [
  {
    id: '2026-national-sport-festival-finals',
    name: 'National Sport Festival Finals',
    year: 2026,
    category: 'National',
    type: 'Championship',
    description: 'National-level championship event in the sport festival circuit.',
    officialUrl: '',
    fideEventUrl: '',
    verified: false,
    location: 'Sri Lanka',
  },
  {
    id: '2026-national-youth-rapid-blitz',
    name: 'National Youth Rapid & Blitz Chess Championship',
    year: 2026,
    category: 'Youth',
    type: 'Rapid & Blitz',
    description: 'Youth national event covering rapid and blitz formats.',
    officialUrl: '',
    fideEventUrl: '',
    verified: false,
    location: 'Sri Lanka',
  },
  {
    id: '2026-queenstar-international-rating',
    name: 'Queenstar International Rating Chess Championship',
    year: 2026,
    category: 'International Rating',
    type: 'Chess Championship',
    description: 'International-rated chess championship event.',
    officialUrl: '',
    fideEventUrl: '',
    verified: false,
    location: 'Sri Lanka',
  },
  {
    id: '2026-chronicles-of-checkmate',
    name: 'Chronicles of Checkmate International Rating Chess Championship',
    year: 2026,
    category: 'International Rating',
    type: 'Chess Championship',
    description: 'International-rated championship event with official tournament administration.',
    officialUrl: '',
    fideEventUrl: '',
    verified: false,
    location: 'Sri Lanka',
  },
  {
    id: '2026-womens-national-championship',
    name: 'Sri Lanka National Women’s Chess Championship',
    year: 2026,
    category: 'Women’s',
    type: 'Championship',
    description: 'National women’s championship featuring the premier division.',
    officialUrl: '',
    fideEventUrl: '',
    verified: false,
    location: 'Sri Lanka',
  },
  {
    id: '2026-queens-chess-championship',
    name: 'Queens Chess Championship',
    year: 2026,
    category: 'National',
    type: 'Championship',
    description: 'National event highlighting tournament organization and fair-play standards.',
    officialUrl: '',
    fideEventUrl: '',
    verified: false,
    location: 'Sri Lanka',
  },
  {
    id: '2025-national-youth-championship',
    name: 'Sri Lanka National Youth Chess Championship',
    year: 2025,
    category: 'Youth',
    type: 'Championship',
    description: 'National youth tournament experience covering organized event administration.',
    officialUrl: '',
    fideEventUrl: '',
    verified: false,
    location: 'Sri Lanka',
  },
  {
    id: '2025-disaster-relief-rating-rapid-blitz',
    name: 'Disaster Relief International Rating Rapid & Blitz Chess Championships',
    year: 2025,
    category: 'International Rating',
    type: 'Rapid & Blitz',
    description: 'International-rated fast-format event with rapid and blitz sections.',
    officialUrl: '',
    fideEventUrl: '',
    verified: false,
    location: 'Sri Lanka',
  },
  {
    id: '2025-national-rapid-blitz',
    name: 'Sri Lanka National Rapid & Blitz Chess Championship',
    year: 2025,
    category: 'National',
    type: 'Rapid & Blitz',
    description: 'National rapid and blitz championship with professional tournament oversight.',
    officialUrl: '',
    fideEventUrl: '',
    verified: false,
    location: 'Sri Lanka',
  },
  {
    id: '2024-national-youth-championship',
    name: 'Sri Lanka National Youth Chess Championship',
    year: 2024,
    category: 'Youth',
    type: 'Championship',
    description: 'National youth championship event experience alongside key tournament administration work.',
    officialUrl: '',
    fideEventUrl: '',
    verified: false,
    location: 'Sri Lanka',
  },
];
