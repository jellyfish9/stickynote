<template>
<mdb-container :fluid="true">
  <mdb-navbar dark color="primary" name="qingu" expand="sm">
  	
  		<mdb-navbar-nav left>
            <mdb-nav-item to="/note/add" waves-fixed><mdb-icon icon="pen-square" size="2x"/></mdb-nav-item>
        </mdb-navbar-nav>
        <mdb-navbar-toggler>
        <mdb-navbar-nav right>
            <select id="tag" class="browser-default mr-2" @click.stop="select" @change="search">
            	<option value="">标签</option>
            	<template v-for="t in tags">
            	<template v-if="t == currentTag">
				  <option :value="t" selected>{{t}}</option>
				  </template>
				  <template v-else>
				  <option :value="t">{{t}}</option>
				  </template>
			  </template>
			</select>
			<mdb-input type="text" id="kw" placeholder="搜索" @keydown.enter.native="search" aria-label="search"/>
        </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
  
  <mdb-list-group>
  		<mdb-nav-item v-for="n in notes" class="list-group-item list-group-item-action" :to="'/note/'+n.id">
          <h5 class="text-center">
            {{n.note}}
          </h5>
        </mdb-nav-item>
        <!-- <mdb-nav-item to="/tabs" waves-fixed>tabs</mdb-nav-item>-->
        
  </mdb-list-group>
</mdb-container>
</template>

<script>
import { mdbContainer, mdbNavbar, mdbNavItem, mdbListGroup, mdbNavbarNav, mdbNavbarToggler, mdbIcon, mdbInput, mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem } from 'mdbvue';
import config from 'config'
export default {
  name: 'home',
  components: {
    mdbContainer,
    mdbNavbar,
    mdbNavItem,
    mdbListGroup,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbIcon,
    mdbInput,
    mdbDropdown,
    mdbDropdownToggle,
    mdbDropdownMenu,
    mdbDropdownItem
  },
  data() {
    return {
      notes: [],
      tags: [],
      currentTag:''
    };
  },
  mounted() {
  	///this.API = config.API
  	let note_list = sessionStorage.getItem('note_list')
  	let tags = sessionStorage.getItem('tags')
  	if (null === note_list) {
	  	$.getJSON(config.API+'note_list', (data) => {
	  		if (typeof data === 'object') {
	  		this.notes = data
	  		sessionStorage.setItem('note_list', JSON.stringify(data))
	  		}
	  	})
	  	$.getJSON(config.API+'note_tags', (data) => {
	  		this.tags = data
	  		sessionStorage.setItem('tags', JSON.stringify(data))
	  	})
  	} else {
  		this.notes = JSON.parse(note_list)
  		this.tags = JSON.parse(tags)
  	}
  	
  },
  methods: {
  	search(){
  		var tag = $('#tag').val()
  		this.currentTag = tag
  		let kw = $('#kw').val()
  		$.getJSON(config.API+'note_search', {tag, kw}, (data) => {
  			this.notes = data
  		})
  	},
  	select(){
  	 return false
  	}
  },
  
  computed: {
  	selected(tag) {
  		return tag == this.currentTag ? 'selected' : ''
  	}
  }
}
</script>