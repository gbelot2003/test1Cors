
export var SubHeader = function (doc, image, obj) {
    doc.addImage(image, 'png', 10, 5, 200, 25);

    // Informe
    doc.line(10, 33, 200, 33); // horizontal line
    doc.setFontSize(19);
    doc.text(60, 40, 'INFORME DE RESULTADOS');
    doc.line(10, 42, 200, 42); // horizontal line

    doc.setFontSize(11);
    doc.text(10, 49, "Paciente: ");
    doc.text(28, 49, obj.paciente);

    doc.text(60, 49, "Sexo: ");
    doc.text(71, 49, obj.sexo);

    doc.text(86, 49, "Edad: ");
    doc.text(98, 49, obj.edad);

    doc.text(140, 49, "Fecha Nac: ");
    //var fechaNac = new Date(obj.fecha_factura);
    //fechaNac = new Intl.DateTimeFormat('en-AU').format(fechaNac); // Australian date format: "8/10/2010"
    //doc.text(162, 49, fechaNac);

    doc.text(10, 56, "Medico: ");
    doc.text(26, 56, obj.medico);

    doc.text(60, 56, "Sucursal: ");
    doc.text(77, 56, obj.sucursal);

    doc.text(90, 56, "Cod. interno: ");
    doc.text(112, 56, obj.id_orden.toString());

    doc.text(140, 56, "Fecha Factura: ");

    doc.rect(10, 60, 190, 10); // empty square
    doc.setFontSize(15);
    doc.text(75, 67, obj.nombre);
};