<template>
<mdb-container :fluid="true">
  <mdb-navbar dark color="primary" name="qingu" href="#">
  	<mdb-navbar-toggler>
  		<mdb-navbar-nav left>
            <mdb-nav-item to="/note/add" waves-fixed><mdb-icon icon="pen-square" size="2x"/></mdb-nav-item>
            <mdb-nav-item waves-fixed><mdb-icon icon="star" size="2x"/></mdb-nav-item>
        </mdb-navbar-nav>
          <!-- Search form -->
        <form>
            <mdb-input type="text" class="text-white" placeholder="搜索" aria-label="search">
            <mdb-dropdown slot="prepend">
                <mdb-dropdown-toggle color="primary" size="md" slot="toggle" class="z-depth-0">tags</mdb-dropdown-toggle>
                <mdb-dropdown-menu>
                  <mdb-dropdown-item>Linux</mdb-dropdown-item>
                  <mdb-dropdown-item>PHP</mdb-dropdown-item>
                  <mdb-dropdown-item>Vue</mdb-dropdown-item>
                </mdb-dropdown-menu>
              </mdb-dropdown>
           </mdb-input>   
        </form>
    </mdb-navbar-toggler>
  </mdb-navbar>
  
  <mdb-list-group>
  		<mdb-nav-item class="list-group-item list-group-item-action" to="/note/1">
          <h5 class="text-center">
            session机制
          </h5>
        </mdb-nav-item>
  		
        <mdb-nav-item class="list-group-item list-group-item-action" to="/navigation">
          <h5 class="text-center">
            导航
          </h5>
        </mdb-nav-item>
        <mdb-nav-item class="list-group-item list-group-item-action" to="/tabs">
          <h5 class="text-center">
            Tabs
          </h5>
        </mdb-nav-item>
        <mdb-nav-item class="list-group-item list-group-item-action" to="/forms">
          <h5 class="text-center">
            表单
          </h5>
        </mdb-nav-item>
        <mdb-nav-item class="list-group-item list-group-item-action" to="/button">
          <h5 class="text-center">
            按钮
          </h5>
        </mdb-nav-item>
  </mdb-list-group>
</mdb-container>
</template>

<script>
import { mdbContainer, mdbNavbar, mdbNavItem, mdbListGroup, mdbNavbarNav, mdbNavbarToggler, mdbIcon, mdbInput, mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem } from 'mdbvue';

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
  }
}
</script>