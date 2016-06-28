function calculaCompri()
{
         /*jslint browser:true, -W099: false, -W041: false */
			var elem1 = document.getElementById('opcao1Compri');
			var item1 = (elem1.options[elem1.options.selectedIndex]).value;

			var elem2 = document.getElementById('opcao2Compri');
			var item2 = (elem2.options[elem2.options.selectedIndex]).value;
			var num = parseFloat(document.formCompri.textCompri.value);
			var resul;
            var unid;
   

        
		if(item1 == 0 && item2 == 0){//Quilômetro
            resul = num;	
        }else if(item1 == 0 && item2 == 1){//Metro
            resul= num*1000;
        }else if(item1 == 0 && item2 == 2){//Decímetro
            resul= num*10000;
        }else if(item1 == 0 && item2 == 3){//Centímetro
            resul= num*100000;
        }else if(item1 == 0 && item2 == 4){//Milímetro
            resul= num*1000000;
        }else if(item1 == 0 && item2 == 5){//Micrômetro
            resul= num*1000000000;
        }else if(item1 == 0 && item2 == 6){//Nanômetro
            resul= num*1000000000;
            resul = resul *1000;
        }else if(item1 == 0 && item2 == 7){//Angstrom
            resul= num*1000000000;
            resul = resul*10000;
        }else if(item1 == 0 && item2 == 8){//Milha
            resul= num*0.621; 
        }else if(item1 == 0 && item2 == 9){//Jarda
            resul= num*1093.613; 
        }else if(item1 == 0 && item2 == 10){//Pé
            resul= num*3280.84;
        }else if(item1 == 0 && item2 == 11){//Polegada
            resul= num*39370.079; 
        }

		//Metro para ..
        else if(item1 == 1 && item2 == 0){//Quilômetro
    		resul = num*0.001; 
    	}else if(item1 == 1 && item2 == 1){//Metro
    		resul = num; 
    	}else if(item1 == 1 && item2 == 2){//Decímetro
    		resul = num*10; 
    	}else if(item1 == 1 && item2 == 3){//Centímetro 
    		resul = num*100; 
    	}else if(item1 == 1 && item2 == 4){//Milímetro
    		resul = num*1000; 
    	}else if(item1 == 1 && item2 == 5){//Micrômetro
    		resul = num*1000000; 
    	}else if(item1 == 1 && item2 == 6){//Nanômetro
    		resul= num*1000000000; 
    	}else if(item1 == 1 && item2 == 7){//Angstrom
    		 resul= num*1000000000;
    		resul= resul*10; 
    	}else if(item1 == 1 && item2 == 8){//Milha
    		resul= num*0.001; 
    	}else if(item1 == 1 && item2 == 9){//Jarda
    		resul= num*1.094; 
    	}else if(item1 == 1 && item2 == 10){//Pé
    		resul= num*3.281; 
    	}else if(item1 == 1 && item2 == 11){//Polegada
    		resul= num*39.37; 
    	}
		//Decímetro para ...
    	 else if(item1 == 2 && item2 == 0){//Quilômetro
    		resul= num*0.0001; 
    	}else if(item1 == 2 && item2 == 1){//Metro
    		resul= num*0.1; 
    	}else if(item1 == 2 && item2 == 2){//Decímetro
    		resul= num; 
    	}else if(item1 == 2 && item2 == 3){//Centímetro 
    		resul= num*10; 
    	}else if(item1 == 2 && item2 == 4){//Milímetro
    		resul= num*100; 
    	}else if(item1 == 2 && item2 == 5){//Micrômetro
    		resul= num*100000; 
    	}else if(item1 == 2 && item2 == 6){//Nanômetro
    		resul= num*100000000; 
    	}else if(item1 == 2 && item2 == 7){//Angstrom
    	    resul= num*1000000000;
    	}else if(item1 == 2 && item2 == 8){//Milha
    		resul= num*0.00006214; 
    	}else if(item1 == 2 && item2 == 9){//Jarda
    		resul= num*0.109; 
    	}else if(item1 == 2 && item2 == 10){//Pé
    		resul= num*0.328; 
    	}else if(item1 == 2 && item2 == 11){//Polegada
    		resul= num*3.937; 
    	}
		//Centímetro para ...
    	 else if(item1 == 3 && item2 == 0){//Quilômetro
    		resul= num*0.00001; 
    	}else if(item1 == 3 && item2 == 1){//Metro
    		resul= num*0.01; 
    	}else if(item1 == 3 && item2 == 2){//Decímetro
    		resul= num*0.1; 
    	}else if(item1 == 3 && item2 == 3){//Centímetro 
    		resul= num; 
    	}else if(item1 == 3 && item2 == 4){//Milímetro
    		resul= num*10; 
    	}else if(item1 == 3 && item2 == 5){//Micrômetro
    		resul= num*10000; 
    	}else if(item1 == 3 && item2 == 6){//Nanômetro
    		resul= num*10000000; 
    	}else if(item1 == 3 && item2 == 7){//Angstrom
    	    resul= num*100000000;
    	}else if(item1 == 3 && item2 == 8){//Milha
    		resul= num*0.000006214; 
    	}else if(item1 == 3 && item2 == 9){//Jarda
    		resul= num*0.0109; 
    	}else if(item1 == 3 && item2 == 10){//Pé
    		resul= num*0.0328; 
    	}else if(item1 == 3 && item2 == 11){//Polegada
    		resul= num*0.3937; 
    	}
		//Milímetro para ...
    	 else if(item1 == 4 && item2 == 0){//Quilômetro
    		resul= num*0.000001; 
    	}else if(item1 == 4 && item2 == 1){//Metro
    		resul= num*0.001; 
    	}else if(item1 == 4 && item2 == 2){//Decímetro
    		resul= num*0.01; 
    	}else if(item1 == 4 && item2 == 3){//Centímetro 
    		resul= num*0.1; 
    	}else if(item1 == 4 && item2 == 4){//Milímetro
    		resul= num; 
    	}else if(item1 == 4 && item2 == 5){//Micrômetro
    		resul= num*1000; 
    	}else if(item1 == 4 && item2 == 6){//Nanômetro
    		resul= num*1000000; 
    	}else if(item1 == 4 && item2 == 7){//Angstrom
    	    resul= num*10000000;
    	}else if(item1 == 4 && item2 == 8){//Milha
    		resul= num*0.0000006214; 
    	}else if(item1 == 4 && item2 == 9){//Jarda
    		resul= num*0.001094; 
    	}else if(item1 == 4 && item2 == 10){//Pé
    		resul= num*0.003281; 
    	}else if(item1 == 4 && item2 == 11){//Polegada
    		resul= num*0.0394; 
    	}
		//Micrômetro para ...
    	 else if(item1 == 5 && item2 == 0){//Quilômetro
    		resul= num*0.000000001; 
    	}else if(item1 == 5 && item2 == 1){//Metro
    		resul= num*0.000001; 
    	}else if(item1 == 5 && item2 == 2){//Decímetro
    		resul= num*0.00001; 
    	}else if(item1 == 5 && item2 == 3){//Centímetro 
    		resul= num*0.0001; 
    	}else if(item1 == 5 && item2 == 4){//Milímetro
    		resul= num*0.001; 
    	}else if(item1 == 5 && item2 == 5){//Micrômetro
    		resul= num; 
    	}else if(item1 == 5 && item2 == 6){//Nanômetro
    		resul= num*1000; 
    	}else if(item1 == 5 && item2 == 7){//Angstrom
    	    resul= num*10000;
    	}else if(item1 == 5 && item2 == 8){//Milha
    		resul= num*0.0000000006214; 
    	}else if(item1 == 5 && item2 == 9){//Jarda
    		resul= num*0.000001094; 
    	}else if(item1 == 5 && item2 == 10){//Pé
    		resul= num*0.000003281; 
    	}else if(item1 == 5 && item2 == 11){//Polegada
    		resul= num*0.00003937; 
    	}
		//Nanômetro para ...
   	 	 else if(item1 == 6 && item2 == 0){//Quilômetro
   	 		 resul= num*0.000000000001; 
   	 	}else if(item1 == 6 && item2 == 1){//Metro
   	 		resul= num*0.000000001; 
   	 	}else if(item1 == 6 && item2 == 2){//Decímetro
   	 		resul= num*0.00000001; 
   	 	}else if(item1 == 6 && item2 == 3){//Centímetro 
   	 		resul= num*0.0000001; 
   	 	}else if(item1 == 6 && item2 == 4){//Milímetro
   	 		resul= num*0.000001; 
   	 	}else if(item1 == 6 && item2 == 5){//Micrômetro
   	 		resul= num*0.001; 
   	 	}else if(item1 == 6 && item2 == 6){//Nanômetro
   	 		resul= num; 
   	 	}else if(item1 == 6 && item2 == 7){//Angstrom
   	 		resul= num*10;
   	 	}else if(item1 == 6 && item2 == 8){//Milha
   	 		resul= num*0.0000000000006214; 
   	 	}else if(item1 == 6 && item2 == 9){//Jarda
   	 		resul= num*0.000000001094; 
   	 	}else if(item1 == 6 && item2 == 10){//Pé
   	 		resul= num*0.000000003281; 
   	 	}else if(item1 == 6 && item2 == 11){//Polegada
   	 		resul= num*0.00000003937; 
   	 	}
		//Angstron para ...
  	 	 else if(item1 == 7 && item2 == 0){//Quilômetro
  	 		 resul= num*0.0000000000001; 
  	 	}else if(item1 == 7 && item2 == 1){//Metro
  	 		resul= num*0.0000000001; 
  	 	}else if(item1 == 7 && item2 == 2){//Decímetro
  	 		resul= num*0.000000001; 
  	 	}else if(item1 == 7 && item2 == 3){//Centímetro 
  	 		resul= num*0.00000001; 
  	 	}else if(item1 == 7 && item2 == 4){//Milímetro
  	 		resul= num*0.0000001; 
  	 	}else if(item1 == 7 && item2 == 5){//Micrômetro
  	 		resul= num*0.0001; 
  	 	}else if(item1 == 7 && item2 == 6){//Nanômetro
  	 		resul= num*0.1; 
  	 	}else if(item1 == 7 && item2 == 7){//Angstrom
  	 		resul= num;
  	 	}else if(item1 == 7 && item2 == 8){//Milha
  	 		resul= num*0.00000000000006214; 
  	 	}else if(item1 == 7 && item2 == 9){//Jarda
  	 		resul= num*0.0000000001094; 
  	 	}else if(item1 == 7 && item2 == 10){//Pé
  	 		resul= num*0.0000000003281; 
  	 	}else if(item1 == 7 && item2 == 11){//Polegada
  	 		resul= num*0.000000003937; 
  	 	}
		//Milhas para ...
 	 	 else if(item1 == 8 && item2 == 0){//Quilômetro
 	 		 resul= num*1.609; 
 	 	}else if(item1 == 8 && item2 == 1){//Metro
 	 		resul= num*1609.344; 
 	 	}else if(item1 == 8 && item2 == 2){//Decímetro
 	 		resul= num*16093.44; 
 	 	}else if(item1 == 8 && item2 == 3){//Centímetro 
 	 		resul= num*160934.4; 
 	 	}else if(item1 == 8 && item2 == 4){//Milímetro
 	 		resul= num*1609344; 
 	 	}else if(item1 == 8 && item2 == 5){//Micrômetro
 	 		resul= num*1609344000; 
 	 	}else if(item1 == 8 && item2 == 6){//Nanômetro
 	 		resul = num*1609000000; 
 			resul = resul*1000;
 	 	}else if(item1 == 8 && item2 == 7){//Angstrom
 	 		resul = num*1609000000; 
 			resul = resul*10000;
 	 	}else if(item1 == 8 && item2 == 8){//Milha
 	 		resul= num; 
 	 	}else if(item1 == 8 && item2 == 9){//Jarda
 	 		resul= num*1760; 
 	 	}else if(item1 == 8 && item2 == 10){//Pé
 	 		resul= num*5280; 
 	 	}else if(item1 == 8 && item2 == 11){//Polegada
 	 		resul= num*63360; 
 	 	}
		//Jardas para ...
	 	 else if(item1 == 9 && item2 == 0){//Quilômetro
	 		resul= num*0.001; 
	 	}else if(item1 == 9 && item2 == 1){//Metro
	 		resul= num*0.914; 
	 	}else if(item1 == 9 && item2 == 2){//Decímetro
	 		resul= num*9.144; 
	 	}else if(item1 == 9 && item2 == 3){//Centímetro 
	 		resul= num*91.44; 
	 	}else if(item1 == 9 && item2 == 4){//Milímetro
	 		resul= num*914.4; 
	 	}else if(item1 == 9 && item2 == 5){//Micrômetro
	 		resul= num*914400; 
	 	}else if(item1 == 9 && item2 == 6){//Nanômetro
	 		resul = num*914400000; 
	 	}else if(item1 == 9 && item2 == 7){//Angstrom
	 		resul = num*914400000; 
			resul = resul*10;
	 	}else if(item1 == 9 && item2 == 8){//Milha
	 		resul= num*0.001; 
	 	}else if(item1 == 9 && item2 == 9){//Jarda
	 		resul= num; 
	 	}else if(item1 == 9 && item2 == 10){//Pé
	 		resul= num*3; 
	 	}else if(item1 == 9 && item2 == 11){//Polegada
	 		resul= num*36; 
	 	}
		//Pé para ...
	 	 else if(item1 == 10 && item2 == 0){//Quilômetro
	 		resul= num*0.0003048; 
	 	}else if(item1 == 10 && item2 == 1){//Metro
	 		resul= num*0.305; 
	 	}else if(item1 == 10 && item2 == 2){//Decímetro
	 		resul= num*3.048; 
	 	}else if(item1 == 10 && item2 == 3){//Centímetro 
	 		resul= num*30.48; 
	 	}else if(item1 == 10 && item2 == 4){//Milímetro
	 		resul= num*304.8; 
	 	}else if(item1 == 10 && item2 == 5){//Micrômetro
	 		resul= num*304800; 
	 	}else if(item1 == 10 && item2 == 6){//Nanômetro
	 		resul = num*304800000; 
	 	}else if(item1 == 10 && item2 == 7){//Angstrom
	 		resul = num*304800000; 
			resul = resul*10;
	 	}else if(item1 == 10 && item2 == 8){//Milha
	 		resul= num*0.0001894; 
	 	}else if(item1 == 10 && item2 == 9){//Jarda
	 		resul= num*0.333; 
	 	}else if(item1 == 10 && item2 == 10){//Pé
	 		resul= num; 
	 	}else if(item1 == 10 && item2 == 11){//Polegada
	 		resul= num*12; 
	 	}

		//Polegadas para ..
	 	else if(item1 == 11 && item2 == 0){//Quilômetro
	 		resul= num*0.0000254; 
	 	}else if(item1 == 11 && item2 == 1){//Metro
	 		resul= num*0.025; 
	 	}else if(item1 == 11 && item2 == 2){//Decímetro
	 		resul= num*0.254; 
	 	}else if(item1 == 11 && item2 == 3){//Centímetro 
	 		resul= num*2.54; 
	 	}else if(item1 == 11 && item2 == 4){//Milímetro
	 		resul= num*25.4; 
	 	}else if(item1 == 11 && item2 == 5){//Micrômetro
	 		resul= num*25400; 
	 	}else if(item1 == 11 && item2 == 6){//Nanômetro
   			resul= num*25400000; 
	 	}else if(item1 == 11 && item2 == 7){//Angstrom
	 		resul= num*254000000;
	 	}else if(item1 == 11 && item2 == 8){//Milha
	 		resul= num*0.00001578; 
	 	}else if(item1 == 11 && item2 == 9){//Jarda
	 		resul= num*0.028; 
	 	}else if(item1 == 11 && item2 == 10){//Pé
   			resul= num*0.083; 
	 	}else if(item1 == 11 && item2 == 11){//Polegada
	 		resul= num; 
	 	} 
        if(item2 == 0)
                unid="Km";
        else if(item2 == 1)
                unid="M";
        else if(item2 == 2)
                unid="Dm";
        else if(item2 == 3)
                unid="Cm";
        else if( item2 == 4)
                unid="Mm";
        else if( item2 == 5)
                unid="µm";
        else if(item2 == 6)
                unid="Nm";
        else if(item2 == 7)
                unid="Ag";
        else if( item2 == 8)
                unid="Milha";
        else if(item2 == 9)
                unid="J";
        else if(item2 == 10)
                unid="Pé";
        else if(item2 == 11)
                unid="Polegada";
                

			window.alert("Resultado: " + resul +" "+ unid);
}