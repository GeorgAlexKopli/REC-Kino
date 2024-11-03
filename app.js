new Vue({
    el: '#app',
    data: {
        showDropdown: false,
        movies: [
            { title: 'Dom M.D.', link: 'test', ageRating: '18', ageRatingText: '18', image: "https://images-ext-1.discordapp.net/external/kHtsKrWG7nhSwzF2dNEXeNbluXdQLnlCPeNuwwfz1oo/https/i.pinimg.com/564x/39/3f/18/393f1822de8beac4ec32fc9c013346cd.jpg?format=webp&width=457&height=676" },
            { title: 'Serbia film', link: 'test', ageRating: 'pg13', ageRatingText: 'PG 13', image: "https://m.media-amazon.com/images/I/71gtrRlnX9L._AC_UF894,1000_QL80_.jpg" },
            { title: 'Võimalus', link: 'test', ageRating: 'pg3', ageRatingText: 'PG 3', image: "https://play-lh.googleusercontent.com/proxy/1YedoEVDUgaZvoxZp7h-4JR9zVggJuHW-AXKnv0uf7rXZX10BbLEpMzB1zvZtr28faWt8XITJGcInYiwt2A3e4nie-SaFBZAObkf4vV549j5WO6VDoFqVgZ5EpX1HdkIKW8pef8irZfNMIB3lMYLHOpeRDvf5R5ahpqK9A" },
            { title: 'Tahvlilapppea', link: 'test', ageRating: '18', ageRatingText: '18', image: "https://m.media-amazon.com/images/M/MV5BNGYxNzZkYzAtMDExMS00MzE1LTg5ZGItMTgzMzJhZWMyNTBjXkEyXkFqcGc@._V1_.jpg" },
        ]
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
