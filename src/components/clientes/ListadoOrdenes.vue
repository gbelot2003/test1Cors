<template>
    <v-container>
        <v-layout text-xs-center wrap black--text>

            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-toolbar color="blue" dark>
                        <v-toolbar-title>{{ pacientes.nombre }}</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-list two-line>
                        <template v-for="(item, index) in pacientes.ordenes">
                            <v-list-tile :key="index" avatar ripple>
                                <v-list-tile-content>
                                    <v-list-tile-title>
                                        <span>Fecha: </span>
                                        <router-link  :to="'/ordenes/' + item.id">{{ item.timestamp }}</router-link>
                                    </v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                            <v-divider v-if="index + 1 < pacientes.ordenes.length" :key="`divider-${index}`"></v-divider>
                        </template>
                    </v-list>
                </v-card>
            </v-flex>



        </v-layout>
    </v-container>
</template>

<script>
    import axios from "axios";

    export default {
        name: "ListadoOrdenes",
        data: () => ({
            pacientes: []
        }),
        mounted() {
            this.getOrdenes();
        },
        methods: {
            async getOrdenes() {
                try {
                    let identificador = this.$route.params.id;
                    console.log(identificador);
                    const rest = await axios.get("http://localhost:50340/api/v1/pacientes/1", {
                        headers: {
                            token: this.$store.getters.getToken
                        }
                    });
                    this.pacientes = rest.data;
                    console.log("-> ", this.pacientes )
                } catch (e) {
                    console.log(e)
                }
            }
        }
    }
</script>

<style>

</style>