<template>
  <mdb-container>
  	<mdb-navbar-toggler>
  		<mdb-navbar-nav left>
            <mdb-nav-item href="#" waves-fixed>Home</mdb-nav-item>
            <mdb-nav-item href="#" waves-fixed>Features</mdb-nav-item>
            <mdb-nav-item href="#" waves-fixed>Pricing</mdb-nav-item>
        </mdb-navbar-nav>
          <!-- Search form -->
        <form>
            <mdb-input type="text" class="text-white" placeholder="Search" aria-label="Search" label navInput waves waves-fixed/>
        </form>
    </mdb-navbar-toggler>

    <mdb-row>
      <mdb-col md="8" class="mx-auto">
      <mdb-list-group>
            <mdb-nav-item class="list-group-item list-group-item-action" to="/components/alert">
              <h5 class="justify-content-between d-flex align-items-center">
                Alerts<mdb-icon icon="angle-right"/>
              </h5>
            </mdb-nav-item>
            <mdb-nav-item class="list-group-item list-group-item-action" to="/components/badge">
              <h5 class="justify-content-between d-flex align-items-center">
                Badge<mdb-icon icon="angle-right"/>
              </h5>
            </mdb-nav-item>
            <mdb-nav-item class="list-group-item list-group-item-action" to="/components/button">
              <h5 class="justify-content-between d-flex align-items-center">
                Button <mdb-icon icon="angle-right"/>
              </h5>
            </mdb-nav-item>
      </mdb-list-group>
      </mdb-col>
  	</mdb-row>   
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbIcon, mdbNavItem, mdbListGroup } from 'mdbvue';

export default {
  name: 'HomePage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbNavItem,
    mdbListGroup
  }
};
</script>