<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <label>
            km:
            <input type="text" v-model="km2" />
          </label>
          <br />
          <label>
            cm:
            {{this.cm}}
          </label>
          <br />
          <label>
            mm:
            {{this.mm}}
          </label>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      km2: 0,
      cm: 0,
      mm: 0
    };
  },
  watch: {
    km2(val) {
      this.km2 = val;
      this.cm = val * 100000;
      this.mm = val * 1000000;
    }
  }
};
</script>