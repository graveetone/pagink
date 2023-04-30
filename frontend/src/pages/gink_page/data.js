export const data = {
    author: {
        username: 'levytskyi',
        image_url: "https://upload.wikimedia.org/wikipedia/commons/6/63/Nechui_levytskyi.jpg"
    },
    likedByCurrentUser: true,
    title: "Кайдашева сім'я",
    text: `Недалеко от Богуслава, коло Росі, в довгому покрученому яру розкинулось село Семигори. Яр в'ється гадюкою між крутими горами, між зеленими терасами; од яру на всі боки розбіглись, неначе гілки дерева, глибокі рукави й поховались десь далеко в густих лісах. На дні довгого яру блищать рядками ставочки в очеретах, в осоці, зеленіють левади. Греблі обсаджені столітніми вербами. В глибокому яру ніби в'ється оксамитовий зелений пояс, на котрому блищать ніби вправлені в зелену оправу прикраси з срібла. Два рядки білих хат попід горами біліють, неначе два рядки перлів на зеленому поясі. Коло хат зеленіють густі старі садки.

    На високих гривах гір кругом яру зеленіє старий ліс, як зелене море, вкрите хвилями. Глянеш з високої гори на той ліс, і здається, ніби на гори впала оксамитова зелена тканка, гарно побгалась складками, позападала в вузькі долини тисячами оборок та жмутів. В гарячий ясний літній день ліс на горах сяє, а в долинах чорніє. Над долинами стоїть сизий легкий туман. Ті долини здалека ніби дишуть тобі в лице холодком, лісовою вогкістю, манять до себе в тінь густого старого лісу.`,
    created_at: '145 years ago',
    likesCount: 12,
    comments: [
        {
            id: 1,
            author: {
                username: 'graveetone',
                image_url: "https://drive.google.com/u/0/uc?id=1D13oE__ZmhfieSE6SkRInSDJw831y6sz&export=download",
            },
            created_at: '12 minutes ago',
            text: 'Nice gink!',
            likedByCurrentUser: false
        },
        {
            id: 4,
            author: {
                username: 'minty_N',
                image_url: "https://drive.google.com/u/0/uc?id=1d6IblP-86YPe0-4XEpANLDstQRuPLWkx&export=download"
            },
            created_at: 'just now',
            text: '#ГРУШКА_RIP',
            likedByCurrentUser: true
        },
        {
            id: 2,
            author: {
                username: 'aka_pako',
                image_url: "https://drive.google.com/u/0/uc?id=1B8-w439X4pzvGrjvh2s1ZBidfO0mmsO8&export=download",
            },
            created_at: '6 minutes ago',
            text: 'I really like it!I really like it!I really like it!I really like it!I really liI really like it!I really like it!I really like it!I really like it!I really like it!I really like it!I really like it!I really like it!I really like it!ke it!I really like it!I really like it!I really like it!I really like it!I really like it!I really like it!I really like it!I really like it!I really like it!I really like it!I really like it!I really like it!I really like it!I really like it!I really like it!I really like it!I really like it!I really like it!I really like it!I really like it!I really like it!I really like it!I really like it!',
            likedByCurrentUser: true,
            parentId: 1
        },
        {
            id: 3,
            author: {
                username: 'graveetone',
                image_url: "https://drive.google.com/u/0/uc?id=1D13oE__ZmhfieSE6SkRInSDJw831y6sz&export=download",
            },
            created_at: '2 minutes ago',
            text: "КАЙДАШЕВА СІМ'Я ТОП!",
            likedByCurrentUser: false,
            parentId: 1
        },
        {
            id: 5,
            author: {
                username: 'graveetone',
                image_url: "https://drive.google.com/u/0/uc?id=1D13oE__ZmhfieSE6SkRInSDJw831y6sz&export=download",
            },
            created_at: '2 minutes ago',
            text: "А Кайдаш шо, не RIP???😆",
            likedByCurrentUser: false,
            parentId: 4
        },
        {
            id: 6,
            author: {
                username: 'aka_pako',
                image_url: "https://drive.google.com/u/0/uc?id=1B8-w439X4pzvGrjvh2s1ZBidfO0mmsO8&export=download",
            },
            created_at: 'just now',
            text: 'І я кажу, що RIP!',
            likedByCurrentUser: true,
            parentId: 5
        }
    ]
}
