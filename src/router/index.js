import Vue from "vue";
import Home from '../views/Home.vue'
import Annonces from '../views/Annonces.vue'
import Inscription from '../views/Inscription.vue'
import Contact from '../views/Contact.vue'
import Connexion from '../views/Connexion'
import Propos from '../views/Propos.vue'
import ItemDetails from'../views/ItemDetails.vue'
import VueRouter from 'vue-router'
import Forgotpassword from '../views/Forgotpassword.vue'
import Renewpassword from '../views/Renewpassword.vue'

// indinque a Vuejs qu'il peux utiliser le router partout 
Vue.use(VueRouter);
const routes = [
    // Page d'accueil par defaut sur l'url sans slash /
    {path: '/', name: "Home", component: Home, alias: "/home"},
    {path: '/Annonces', name : "Annonces", component:Annonces},
    {path: '/Connexion', name : "Connexion", component:Connexion},
    {path: '/Inscription', name: "Inscription", component: Inscription},
    {path: '/Contact', name: 'Contact', component: Contact },
    {path: '/ItemDetails', name:'ItemDetails', component: ItemDetails},
    {path: '/Propos', name : "Propos", component:Propos},
    {path: '/Forgotpassword', name: "Forgotpassword", component: Forgotpassword},
    {path: '/Renewpassword', name: "Renewpassword", component: Renewpassword},
    //{path: '*', name: 'NotFound', component: NotFound}
]

// 
const router = new VueRouter({
    mode: 'history',
    // tableau d'objet contenant chacune des mes vues
    routes
})

export default router