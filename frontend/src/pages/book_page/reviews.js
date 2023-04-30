export const data = [
    {
        id: 1,
        type: 'review',
        author: {
            username: 'minty_N',
            image_url: "https://drive.google.com/u/0/uc?id=1d6IblP-86YPe0-4XEpANLDstQRuPLWkx&export=download"
        },
        likedByCurrentUser: true,
        text: `Люблю читати цікаві книги`,
        created_at: '15 minutes ago',
        likesCount: 123,
        commentsCount: 9,
        book: {
            id: 1,
            title: "Згодом",
            image_url: "https://bookclub.ua/images/db/goods/57769_113287.jpg",
            authors: [
                {
                    id: 2,
                    name: "Стівен Кінг",
                },
                {
                    id: 3,
                    name: "Stephen King",
                }
            ]
        },
    },
    {
        id: 2,
        type: 'review',
        author: {
            username: 'aka_pako',
            image_url: "https://drive.google.com/u/0/uc?id=1B8-w439X4pzvGrjvh2s1ZBidfO0mmsO8&export=download",
        },
        likedByCurrentUser: true,
        text: `Ви уже читали цей шедевр?`,
        book: {
            id: 1,
            title: "Згодом",
            image_url: "https://bookclub.ua/images/db/goods/57769_113287.jpg",
            authors: [
                {
                    id: 2,
                    name: "Стівен Кінг",
                },
                {
                    id: 3,
                    name: "Stephen King",
                }
            ]
        },
        created_at: '7 minutes ago',
        likesCount: 60,
        commentsCount: 0
    },
    {
        id: 3,
        type: 'review',
        author: {
            username: 'levytskyi',
            image_url: "https://upload.wikimedia.org/wikipedia/commons/6/63/Nechui_levytskyi.jpg"
        },
        likedByCurrentUser: true,
        text: 'Я написав щось класне!',
        created_at: '145 years ago',
        likesCount: 12,
        commentsCount: 1,
        book: {
            id: 1,
            title: "Згодом",
            image_url: "https://bookclub.ua/images/db/goods/57769_113287.jpg",
            authors: [
                {
                    id: 2,
                    name: "Стівен Кінг",
                },
                {
                    id: 3,
                    name: "Stephen King",
                }
            ]
        },
    },
    {
        id: 4,
        type: 'review',
        author: {
            username: 'graveetone',
            image_url: "https://drive.google.com/u/0/uc?id=1D13oE__ZmhfieSE6SkRInSDJw831y6sz&export=download",
        },
        likedByCurrentUser: true,
        text: 'Зайшов в книгарню, вийшов з книгарні - купив книжки!',
        created_at: '145 years ago',
        likesCount: 12,
        commentsCount: 4,
        book: {
            id: 1,
            title: "Згодом",
            image_url: "https://bookclub.ua/images/db/goods/57769_113287.jpg",
            authors: [
                {
                    id: 2,
                    name: "Стівен Кінг",
                },
                {
                    id: 3,
                    name: "Stephen King",
                }
            ]
        },
    }
]
