<template>
    <v-layout row>
        <v-flex xs12 sm10 offset-sm1>
            <br/>
            <br/>
            <v-spacer></v-spacer>

            <v-dialog v-model="dialog">
                <v-card class="page">
                    <v-card-text>
                        <v-container grid-list-md>
                            <v-layout wrap>


                            </v-layout>
                        </v-container>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="no-print" color="blue darken-1" flat @click="close">Cancel</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-card>
                <!-- TOOLBAR -->
                <v-toolbar color="light-blue" dark>
                    <v-toolbar-side-icon></v-toolbar-side-icon>
                    <v-toolbar-title>Orden de Trabajo No.</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon>search</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon>view_module</v-icon>
                    </v-btn>
                </v-toolbar>

                <!-- CONTENT -->
                <examenes v-for="orden in ordenes" v-bind:id="orden.id"></examenes>
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

                    this.ordenes = rest2.data;

                    console.log(this.ordenes);

                } catch (e) {
                    console.log(e);
                }
            },

            close(){
                console.log("Cerrar");
            },
        },
        component: {
            'examenes': Examenes
        }
    }
</script>