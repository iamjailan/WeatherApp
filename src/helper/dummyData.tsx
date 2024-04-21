interface data {
  id: number | string;
  hours: number;
  time: 'AM' | 'PM';
  status:
    | 'dayMidRain'
    | 'dayRain'
    | 'tonardo'
    | 'dayCloud'
    | 'nightCloud'
    | 'nightMidRain'
    | 'nightRain';
  degree: number;
}
interface dataDay {
  id: number | string;
  day: string;
  status:
    | 'dayMidRain'
    | 'dayRain'
    | 'tonardo'
    | 'dayCloud'
    | 'nightCloud'
    | 'nightMidRain'
    | 'nightRain';
  degree: number;
}

export const data: data[] = [
  {
    id: 1,
    hours: 10,
    time: 'AM',
    status: 'dayMidRain',
    degree: 3,
  },
  {
    id: 2,
    hours: 11,
    time: 'AM',
    status: 'dayRain',
    degree: 4,
  },
  {
    id: 3,
    hours: 12,
    time: 'PM',
    status: 'dayRain',
    degree: 6,
  },
  {
    id: 4,
    hours: 1,
    time: 'PM',
    status: 'dayMidRain',
    degree: 6,
  },
  {
    id: 5,
    hours: 2,
    time: 'PM',
    status: 'tonardo',
    degree: 0,
  },
  {
    id: 6,
    hours: 3,
    time: 'PM',
    status: 'dayCloud',
    degree: -1,
  },
  {
    id: 7,
    hours: 4,
    time: 'PM',
    status: 'nightCloud',
    degree: -3,
  },
  {
    id: 8,
    hours: 5,
    time: 'PM',
    status: 'nightMidRain',
    degree: -5,
  },
  {
    id: 9,
    hours: 6,
    time: 'PM',
    status: 'nightRain',
    degree: -4,
  },
];

interface data {
  id: number | string;
  hours: number;
  time: 'AM' | 'PM';
  status:
    | 'dayMidRain'
    | 'dayRain'
    | 'tonardo'
    | 'dayCloud'
    | 'nightCloud'
    | 'nightMidRain'
    | 'nightRain';
  degree: number;
}

export const dataDay: dataDay[] = [
  {
    id: 1,
    day: 'Thr',
    status: 'tonardo',
    degree: 12,
  },
  {
    id: 2,
    day: 'Sat',
    status: 'dayRain',
    degree: 8,
  },
  {
    id: 3,
    day: 'Mon',
    status: 'nightMidRain',
    degree: 16,
  },
  {
    id: 4,
    day: 'Wen',
    status: 'dayMidRain',
    degree: 6,
  },
  {
    id: 5,
    day: 'Fri',
    status: 'tonardo',
    degree: 10,
  },
  {
    id: 6,
    day: 'Sun',
    status: 'dayCloud',
    degree: 9,
  },
  {
    id: 7,
    day: 'Thu',
    status: 'dayCloud',
    degree: 12,
  },
];
