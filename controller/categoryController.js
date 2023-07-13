// const bollywood = (req, res) => {
//     return res.send([
//         {
//             "title": "The Shawshank Redemption",
//             "year": 1994,
//             "director": "Frank Darabont",
//             "actors": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
//             "genre": "Drama",
//             "rating": 9.3
//         }
//     ])
// }
// const fitness = (req, res) => {
//     return res.send([
//         {
//             "title": "The Sedscwsd hawshank Redemption",
//             "year": 1994,
//             "director": "Frsdfwsedc ank Darabont",
//             "actors": ["Tisdfswdm Robbins", "Morgan Freeman", "Bob Gunton"],
//             "genre": "Drasdfwedsma",
//             "rating": 9.34
//         }
//     ])
// }



const category=(req,res)=>{
    return res.send([
        {
            "title": "The Shawshank Redemption",
            "year": 1994,
            "director": "Frank Darabont",
            "actors": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
            "genre": "Drama",
            "category":"bollywood",
            "rating": 9.3
        }, {
            "title": "The Shawshank Redemption",
            "year": 1994,
            "director": "Frank Darabont",
            "actors": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
            "genre": "Drama",
            "category":"bollywood",
            "rating": 9.3
        },
        {
            "title": "The Shawshank Redemption",
            "year": 1994,
            "director": "Frank Darabont",
            "actors": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
            "genre": "Drama",
            "category":"bollywood",
            "rating": 9.3
        },
        {
            "title": "The Shawshank Redemption",
            "year": 1994,
            "director": "Frank Darabont",
            "actors": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
            "genre": "Drama",
            "category":"bollywood",
            "rating": 9.3
        },

        {
            "title": "The Shawshank Redemption",
            "year": 1994,
            "director": "Frank Darabont",
            "actors": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
            "genre": "Drama",
            "category":"hollywood",
            "rating": 9.3
        },
        {
            "title": "The Shawshank Redemption",
            "year": 1994,
            "director": "Frank Darabont",
            "actors": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
            "genre": "Drama",
            "category":"hollywood",
            "rating": 9.3
        },
        {
            "title": "The Shawshank Redemption",
            "year": 1994,
            "director": "Frank Darabont",
            "actors": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
            "genre": "Drama",
            "category":"fitness",
            "rating": 9.3
        },
        {
            "title": "The Shawshank Redemption",
            "year": 1994,
            "director": "Frank Darabont",
            "actors": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
            "genre": "Drama",
            "category":"sports",
            "rating": 9.3
        }
    ])
}

module.exports=category
