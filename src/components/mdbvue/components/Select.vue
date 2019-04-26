<template>
  <component :is="tag" class="select-wrapper mdb-select md-form">
  <input type="text" class="select-dropdown" @click="toggleUl" v-on-clickaway="away"/>
  <ul :class="classNames">
  	<select-item :selectAll="true">全选</select-item>
  	<select-item v-for="(item, index) in options">{{item}}</select-item>
  </ul>
  </component>
</template>

<script>
import classNames from 'classnames';
import { mixin as clickaway } from 'vue-clickaway';

const mdbSelect = {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    options: {
      type: Array
    },
  },
  data() {
    return {
      toggle: false
    };
  },
  mixins: [clickaway],
  methods: {
    away() {
      this.toggle = false;
    },
    toggleUl() {
    	this.toggle = !this.toggle
    	var display = this.toggle == false ? 'none' : 'block'
    	this.$el.firstElementChild.style.display = display
    }
  },
  computed: {
    className() {
      return classNames(
      	'dropdown-content select-dropdown w-50 multiple-select-dropdown'
      )
    },
    
  }
};

export default mdbSelect;
</script>

<style scoped>
</style>
