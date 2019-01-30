<template>
    <v-layout row>
        <v-flex xs12 sm10 offset-sm1>
            <br/>
            <v-spacer></v-spacer>

            <v-card>
                <!-- TOOLBAR -->
                <v-toolbar color="light-blue" dark>
                    <v-toolbar-side-icon></v-toolbar-side-icon>
                    <v-toolbar-title>Orden de Trabajo No.</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon>view_module</v-icon>
                    </v-btn>
                </v-toolbar>

                <!-- CONTENT -->
                <examenes v-for="orden in examenes" v-bind:id="orden.id" v-bind:key="orden.id"></examenes>
            </v-card>

        </v-flex>
    </v-layout>
</template>

<script>
    import axios from "axios";
    import Examenes from "../examenes/Examenes";

    export default {
        name: 'Ordenes',
        components: {Examenes},
        data(){
            return{
                dialog: false,
                examenes:{},
                ordenes:{}
            }
        },
        mounted(){
            this.getOrden();
        },
        methods:{
            async getOrden() {
                try {
                    const rest2 = await axios.get('http://localhost:50340/api/v1/ordenes/1', {
                        headers: {
                            token: this.$store.getters.getToken
                        }
                    });

                    this.examenes = rest2.data.examenes;
                    this.ordenes = rest2.data;

                } catch (e) {
                    //console.log(e);
                }
            },

            close(){
                //console.log("Cerrar");
            },
        },
        component: {
            'examenes': Examenes
        }
    }
</script>