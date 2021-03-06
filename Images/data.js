const Images = [
  {image: require('../assets/banners/kimberley_anne.jpg')},
  {image: require('../assets/banners/protea_hotel.jpg')},
  {image: require('../assets/banners/kalahari_lodge.jpg')},
  {image: require('../assets/banners/nare_boutique_hotel.jpg')},
  {image: require('../assets/banners/halfway_house.jpg')},
  {image: require('../assets/banners/airport_hotel.jpg')},
  {image: require('../assets/banners/garden_court.jpg')},
];

export const data = [
  {
    id: '1',
    coordinate: {
      latitude: 22.6293867,
      longitude: 88.4354486,
    },
    title: 'Kimberley Anne Hotel',
    description: `Located in Kimberley, 3.8 km from The Big Hole, Kimberley Anne Hotel provides accommodation with a restaurant, free private parking and a bar.`,
    image: Images[0].image,
    rating: 4,
    reviews: 99,
    categories: ['Restaurant', 'Hotel', 'Dineout'],
  },
  {
    id: '2',
    coordinate: {
      latitude: 22.6345648,
      longitude: 88.4377279,
    },
    title: 'Protea Hotel by Marriott Kimberley',
    description: `Located on the edge of the Kimberley Big Hole, this 4-star hotel offers luxurious rooms with a flat-screen TV. Facilities include an outdoor pool, a 24-hour reception, and car rental. `,
    image: Images[1].image,
    rating: 4,
    reviews: 102,
    categories: ['Restaurant', 'Hotel', 'Snacks Corner'],
  },
  {
    id: '3',
    coordinate: {
      latitude: 22.6281662,
      longitude: 88.4410113,
    },
    title: 'Kalahari Lodge',
    description: `Situated in Kimberley, 7 km from The Big Hole, Kalahari Lodge Kimberley features accommodation with a restaurant, free private parking, a bar and a garden. `,
    image: Images[2].image,
    rating: 3,
    reviews: 220,
    categories: ['Restaurant', 'Hotel', 'Dineout'],
  },
  {
    id: '4',
    coordinate: {
      latitude: 22.6341137,
      longitude: 88.4497463,
    },
    title: 'Halfway House Hotel',
    description: `Halfway House Hotel is located in Kimberley. Free WiFi access and private parking is available. The hotel is a 5-minute walk from the McGregor Museum.`,
    image: Images[3].image,
    rating: 4,
    reviews: 48,
    categories: ['Restaurant', 'Hotel', 'Snacks Corner'],
  },
  {
    id: '5',
    coordinate: {
      latitude: 22.6292757,
      longitude: 88.444781,
    },
    title: 'Nare Boutique Hotel',
    description: `Situated in Kimberley, 700 metres from The Big Hole, Nare Boutique Hotel features accommodation with a restaurant, free private parking, a bar and a shared lounge.`,
    image: Images[4].image,
    rating: 4,
    reviews: 178,
    categories: ['Restaurant', 'Hotel', 'Dineout'],
  },
  {
    id: '6',
    coordinate: {
      latitude: 22.6293867,
      longitude: 88.4354486,
    },
    title: 'Airport Hotel',
    description: `Situated in Kimberley, 3.9 km from The Big Hole, Airport Hotel features accommodation with a restaurant, free private parking, a bar and a garden. `,
    image: Images[5].image,
    rating: 3,
    reviews: 99,
    categories: ['Restaurant', 'Hotel', 'Dineout'],
  },
  {
    id: '7',
    coordinate: {
      latitude: 22.6345648,
      longitude: 88.4377279,
    },
    title: 'Garden Court',
    description: `Situated in Kimberley, 1.2 km from The Big Hole, Garden Court Kimberley features accommodation with a restaurant, free private parking, an outdoor swimming pool and a fitness centre. `,
    image: Images[6].image,
    rating: 4,
    reviews: 102,
    categories: ['Restaurant', 'Hotel', 'Fitness Centre'],
  },
];
