import type { Category, Post } from './types/collection'

export const DUMMY_POSTS: Post[] = [
  {
    id: '1',
    title: 'A lovely green city: New York',
    author: { id: '1', first_name: 'John', last_name: 'Doe' },
    body: 'New York is a city in the United States of America. It is the most populous city in the United States.',
    category: { id: '1', title: 'Cities' },
    date_created: '2021-07-01T00:00:00.000Z',
    date_updated: '2021-07-01T00:00:00.000Z',
    description:
      'New York is a city in the United States of America. It is the most populous city in the United States.',
    image:
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixid=MnwzODU2NTF8MHwxfHNlYXJjaHw2fHxOZXclMjBZb3J8ZW58MHx8fHwxNjcwMjUzMzMw&ixlib=rb-4.0.3',
    slug: 'a-lovely-green-city-new-york',
  },
  {
    id: '2',
    title: 'The vibrant city of Paris',
    author: { id: '1', first_name: 'John', last_name: 'Doe' },
    body: "Paris is known for its art, culture, and history. The city is home to many iconic landmarks such as the Eiffel Tower, the Louvre Museum, and the Notre-Dame Cathedral. It is also known for its fashion and gastronomy, with numerous world-renowned restaurants and luxury fashion houses. Paris is a global center for business, finance, and politics, and is considered one of the world's leading cities in these fields.",
    category: { id: '1', title: 'Cities' },
    date_created: '2021-07-02T00:00:00.000Z',
    date_updated: '2021-07-02T00:00:00.000Z',
    description:
      'Paris is the capital and most populous city of France. It is located on the Seine River, in the north of the country, at the heart of the Île-de-France region.',
    image:
      'https://images.unsplash.com/photo-1448906654166-444d494666b3?ixid=MnwzODU2NTF8MHwxfHNlYXJjaHwyNXx8bG9uZG9ufGVufDB8fHx8MTY3MDI3MzM3Ng&ixlib=rb-4.0.3',
    slug: 'the-vibrant-city-of-paris',
  },
  {
    id: '3',
    title: 'The majestic city of London',
    author: { id: '1', first_name: 'John', last_name: 'Doe' },
    body: "London is a global city and one of the world's leading financial, cultural, and political centers. It is known for its history, museums, and iconic landmarks such as the Tower of London, Buckingham Palace, and the London Eye. The city is also home to many prestigious universities, theaters, and sports teams.",
    category: { id: '1', title: 'Cities' },
    date_created: '2021-07-03T00:00:00.000Z',
    date_updated: '2021-07-03T00:00:00.000Z',
    description:
      'London is the capital and largest city of England and the United Kingdom. It is located on the River Thames in the south-east of England.',
    image:
      'https://images.unsplash.com/photo-1508050919630-b135583b29ab?ixid=MnwzODU2NTF8MHwxfHNlYXJjaHw5fHxwYXJpc3xlbnwwfHx8fDE2NzAyNzMzNDg&ixlib=rb-4.0.3',
    slug: 'the-majestic-city-of-london',
  },
  {
    id: '4',
    title: 'The great adventure of the Amazon',
    author: { id: '1', first_name: 'John', last_name: 'Doe' },
    body: "The Amazon is the largest river in the world. It is located in South America and flows through Brazil, Peru, Colombia, Ecuador, Bolivia, Venezuela, Guyana, Suriname, and French Guiana. The Amazon River basin is home to 16% of the world's freshwater and 10% of the world's known species.",
    category: { id: '2', title: 'Experiences' },
    date_created: '2021-07-04T00:00:00.000Z',
    date_updated: '2021-07-04T00:00:00.000Z',
    description:
      'The Amazon is the largest river in the world. It is located in South America and flows through Brazil, Peru, Colombia and etc.',
    image:
      'https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?ixid=MnwzODU2NTF8MHwxfHNlYXJjaHwxMXx8QW1hem9uJTIwZm9yZXN0fGVufDB8fHx8MTY3MDMyMjY1MA&ixlib=rb-4.0.3',
    slug: 'the-great-adventure-of-the-amazon',
  },
  {
    id: '5',
    title: 'Journey to the infinite sky: Cappadocia',
    author: { id: '1', first_name: 'John', last_name: 'Doe' },
    body: "Cappadocia is a region in central Turkey. It is known for its unique geological features, such as the fairy chimneys, which are cone-shaped rock formations. The region is also known for its cave churches, underground cities, and cave dwellings. Cappadocia is a popular tourist destination, with many visitors coming to see the region's natural wonders.",
    category: { id: '2', title: 'Experiences' },
    date_created: '2021-07-05T00:00:00.000Z',
    date_updated: '2021-07-05T00:00:00.000Z',
    description:
      'Cappadocia is a region in central Turkey. It is known for its unique geological features, such as the fairy chimneys, which are cone-shaped rock formations.',
    image:
      'https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?ixid=MnwzODU2NTF8MHwxfHNlYXJjaHwxN3x8Q2FwcGFkb2NpYXxlbnwwfHx8fDE2NzAzMjI2OTE&ixlib=rb-4.0.3',
    slug: 'let-the-wind-take-you-to-the-infinite-sky-cappadocia',
  },
  {
    id: '6',
    title: 'Joining the elephants in the wild: Thailand',
    author: { id: '1', first_name: 'John', last_name: 'Doe' },
    body: "Thailand is a country in Southeast Asia. It is known for its tropical beaches, opulent royal palaces, ancient ruins, and ornate temples displaying figures of Buddha. It is also home to many exotic animals, including elephants, tigers, and monkeys. Thailand is a popular tourist destination, with many visitors coming to see the country's natural wonders.",
    category: { id: '2', title: 'Experiences' },
    date_created: '2021-07-06T00:00:00.000Z',
    date_updated: '2021-07-06T00:00:00.000Z',
    description:
      'Thailand is a country in Southeast Asia. It is known for its tropical beaches, opulent royal palaces, ancient ruins, and ornate temples displaying figures of Buddha.',
    image:
      'https://images.unsplash.com/photo-1585970480901-90d6bb2a48b5?ixid=MnwzODU2NTF8MHwxfHNlYXJjaHwxOHx8RWxlcGhhbnRzJTIwdGhhaWxhbmR8ZW58MHx8fHwxNjcwMzIyNzUx&ixlib=rb-4.0.3',
    slug: 'joining-the-elephants-in-the-wild-thailand',
  },
]

export const DUMMY_CATEGORIES: Category[] = [
  {
    id: '1',
    title: 'Cities',
    description:
      "Travel every city that I've been with me! I'll be sharing hidden gems in every city.",
    slug: 'cities',
  },
  {
    id: '2',
    title: 'Experiences',
    description:
      "Experience the world with me! I'll be sharing my adventures and experiences in every country.",
    slug: 'experiences',
  },
]
