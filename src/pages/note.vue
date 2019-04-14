<template>
<mdb-container :fluid="true">
  <mdb-navbar dark color="primary" name="qingu">
  		<mdb-navbar-nav left>
            <mdb-nav-item to="/" :exact="true" waves-fixed><mdb-icon icon="arrow-left" size="2x" color="white"/></mdb-nav-item>
        </mdb-navbar-nav>    
  </mdb-navbar>

  <div class="mt-5">
  	<p class="h4 text-center mb-4">session机制</p>
    <div class="grey-text">
    	Developed and managed projects through Cognos solutions
Applied and worked on Cognos TM1 and Enterprise
Coordinated with the client and took project requirements and feedback
Provided valuable input at all stages of work
Took care of the technical and operational issues
Ensure that the projects were completed within the deadline and budget
Build and installed framework
Ensured proper scheduling and administration of Cognos connection
    </div>
  </div>
</mdb-container>
</template>

<script>
import { mdbContainer, mdbNavbar, mdbNavbarNav, mdbNavItem, mdbIcon } from 'mdbvue'

export default {
  name: 'note_show',
  components: {
    mdbContainer,
    mdbNavbar,
    mdbNavbarNav,
    mdbNavItem,
    mdbIcon
  },

  methods:{
  	go_back(){
  		this.$router.back()
  	}
  }
}

</script>