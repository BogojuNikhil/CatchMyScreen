import logo from './logo.png'
import marvelLogo from './marvelLogo.svg'
import googlePlay from './googlePlay.svg'
import appStore from './appStore.svg'
import screenImage from './screenImage.svg'
import profile from './profile.png'

export const assets = {
    logo,
    marvelLogo,
    googlePlay,
    appStore,
    screenImage,
    profile
}

export const dummyTrailers = [
  {
    image: "https://img.youtube.com/vi/Zu4-jr0sSBE/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=Zu4-jr0sSBE", // Telugu – Kuberaa
  },
  {
    image: "https://img.youtube.com/vi/NfsTxYtBiWg/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=NfsTxYtBiWg", // Telugu – Robinhood
  },
  {
    image: "https://img.youtube.com/vi/77vRyWNqZjM/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=77vRyWNqZjM", // Bollywood – Chhaava
  },
  {
    image: "https://img.youtube.com/vi/A2OQ-f_LOHA/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=A2OQ-f_LOHA", // Bollywood – Emergency
  },
  {
    image: "https://img.youtube.com/vi/B6e7jvDKA7w/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=B6e7jvDKA7w", // Bollywood – Maktoob
  },
  {
    image: "https://img.youtube.com/vi/Zu4-jr0sSBE/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=Zu4-jr0sSBE", // Tamil – Kannappa (Dubbed)
  },
  {
    image: "https://img.youtube.com/vi/ZWu2jk7IYv0/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=ZWu2jk7IYv0", // Bollywood – Emergency Trailer 2
  },
  {
    image: "https://img.youtube.com/vi/1pHDWnXmK7Y/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=1pHDWnXmK7Y", // Tamil – Maargan
  },
  {
    image: "https://img.youtube.com/vi/umiKiW4En9g/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=umiKiW4En9g", // Telugu – HIT: The Third Case
  },
  {
    image: "https://img.youtube.com/vi/Zu4-jr0sSBE/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=Zu4-jr0sSBE", // Telugu – Game Changer (Dubbed)
  }
];
const dummyCastsData = [
    { "name": "Milla Jovovich", "profile_path": "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg", },
    { "name": "Dave Bautista", "profile_path": "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg", },
    { "name": "Arly Jover", "profile_path": "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg", },
    { "name": "Amara Okereke", "profile_path": "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg", },
    { "name": "Fraser James", "profile_path": "https://image.tmdb.org/t/p/original/mGAPQG2OKTgdKFkp9YpvCSqcbgY.jpg", },
    { "name": "Deirdre Mullins", "profile_path": "https://image.tmdb.org/t/p/original/lJm89neuiVlYISEqNpGZA5kTAnP.jpg", },
    { "name": "Sebastian Stankiewicz", "profile_path": "https://image.tmdb.org/t/p/original/hLN0Ca09KwQOFLZLPIEzgTIbqqg.jpg", },
    { "name": "Tue Lunding", "profile_path": "https://image.tmdb.org/t/p/original/qY4W0zfGBYzlCyCC0QDJS1Muoa0.jpg", },
    { "name": "Jacek Dzisiewicz", "profile_path": "https://image.tmdb.org/t/p/original/6Ksb8ANhhoWWGnlM6O1qrySd7e1.jpg", },
    { "name": "Ian Hanmore", "profile_path": "https://image.tmdb.org/t/p/original/yhI4MK5atavKBD9wiJtaO1say1p.jpg", },
    { "name": "Eveline Hall", "profile_path": "https://image.tmdb.org/t/p/original/uPq4xUPiJIMW5rXF9AT0GrRqgJY.jpg", },
    { "name": "Kamila Klamut", "profile_path": "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg", },
    { "name": "Caoilinn Springall", "profile_path": "https://image.tmdb.org/t/p/original/uZNtbPHowlBYo74U1qlTaRlrdiY.jpg", },
    { "name": "Jan Kowalewski", "profile_path": "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg", },
    { "name": "Pawel Wysocki", "profile_path": "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg", },
    { "name": "Simon Lööf", "profile_path": "https://image.tmdb.org/t/p/original/cbZrB8crWlLEDjVUoak8Liak6s.jpg", },
    { "name": "Tomasz Cymerman", "profile_path": "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg", }
]

export const dummyShowsData = [
  {
    _id: "202501",
    id: 202501,
    title: "Kuberaa",
    overview: "Deva, a beggar with a mysterious past, gets entangled in a high-stakes crime web involving a former CBI officer and a ruthless businessman.",
    poster_path: "https://img.youtube.com/vi/Zu4-jr0sSBE/hqdefault.jpg",
    backdrop_path: "https://img.youtube.com/vi/Zu4-jr0sSBE/maxresdefault.jpg",
    genres: [
      { id: 80, name: "Crime" },
      { id: 18, name: "Drama" },
      { id: 53, name: "Thriller" }
    ],
    casts: dummyCastsData,
    release_date: "2025-06-20",
    original_language: "te",
    tagline: "Power is never given. It's taken.",
    vote_average: 7.2,
    vote_count: 71500,
    runtime: 182
  },
  {
    _id: "202502",
    id: 202502,
    title: "Chhaava",
    overview: "A historical epic based on the life of Chhatrapati Sambhaji Maharaj, showcasing his battles and sacrifice for the Maratha empire.",
    poster_path: "https://img.youtube.com/vi/77vRyWNqZjM/hqdefault.jpg",
    backdrop_path: "https://img.youtube.com/vi/77vRyWNqZjM/maxresdefault.jpg",
    genres: [
      { id: 36, name: "History" },
      { id: 28, name: "Action" },
      { id: 18, name: "Drama" }
    ],
    casts: dummyCastsData,
    release_date: "2025-02-14",
    original_language: "hi",
    tagline: "The son of Shivaji. The soul of a nation.",
    vote_average: 8.1,
    vote_count: 807000,
    runtime: 155
  },
  {
    _id: "202503",
    id: 202503,
    title: "Good Bad Ugly",
    overview: "A gritty Tamil action drama following three men whose lives collide in a violent spiral of revenge and redemption.",
    poster_path: "https://img.youtube.com/vi/1pHDWnXmK7Y/hqdefault.jpg",
    backdrop_path: "https://img.youtube.com/vi/1pHDWnXmK7Y/maxresdefault.jpg",
    genres: [
      { id: 28, name: "Action" },
      { id: 18, name: "Drama" }
    ],
    casts: dummyCastsData,
    release_date: "2025-04-10",
    original_language: "ta",
    tagline: "Three paths. One reckoning.",
    vote_average: 7.9,
    vote_count: 242000,
    runtime: 148
  },
  {
    _id: "202504",
    id: 202504,
    title: "Sitaare Zameen Par",
    overview: "A heartwarming sports drama about children with disabilities chasing dreams through the power of inclusion and resilience.",
    poster_path: "https://img.youtube.com/vi/B6e7jvDKA7w/hqdefault.jpg",
    backdrop_path: "https://img.youtube.com/vi/B6e7jvDKA7w/maxresdefault.jpg",
    genres: [
      { id: 18, name: "Drama" },
      { id: 10751, name: "Family" },
      { id: 10749, name: "Romance" }
    ],
    casts: dummyCastsData,
    release_date: "2025-06-20",
    original_language: "hi",
    tagline: "Every child is a star.",
    vote_average: 7.6,
    vote_count: 199000,
    runtime: 132
  },
  {
    _id: "202505",
    id: 202505,
    title: "Retro",
    overview: "Set in the 1990s, a gangster’s son tries to escape his violent legacy for love, only to be pulled back into a world of revenge.",
    poster_path: "https://img.youtube.com/vi/umiKiW4En9g/hqdefault.jpg",
    backdrop_path: "https://img.youtube.com/vi/umiKiW4En9g/maxresdefault.jpg",
    genres: [
      { id: 28, name: "Action" },
      { id: 10749, name: "Romance" },
      { id: 18, name: "Drama" }
    ],
    casts: dummyCastsData,
    release_date: "2025-05-31",
    original_language: "ta",
    tagline: "Love fades. Revenge doesn’t.",
    vote_average: 7.3,
    vote_count: 179000,
    runtime: 168
  }
];

export const dummyDateTimeData = {
    "2025-07-24": [
        { "time": "2025-07-24T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd1" },
        { "time": "2025-07-24T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd2" },
        { "time": "2025-07-24T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd3" }
    ],
    "2025-07-25": [
        { "time": "2025-07-25T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd4" },
        { "time": "2025-07-25T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd5" },
        { "time": "2025-07-25T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd6" }
    ],
    "2025-07-26": [
        { "time": "2025-07-26T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd7" },
        { "time": "2025-07-26T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd8" },
        { "time": "2025-07-26T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd9" }
    ],
    "2025-07-27": [
        { "time": "2025-07-27T01:00:00.000Z", "showId": "68395b407f6329be2bb45bda" },
        { "time": "2025-07-27T03:00:00.000Z", "showId": "68395b407f6329be2bb45bdb" },
        { "time": "2025-07-27T05:00:00.000Z", "showId": "68395b407f6329be2bb45bdc" }
    ]
}

export const dummyDashboardData = {
    "totalBookings": 14,
    "totalRevenue": 1517,
    "totalUser": 5,
    "activeShows": [
        {
            "_id": "68352363e96d99513e4221a4",
            "movie": dummyShowsData[0],
            "showDateTime": "2025-06-30T02:30:00.000Z",
            "showPrice": 59,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "C1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "6835238fe96d99513e4221a8",
            "movie": dummyShowsData[1],
            "showDateTime": "2025-06-30T15:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221a9",
            "movie": dummyShowsData[2],
            "showDateTime": "2025-06-30T03:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221aa",
            "movie": dummyShowsData[3],
            "showDateTime": "2025-07-15T16:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A4": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "683682072b5989c29fc6dc0d",
            "movie": dummyShowsData[4],
            "showDateTime": "2025-06-05T15:30:00.000Z",
            "showPrice": 49,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
            "__v": 0
        },
        {
            "_id": "68380044686d454f2116b39a",
            "movie": dummyShowsData[5],
            "showDateTime": "2025-06-20T16:00:00.000Z",
            "showPrice": 79,
            "occupiedSeats": {
                "A1": "user_2xl7eCSUHddibk5lRxfOtw9RMwX",
                "A2": "user_2xl7eCSUHddibk5lRxfOtw9RMwX"
            }
        }
    ]
}


export const dummyBookingData = [
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 98,
        "bookedSeats": ["D1", "D2"],
        "isPaid": false,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 49,
        "bookedSeats": ["A1"],
        "isPaid": true,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 147,
        "bookedSeats": ["A1", "A2","A3"],
        "isPaid": true,
    },
]