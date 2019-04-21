<template>
<mdb-container :fluid="true">
  <mdb-navbar dark color="primary" name="qingu" href="#">
  	<mdb-navbar-toggler>
  		<mdb-navbar-nav left>
            <mdb-nav-item to="/note/add" waves-fixed><mdb-icon icon="pen-square" size="2x"/></mdb-nav-item>
            <mdb-nav-item waves-fixed><mdb-icon icon="star" size="2x"/></mdb-nav-item>
        </mdb-navbar-nav>
          <!-- Search form -->
        <mdb-navbar-nav right>
        
            <select class="browser-default">
            	<option value="1">标签</option>
			  <option value="1">Linux</option>
			  <option value="2">PHP</option>
			  <option value="3">Vue</option>
			</select>
			<mdb-input type="text" id="kw" placeholder="搜索" aria-label="search" icon="search"/>
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
    };
  },
  mounted() {
  	///this.API = config.API
  	let note_list = sessionStorage.getItem('note_list')
  	if (null === note_list) {
	  	$.getJSON(config.API+'note_list', (data) => {
	  		if (typeof data === 'object') {
	  		this.notes = data
	  		sessionStorage.setItem('note_list', JSON.stringify(data))
	  		}
	  	})
  	} else {
  		this.notes = JSON.parse(note_list)
  	}
  	$(document).on('keydown', 'input', (e) => {
  		if (e.code == 'Enter') {
  			this.search()
  		}
  	})
  },
  methods:{
  	search(){
  		let kw = $('#kw').val()
  		$.getJSON(config.API+'note_search', {kw:kw}, (data) => {
  			this.notes = data
  		})
  	}
  }
}
</script>