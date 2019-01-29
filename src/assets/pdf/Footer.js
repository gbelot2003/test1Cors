import {footer} from "../utils/Images";

export var SubFooter = function (doc, image, obj) {
    doc.addImage(image, 'png', 0, 267, 210, 30);
    doc.save(obj.nombre + '.pdf');
}