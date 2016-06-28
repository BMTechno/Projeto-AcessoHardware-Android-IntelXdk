function calculaMassa(){
            /*jslint browser:true, -W099: false, -W041: false */
            var elem1 = document.getElementById("opcao1Massa");
			var item1 = (elem1.options[elem1.options.selectedIndex]).value;

			var elem2 = document.getElementById("opcao2Massa");
			var item2 = (elem2.options[elem2.options.selectedIndex]).value;

			var num = parseFloat(document.formMassa.textMassa.value);
			var resul;
            var unid;

			//Tonelada para ...
			if(item1 == 0 && item2 == 0){//Tonelada
		    	resul = num;
		    }else if(item1 == 0 && item2 == 1){//Kilonewton
		    	resul= num*9.81;
		    }else if(item1 == 0 && item2 == 2){//Quilograma
		  	  	resul= num*1000; 
		    }else if(item1 == 0 && item2 == 3){//Hectograma                       
		  	  	resul= num*10000;
		    }else if(item1 == 0 && item2 == 4){//Grama
		    	resul= num*1000000;
		    }else if(item1 == 0 && item2 == 5){//Quilate
		    	resul= num*5000000; 
		    }else if(item1 == 0 && item2 == 6){//Centigrama
		    	resul = num*100000000;
		    }else if(item1 == 0 && item2 == 7){//Miligrama
		    	resul= num*1000000000;
		    }else if(item1 == 0 && item2 == 8){//Micrograma
		    	resul= num*1000000000;
		    	resul *= 1000;
		    }else if(item1 == 0 && item2 == 9){//Nanograma
		    	resul= num*1000000000; 
		    	resul*= 1000000;
		    }else if(item1 == 0 && item2 == 10){//UMA
		    	resul= num*602000000; 
		    	resul *= 1000000000;
		    	resul*= 1000000000;
		    	resul*= 1000;
		    }else if(item1 == 0 && item2 == 11){//Libra
		    	resul= num*2204.62; 
		    }
			//Kilonewton para ...
		     else if(item1 == 1 && item2 == 0){//Tonelada
		    	resul = num*0.1;
		    }else if(item1 == 1 && item2 == 1){//Kilonewton
		    	resul= num;
		    }else if(item1 == 1 && item2 == 2){//Quilograma
		  	  	resul= num*101.97; 
		    }else if(item1 == 1 && item2 == 3){//Hectograma                       
		  	  	resul= num*1019.72;
		    }else if(item1 == 1 && item2 == 4){//Grama
		    	resul= num*101971.6;
		    }else if(item1 == 1 && item2 == 5){//Quilate
		    	resul= num*509858; 
		    }else if(item1 == 1 && item2 == 6){//Centigrama
		    	resul= num*10197160.05;
		    }else if(item1 == 1 && item2 == 7){//Miligrama
		    	resul = num*101971600.5;
		    }else if(item1 == 1 && item2 == 8){//Micrograma
		    	resul= num*1020000000; 
		    	resul*= 100;
		    }else if(item1 == 1 && item2 == 9){//Nanograma
		    	resul= num*1020000000; 
		    	resul*= 10000;

		    }else if(item1 == 1 && item2 == 10){//UMA
		    	resul= num*614000000; 
		    	resul *= 1000000000;
		    	resul*= 1000000000;
		    	resul*= 100; 
		    }else if(item1 == 1 && item2 == 11){//Libra
		    	resul= num*224.81;
		    }
			//Quilograma para ...
		     else if(item1 == 2 && item2 == 0){//Tonelada
		    	resul = num*0.001;
		    }else if(item1 == 2 && item2 == 1){//Kilonewton
		    	resul= num*0.01; 
		    }else if(item1 == 2 && item2 == 2){//Quilograma
		  	  	resul= num;
		    }else if(item1 == 2 && item2 == 3){//Hectograma                       
		  	  	resul= num*10; 
		    }else if(item1 == 2 && item2 == 4){//Grama
		    	resul= num*1000; 
		    }else if(item1 == 2 && item2 == 5){//Quilate
		    	resul= num*5000; 
		    }else if(item1 == 2 && item2 == 6){//Centigrama
		    	resul = num*100000;	
		    }else if(item1 == 2 && item2 == 7){//Miligrama
		    	resul= num*1000000;
		    }else if(item1 == 2 && item2 == 8){//Micrograma
		    	resul= num*1000000000; 
		    	resul*= 10;
		    }else if(item1 == 2 && item2 == 9){//Nanograma
		    	resul= num*1000000000;
		    	resul*= 1000;
		    }else if(item1 == 2 && item2 == 10){//UMA
		    	resul= num*602000000; 
		    	resul *= 1000000000;
		    	resul*= 1000000000;  
		    }else if(item1 == 2 && item2 == 11){//Libra
		    	resul= num*2.2; 
		    }
			//Hectagrama para ...
		     else if(item1 == 3 && item2 == 0){//Tonelada
		    	resul = num*0.0001;
		    }else if(item1 == 3 && item2 == 1){//Kilonewton
		    	resul= num*0.000981; 
		    }else if(item1 == 3 && item2 == 2){//Quilograma
		  	  	resul= num*0.1; 
		    }else if(item1 == 3 && item2 == 3){//Hectograma                       
		  	  	resul= num; 
		    }else if(item1 == 3 && item2 == 4){//Grama
		    	resul= num*100; 
		    }else if(item1 == 3 && item2 == 5){//Quilate
		    	resul= num*500; 
		    }else if(item1 == 3 && item2 == 6){//Centigrama
		    	resul= num*10000;
		    }else if(item1 == 3 && item2 == 7){//Miligrama
		    	resul= num*100000;
		    }else if(item1 == 3 && item2 == 8){//Micrograma
		    	resul= num*100000000; 
		    }else if(item1 == 3 && item2 == 9){//Nanograma
		    	resul= num*1000000000;
		    	resul*=100;
		    }else if(item1 == 3 && item2 == 10){//UMA
		    	resul= num*602000000; 
		    	resul *= 1000000000;
		    	resul*= 100000000;
		    }else if(item1 == 3 && item2 == 11){//Libra
		    	resul= num*0.22; 
		    }
			//Grama para ...
		     else if(item1 == 4 && item2 == 0){//Tonelada
		    	resul = num*0.000001;
		    }else if(item1 == 4 && item2 == 1){//Kilonewton
		    	resul= num*0.00000981; 
		    }else if(item1 == 4 && item2 == 2){//Quilograma
		  	  	resul= num*0.001; 
		    }else if(item1 == 4 && item2 == 3){//Hectograma                       
		  	  	resul= num*0.01; 
		    }else if(item1 == 4 && item2 == 4){//Grama
		    	resul= num; 
		    }else if(item1 == 4 && item2 == 5){//Quilate
		    	resul= num*5;
		    }else if(item1 == 4 && item2 == 6){//Centigrama
		    	resul= num*100;
		    }else if(item1 == 4 && item2 == 7){//Miligrama
		    	resul = num*1000;
		    }else if(item1 == 4 && item2 == 8){//Micrograma
		    	resul= num*1000000; 
		    }else if(item1 == 4 && item2 == 9){//Nanograma
		    	resul= num*1000000000; 
		    }else if(item1 == 4 && item2 == 10){//UMA
		    	resul= num*602000000; 
		    	resul *= 1000000000;
		    	resul*= 1000000; 
		    }else if(item1 == 4 && item2 == 11){//Libra
		    	resul= num*0.0022; 
		    }
			//Quilate para ...
		     else if(item1 == 5 && item2 == 0){//Tonelada
		    	resul = num*0.0000002;
		    }else if(item1 == 5 && item2 == 1){//Kilonewton
		    	resul= num*0.00000196; 
		    }else if(item1 == 5 && item2 == 2){//Quilograma
		  	  	resul= num*0.0002; 
		    }else if(item1 == 5 && item2 == 3){//Hectograma                       
		  	  	resul= num*0.002; 
		    }else if(item1 == 5 && item2 == 4){//Grama
		    	resul= num*0.2; 
		    }else if(item1 == 5 && item2 == 5){//Quilate
		    	resul= num; 
		    }else if(item1 == 5 && item2 == 6){//Centigrama
		    	resul = num*20;
		    }else if(item1 == 5 && item2 == 7){//Miligrama
		    	resul = num*200;
		    }else if(item1 == 5 && item2 == 8){//Micrograma
		    	resul= num*200000; 
		    }else if(item1 == 5 && item2 == 9){//Nanograma
		    	resul= num*200000000; 
		    }else if(item1 == 5 && item2 == 10){//UMA
		    	resul= num*1200000000; 
		    	resul *= 1000000000;
		    	resul*= 100000;
		    }else if(item1 == 5 && item2 == 11){//Libra
		    	resul= num*0.000441; 
		    }
			//Centigrama para ...
		     else if(item1 == 6 && item2 == 0){//Tonelada
		    	resul = num*0.00000001;
		    }else if(item1 == 6 && item2 == 1){//Kilonewton
		    	resul= num*0.0000000981; 
		    }else if(item1 == 6 && item2 == 2){//Quilograma
		  	  	resul= num*0.00001; 
		    }else if(item1 == 6 && item2 == 3){//Hectograma                       
		  	  	resul= num*0.0001; 
		    }else if(item1 == 6 && item2 == 4){//Grama
		    	resul= num*0.01; 
		    }else if(item1 == 6 && item2 == 5){//Quilate
		    	resul= num*0.05; 
		    }else if(item1 == 6 && item2 == 6){//Centigrama
		    	resul = num;
		    }else if(item1 == 6 && item2 == 7){//Miligrama
		    	resul = num*10;
		    }else if(item1 == 6 && item2 == 8){//Micrograma
		    	resul= num*10000; 
		    }else if(item1 == 6 && item2 == 9){//Nanograma
		    	resul= num*10000000; 
		    }else if(item1 == 6 && item2 == 10){//UMA
		    	resul= num*602000000; 
		    	resul *= 1000000000;
		    	resul*= 10000;  
		    }else if(item1 == 6 && item2 == 11){//Libra
		    	resul= num*0.000022; 
		    }
			//Miligrama para ...
		     else if(item1 == 7 && item2 == 0){//Tonelada
		    	resul = num*0.000000001;
		    }else if(item1 == 7 && item2 == 1){//Kilonewton
		    	resul = num*0.00000000981; 
		    }else if(item1 == 7 && item2 == 2){//Quilograma
		  	  	resul = num*0.000001; 
		    }else if(item1 == 7 && item2 == 3){//Hectograma                       
		  	  	resul = num*0.00001; 
		    }else if(item1 == 7 && item2 == 4){//Grama
		    	resul = num*0.001; 
		    }else if(item1 == 7 && item2 == 5){//Quilate
		    	resul = num*0.01; 
		    }else if(item1 == 7 && item2 == 6){//Centigrama
		    	resul = num*0.1;
		    }else if(item1 == 7 && item2 == 7){//Miligrama
		    	resul = num;
		    }else if(item1 == 7 && item2 == 8){//Micrograma
		    	resul = num*1000; 
		    }else if(item1 == 7 && item2 == 9){//Nanograma
		    	resul = num*1000000; 
		    }else if(item1 == 7 && item2 == 10){//UMA
		    	resul = num*602000000; 
		    	resul *= 1000000000;
		    	resul*= 1000;
		    }else if(item1 == 7 && item2 == 11){//Libra
		    	resul = num*0.0000022; 
		    }
			//Micrograma para ...
		    else if(item1 == 7 && item2 == 0){//Tonelada
		    	resul = num*0.000000000001;
		    }else if(item1 == 7 && item2 == 1){//Kilonewton
		    	resul = num*0.00000000000981; 
		    }else if(item1 == 7 && item2 == 2){//Quilograma
		  	  	resul = num*0.000000001; 
		    }else if(item1 == 7 && item2 == 3){//Hectograma                       
		  	  	resul = num*0.00000001; 
		    }else if(item1 == 7 && item2 == 4){//Grama
		    	resul = num*0.000001; 
		    }else if(item1 == 7 && item2 == 5){//Quilate
		    	resul = num*0.000005; 
		    }else if(item1 == 7 && item2 == 6){//Centigrama
		    	resul = num*0.0001;
		    }else if(item1 == 7 && item2 == 7){//Miligrama
		    	resul = num*0.001;
		    }else if(item1 == 7 && item2 == 8){//Micrograma
		    	resul = num; 
		    }else if(item1 == 7 && item2 == 9){//Nanograma
		    	resul = num*1000; 
		    }else if(item1 == 7 && item2 == 10){//UMA
		    	resul = num*602000000; 
		    	resul *= 1000000000;
		    }else if(item1 == 7 && item2 == 11){//Libra
		    	resul = num*0.0000000022; 
		    }
			//Nanograma para ...
		     else if(item1 == 9 && item2 == 0){//Tonelada
		    	resul = num*0.000000000000001;
		    }else if(item1 == 9 && item2 == 1){//Kilonewton
		    	resul = num*0.00000000000000981; 
		    }else if(item1 == 9 && item2 == 2){//Quilograma
		  	  	resul = num*0.000000000001; 
		    }else if(item1 == 9 && item2 == 3){//Hectograma                       
		  	  	resul = num*0.00000000001; 
		    }else if(item1 == 9 && item2 == 4){//Grama
		    	resul = num*0.000000001; 
		    }else if(item1 == 9 && item2 == 5){//Quilate
		    	resul = num*0.000000005; 
		    }else if(item1 == 9 && item2 == 6){//Centigrama
		    	resul = num*0.0000001;
		    }else if(item1 == 9 && item2 == 7){//Miligrama
		    	resul = num*0.000001;
		    }else if(item1 == 9 && item2 == 8){//Micrograma
		    	resul = num*0.001; 
		    }else if(item1 == 9 && item2 == 9){//Nanograma
		    	resul = num; 
		    }else if(item1 == 9 && item2 == 10){//UMA
		    	resul = num*602000000; 
		    	resul *= 1000000; 
		    }else if(item1 == 9 && item2 == 11){//Libra
		    	resul = num*0.0000000000022; 
		    }
			//UMA Unidade de massa átomica para ...
		     else if(item1 == 10&& item2 == 0){//Tonelada
		    	resul = num*0.00000000000000000000000000000166;
		    }else if(item1 == 10 && item2 == 1){//Kilonewton
		    	resul = num*0.0000000000000000000000000000163; 
		    }else if(item1 == 10 && item2 == 2){//Quilograma
		  	  	resul = num*0.00000000000000000000000000166; 
		    }else if(item1 == 10 && item2 == 3){//Hectograma                       
		  	  	resul= num*0.0000000000000000000000000166; 
		    }else if(item1 == 10 && item2 == 4){//Grama
		    	resul = num*0.00000000000000000000000166; 
		    }else if(item1 == 10 && item2 == 5){//Quilate
		    	resul = num*0.0000000000000000000000083; 
		    }else if(item1 == 10 && item2 == 6){//Centigrama
		    	resul = num*0.000000000000000000000166;
		    }else if(item1 == 10 && item2 == 7){//Miligrama
		    	resul = num*0.00000000000000000000166;
		    }else if(item1 == 10 && item2 == 8){//Micrograma
		    	resul = num*0.00000000000000000166; 
		    }else if(item1 == 10 && item2 == 9){//Nanograma
		    	resul = num*0.00000000000000166; 
		    }else if(item1 == 10 && item2 == 10){//UMA
		    	resul = num; 
		    }else if(item1 == 10 && item2 == 11){//Libra
		    	resul = num*0.00000000000000000000000000366; 
		    }
			//Libra para ...
		     else if(item1 == 11 && item2 == 0){//Tonelada
		    	resul = num*0.000454;
		    }else if(item1 == 11 && item2 == 1){//Kilonewton
		    	resul = num*0.00445; 
		    }else if(item1 == 11 && item2 == 2){//Quilograma
		  	  	resul = num*0.45; 
		    }else if(item1 == 11 && item2 == 3){//Hectograma                       
		  	  	resul = num*4.54; 
		    }else if(item1 == 11 && item2 == 4){//Grama
		    	resul = num*453.59; 
		    }else if(item1 == 11 && item2 == 5){//Quilate
		    	resul = num*2267.96; 
		    }else if(item1 == 11 && item2 == 6){//Centigrama
		    	resul = num*45359.27;
		    }else if(item1 == 11 && item2 == 7){//Miligrama
		    	resul = num*453592.7;
		    }else if(item1 == 11 && item2 == 8){//Micrograma
		    	resul = num*453592703.69; 
		    }else if(item1 == 11 && item2 == 9){//Nanograma
		    	resul = num*454000000;
		    	resul*= 1000;
		    }else if(item1 == 11 && item2 == 10){//UMA
		    	resul = num*273000000; 
		    	resul*= 1000000000;
		    	resul*= 1000000000;
		    }else if(item1 == 11 && item2 == 11){//Libra
		    	resul = num; 
		    }
            if(item2 == 0)
                unid="Tonelada";
            else if(item2 == 1)
                unid="Kilonewton";
            else if(item2 == 2)
                unid="Quilograma";
            else if(item2 == 3)
                unid="Hectograma";
            else if( item2 == 4)
                unid="Grama";
            else if( item2 == 5)
                unid="Quilate";
            else if(item2 == 6)
                unid="Centigrama";
            else if(item2 == 7)
                unid="Miligrama";
            else if( item2 == 8)
                unid="Micrograma";
            else if(item2 == 9)
                unid="Nanograma";
            else if(item2 == 10)
                unid="UMA";
            else if(item2 == 11)
                unid="Libra";

			window.alert("Resultado: " + resul +" "+ unid);
    
}