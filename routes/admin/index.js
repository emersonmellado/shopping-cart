const admin = (req, res) => {

    const products = [
        {
            id: 1,
            name: "Fender",
            description: "American Acoustasonic Telecaster w/Bag - Sunburst",
            price: 2599.99,
            rating: 5,
            image: "//www.long-mcquade.com/files/125818/md_b888772699f992d02d5a6f656eb46c1b."
        },
        {
            id: 2,
            name: "Paul Reed",
            description: "American Acoustasonic Telecaster",
            price: 599.99,
            rating: 5,
            image: "https://www.long-mcquade.com/files/161304/md_fe05943667f2b2dc311ca7b1fde071cd."
        },
        {
            id: 3,
            name: "Yamaha",
            description: "Telecaster w/Bag - Sunburst",
            price: 8599.99,
            rating: 5,
            image: "https://www.long-mcquade.com/files/172732/md_91eec7bf950a75385a51179663703ad9."
        }
    ]

    res.render('admin/index', { products })
}

module.exports = admin;