export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'comeback' | 'concert' | 'award' | 'media' | 'announcement';
  description: string;
  image?: string;
}

export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'ENHYPEN Announces World Tour 2025',
    date: '2024-12-01',
    category: 'concert',
    description: 'ENHYPEN will embark on their biggest world tour yet, visiting 20 cities across 4 continents starting March 2025.',
    image: '/images/news/tour-2025.jpg'
  },
  {
    id: '2',
    title: 'New Album "ROMANCE:UNTOLD" Breaks Records',
    date: '2024-11-15',
    category: 'comeback',
    description: 'The latest album surpasses 2 million pre-orders, setting a new record for the group.',
    image: '/images/news/album-record.jpg'
  },
  {
    id: '3',
    title: 'ENHYPEN Wins Artist of the Year at MAMA 2024',
    date: '2024-11-20',
    category: 'award',
    description: 'The group takes home the prestigious Artist of the Year award at Mnet Asian Music Awards.',
    image: '/images/news/mama-award.jpg'
  },
  {
    id: '4',
    title: 'Special Collaboration Stage Announced',
    date: '2024-11-28',
    category: 'media',
    description: 'ENHYPEN to perform special collaboration stage at year-end music festival.',
    image: '/images/news/collab.jpg'
  }
];

export interface Schedule {
  id: string;
  title: string;
  date: string;
  time?: string;
  location?: string;
  type: 'concert' | 'fanmeeting' | 'broadcast' | 'release' | 'event';
  description: string;
}

export const scheduleItems: Schedule[] = [
  {
    id: '1',
    title: 'Comeback Showcase',
    date: '2024-12-15',
    time: '19:00 KST',
    location: 'Seoul, South Korea',
    type: 'event',
    description: 'Special showcase for the new album release'
  },
  {
    id: '2',
    title: 'Music Bank Performance',
    date: '2024-12-20',
    time: '17:00 KST',
    location: 'KBS Hall',
    type: 'broadcast',
    description: 'Live performance on KBS Music Bank'
  },
  {
    id: '3',
    title: 'Fan Meeting in Tokyo',
    date: '2025-01-10',
    time: '18:00 JST',
    location: 'Tokyo Dome City Hall',
    type: 'fanmeeting',
    description: 'Special fan meeting event for Japanese ENGENEs'
  },
  {
    id: '4',
    title: 'World Tour - Los Angeles',
    date: '2025-03-15',
    time: '20:00 PST',
    location: 'Crypto.com Arena',
    type: 'concert',
    description: 'North American leg of the world tour kicks off'
  }
];
