<template>
<mdb-container :fluid="true">
  <mdb-navbar dark color="primary" name="qingu">
  		<mdb-navbar-nav left>
            <mdb-nav-item to="/" :exact="true" waves-fixed><mdb-icon icon="arrow-left" size="2x" color="white"/></mdb-nav-item>
        </mdb-navbar-nav>
        <mdb-nav-item waves-fixed><p class="h5 text-center">添加笔记</p></mdb-nav-item>
        <mdb-navbar-nav right>
        	<mdb-nav-item to="/" :exact="true" waves-fixed><mdb-icon icon="home" size="2x" color="white"/></mdb-nav-item>
        </mdb-navbar-nav>
  </mdb-navbar>

  <form class="mt-5">
    
    <div class="grey-text">
      <mdb-input label="Subject" icon="tag" group type="text" validate error="wrong" success="right"/>
      <mdb-textarea :rows="2" label="Your message" icon="pencil-alt"/>
    </div>
    <div class="text-center">
      <mdb-btn outline="secondary">保存</mdb-btn>
    </div>
  </form>
</mdb-container>
</template>

<script>
import { mdbContainer, mdbNavbar, mdbNavbarNav, mdbNavItem, mdbIcon, mdbInput, mdbTextarea, mdbBtn } from 'mdbvue'

export default {
  name: 'note_edit',
  components: {
    mdbContainer,
    mdbNavbar,
    mdbNavbarNav,
    mdbNavItem,
    mdbIcon,
    mdbInput,
    mdbTextarea,
    mdbBtn
  },

  methods:{
  	save(){
  		
  	}
  }
}

</script>