// let nobarAnime = new Promise((resolve, reject) => {
//     let succses = true
//     setTimeout(() => {
//         if (succses) {
//             resolve(`nobar`);
//         } else {
//             reject("pulang")
//         }
//     }, 3000)
// })

// nobarAnime.then((resolve) => {
//     console.log(resolve)
// })

// .catch((reject) => {
//     console.log(reject)
// })


const cekMovies = () => {
    return new Promise((resolve, reject) => {
        const moviesList = ["ONEPIECE STRONG WORLD", "ONEPICE Z", "ONEPIECE GOLD", "ONEPIECE STAMPEDE", "ONEPIECE ZERO"]
        let cek = moviesList.find((moviesList) => {
            return moviesList === //"Guardian: The Lonely and Great God"
                "ONEPIECE STAMPEDE"
        })
        if (cek) {
            resolve(cek)
        } else {
            reject("sorry data not found")
        }
    }, 3000)
}

const greeting = (value) => {
    let sinopsis = ",one piece merupakan karya dari mangaka bernama Eiichiro Oda.";
    console.log(`${value} ${sinopsis} Manga One Piece mulai diserialisasikan pada tanggal 4 Agustus 1997. 
    dan Animenya mulai diproduksi oleh Toei Animation di Fuji Television pada 20 Oktober 1999`);
};

const sayHello = (moviesList, callback) => {
    moviesList
        .then((resolve) => { //then berfungsi menampilkan data yang ditampung oleh resolve
            return callback(resolve);
        })
        .catch((reject) => { //catch itu berfungsi untuk menampilkan pesan error dimana promise tidak terpenuhi
            console.log(reject);
        });
};

sayHello(cekMovies(), greeting);