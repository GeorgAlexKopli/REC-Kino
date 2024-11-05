new Vue({
    el: '#app',
    data: {
        showDropdown: false,
        movies: [
            { title: 'Dom M.D.', ageRating: '18', ageRatingText: '18', image: "https://images-ext-1.discordapp.net/external/kHtsKrWG7nhSwzF2dNEXeNbluXdQLnlCPeNuwwfz1oo/https/i.pinimg.com/564x/39/3f/18/393f1822de8beac4ec32fc9c013346cd.jpg?format=webp&width=457&height=676" },
            { title: 'Serbia film', ageRating: 'pg13', ageRatingText: 'PG 13', image: "https://m.media-amazon.com/images/I/71gtrRlnX9L._AC_UF894,1000_QL80_.jpg" },
            { title: 'Võimalus', ageRating: 'pg3', ageRatingText: 'PG 3', image: "https://play-lh.googleusercontent.com/proxy/1YedoEVDUgaZvoxZp7h-4JR9zVggJuHW-AXKnv0uf7rXZX10BbLEpMzB1zvZtr28faWt8XITJGcInYiwt2A3e4nie-SaFBZAObkf4vV549j5WO6VDoFqVgZ5EpX1HdkIKW8pef8irZfNMIB3lMYLHOpeRDvf5R5ahpqK9A" },
            { title: 'Tahvlilapppea', ageRating: '18', ageRatingText: '18', image: "https://m.media-amazon.com/images/M/MV5BNGYxNzZkYzAtMDExMS00MzE1LTg5ZGItMTgzMzJhZWMyNTBjXkEyXkFqcGc@._V1_.jpg" },
            { title: 'Twin Piigid: Tuli Kõnni Minuga', ageRating: '18', ageRatingText: '18', image: "https://m.media-amazon.com/images/M/MV5BYzJmZGFiMzAtODNhOC00NzAwLWFlMzAtYTQzYmRmYjIwNDgyXkEyXkFqcGc@._V1_.jpg" },
            { title: 'Kaevanduse Käsitööfilm', ageRating: 'pg13', ageRatingText: 'PG 13', image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/A_Minecraft_Movie_poster.jpg/220px-A_Minecraft_Movie_poster.jpg" },
            { title: 'SAUN', ageRating: '18', ageRatingText: '18', image: "https://m.media-amazon.com/images/M/MV5BMTg5NTc1OTU1M15BMl5BanBnXkFtZTcwNjQ5OTk0NA@@._V1_.jpg" },
            { title: 'Kellavärvi Oranž', ageRating: '18', ageRatingText: '18', image: "https://media.posterlounge.com/img/products/610000/606250/606250_poster.jpg" },
            { title: 'Joonas Patu Seiklused', ageRating: 'pg3', ageRatingText: 'PG 3', image: "https://ih1.redbubble.net/image.4349026457.0617/flat,750x,075,f-pad,750x1000,f8f8f8.jpg" },
            { title: 'Ahvid Planeedil', ageRating: 'pg13', ageRatingText: 'PG 13', image: "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/249/2024/06/12121119/2r9iKnlSYEk4daQadsXfcjHfIjQ-scaled.jpg" },
            { title: 'Borat', ageRating: 'pg3', ageRatingText: 'PG 3', image: "https://m.media-amazon.com/images/M/MV5BMTk0MTQ3NDQ4Ml5BMl5BanBnXkFtZTcwOTQ3OTQzMw@@._V1_.jpg" },
            { title: 'Teine Lant', ageRating: '18', ageRatingText: '18', image: "https://m.media-amazon.com/images/M/MV5BYzJkY2E0ZjEtYjQ4Yy00MmI3LWFhMGItZjllNmJhM2Y5NTBkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
        ]
    },
    computed: {
        // Repeats the movies array to fill 12 grid items
        repeatedMovies() {
            return this.movies;
        }
        
    },
    methods: {
        toggleDropdown() {
            this.showDropdown = !this.showDropdown;
        }
    }
    
});

document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.cinema-dropdown');
    dropdown.addEventListener('click', function() {
        this.classList.toggle('show');
    });
});
