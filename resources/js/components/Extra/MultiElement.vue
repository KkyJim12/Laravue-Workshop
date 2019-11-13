<template>
<div>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Multi Element</h1>
                <hr>
                <input v-for="loop in count" class="form-control mb-2" type="text" placeholder="Type Something">
                <button @click="addElement()" class="btn btn-primary" type="button">Add Element</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            count:1
        }
    },
    methods:{
        addElement() {
            this.count += 2
        }
    }
}
</script>