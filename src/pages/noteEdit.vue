<template>
<mdb-container :fluid="true">
  <mdb-navbar dark color="primary" name="qingu">
  		<mdb-navbar-nav justifyAround>
            <mdb-nav-item to="/" :exact="true" waves-fixed><mdb-icon icon="arrow-left" size="2x" color="white"/></mdb-nav-item>
        	<mdb-nav-item waves-fixed><p class="h5 text-center text-white">编辑笔记</p></mdb-nav-item>
        	<mdb-nav-item to="/" :exact="true" waves-fixed><mdb-icon icon="home" size="2x" color="white"/></mdb-nav-item>
        </mdb-navbar-nav>
  </mdb-navbar>

  <div class="mt-5">
    
    <div class="grey-text">
      <mdb-input id="note" label="笔记" icon="tag" group type="text" :value="note.note" validate error="wrong" success="right"/>
      <mdb-textarea :rows="8" label="备注" icon="pencil-alt" :value="note.mark"/>
      <mdb-input id="tag" label="标签" icon="tag" group type="text" :value="note.tag" inputClass="w-50" validate error="wrong" success="right"/>
    </div>
    <div class="text-center">
      <mdb-btn outline="secondary" @click="save">保存</mdb-btn>
    </div>
  </div>
</mdb-container>
</template>

<script>
import { mdbContainer, mdbNavbar, mdbNavbarNav, mdbNavItem, mdbIcon, mdbInput, mdbTextarea, mdbBtn } from 'mdbvue'
import config from 'config'
import VueToasted from 'vue-toasted'
import Vue from 'vue'
Vue.use(VueToasted, {iconPack: 'fontawesome'})
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
  data() {
    return {
      note: {note:'',mark:''},
    }
  },
  mounted() {
  	let id = this.$route.params.id
  	$.getJSON(config.API+'note_show/'+id, (data) => {
  		this.note = data
  	})
  },
  methods:{
  	save(e){
  		var tag = $('#tag').val()
  		let data = {tag, note: $('#note').val(), mark: $('textarea').first().val()}
		//$.ajaxSettings.crossDomain = true
		/*
			//headers: {Origin: 'http://note.coolhand.vip'}
			crossDomain: true
		}*/
		$.ajax({
		  type: 'POST',
		  url: config.API+'note_edit/'+this.$route.params.id,
		  data: data,
		  success: function(res) {
		  	if (res) {
		  	Vue.toasted.show(res, {
		        icon : {
		            name : 'check'
		        },
		        duration: 3000
			})
			}
		}
		})
		/*
  		$.post('http://note.io/note_add', data, function(res) {
  			console.log(res)
  		})*/
  	}
  }
}

</script>
