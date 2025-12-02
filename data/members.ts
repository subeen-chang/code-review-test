export interface Member {
  id: string;
  name: string;
  koreanName: string;
  role: string;
  birthDate: string;
  nationality: string;
  height: string;
  bloodType: string;
  emoji: string;
  color: string;
  bio: string;
  image: string;
}

export const members: Member[] = [
  {
    id: 'heeseung',
    name: 'Heeseung',
    koreanName: '희승',
    role: 'Vocalist, Dancer',
    birthDate: 'October 15, 2001',
    nationality: 'South Korea',
    height: '179 cm',
    bloodType: 'A',
    emoji: '🦌',
    color: '#FF6B6B',
    bio: 'The ace of ENHYPEN, known for his exceptional vocals and versatile dancing skills.',
    image: '/images/members/heeseung.jpg'
  },
  {
    id: 'jay',
    name: 'Jay',
    koreanName: '제이',
    role: 'Vocalist, Rapper',
    birthDate: 'April 20, 2002',
    nationality: 'United States',
    height: '180 cm',
    bloodType: 'B',
    emoji: '🦅',
    color: '#4ECDC4',
    bio: 'Charismatic performer with a cool and confident stage presence.',
    image: '/images/members/jay.jpg'
  },
  {
    id: 'jake',
    name: 'Jake',
    koreanName: '제이크',
    role: 'Vocalist, Dancer',
    birthDate: 'November 15, 2002',
    nationality: 'Australia',
    height: '176 cm',
    bloodType: 'O',
    emoji: '🐶',
    color: '#FFE66D',
    bio: 'Bright and energetic member who brings joy to the group.',
    image: '/images/members/jake.jpg'
  },
  {
    id: 'sunghoon',
    name: 'Sunghoon',
    koreanName: '성훈',
    role: 'Vocalist, Visual',
    birthDate: 'December 8, 2002',
    nationality: 'South Korea',
    height: '181 cm',
    bloodType: 'O',
    emoji: '🐧',
    color: '#95E1D3',
    bio: 'Former figure skater with elegant visuals and graceful movements.',
    image: '/images/members/sunghoon.jpg'
  },
  {
    id: 'sunoo',
    name: 'Sunoo',
    koreanName: '선우',
    role: 'Vocalist',
    birthDate: 'June 24, 2003',
    nationality: 'South Korea',
    height: '175 cm',
    bloodType: 'O',
    emoji: '🦊',
    color: '#F38181',
    bio: 'Bright smile and positive energy that lights up the stage.',
    image: '/images/members/sunoo.jpg'
  },
  {
    id: 'jungwon',
    name: 'Jungwon',
    koreanName: '정원',
    role: 'Leader, Vocalist, Dancer',
    birthDate: 'February 9, 2004',
    nationality: 'South Korea',
    height: '174 cm',
    bloodType: 'AB',
    emoji: '🐈',
    color: '#AA96DA',
    bio: 'Youngest leader in K-pop history, showing maturity beyond his years.',
    image: '/images/members/jungwon.jpg'
  },
  {
    id: 'ni-ki',
    name: 'Ni-ki',
    koreanName: '니키',
    role: 'Dancer, Rapper, Maknae',
    birthDate: 'December 9, 2005',
    nationality: 'Japan',
    height: '183 cm',
    bloodType: 'B',
    emoji: '🐆',
    color: '#FCBAD3',
    bio: 'Youngest member with exceptional dancing skills and powerful stage presence.',
    image: '/images/members/ni-ki.jpg'
  }
];
