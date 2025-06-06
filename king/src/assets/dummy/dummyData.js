const dummyData = [
  {
    placeId: 1,
    name: '홍대 카페에 가면 커피가 있고, 아메리카노가 있다.',
    type: 'cafe',
    address: '서울시 마포구 양화로 123',
    phone: '02-1234-5678',
    openHours: '10:00 ~ 22:00',
    breakTime: '13:00 ~ 14:00',
    closedDays: '화요일',
    lat: 37.5665,
    lng: 126.978,
    createdAt: '2025-01-13 12:34:56',
    updatedAt: '2025-01-13 12:34:56',
    placeImage: '/src/assets/dummy/place.png',
    additionalInfo: [
      {
        contentId: 1,
        name: '갯마을 차차차',
        type: '드라마',
        description: '신민아가 김선호에게 사랑 고백한 카페',
      },
    ],
  },
  {
    placeId: 2,
    name: '놀이터 공원',
    type: 'playground',
    address: '서울시 성동구 왕십리로 456',
    phone: '02-5678-1234',
    openHours: '09:00 ~ 18:00',
    breakTime: '없음',
    closedDays: '연중무휴',
    lat: 37.5705,
    lng: 126.982,
    createdAt: '2025-01-13 10:20:30',
    updatedAt: '2025-01-13 11:00:00',
    placeImage: '/src/assets/dummy/place.png',
    additionalInfo: [
      {
        contentId: 2,
        name: '아이들의 꿈',
        type: '영화',
        description: '주인공이 어린 시절 친구들과 뛰놀던 장소',
      },
    ],
  },
  {
    placeId: 3,
    name: '이태원 맛집',
    type: 'restaurant',
    address: '서울시 용산구 녹사평대로 123',
    phone: '02-8765-4321',
    openHours: '11:00 ~ 23:00',
    breakTime: '15:00 ~ 16:00',
    closedDays: '월요일',
    lat: 37.5625,
    lng: 126.975,
    createdAt: '2025-01-12 10:20:30',
    updatedAt: '2025-01-12 11:00:00',
    placeImage: '/src/assets/dummy/place.png',
    additionalInfo: [
      {
        contentId: 3,
        name: '방탄소년단',
        type: '연예인',
        description: '트위터에 올린 식당',
      },
      {
        contentId: 4,
        name: '푸드 페스티벌',
        type: '행사',
        description: '다양한 요리 경연이 펼쳐진 대표 맛집',
      },
    ],
  },
  {
    placeId: 4,
    name: '종로3가역',
    type: 'station',
    address: '서울시 종로구 종로 3가',
    phone: '1544-5678',
    openHours: '05:30 ~ 01:00',
    breakTime: '없음',
    closedDays: '연중무휴',
    lat: 37.5685,
    lng: 126.984,
    createdAt: '2025-01-11 08:10:10',
    updatedAt: '2025-01-11 08:20:00',
    placeImage: '/src/assets/dummy/place.png',
    additionalInfo: [
      {
        contentId: 5,
        name: '역사 탐방',
        type: '다큐',
        description: '서울의 역사를 조명한 다큐멘터리 촬영지',
      },
    ],
  },
  {
    placeId: 5,
    name: '서울 숙소',
    type: 'stay',
    address: '서울시 강남구 테헤란로 456',
    phone: '02-3456-7890',
    openHours: '24시간 운영',
    breakTime: '없음',
    closedDays: '연중무휴',
    lat: 37.5655,
    lng: 126.973,
    createdAt: '2025-01-10 09:20:30',
    updatedAt: '2025-01-10 10:00:00',
    placeImage: '/src/assets/dummy/place.png',
    additionalInfo: [
      {
        contentId: 6,
        name: '별들의 숙소',
        type: '인터뷰',
        description: '유명 배우들이 머물렀던 촬영지',
      },
    ],
  },
  {
    placeId: 6,
    name: '명동 상점',
    type: 'store',
    address: '서울시 중구 명동길 1',
    phone: '02-1357-2468',
    openHours: '10:00 ~ 20:00',
    breakTime: '없음',
    closedDays: '없음',
    lat: 37.5645,
    lng: 126.97,
    createdAt: '2025-01-09 12:30:00',
    updatedAt: '2025-01-09 12:45:00',
    placeImage: '/src/assets/dummy/place.png',
    additionalInfo: [
      {
        contentId: 7,
        name: '패션의 중심',
        type: '쇼핑',
        description: '다양한 패션 브랜드가 소개된 장소',
      },
      {
        contentId: 8,
        name: '관광 명소',
        type: '여행',
        description: '명동을 대표하는 관광 명소',
      },
    ],
  },
  {
    placeId: 7,
    name: '명동 상점22',
    type: '',
    address: '서울시 중구 명동길 1',
    phone: '02-1357-2468',
    openHours: '10:00 ~ 20:00',
    breakTime: '없음',
    closedDays: '없음',
    lat: 37.5675,
    lng: 126.97,
    createdAt: '2025-01-09 12:30:00',
    updatedAt: '2025-01-09 12:45:00',
    placeImage: '/src/assets/dummy/place.png',
    additionalInfo: [
      {
        contentId: 7,
        name: '패션의 중심',
        type: '쇼핑',
        description: '다양한 패션 브랜드가 소개된 장소',
      },
      {
        contentId: 8,
        name: '관광 명소',
        type: '여행',
        description: '명동을 대표하는 관광 명소',
      },
    ],
  },
];

export default dummyData;
