
function encritarTexto(texto_usuario){
    let arreglo_aux = "";
    let i=0;
    
    for( i=0; i<(texto_usuario.length); i++){
    
        let letra=texto_usuario[i];
      if(letra==='a')
        arreglo_aux +="ai";
      else{
        if(texto_usuario[i]==='e')
        arreglo_aux +="enter";
        else{
            if(texto_usuario[i]==='i')
                arreglo_aux +="imes";
            else{    
                if(texto_usuario[i]==='o')
                    arreglo_aux +="ober";
                else
                    if(texto_usuario[i]==='u')
                        arreglo_aux +="ufat";
                    else
                    arreglo_aux += letra; //si no es vocal, agrego la letra a arregloAux
                }
            }
        }
        //compruebo indice a indice si la letra es una vocal, si lo es, encripto, sino consulto la siguiente hasta que llegue
            // al final del arreglo(length)        
      i++;//incremento indice del arreglo para recorrerlo completamente
     }//fin For
     return arreglo_aux;
    
    }
    
    function desencriptarTexto(texto_usuario){
    
        //el razonamiento es el mismo a la funcion encriptarTexto, solo que se debe encontrar la palabra clave para remplazar
        //por la vocal correspondiente
    
        let texto_desencriptado=texto_usuario;
    
        texto_desencriptado= texto_desencriptado.replace(/ai/g,'a');
        texto_desencriptado=texto_desencriptado.replace(/enter/g,'e');
        texto_desencriptado=texto_desencriptado.replace(/imes/g,'i');
        texto_desencriptado=texto_desencriptado.replace(/ober/g,'o');
        texto_desencriptado=texto_desencriptado.replace(/ufat/g,'u');
        //replace buscará y remplazará todas las OCURRENCIAS( cuando encuetra remplaza)
    
        return texto_desencriptado;
    }
    
    function CopiarTexto(){
    
        
    
    }