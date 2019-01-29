export var Standart = function(doc, obj){

    doc.setFontSize(11);

    let trans = 80;
    let i = 1;

    for (let [key, value] of Object.entries(obj.resultados.data)) {

        var J = 10;
        var R = i++;
        var rest = J * R;
        var fila = trans + rest;
        doc.text(10, fila, value.title);

        doc.text(70, fila, value.value, 'right');
        doc.text(100, fila, value.unit);

        doc.text(140, fila, value.valref);
        //console.log(key, value);
    }

};