var pdf = require('pdfkit');
var fs = require('fs');

var myDoc = new pdf;

myDoc.pipe(fs.createWriteStream('app/pago.pdf'));

doc.image('app/corporativo.jpg', 0, 15, width: 300)
   .text('Proportional to width', 0, 0)

myDoc.font('fonts/PalatinoBold.ttf')
      .fontSize(48)
      .text('Pago Correspondiente a Empleado',100,100)
      
myDoc.end();
