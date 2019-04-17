<template>
<mdb-container :fluid="true">
  <mdb-navbar dark color="primary" name="qingu">
  		<mdb-navbar-nav left>
            <mdb-nav-item to="/" :exact="true" waves-fixed><mdb-icon icon="arrow-left" size="2x" color="white"/></mdb-nav-item>
        </mdb-navbar-nav>    
  </mdb-navbar>

	<mdb-card>
    <mdb-card-body class="text-center">
      <mdb-card-title>{{note.note}}</mdb-card-title>
      <mdb-card-text>{{note.mark}}</mdb-card-text>
      <router-link :to="'/note/edit/'+id"><Btn :rounded="true" color="primary">编辑</Btn></router-link>
    </mdb-card-body>
  	</mdb-card>
</mdb-container>
</template>

<script>
import { mdbContainer, mdbNavbar, mdbNavbarNav, mdbNavItem, mdbIcon, Btn, mdbCard, mdbCardBody, mdbCardTitle, mdbCardText } from 'mdbvue'
import config from 'config'
export default {
  name: 'note_show',
  components: {
    mdbContainer,
    mdbNavbar,
    mdbNavbarNav,
    mdbNavItem,
    mdbIcon,
    Btn,
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText
  },
  data() {
    return {
      note: {note:'',mark:''},
      id: 0,
    }
  },
  mounted() {
  	let id = this.$route.params.id
  	if (this.id != id) {
  	
  	$.getJSON(config.API+'note_show/'+id, (data) => {
  		this.note = data
  	})
  	}
  	this.id = id
  },
  methods:{
  	go_back(){
  		this.$router.back()
  	}
  }
}

</script>