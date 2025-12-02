export interface GalleryItem {
  id: string;
  title: string;
  category: 'photo' | 'video';
  thumbnail: string;
  fullImage?: string;
  videoUrl?: string;
  date: string;
  description: string;
  tags: string[];
}

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'ROMANCE:UNTOLD Concept Photo',
    category: 'photo',
    thumbnail: '/images/gallery/concept-1.jpg',
    fullImage: '/images/gallery/concept-1-full.jpg',
    date: '2024-11-01',
    description: 'Official concept photo for ROMANCE:UNTOLD album',
    tags: ['concept', 'album', 'group']
  },
  {
    id: '2',
    title: 'Behind the Scenes - MV Shooting',
    category: 'video',
    thumbnail: '/images/gallery/bts-mv.jpg',
    videoUrl: 'https://www.youtube.com/embed/example',
    date: '2024-11-05',
    description: 'Behind the scenes footage from music video shooting',
    tags: ['bts', 'mv', 'making']
  },
  {
    id: '3',
    title: 'World Tour Press Conference',
    category: 'photo',
    thumbnail: '/images/gallery/press-conference.jpg',
    fullImage: '/images/gallery/press-conference-full.jpg',
    date: '2024-11-10',
    description: 'Group photo at world tour announcement press conference',
    tags: ['press', 'tour', 'group']
  },
  {
    id: '4',
    title: 'Dance Practice - XO',
    category: 'video',
    thumbnail: '/images/gallery/dance-practice.jpg',
    videoUrl: 'https://www.youtube.com/embed/example',
    date: '2024-11-12',
    description: 'Full choreography dance practice video',
    tags: ['dance', 'practice', 'choreography']
  },
  {
    id: '5',
    title: 'Airport Fashion',
    category: 'photo',
    thumbnail: '/images/gallery/airport-1.jpg',
    fullImage: '/images/gallery/airport-1-full.jpg',
    date: '2024-11-15',
    description: 'Members departing for overseas schedule',
    tags: ['airport', 'fashion', 'candid']
  },
  {
    id: '6',
    title: 'MAMA 2024 Performance',
    category: 'video',
    thumbnail: '/images/gallery/mama-performance.jpg',
    videoUrl: 'https://www.youtube.com/embed/example',
    date: '2024-11-20',
    description: 'Full performance from MAMA 2024',
    tags: ['performance', 'mama', 'award']
  }
];
