import Vue from 'vue';
import Router from 'vue-router';

import HomePage from './pages/home.vue'
import ButtonPage from './pages/button.vue'
import TabsPage from './pages/tabs.vue'
import FormsPage from './pages/forms.vue'
import NavigationPage from './pages/navigation.vue'
import Note from './pages/note.vue'
import NoteAdd from './pages/noteAdd.vue'
import NoteEdit from './pages/noteEdit.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },

      { path: '/note/edit/:id', name: 'note_edit', component: NoteEdit },
      { path: '/note/add', name: 'note_add', component: NoteAdd },
      { path: '/note/:id', name: 'note_show', component: Note },
    {
      path: '/button',
      name: 'buttonPage',
      component: ButtonPage
    },
    {
      path: '/tabs',
      name: 'tabsPage',
      component: TabsPage
    },
    {
      path: '/forms',
      name: 'formsPage',
      component: FormsPage
    },
    {
      path: '/navigation',
      name: 'navigation',
      component: NavigationPage
    },
    
  ]
})



