<template>
  <div>
    <base-card>
      <base-button
        @click="setSelectedTab('stored-resources')"
        :mode="storedResButtonMode"
        >Stored Resources</base-button
      >
      <base-button
        @click="setSelectedTab('add-resources')"
        :mode="addResButtonMode"
        >Add Resource</base-button
      >
    </base-card>
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
  </div>
</template>

<script>
import StoredResource from "./StoredResource.vue";
import AddResource from "./AddResource.vue";
export default {
  components: {
    "stored-resources": StoredResource,
    "add-resources": AddResource,
  },
  data() {
    return {
      selectedTab: "stored-resources",
      storedResource: [
        {
          id: "official-guide",
          title: "Official Guide",
          description: "The official Vue.js documentation",
          link: "https://vuejs.org",
        },
        {
          id: "google",
          title: "Google",
          description: "Learn to Google",
          link: "https://google.org",
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResource,
      addResource: this.addResource,
      deleteResource: this.deleteResource,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url,
      };
      this.storedResource.unshift(newResource);
      this.selectedTab = "stored-resources";
    },
    deleteResource(resId) {
      const resIndex = this.storedResource.findIndex(res => res.id === resId);
      this.storedResource.splice(resIndex, 1);
      // this.storedResource = this.storedResource.filter(res => res.id !== resId);
      console.log(this.storedResource.length);
    },
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === "stored-resources" ? null : "flat";
    },
    addResButtonMode() {
      return this.selectedTab === "add-resources" ? null : "flat";
    },
  },
};
</script>
