import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import {curvaImg, header, footer} from './Images';
import {SubHeader} from '../pdf/Header';
import {SubFooter} from '../pdf/Footer';
import {Standart} from "../pdf/Standar";
import {Curva} from "../pdf/Curva";

export function CreatePdf(obj) {
    var doc = new jsPDF();

    // Header
    SubHeader(doc, header, obj);

    if (obj.curva_data != null) Curva(doc, curvaImg, obj);

    Standart(doc, obj);


    // Footer
    SubFooter(doc, footer, obj);
}