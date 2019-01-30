<template>
    <div>
        <examen-header v-bind:examen="examen"></examen-header>
    </div>
</template>

<script>
    import ExamenHeader from "./ExamenHeader";

    export default {
        name: "Examen",
        components: {ExamenHeader},
        props:{
            examen:{type:Object}
        },
        data(){
            return{
            }
        },
        component:{ExamenHeader}
    }
</script>