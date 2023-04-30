export const data = [
    {
        id: 1,
        type: 'gink',
        author: {
            username: 'graveetone',
            image_url: "https://drive.google.com/u/0/uc?id=1D13oE__ZmhfieSE6SkRInSDJw831y6sz&export=download",
        },
        likedByCurrentUser: true,
        title: "Новий ДЖИНК",
        text: `Люблю читати цікаві книги`,
        created_at: '15 minutes ago',
        likesCount: 123,
        commentsCount: 9
    },
    {
        id: 2,
        type: 'review',
        author: {
            username: 'graveetone',
            image_url: "https://drive.google.com/u/0/uc?id=1D13oE__ZmhfieSE6SkRInSDJw831y6sz&export=download",
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
        type: 'gink',
        author: {
            username: 'graveetone',
            image_url: "https://drive.google.com/u/0/uc?id=1D13oE__ZmhfieSE6SkRInSDJw831y6sz&export=download",
        },
        likedByCurrentUser: true,
        title: "Кайдашева сім'я",
        text: 'Я написав щось класне!',
        created_at: '145 years ago',
        likesCount: 12,
        commentsCount: 1
    },
    {
        id: 4,
        type: 'gink',
        author: {
            username: 'graveetone',
            image_url: "https://drive.google.com/u/0/uc?id=1D13oE__ZmhfieSE6SkRInSDJw831y6sz&export=download",
        },
        likedByCurrentUser: true,
        text: 'Зайшов в книгарню, вийшов з книгарні - купив книжки!',
        created_at: '145 years ago',
        likesCount: 12,
        commentsCount: 4
    }
]
