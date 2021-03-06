<template>
  <div class="app">
    <ag-grid-vue
      style="height: 900px;"
      class="ag-theme-balham"
      :columnDefs="columnDefs"
      :rowData="rowData"
      rowHeight="150"
      headerHeight="0"
      @grid-ready="onGridReady"
      deltaRowDataMode
      :getRowNodeId="getRowNodeId"
      editType="fullRow"
      @row-editing-stopped="onRowEditingStopped"
      enableCellChangeFlash
      suppressCellSelection
    ></ag-grid-vue>
    <add-user-button @clicked="addUser"></add-user-button>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";
import rowData, {
  createGhostUser,
  isGhostUser,
  isBlankUser,
} from "./rowData.js";
import AvatarRenderer from "./components/Avatar/AvatarRenderer.vue";
import AvatarEditor from "./components/Avatar/AvatarEditor.vue";
import AccountDetailsRenderer from "./components/AccountDetails/AccountDetailsRenderer.vue";
import AccountDetailsEditor from "./components/AccountDetails/AccountDetailsEditor.vue";
import ActionsRenderer from "./components/Actions/ActionsRenderer.vue";
import ActionsEditor from "./components/Actions/ActionsEditor.vue";
import AddUserButton from "./components/AddUserButton.vue";

export default {
  name: "App",
  data() {
    return {
      columnDefs: null,
      gridApi: null,
      columnApi: null,
      ghostUser: null,
    };
  },
  computed: {
    rowData: {
      get() {
        return this.$store.getters.rowData;
      },
      set(data) {
        this.$store.commit("setRowData", data);
      },
    },
  },
  components: {
    AgGridVue,
    // eslint-disable-next-line vue/no-unused-components
    AvatarRenderer,
    // eslint-disable-next-line vue/no-unused-components
    AvatarEditor,
    // eslint-disable-next-line vue/no-unused-components
    AccountDetailsRenderer,
    // eslint-disable-next-line vue/no-unused-components
    AccountDetailsEditor,
    // eslint-disable-next-line vue/no-unused-components
    ActionsRenderer,
    // eslint-disable-next-line vue/no-unused-components
    ActionsEditor,
    AddUserButton,
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.api;
    },
    getRowNodeId(data) {
      return data.id;
    },
    addUser() {
      // only allow one ghost node at a time
      if (this.ghostUser) {
        let ghostNode = this.getGhostNode();
        this.startEditingNode(ghostNode);
      } else {
        this.ghostUser = createGhostUser();
        this.$store.commit("addGhostUser", this.ghostUser);
      }
    },
    onRowEditingStopped(params) {
      let user = params.data;
      if (isGhostUser(user)) {
        if (isBlankUser(user)) {
          // remove empty rows from our data set
          this.$store.commit("deleteUser", { user, force: true });
        } else {
          // commit non-empty, ghost rows
          this.$store.commit("commitGhostUser", user);
        }
      }
      this.ghostUser = null;
    },
    getGhostNode() {
      return this.gridApi.getRowNode(this.ghostUser.id);
    },
    startEditingNode(node) {
      this.gridApi.startEditingCell({
        rowIndex: node.rowIndex,
        colKey: "avatarUrl",
      });
      this.gridApi.flashCells({ rowNodes: [node] });
    },
  },
  beforeMount() {
    this.columnDefs = [
      {
        field: "avatarUrl",
        cellRendererFramework: "AvatarRenderer",
        cellEditorFramework: "AvatarEditor",
        width: 170,
        editable: true,
      },
      {
        cellRendererFramework: "AccountDetailsRenderer",
        cellEditorFramework: "AccountDetailsEditor",
        valueGetter: (params) => ({
          username: params.data.username,
          name: params.data.name,
          following: params.data.following,
          verified: params.data.verified,
        }),
        equals: (oldValue, newValue) => {
          let usernameEqual = oldValue.username === newValue.username;
          let nameEqual = oldValue.name === newValue.name;
          let followingEqual = oldValue.following === newValue.following;
          let verifiedEqual = oldValue.verified === newValue.verified;
          return usernameEqual && nameEqual && followingEqual && verifiedEqual;
        },
        valueSetter: (params) => {
          params.data.username = params.newValue.username;
          params.data.name = params.newValue.name;
          params.data.following = params.newValue.following;
          params.data.verified = params.newValue.verified;
        },
        editable: true,
        width: 300,
      },
      {
        headerName: "Actions",
        cellRendererFramework: "ActionsRenderer",
        cellEditorFramework: "ActionsEditor",
        // eslint-disable-next-line no-unused-vars
        valueSetter: (params) => null,
        editable: true,
        width: 130,
      },
    ];

    this.rowData = rowData;
  },
  updated() {
    // start editing ghost nodes immediately after adding them to the store
    this.$nextTick(function() {
      if (this.ghostUser) {
        let ghostNode = this.getGhostNode();
        this.startEditingNode(ghostNode);
      }
    });
  },
};
</script>

<style lang="scss">
@import "../node_modules/ag-grid-community/src/styles/ag-grid.scss";
@import "../node_modules/ag-grid-community/src/styles/ag-theme-balham/sass/ag-theme-balham-mixin.scss";
@import "./scss/variables";

.app {
  width: 100%;
  position: relative;
}

button {
  position: absolute;
  top: 100%;
  left: 100%;
  transform: translate(-110px, -110px);
  z-index: 999;
}

.ag-theme-balham {
  box-shadow: 0 0 15px $dark-grey;
  @include ag-theme-balham(
    (
      font-family: (
        "Roboto",
        sans-serif,
      ),
      // icon-font-family: "Font Awesome 5 Free",
        // icons-data: null,
        background-color: white,
    )
  );
}

.ag-theme-balham .ag-cell {
  display: flex;
  align-items: center;
}

.ag-theme-balham .ag-cell.ag-cell-inline-editing {
  height: inherit;
  border: none;
  padding: 0 10px;
}

.ag-theme-balham .ag-cell-data-changed {
  // background-color: $medium-grey !important;
}

.ag-theme-balham .ag-root .ag-body-horizontal-scroll {
  // overflow: hidden;
}
</style>
