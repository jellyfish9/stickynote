<template>
<mdb-container :fluid="true">
  <mdb-navbar dark color="primary" name="qingu">
  		<mdb-navbar-nav align="center">
            <mdb-nav-item to="/" :exact="true" waves-fixed><mdb-icon icon="arrow-left" size="2x" color="white"/></mdb-nav-item>
        	<mdb-nav-item waves-fixed><p class="h5 text-center text-white">添加笔记</p></mdb-nav-item>
        	<mdb-nav-item to="/" :exact="true" waves-fixed><mdb-icon icon="home" size="2x" color="white"/></mdb-nav-item>
        </mdb-navbar-nav>
  </mdb-navbar>

  <div class="mt-5">
    
    <div class="grey-text">
      <mdb-input id="note" label="笔记" icon="tag" group type="text" validate error="wrong" success="right"/>
      <mdb-textarea :rows="8" label="备注" icon="pencil-alt"/>
    </div>
    <div class="text-center">
      <mdb-btn outline="secondary" @click="save">保存</mdb-btn>
    </div>
  </div>
</mdb-container>
</template>

<script>
import { mdbContainer, mdbNavbar, mdbNavbarNav, mdbNavItem, mdbIcon, mdbInput, mdbTextarea, mdbBtn } from 'mdbvue'

export default {
  name: 'note_add',
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
  	save(e){
  		//e.preventDefault()
  		let data = {note: $('#note').val(), mark: $('textarea').first().val()}
		$.ajaxSettings.crossDomain = true
		/*
			//headers: {Origin: 'http://note.coolhand.vip'}
			crossDomain: true
		}*/
		$.ajax({
		  type: 'POST',
		  url: 'http://note.io/api/note_add',
		  data: data,
		  success: function(res) {alert(res)}
		  /*
		  headers: {
		  	Access-Control-Request-Headers: '',
		  	Access-Control-Request-Method: ''
		  	}
		  	*/
		})
		/*
  		$.post('http://note.io/note_add', data, function(res) {
  			console.log(res)
  		})*/
  	}
  }
}

</script>
