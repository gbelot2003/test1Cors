import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import {curvaImg, header, footer} from './Images';
import {SubHeader} from '../pdf/Header';
import {SubFooter} from '../pdf/Footer';
import {getDataUri} from "./GetDataUri";

export function CreatePdf(obj) {
    var doc = new jsPDF();

    // Header
    SubHeader(doc, header, obj);

    doc.setFontSize(11);

    if (obj.curva_data != null) {

        /*let logo = null;
        getDataUri("https://i.ibb.co/N6HJshg/graph.png", function (dataUri) {
            logo = dataUri;
            console.log("logo=" + logo);
        });*/

        doc.addImage(curvaImg, 'png', 30, 120, 160, 45);

    } else {

        let trans = 80;
        let i = 1;

        for (let [key, value] of Object.entries(obj.resultados.data)) {

            var J = 10;
            var R = i++;
            var rest = J * R;
            var fila = trans + rest;
            doc.text(10, fila, value.title);
           //console.log(key, value);
        }

    }

    // Footer
    SubFooter(doc, footer,obj);
}