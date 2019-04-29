<template>
  <component :is="tag" class="select-wrapper mdb-select md-form">
  <i v-if="icon" :class="'fas prefix fa-' + icon"/>
  <input type="text" :class="inputClassName" @click.prevent="toggleUl" ref="input"/>
  <ul :class="className">
  	<select-item :selectAll="true" @change="checkAll">全选</select-item>
  	<select-item v-for="(item, index) in options" @change="changeTag($event, index)">{{item}}</select-item>
  	<Btn color="primary" @click="choose" size="sm">确定</Btn>
  </ul>
  </component>
</template>

<script>
import classNames from 'classnames'
//import { mixin as clickaway } from 'vue-clickaway'
import { SelectItem,Btn } from 'mdbvue'

const mdbSelect = {
  components: {
  	SelectItem,
  	Btn,
  },
  props: {
    tag: {
      type: String,
      default: "div"
    },
    options: {
      type: Array
    },
    up: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
    },
    inputClass: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      toggle: false,
      chosedId: []
    };
  },
  mounted() {
  	this.$el.lastElementChild.style.opacity = 1
  	if (this.up)
  		this.$el.lastElementChild.style.bottom = 0
  	/*	
  	if (this.icon) {
  		this.$el.lastElementChild.style.left = 0
  	}
  	*/
  },
  methods: {

    toggleUl() {
    	if (this.toggle === false) {
    		this.toggle = true
    	} else {
    		this.toggle = false
    	}
    	var display = this.toggle == false ? 'none' : 'block'
    	this.$el.lastElementChild.style.display = display
    },
    choose() {
     this.toggleUl()
     this.$refs.input.value = this.chosed
     this.$emit('change', this.chosed)
     // 填充chosed
    },
    changeTag(active, index) {
    	this.$set(this.chosedId, index, active)
    },
    checkAll(active) {
    	var lis = this.$el.lastElementChild.querySelectorAll('li')
    	// lis = lis.slice(1)
    	let len = lis.length
    	for (let i=1; i<len; i++) {
    		let input = lis[i].querySelector('input')
    		if (active != input.checked) {
    			lis[i].click()
    		}
    	}
    	/*
    	if (true === active) {
	    	for (let index in this.options) {
	    		this.$set(this.chosedId, index, true)
	    	}
    	} else {
    		this.chosedId = []
    	}*/
    }
  },
  computed: {
    className() {
      return classNames(
      	'dropdown-content select-dropdown w-50 multiple-select-dropdown'
      )
    },
    inputClassName() {
    	return classNames(
    		'select-dropdown',
    		this.inputClass
    	)
    },
  	chosed() {
    	let options = this.options
    	var ids = this.chosedId
    	var tags = []
    	for (let i in ids) {
    		if (ids[i]) {
    			tags.push(options[i])
    		}
    	}
    	return tags.join(',')
    }
  }
}

export default mdbSelect;
</script>

<style scoped>
</style>
