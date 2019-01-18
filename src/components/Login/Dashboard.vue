<template>
    <v-container>
        <v-layout text-xs-center wrap>
            <h1>Dashboard</h1>

            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-toolbar color="blue" dark>
                        <v-toolbar-side-icon></v-toolbar-side-icon>
                        <v-toolbar-title>Pacientes</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-list two-line>
                        <template v-for="(item, index) in clientes">
                            <v-list-tile :key="index" avatar ripple>
                                <v-list-tile-content>
                                    <v-list-tile-title>
                                        <router-link  :to="'/pacientes/' + item.id">{{ item.nombre }}</router-link>
                                    </v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                            <v-divider v-if="index + 1 < clientes.length" :key="`divider-${index}`"></v-divider>
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
        data: () => ({
            clientes: [],
            token: '',
        }),
        mounted() {
            this.getPacientes();
        },
        methods: {
            async getPacientes() {
                try {
                    const rest = await axios.get("http://localhost:50340/api/v1/pacientes", {
                        headers: {
                            token: this.$store.getters.getToken
                        }
                    });
                    this.clientes = rest.data;
                } catch (e) {
                    console.log("error", e)
                }
            }
        }
    }
</script>

<style>

</style>
