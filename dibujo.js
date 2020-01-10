var texto = document.getElementById("textoLineas");
var boton = document.getElementById("botoncito");
boton.addEventListener ("click",dibujoPorCick);

var d=document.getElementById("dibujito");
var lienzo = d.getContext ("2d");
var ancho = d.width;


function dibujarLinea (color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color ;
  lienzo.moveTo (xinicial, yinicial);
  lienzo.lineTo (xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath;

}

function dibujoPorCick()
{
  var lineas = parseInt(texto.value);
  var l=0;
  var yi,xf;
  var colorcito = "#FAA";
  var espacio = 0;

  espacio = ancho/lineas;

  for (l= 0; l < lineas; l++)
  {
    yi = espacio *l;
    xf = espacio * (l+1);
    dibujarLinea (colorcito, 0 , yi, xf, ancho );
    console.log ("linea " + l);
  }

  dibujarLinea (colorcito, 1,1,1,ancho -1);
  dibujarLinea (colorcito, 1,ancho -1,ancho -1,ancho -1);

}
