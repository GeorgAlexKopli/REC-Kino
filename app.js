new Vue({
    el: '#app',
    data: {
        showDropdown: false,
        movies: [
            { title: 'Dom M.D.', link: 'test', ageRating: '18', ageRatingText: '18' },
            { title: 'Serbia film', link: 'test', ageRating: 'pg13', ageRatingText: 'PG 13' },
            { title: 'Võimalus', link: 'test', ageRating: 'pg3', ageRatingText: 'PG 3' },
            { title: 'Tahvlilapppea', link: 'test', ageRating: '18', ageRatingText: '18' }
        ]
    },
    methods: {
        toggleDropdown() {
            this.showDropdown = !this.showDropdown;
        }
    }
});
