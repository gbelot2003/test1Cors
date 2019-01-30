<template>
    <v-card>
        <v-card-text>

            <examen v-bind:examen="orden"></examen>

        </v-card-text>
    </v-card>
</template>

<script>
    import axios from "axios";
    import Examen from "./Examen";

    export default {
        name: "Examenes",
        props: ['id'],
        data(){
            return{
                examenes: {},
                orden:{}
            }
        },
        mounted(){
            this.editItem();
        },
        methods: {
            editItem: async function () {

                try {
                    let rest = await axios.get('http://localhost:50340/api/v1/examenes/' + this.$props.id, {
                        headers: {
                            token: this.$store.getters.getToken

                        }
                    });
                    this.orden = rest.data;
                    this.examenes = rest.data.resultados;
                    //console.log(this.examen);

                } catch (e) {
                    //console.log(e);
                }

            }
        },
        components: {Examen},
    }
</script>

<style scoped>

</style>