<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No Data
      </p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
// import axios from "axios";
import SurveyResult from "./SurveyResult.vue";

export default {
  components: {
    "survey-result": SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  methods: {
    loadExperiences() {
      this.isLoadin = true;
      this.error = null;
      fetch(
        "https://vue-http-demo-8bbd9-default-rtdb.asia-southeast1.firebasedatabase.app/survey.json"
      )
        .then(res => {
          if (res.ok) {
            return res.json();
          }
        })
        .then(data => {
          this.isLoading = false;
          // console.log(data);
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }
          this.results = results;
        })
        .catch(() => {
          this.isLoading = false;
          this.error = "Failed to fetch data";
        });
      // axios
      //   .get(
      //     "https://vue-http-demo-8bbd9-default-rtdb.asia-southeast1.firebasedatabase.app/survey.json"
      //   )
      //   .then(function (res) {
      //     if (res.ok) {
      //       try {
      //         return res.json();
      //       } catch (error) {
      //         console.log(error);
      //       }
      //     }
      //   })
      //   .then(function (data) {
      //     console.log(data);
      //   });
    },
  },
  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
