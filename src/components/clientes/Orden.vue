<template>
    <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
            <br/>
            <br/>
            <v-spacer></v-spacer>
            <!--<v-dialog v-model="dialog" max-width="1000px">
                <v-card class="page">
                    <v-card-text>
                        <v-container grid-list-md>
                            <v-layout wrap>
                                <div class="dialog-title">
                                    <h1>Informe de Resultados</h1>
                                </div>
                                <div class="dialog-paciente">
                                    <table class="table" width="100%">
                                        <tr>
                                            <td>Paciente: {{ dialogInfo.paciente }}</td>
                                            <td>Sexo: {{ dialogInfo.sexo }}</td>
                                            <td>Edad: {{ dialogInfo.edad }}</td>
                                            <td>Fecha Nacimiento: {{ dialogInfo.fecha_nac }}</td>
                                        </tr>
                                        <tr>
                                            <td>Medico: {{ dialogInfo.medico }}</td>
                                            <td>Sucursal: {{ dialogInfo.sucursal }}</td>
                                            <td>Codigo interno: {{ dialogInfo.id_orden }}</td>
                                            <td>Fecha Factura: {{ dialogInfo.fecha_factura }}</td>
                                        </tr>
                                    </table>
                                </div>
                                <div class="dialog-examen-title">
                                    <h3>{{ dialogInfo.nombre }}</h3>
                                </div>
                                <div class="dialog-examen-table">
                                    <div class="dialog-orden-detalle">
                                        <div>Orden de Trabajo: xxxxxxx</div>
                                        <div>Fecha: xx/xx/xxxx</div>
                                        <div>Área: xxx</div>
                                        <div>SubÁrea: xxx</div>
                                    </div>

                                    <table class="dialog-examen-table-resultados" width="100%">
                                        <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Resultado</th>
                                            <th>Unidad</th>
                                            <th>Valores de Referencia</th>
                                        </tr>
                                        </thead>
                                        <tbody v-if="dialogInfo.resultados">
                                        <tr v-for="(row, key) in dialogInfo.resultados.data" :key="key"
                                            v-if="dialogInfo.resultados.status === 'OK'">
                                            <td>{{ row.title || "-" }}</td>
                                            <td>{{ row.value || "-" }}</td>
                                            <td>{{ row.unit || "-" }}</td>
                                            <td>{{ row.valref || "-" }}</td>
                                        </tr>
                                        <tr v-else>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                        </tr>

                                        &lt;!&ndash;<tr &ndash;&gt;
                                        </tbody>
                                        <tbody v-else>
                                        <tr>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                &lt;!&ndash; NOTAS &ndash;&gt;
                                <div class="dialog-notas">
                                    <span>Notas:</span>
                                    <span>{{ dialogInfo.nota }}</span>
                                </div>
                                &lt;!&ndash; FIRMA &ndash;&gt;
                                <div class="dialog-firma" v-if="dialogInfo.validations">
                                    <p>Validado por: {{ dialogInfo.validations.dr_name }}</p>

                                    <ul>
                                        <li v-for="(dr, key) in dialogInfo.validations" :key="key">
                                            <span>{{ dr.dr_name }}</span>
                                        </li>
                                    </ul>

                                </div>

                            </v-layout>
                        </v-container>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="no-print" color="blue darken-1" flat @click="close">Cancel</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>-->

            <v-dialog v-model="dialog" max-width="1000px">
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
                    <v-toolbar-title>Ordenes</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon>search</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon>view_module</v-icon>
                    </v-btn>
                </v-toolbar>

                <!-- CONTENT -->
                <v-list two-line subheader v-for="(subarea, key) in examenes" :key="key">
                    <!-- SUB_AREA NAME -->
                    <v-subheader inset>{{ key }}</v-subheader>

                    <!-- EXAMEN -->
                    <v-list-tile v-for="(examen, key) in subarea" :key="key" avatar @click="editItem(examen.id)">
                        <!-- ICON -->
                        <v-list-tile-avatar>
                            <v-icon :class="[iconClass]">{{ icon }}</v-icon>
                        </v-list-tile-avatar>

                        <!-- NAME -->
                        <v-list-tile-content>
                            <v-list-tile-sub-title>{{ examen.nombre }}</v-list-tile-sub-title>
                        </v-list-tile-content>

                        <!-- ICON -->
                        <v-list-tile-action>
                            <v-btn icon ripple>
                                <v-icon color="grey lighten-1">info</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>

                    <!-- DIVIDER SUB_AREA LINE -->
                    <v-divider inset></v-divider>
                </v-list>
            </v-card>
        </v-flex>
    </v-layout>
</template>


<script>
    import axios from "axios";
    import {group} from "../../assets/utils/funcions";
    import {CreatePdf} from "../../assets/utils/PdfGenerator";
    //import jsPDF from 'jspdf';

    export default {
        name: "Orden",
        data() {
            return {
                icon: 'folder',
                iconClass: 'grey lighten-1 white--text',
                examenes: {},
                orden: {},
                dialog: false,
                dialogInfo: {},
                logo: null
            }
        },
        mounted() {
            this.getOrden();
            this.getExamenes();
        },
        methods: {
            active: function () {
                this.isActive = !this.isActive;
                return this.isActive;
            },
            editItem: async function (item) {
                try {
                    let rest = await axios.get('http://localhost:50340/api/v1/examenes/' + item, {
                        headers: {
                            token: this.$store.getters.getToken
                        }
                    });

                    console.log(rest.data);
                    CreatePdf(rest.data);

                } catch (e) {
                    console.log(e);
                }

                /* let pdfName = this.dialogInfo.paciente + " - "+ this.dialogInfo.id;
                 var doc = new jsPDF();

                 doc.setFontSize(40)
                 doc.text(35, 25, 'Paranyan loves jsPDF');
                 doc.addImage(this.logo, 'png', 15, 40, 100, 100);

                 doc.save("datauristring'/'dataurlstring", pdfName + '.pdf');*/

            },
            close: function () {
                this.dialog = false
            },
            async getOrden() {
                try {
                    const rest2 = await axios.get('http://localhost:50340/api/v1/ordenes/1', {
                        headers: {
                            token: this.$store.getters.getToken
                        }
                    });
                    this.orden = rest2.data;
                } catch (e) {
                    console.log(e);
                }
            },
            async getExamenes() {
                try {
                    const rest = await axios.get("http://localhost:50340/api/v1/examenes", {
                        headers: {
                            token: this.$store.getters.getToken
                        }
                    });
                    this.examenes = group(rest.data);
                } catch (e) {
                    console.log(e);
                }
            }
        }
    }
</script>

<style>
    .dialog-title {
        display: block;
        width: 100%;
        text-align: center;
        border-bottom: 1px solid black;
        border-top: 1px solid black;
        text-transform: uppercase;
    }

    .dialog-paciente {
        display: block;
        width: 100%;
    }

    .dialog-examen-title {
        display: block;
        width: 100%;
        text-align: center;
        border: 1px solid black;
        text-transform: uppercase;

    }

    .dialog-examen-table {
        display: block;
        width: 100%;
    }

    .dialog-orden-detalle {
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid;
    }

    .dialog-examen-table-resultados thead tr th {
        text-align: center;
    }

    .dialog-examen-table-resultados thead tr th:first-child {
        text-align: left;
    }

    .dialog-examen-table-resultados tbody td {
        text-align: center;
    }

    .dialog-examen-table-resultados tbody td:first-child {
        text-align: left;
    }

    .dialog-notas {
        display: flex;
        width: 100%;
    }

    .dialog-notas span:first-child {
        display: block;
        width: 3rem;
    }

    .dialog-notas span:last-child {
        display: block;
        border-bottom: 1px solid;
        width: calc(100% - 3rem);
    }

    .dialog-firma {
        display: flex;
        justify-content: flex-end;
        width: 100%;
    }

    .dialog-firma ul {
        list-style: none;
        padding: 0 0 0 1rem;
    }

    @page {
        size: letter;
        margin: 0;
    }

    @media print {
        .no-print {
            display: none;
        }

        .page {
            position: fixed;
            top: 0;
            left: 0;
            margin: 0;
            padding: 0;
            border: none;
            border-radius: 0;
            width: 100vw;
            min-height: 100vw;
            box-shadow: none;
            background: white;
            page-break-after: always;
        }
    }
</style>