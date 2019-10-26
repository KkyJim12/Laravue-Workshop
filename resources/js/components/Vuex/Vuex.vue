<template>
    <div>
        <input v-model="tel" type="text" placeholder="Typing" />
        <button @click="Test()" class="btn btn-primary">Store</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tel: ""
        };
    },
    methods: {
        Test() {
            this.$store.commit("Store", this.tel);
        }
    }
};
</script>
