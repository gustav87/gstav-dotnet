import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
const Home = () => import('../views/Home.vue')
const Blog = () => import('../views/Blog.vue')
const Playground = () => import('../views/Playground.vue')
const Contact = () => import('../views/Contact.vue')
const Colors = () => import('../views/Colors.vue')
const GithubSearch = () => import('../views/GithubSearch.vue')
const GithubUser = () => import('../views/GithubUser.vue')
const Map = () => import('../views/Map.vue')
const VueStuff = () => import('../views/VueStuff.vue')
const FlickrViewer = () => import('../views/FlickrViewer.vue')
const DbStuff = () => import('../views/DbStuff.vue')
const JsStuff = () => import('../views/JsStuff.vue')
const NotFound = () => import('../views/NotFound.vue')

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/chart',
    name: 'Chart',
    component: () => import(/* webpackChunkName: "about" */ '../views/Chartpage.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/playground',
    name: 'Playground',
    component: Playground,
    children: [
      {
        path: 'colors',
        component: Colors
      },
      {
        path: 'map',
        component: Map
      },
      {
        path: 'flickrViewer',
        component: FlickrViewer
      },
      {
        path: 'dbStuff',
        component: DbStuff
      },
      {
        path: 'githubSearch',
        component: GithubSearch
      },
      {
        path: 'githubUser/:username',
        component: GithubUser
      },
      {
        path: 'vueStuff',
        component: VueStuff
      }
    ]
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/playground/jsStuff',
    name: 'JsStuff',
    component: JsStuff
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
