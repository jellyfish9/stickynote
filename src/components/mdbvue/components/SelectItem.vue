<template>
  <component :is="tag" :class="className" @click="toggle">

  	<span class="filtrable">
  		<input type="checkbox" class="form-check-input" ref="input">
  		<template v-if="selectAll">
  		<label><slot></slot></label>
  		</template>
  		<template v-else>
  		<label></label><slot></slot>
  		</template>
  	</span>
  </component>
</template>

<script>
import classNames from 'classnames';

const SelectItem = {
  props: {
    tag: {
      type: String,
      default: "li"
    },
	selectAll: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },

  },
  data() {
    return {
      active: false
    };
  },
  computed: {
    className() {
      return classNames(
        this.disabled ? 'disabled' : '',
        this.active ? 'active' : ''
      )
    },
  },
  methods: {
  	toggle() {
  		this.$refs.input.checked = this.active = !this.active
  	}
  }
};

export default SelectItem;
export { SelectItem as mdbSelectItem };
</script>

<style scoped>
</style>
