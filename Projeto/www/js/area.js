function calculaArea(){
         /*jslint browser:true, -W099: false, -W041: false */
            var elem1 = document.getElementById("opcao1Area");
			var item1 = (elem1.options[elem1.options.selectedIndex]).value;

			var elem2 = document.getElementById("opcao2Area");
			var item2 = (elem2.options[elem2.options.selectedIndex]).value;

			var num = parseFloat(document.formArea.textArea.value);
			var resul;
            var unid;

			//Km² para ...
			if(item1 == 0 && item2 == 0){//Km²
		    	resul = num;
		    }else if(item1 == 0 && item2 == 1){//Hectare
		    	resul = num*100; 
		    }else if(item1 == 0 && item2 == 2){//Area
		  	  	resul = num*10000; 
		    }else if(item1 == 0 && item2 == 3){//m²                      
		  	  	resul = num*1000000; 
		    }else if(item1 == 0 && item2 == 4){//dm²
		    	resul = num*100000000; 
		    }else if(item1 == 0 && item2 == 5){//cm²
		    	resul = num*100000000;
		    	resul*= 100;
		    }else if(item1 == 0 && item2 == 6){//mm²
		    	resul = num*100000000;
		    	resul*=10000;
		    }else if(item1 == 0 && item2 == 7){//µm²
		    	resul = num*1000000000;
		    	resul*=1000000000;
		    }else if(item1 == 0 && item2 == 8){//nm²
		    	resul = num*1000000000;
		    	resul*=1000000000;
		    	resul*=1000000;
		    }else if(item1 == 0 && item2 == 9){//Município
		    	resul= num*0.01; 
		    }else if(item1 == 0 && item2 == 10){//Milha quadrada 
		    	resul= num*0.39; 
		    }else if(item1 == 0 && item2 == 11){//Quadrado
		    	resul= num*107639.1; 
		    }else if(item1 == 0 && item2 == 12){//Terreno quadrada
		    	resul= num*1195990; 
		    }else if(item1 == 0 && item2 == 13){//Pé quadrada
		    	resul= num*10763910; 
		    }else if(item1 == 0 && item2 == 14){//Polegada quadrada
		    	resul= num*1550003000; 
		    }
			 //Hectare para ...
			 else if(item1 == 1 && item2 == 0){//Km²
		    	resul = num*0.01;
		    }else if(item1 == 1 && item2 == 1){//Hectare
		    	resul = num; 
		    }else if(item1 == 1 && item2 == 2){//Area
		  	  	resul = num*100; 
		    }else if(item1 == 1 && item2 == 3){//m²                      
		  	  	resul = num*10000; 
		    }else if(item1 == 1 && item2 == 4){//dm²
		    	resul = num*1000000; 
		    }else if(item1 == 1 && item2 == 5){//cm²
		    	resul = num*100000000; 
		    }else if(item1 == 1 && item2 == 6){//mm²
		    	resul = num*100000000;
		    	resul*= 100;
		    }else if(item1 == 1 && item2 == 7){//µm²
		    	resul= num*1000000000;
		    	resul*= 10000000;
		    }else if(item1 == 1 && item2 == 8){//nm²
		    	resul= num*1000000000;
		    	resul *= 1000000000;
		    	resul*= 10000;
		    }else if(item1 == 1 && item2 == 9){//Município 
		    	resul= num*0.000107; 
		    }else if(item1 == 1 && item2 == 10){//Milha quadrada 
		    	resul= num*0.00386; 
		    }else if(item1 == 1 && item2 == 11){//Quadrado
		    	resul= num*1076.39; 
		    }else if(item1 == 1 && item2 == 12){//Terreno quadrada
		    	resul= num*11959.9; 
		    }else if(item1 == 1 && item2 == 13){//Pé quadrada
		    	resul= num*107639.1; 
		    }else if(item1 == 1 && item2 == 14){//Polegada quadrada
		    	resul= num*15500030; 
		    }
			//Area para ...
			 else if(item1 == 2 && item2 == 0){//Km²
		    	resul = num*0.0001;
		    }else if(item1 == 2 && item2 == 1){//Hectare
		    	resul = num*0.01; 
		    }else if(item1 == 2 && item2 == 2){//Area
		  	  	resul = num; 
		    }else if(item1 == 2 && item2 == 3){//m²                       
		  	  	resul = num*100; 
		    }else if(item1 == 2 && item2 == 4){//dm²
		    	resul = num*10000; 
		    }else if(item1 == 2 && item2 == 5){//cm²
		    	resul = num*1000000; 
		    }else if(item1 == 2 && item2 == 6){//mm²
		    	resul = num*100000000;	
		    }else if(item1 == 2 && item2 == 7){//µm²
		    	resul= num*1000000000;
		    	resul*=100000;
		    }else if(item1 == 2 && item2 == 8){//nm²
		    	resul= num*1000000000;
		    	resul *= 1000000000;
		    	resul*= 100;
		    }else if(item1 == 2 && item2 == 9){//Município
		    	resul= num*0.00000107; 
		    }else if(item1 == 2 && item2 == 10){//Milha Quadrada
		    	resul= num*0.0000386; 
		    }else if(item1 == 2 && item2 == 11){//Quadrado
		    	resul= num*10.76; 
		    }else if(item1 == 2 && item2 == 12){//Terreno quadrada
		    	resul= num*119.6; 
		    }else if(item1 == 2 && item2 == 13){//Pé quadrada
		    	resul= num*1076.39; 
		    }else if(item1 == 2 && item2 == 14){//Polegada quadrada
		    	resul= num*155000.3; 
		    }
		    //m² para ...
			 else if(item1 == 3 && item2 == 0){//Km²
		    	resul = num*0.000001;
		    }else if(item1 == 3 && item2 == 1){//Hectare
		    	resul = num*0.0001; 
		    }else if(item1 == 3 && item2 == 2){//Area
		  	  	resul = num*0.01; 
		    }else if(item1 == 3 && item2 == 3){//m²                      
		  	  	resul = num; 
		    }else if(item1 == 3 && item2 == 4){//dm²
		    	resul = num*100; 
		    }else if(item1 == 3 && item2 == 5){//cm²
		    	resul = num*10000; 
		    }else if(item1 == 3 && item2 == 6){//mm²
		    	resul = num*1000000;	
		    }else if(item1 == 3 && item2 == 7){//µm²
		    	resul= num*1000000000;
		    	resul*=1000;
		    }else if(item1 == 3 && item2 == 8){//nm²
		    	resul= num*1000000000;
		    	resul *= 1000000000;
		    }else if(item1 == 3 && item2 == 9){//Município
		    	resul= num*0.0000000107; 
		    }else if(item1 == 3 && item2 == 10){//Milha quadrada
		    	resul= num*0.000000386; 
		    }else if(item1 == 3 && item2 == 11){//Quadrado
		    	resul= num*0.11; 
		    }else if(item1 == 3 && item2 == 12){//Terreno quadrada01
		    	resul= num*1.2; 
		    }else if(item1 == 3 && item2 == 13){//Pé quadrada
		    	resul= num*10.76; 
		    }else if(item1 == 3 && item2 == 14){//Polegada quadrada
		    	resul= num*1550; 
		    }
		   //dm² para ...
			 else if(item1 == 4 && item2 == 0){//Km²
		    	resul = num*0.00000001;
		    }else if(item1 == 4 && item2 == 1){//Hectare
		    	resul = num*0.000001; 
		    }else if(item1 == 4 && item2 == 2){//Area
		  	  	resul = num*0.0001; 
		    }else if(item1 == 4 && item2 == 3){//m²                       
		  	  	resul = num*0.01; 
		    }else if(item1 == 4 && item2 == 4){//dm²
		    	resul = num; 
		    }else if(item1 == 4 && item2 == 5){//cm²
		    	resul = num*100; 
		    }else if(item1 == 4 && item2 == 6){//mm²
		    	resul = num*10000;	
		    }else if(item1 == 4 && item2 == 7){//µm²
		    	resul = num*1000000000;
		    	resul*= 10;
		    }else if(item1 == 4 && item2 == 8){//nm²
		    	resul = num*1000000000;
		    	resul*= 10000000;
		    }else if(item1 == 4 && item2 == 9){//Município
		    	resul= num*0.000000000107; 
		    }else if(item1 == 4 && item2 == 10){//Milha quadrada
		    	resul = num*0.00000000386; 
		    }else if(item1 == 4 && item2 == 11){//Quadrado
		    	resul = num*0.00108; 
		    }else if(item1 == 4 && item2 == 12){//Terreno quadrada
		    	resul = num*0.01; 
		    }else if(item1 == 4 && item2 == 13){//Pé quadrada
		    	resul = num*0.11; 
		    }else if(item1 == 4 && item2 == 14){//Polegada quadrada
		    	resul = num*15.5; 
		    }
		    //cm² para ...
			 else if(item1 == 5 && item2 == 0){//Km²
		    	resul = num*0.0000000001;
		    }else if(item1 == 5 && item2 == 1){//Hectare
		    	resul= num*0.00000001; 
		    }else if(item1 == 5 && item2 == 2){//Area
		  	  	resul= num*0.000001; 
		    }else if(item1 == 5 && item2 == 3){//m²                     
		  	  	resul= num*0.0001; 
		    }else if(item1 == 5 && item2 == 4){//dm²
		    	resul= num*0.01; 
		    }else if(item1 == 5 && item2 == 5){//cm²
		    	resul= num; 
		    }else if(item1 == 5 && item2 == 6){//mm²
		    	resul = num*100;	
		    }else if(item1 == 5 && item2 == 7){//µm²
		    	resul = num*100000000;
		    }else if(item1 == 5 && item2 == 8){//nm²
		    	resul = num*1000000000;
		    	resul*= 100000;
		    }else if(item1 == 5 && item2 == 9){//Município
		    	resul= num*0.00000000000107; 
		    }else if(item1 == 5 && item2 == 10){//Milha quadrada
		    	resul= num*0.0000000000386; 
		    }else if(item1 == 5 && item2 == 11){//Quadrado
		    	resul= num*0.0000108; 
		    }else if(item1 == 5 && item2 == 12){//Terreno quadrada
		    	resul= num*0.00012; 
		    }else if(item1 == 5 && item2 == 13){//Pé quadrada
		    	resul= num*0.00108; 
		    }else if(item1 == 5 && item2 == 14){//Polegada quadrada
		    	resul= num*0.16; 
		    }
		    //mm² para ...
			 else if(item1 == 6 && item2 == 0){//Km²
		    	resul = num*0.000000000001;
		    }else if(item1 == 6 && item2 == 1){//Hectare
		    	resul= num*0.0000000001; 
		    }else if(item1 == 6 && item2 == 2){//Area
		  	  	resul= num*0.00000001; 
		    }else if(item1 == 6 && item2 == 3){//m²                       
		  	  	resul= num*0.000001; 
		    }else if(item1 == 6 && item2 == 4){//dm²
		    	resul= num*0.0001; 
		    }else if(item1 == 6 && item2 == 5){//cm²
		    	resul= num*0.01; 
		    }else if(item1 == 6 && item2 == 6){//mm²
		    	resul = num;	
		    }else if(item1 == 6 && item2 == 7){//µm²
		    	resul= num*1000000;
		    }else if(item1 == 6 && item2 == 8){//nm²
		    	resul= num*1000000000;
		    	resul *= 1000;
		    }else if(item1 == 6 && item2 == 9){//Município
		    	resul= num*0.0000000000000107; 
		    }else if(item1 == 6 && item2 == 10){//Milha quadrada
		    	resul= num*0.000000000000386; 
		    }else if(item1 == 6 && item2 == 11){//Quadrado
		    	resul= num*0.000000108; 
		    }else if(item1 == 6 && item2 == 12){//Terreno quadrada
		    	resul= num*0.0000012; 
		    }else if(item1 == 6 && item2 == 13){//Pé quadrada
		    	resul= num*0.0000108; 
		    }else if(item1 == 6 && item2 == 14){//Polegada quadrada
		    	resul= num*0.00155; 
		    }
		    //µm² para ...
			 else if(item1 == 7 && item2 == 0){//Km²
		    	resul = num*0.000000000000000001;
		    }else if(item1 == 7 && item2 == 1){//Hectare
		    	resul= num*0.0000000000000001; 
		    }else if(item1 == 7 && item2 == 2){//Area
		  	  	resul= num*0.00000000000001; 
		    }else if(item1 == 7 && item2 == 3){//m²                       
		  	  	resul= num*0.000000000001; 
		    }else if(item1 == 7 && item2 == 4){//dm²
		    	resul= num*0.0000000001; 
		    }else if(item1 == 7 && item2 == 5){//cm²
		    	resul= num*0.00000001; 
		    }else if(item1 == 7 && item2 == 6){//mm²
		    	resul = num*0.000001;	
		    }else if(item1 == 7 && item2 == 7){//µm²
		    	resul= num;
		    }else if(item1 == 7 && item2 == 8){//nm²
		    	resul= num*1000000;
		    }else if(item1 == 7 && item2 == 9){//Município
		    	resul= num*0.0000000000000000000107; 
		    }else if(item1 == 7 && item2 == 10){//Milha quadrada
		    	resul= num*0.000000000000000000386; 
		    }else if(item1 == 7 && item2 == 11){//Quadrado
		    	resul= num*0.000000000000108; 
		    }else if(item1 == 7 && item2 == 12){//Terreno quadrada
		    	resul= num*0.0000000000012; 
		    }else if(item1 == 7 && item2 == 13){//Pé quadrada
		    	resul= num*0.0000000000108; 
		    }else if(item1 == 7 && item2 == 14){//Polegada quadrada
		    	resul= num*0.00000000155; 
		    }
		    //nm² para ...
			 else if(item1 == 8 && item2 == 0){//Km²
		    	resul = num*0.000000000000000000000001;
		    }else if(item1 == 8 && item2 == 1){//Hectare
		    	resul = num*0.0000000000000000000001; 
		    }else if(item1 == 8 && item2 == 2){//Area
		  	  	resul = num*0.00000000000000000001; 
		    }else if(item1 == 8 && item2 == 3){//m²                       
		  	  	resul = num*0.000000000000000001; 
		    }else if(item1 == 8 && item2 == 4){//dm²
		    	resul = num*0.0000000000000001; 
		    }else if(item1 == 8 && item2 == 5){//cm²
		    	resul = num*0.00000000000001; 
		    }else if(item1 == 8 && item2 == 6){//mm²
		    	resul = num*0.000000000001;	
		    }else if(item1 == 8 && item2 == 7){//µm²
		    	resul = num*0.000001;
		    }else if(item1 == 8 && item2 == 8){//nm²
		    	resul = num;
		    }else if(item1 == 8 && item2 == 9){//Município
		    	resul = num*0.0000000000000000000000000107; 
		    }else if(item1 == 8 && item2 == 10){//Milha quadrada
		    	resul = num*0.000000000000000000000000386; 
		    }else if(item1 == 8 && item2 == 11){//Quadrado
		    	resul = num*0.000000000000000000108; 
		    }else if(item1 == 8 && item2 == 12){//Terreno quadrada
		    	resul = num*0.0000000000000000012; 
		    }else if(item1 == 8 && item2 == 13){//Pé quadrada
		    	resul = num*0.0000000000000000108; 
		    }else if(item1 == 8 && item2 == 14){//Polegada quadrada
		    	resul = num*0.00000000000000155; 
		    }
		     //Município para ...
			 else if(item1 == 9 && item2 == 0){//Km²
		    	resul = num*93.24;
		    }else if(item1 == 9 && item2 == 1){//Hectare
		    	resul = num*9323.96; 
		    }else if(item1 == 9 && item2 == 2){//Area
		  	  	resul = num*932395.72; 
		    }else if(item1 == 9 && item2 == 3){//m²                       
		  	  	resul = num*93239571.62; 
		    }else if(item1 == 9 && item2 == 4){//dm²
		    	resul = num*932000000;
		    	resul*=10;
		    }else if(item1 == 9 && item2 == 5){//cm²
		    	resul = num*932000000;
		    	resul*= 1000;
		    }else if(item1 == 9 && item2 == 6){//mm²
		    	resul = num*932000000;
		    	resul*= 100000;
		    }else if(item1 == 9 && item2 == 7){//µm²
		    	resul = num*932000000;
		    	resul*= 1000000000;
		    	resul*= 100;
		    }else if(item1 == 9 && item2 == 8){//nm²
		    	resul = num*932000000;
		    	resul*= 1000000000;
		    	resul*= 100000000;
		    }else if(item1 == 9 && item2 == 9){//Município
		    	resul = num;
		    }else if(item1 == 9 && item2 == 10){//Milha quadrada
		    	resul = num*36; 
		    }else if(item1 == 9 && item2 == 11){//Quadrado
		    	resul = num*10036223.57; 
		    }else if(item1 == 9 && item2 == 12){//Terreno quadrada
		    	resul = num*111513595.26; 
		    }else if(item1 == 9 && item2 == 13){//Pé quadrada
		    	resul = num*1000000000; 
		    }else if(item1 == 9 && item2 == 14){//Polegada quadrada
		    	resul = num*1450000000;
		    	resul*=100;
		    }
			//Milha quadrada para ...
			 else if(item1 == 10 && item2 == 0){//Km²
		    	resul = num*2.59;
		    }else if(item1 == 10 && item2 == 1){//Hectare
		    	resul = num*259; 
		    }else if(item1 == 10 && item2 == 2){//Area
		  	  	resul = num*25899.88; 
		    }else if(item1 == 10 && item2 == 3){//m²                       
		  	  	resul = num*2589987.83; 
		    }else if(item1 == 10 && item2 == 4){//dm²
		    	resul = num*258998783.22;
		    }else if(item1 == 10 && item2 == 5){//cm²
		    	resul = num*259000000;
		    	resul*= 100;
		    }else if(item1 == 10 && item2 == 6){//mm²
		    	resul = num*259000000;
		    	resul*= 10000;
		    }else if(item1 == 10 && item2 == 7){//µm²
		    	resul = num*259000000;
		    	resul*= 1000000000;
		    	resul*= 10;
		    }else if(item1 == 10 && item2 == 8){//nm²
		    	resul = num*259000000;
		    	resul*= 1000000000;
		    	resul*= 10000000;
		    }else if(item1 == 10 && item2 == 9){//Município
		    	resul = num*0.03;
		    }else if(item1 == 10 && item2 == 10){//Milha quadrada
		    	resul = num; 
		    }else if(item1 == 10 && item2 == 11){//Quadrado
		    	resul = num*278783.96; 
		    }else if(item1 == 10 && item2 == 12){//Terreno quadrada
		    	resul = num*3097599.55; 
		    }else if(item1 == 10 && item2 == 13){//Pé quadrada
		    	resul = num*27878395.93; 
		    }else if(item1 == 10 && item2 == 14){//Polegada quadrada
		    	resul = num*401000000;
		    	resul*=10;
		    }
			//Quadrado para ...
			 else if(item1 == 11 && item2 == 0){//Km²
		    	resul = num*0.00000929;
		    }else if(item1 == 11 && item2 == 1){//Hectare
		    	resul = num*0.000929; 
		    }else if(item1 == 11 && item2 == 2){//Area
		  	  	resul = num*0.09; 
		    }else if(item1 == 11 && item2 == 3){//m²                       
		  	  	resul = num*9.29; 
		    }else if(item1 == 11 && item2 == 4){//dm²
		    	resul = num*929.03;
		    }else if(item1 == 11 && item2 == 5){//cm²
		    	resul = num*92903.04;
		    }else if(item1 == 11 && item2 == 6){//mm²
		    	resul = num*9290304.36;
		    }else if(item1 == 11 && item2 == 7){//µm²
		    	resul = num*929000000;
		    	resul*= 10000;
		    }else if(item1 == 11 && item2 == 8){//nm²
		    	resul = num*929000000;
		    	resul*= 1000000000;
		    	resul*= 10;
		    }else if(item1 == 11 && item2 == 9){//Município
		    	resul = num*0.0000000996;
		    }else if(item1 == 11 && item2 == 10){//Milha quadrada
		    	resul = num*0.00000359; 
		    }else if(item1 == 11 && item2 == 11){//Quadrado
		    	resul = num; 
		    }else if(item1 == 11 && item2 == 12){//Terreno quadrada
		    	resul = num*11.11; 
		    }else if(item1 == 11 && item2 == 13){//Pé quadrada
		    	resul = num*100; 
		    }else if(item1 == 11 && item2 == 14){//Polegada quadrada
		    	resul = num*14400;
		    }
			//Terreno quadrado para ...
			 else if(item1 == 12 && item2 == 0){//Km²
		    	resul = num*0.000000836;
		    }else if(item1 == 12 && item2 == 1){//Hectare
		    	resul = num*0.0000836; 
		    }else if(item1 == 12 && item2 == 2){//Area
		  	  	resul = num*0.01; 
		    }else if(item1 == 12&& item2 == 3){//m²                       
		  	  	resul = num*0.84; 
		    }else if(item1 == 12 && item2 == 4){//dm²
		    	resul = num*83.61;
		    }else if(item1 == 12 && item2 == 5){//cm²
		    	resul = num*8361.27;
		    }else if(item1 == 12 && item2 == 6){//mm²
		    	resul = num*836127.39;
		    }else if(item1 == 12 && item2 == 7){//µm²
		    	resul = num*836000000;
		    	resul*= 1000;
		    }else if(item1 == 12 && item2 == 8){//nm²
		    	resul = num*836000000;
		    	resul*= 1000000000;
		    }else if(item1 == 12 && item2 == 9){//Município
		    	resul = num*0.00000000897;
		    }else if(item1 == 12 && item2 == 10){//Milha quadrada
		    	resul = num*0.000000323; 
		    }else if(item1 == 12 && item2 == 11){//Quadrado
		    	resul = num*0.09; 
		    }else if(item1 == 12 && item2 == 12){//Terreno quadrada
		    	resul = num; 
		    }else if(item1 == 12 && item2 == 13){//Pé quadrada
		    	resul = num*9; 
		    }else if(item1 == 12 && item2 == 14){//Polegada quadrada
		    	resul = num*1296;
		    }
			//Pé quadrado para ...
			 else if(item1 == 13 && item2 == 0){//Km²
		    	resul = num*0.0000000929;
		    }else if(item1 == 13 && item2 == 1){//Hectare
		    	resul = num*0.00000929; 
		    }else if(item1 == 13 && item2 == 2){//Area
		  	  	resul = num*0.000929; 
		    }else if(item1 == 13 && item2 == 3){//m²                       
		  	  	resul = num*0.09; 
		    }else if(item1 == 13 && item2 == 4){//dm²
		    	resul = num*9.29;
		    }else if(item1 == 13 && item2 == 5){//cm²
		    	resul = num*929.03;
		    }else if(item1 == 13 && item2 == 6){//mm²
		    	resul = num*92903.04;
		    }else if(item1 == 13 && item2 == 7){//µm²
		    	resul = num*929000000;
		    	resul*= 100;
		    }else if(item1 == 13 && item2 == 8){//nm²
		    	resul = num*929000000;
		    	resul*= 100000000;
		    }else if(item1 == 13 && item2 == 9){//Município
		    	resul = num*0.000000000996;
		    }else if(item1 == 13 && item2 == 10){//Milha quadrada
		    	resul = num*0.0000000359; 
		    }else if(item1 == 13 && item2 == 11){//Quadrado
		    	resul = num*0.01; 
		    }else if(item1 == 13 && item2 == 12){//Terreno quadrada
		    	resul = num*0.11; 
		    }else if(item1 == 13 && item2 == 13){//Pé quadrada
		    	resul = num; 
		    }else if(item1 == 13 && item2 == 14){//Polegada quadrada
		    	resul = num*144;
		    }
			//Polegada para ...
			 else if(item1 == 14 && item2 == 0){//Km²
		    	resul = num*0.000000000645;
		    }else if(item1 == 14 && item2 == 1){//Hectare
		    	resul = num*0.0000000645; 
		    }else if(item1 == 14 && item2 == 2){//Area
		  	  	resul = num*0.00000645; 
		    }else if(item1 == 14 && item2 == 3){//m²                       
		  	  	resul = num*0.000645; 
		    }else if(item1 == 14 && item2 == 4){//dm²
		    	resul = num*0.06;
		    }else if(item1 == 14 && item2 == 5){//cm²
		    	resul = num*6.45;
		    }else if(item1 == 14 && item2 == 6){//mm²
		    	resul = num*645.16;
		    }else if(item1 == 14 && item2 == 7){//µm²
		    	resul = num*645160041.63;
		    }else if(item1 == 14 && item2 == 8){//nm²
		    	resul = num*645000000;
		    	resul*= 1000000;
		    }else if(item1 == 14 && item2 == 9){//Município
		    	resul = num*0.00000000000629;
		    }else if(item1 == 14 && item2 == 10){//Milha quadrada
		    	resul = num*0.000000000249; 
		    }else if(item1 == 14 && item2 == 11){//Quadrado
		    	resul = num*0.0000255; 
		    }else if(item1 == 14 && item2 == 12){//Terreno quadrada
		    	resul = num*0.000772; 
		    }else if(item1 == 14 && item2 == 13){//Pé quadrada
		    	resul = num*0.01; 
		    }else if(item1 == 14 && item2 == 14){//Polegada quadrada
		    	resul = num;
		    }
	        if(item2 == 0)
                unid="Km²";
            else if(item2 == 1)
                unid="Hectare";
            else if(item2 == 2)
                unid="A";
            else if(item2 == 3)
                unid="m²";
            else if( item2 == 4)
                unid="dm²";
            else if( item2 == 5)
                unid="cm²";
            else if(item2 == 6)
                unid="mm²";
            else if(item2 == 7)
                unid="µm²";
            else if( item2 == 8)
                unid="nm²";
            else if(item2 == 9)
                unid="Município";
            else if(item2 == 10)
                unid="Milha quadrada";
            else if(item2 == 11)
                unid="Quadrado";
            else if(item2 == 12)
                unid="Terreno quadrada";
            else if(item2 == 13)
                unid="Pé quadrada";
            else if(item2 == 14)
                unid="Polegada quadrada";
                

			window.alert("Resultado: " + resul +" "+ unid);

}