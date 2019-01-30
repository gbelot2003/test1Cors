<template>
    <div>
        <v-layout row wrap>
            <v-flex md3>
                <span>Paciente: </span> <span>{{ examen.paciente }}</span>
            </v-flex>
            <v-flex md3>
                <span>Sexo: </span>
                <span>{{ examen.sexo }}</span>
            </v-flex>
            <v-flex md3>
                <span>Edad: </span>
                <span>{{ examen.edad }}</span>
            </v-flex>
            <v-flex md3>
                <span>Fecha Nac: </span>
                <span>{{ examen.fecha_nac }}</span>
            </v-flex>
        </v-layout>

        <v-layout row wrap>
            <v-flex md3>
                <span>Médico: </span> <span>{{ examen.medico }}</span>
            </v-flex>
            <v-flex md3>
                <span>Sucursal: </span>
                <span>{{ examen.sucursal }}</span>
            </v-flex>
            <v-flex md3>
                <span>Cod Interno: </span>
                <span>{{ examen.id_orden }}</span>
            </v-flex>
            <v-flex md3>
                <span>Fecha Factura: </span>
                <span>{{ examen.fecha_factura }}</span>
            </v-flex>
        </v-layout>


        <v-layout row wrap>
            <v-flex md12 text-md-center>
                <h3 class="cabezera">{{ examen.nombre }}</h3>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
        name: "ExamenHeader",
        props:{
            examen:{type:Object}
        }
    }
</script>

<style scoped>
    .cabezera{
        background: antiquewhite;

    }
</style>