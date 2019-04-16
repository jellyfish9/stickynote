<template>
<mdb-container :fluid="true">
  <mdb-navbar dark color="primary" name="qingu">
  		<mdb-navbar-nav left>
            <mdb-nav-item to="/" :exact="true" waves-fixed><mdb-icon icon="arrow-left" size="2x" color="white"/></mdb-nav-item>
        </mdb-navbar-nav>    
  </mdb-navbar>

  <div class="mt-5">
    <div class="secondary-color-dark white-text">
    	{{note.note}}
    </div>
    
    <Btn icon="code" :rounded="true" :block="true" size="lg">备注</Btn>
  </div>
</mdb-container>
</template>

<script>
import { mdbContainer, mdbNavbar, mdbNavbarNav, mdbNavItem, mdbIcon, Btn } from 'mdbvue'
import config from 'config'
export default {
  name: 'note_show',
  components: {
    mdbContainer,
    mdbNavbar,
    mdbNavbarNav,
    mdbNavItem,
    mdbIcon,
    Btn
  },
  data() {
    return {
      note: {},
      id: 0,
    };
  },
  mounted() {
  	let id = this.$route.params.id
  	$.getJSON(config.API+'note_show/'+id, (data) => {
  		this.note = data
  	})
  },
  methods:{
  	go_back(){
  		this.$router.back()
  	}
  }
}

</script>