// Ariadne Harrison 4 5 5 3 3 2 5 1 5 4
// Owain Drummond 4 4 1 3 1 1 4 4 1 4
// Melina Avila 2 5 5 5 4 5 5 5 2 5
// Dexter Huber 4 2 3 5 4 3 4 5 2 4
// Wiktoria Mackenzie 1 5 3 3 5 3 2 3 4 3
// Scarlett Barnett 3 4 1 1 5 2 2 3 4 2
// Eve Lowery 4 4 1 1 2 5 2 3 1 2
// Danny Acosta 3 1 5 5 1 4 3 4 3 1
// Denise Fisher 3 4 3 4 5 5 2 3 1 2
// Tegan North 1 4 2 1 4 3 3 5 3 4

const friendsArray = [
    {
        "name": "Ariadne Harrison",
        "photo": "http://images4.fanpop.com/image/photos/16300000/Random-people-random-16382026-600-800.jpg",
        "scores": [
            4, 5, 5, 3, 3, 2, 5, 1, 5, 4
        ]
    },
    {
        "name": "Owain Drummond",
        "photo": "https://opinionhall.com/wp-content/uploads/2018/07/weird-bug-makes-samsung-phones-text-random-photos-to-random-people.jpg",
        "scores": [
            4, 4, 1, 3, 1, 1, 4, 4, 1, 4
        ]
    },
    {
        "name": "Melina Avila",
        "photo": "https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg",
        "scores": [
            2, 5, 5, 5, 4, 5, 5, 5, 2, 5
        ]
    },
    {
        "name": "Dexter Huber",
        "photo": "https://pbs.twimg.com/media/BduTxWnIUAAKT_5.jpg",
        "scores": [
            4, 2, 3, 5, 4, 3, 4, 5, 2, 4
        ]
    },    {
        "name": "Wiktoria Mackenzie",
        "photo": "https://www.96vipnumber.com/wp-content/uploads/2019/04/bbbb.jpg",
        "scores": [
            1, 5, 3, 3, 5, 3, 2, 3, 4, 3
        ]
    },    {
        "name": "Scarlett Barnett",
        "photo": "https://i.imgur.com/tPobTbL.jpg",
        "scores": [
            3, 4, 1, 1, 5, 2, 2, 3, 4, 2
        ]
    },    {
        "name": "Eve Lowery",
        "photo": "data:image/jpeg;base64,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",
        "scores": [
            4, 4, 1, 1, 2, 5, 2, 3, 1, 2
        ]
    },    {
        "name": "Danny Acosta",
        "photo": "https://signature.bcm.edu/images/uploaded/full/1501533869158.jpeg",
        "scores": [
            3, 1, 5, 5, 1, 4, 3, 4, 3, 1
        ]
    },    {
        "name": "Denise Fisher",
        "photo": "https://vignette.wikia.nocookie.net/walkingdead/images/0/00/Season_six_denise_cloyd.png/revision/latest?cb=20160322210349",
        "scores": [
            3, 4, 3, 4, 5, 5, 2, 3, 1, 2
        ]
    },    {
        "name": "Tegan North",
        "photo": "https://i.kinja-img.com/gawker-media/image/upload/s--vA7jP3Dy--/c_scale,f_auto,fl_progressive,q_80,w_800/tciymybtb9dwtdt7zghq.jpg",
        "scores": [
            1, 4, 2, 1, 4, 3, 3, 5, 3, 4
        ]
    },
]

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;