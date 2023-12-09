Vue.component ('VueHeader', {
    template: `
    <span>
        <h1 id="titleName">
            {{ this.$root.pageTitle }}
        </h1>
        <nav >
            <ul class="navigation">
                <li v-for="page in this.$root.navLinks">
                    <a id="menuButton" :href=page.link>{{page.linkText}}</a>
                </li>
            </ul>
        </nav>
    </span>
    `
});


const vueApp = new Vue({
    el:'#vueHeader',
    data: {
        pageTitle: "Stavros Vallas Autobiography",
        navLinks: [
            {link: 'index.html', linkText:'Home'},
            {link: 'academics.html', linkText:'Academics'},
            {link: 'career.html', linkText:'Career'},
            {link: 'fantasyfootball.html', linkText:'Fantasy Football'},
            {link: 'watches.html', linkText:'Watches'},
            {link: 'dogFacts.html', linkText:'Dog Facts'},
            {link: 'Contact.html', linkText:'Contact me'},
        ]
    }
});