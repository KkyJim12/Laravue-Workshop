<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>Vuex Show</h1>
                    <h1>{{ this.tel }}</h1>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tel: this.$store.getters.tel
        };
    }
};
</script>
