function calculaVelocidade(){
        /*jslint browser:true, -W099: false, -W041: false */
            var elem1 = document.getElementById("opcao1Velo");
			var item1 = (elem1.options[elem1.options.selectedIndex]).value;

			var elem2 = document.getElementById("opcao2Velo");
			var item2 = (elem2.options[elem2.options.selectedIndex]).value;

			var num = parseFloat(document.formVelo.textVelo.value);
			var resul;
            var unid;

			//Km/s para ...
			if(item1 == 0 && item2 == 0){//Km/s
		    	resul = num;
		    }else if(item1 == 0 && item2 == 1){//m/s
		    	resul= num*1000; 
		    }else if(item1 == 0 && item2 == 2){//Km/h
		  	  	resul= num*3600; 
		    }else if(item1 == 0 && item2 == 3){//Milimetro por segundo(mm/s)                      
		  	  	resul= num*1000000; 
		    }else if(item1 == 0 && item2 == 4){//Micrômetro por segundo(µm/s)
		    	resul= num*1000000000; 
		    }else if(item1 == 0 && item2 == 5){//Milha por segundo
		    	resul= num*0.62; 
		    }else if(item1 == 0 && item2 == 6){//Milha por hora
		    	resul = num*2236.94;	
		    }else if(item1 == 0 && item2 == 7){//Pé por segundo
		    	resul= num*3280.84;
		    }else if(item1 == 0 && item2 == 8){//Nó
		    	resul= num*1943.85;
		    }else if(item1 == 0 && item2 == 9){//Velocidade da luz
		    	resul= num*0.00000334;
		    }else if(item1 == 0 && item2 == 10){//Velocidade do som
		    	resul= num*2.92; 
		    }
			//m/s para ...
		     else if(item1 == 1 && item2 == 0){//Km/s
		    	resul = num*0.001;
		    }else if(item1 == 1 && item2 == 1){//m/s
		    	resul= num; 
		    }else if(item1 == 1 && item2 == 2){//Km/h
		  	  	resul= num*3.6; 
		    }else if(item1 == 1 && item2 == 3){//Milimetro por segundo(mm/s)                      
		  	  	resul= num*1000; 
		    }else if(item1 == 1 && item2 == 4){//Micrômetro por segundo(µm/s)
		    	resul= num*1000000; 
		    }else if(item1 == 1 && item2 == 5){//Milha por segundo
		    	resul= num*0.000621; 
		    }else if(item1 == 1 && item2 == 6){//Milha por hora
		    	resul = num*2.24;	
		    }else if(item1 == 1 && item2 == 7){//Pé por segundo
		    	resul= num*3.28;
		    }else if(item1 == 1 && item2 == 8){//Nó
		    	resul= num*1.94;
		    }else if(item1 == 1 && item2 == 9){//Velocidade da luz
		    	resul= num*0.00000000334; 
		    }else if(item1 == 1 && item2 == 10){//Velocidade do som
		    	resul= num*0.00292; 
		    }
			//Km/h para ...
		     else if(item1 == 2 && item2 == 0){//Km/s
		    	resul = num*0.000278;
		    }else if(item1 == 2 && item2 == 1){//m/s
		    	resul= num*0.28; 
		    }else if(item1 == 2 && item2 == 2){//Km/h
		  	  	resul= num; 
		    }else if(item1 == 2 && item2 == 3){//Milimetro por segundo(mm/s)                      
		  	  	resul= num*277.78; 
		    }else if(item1 == 2 && item2 == 4){//Micrômetro por segundo(µm/s)
		    	resul= num*277777.78; 
		    }else if(item1 == 2 && item2 == 5){//Milha por segundo
		    	resul= num*0.000173; 
		    }else if(item1 == 2 && item2 == 6){//Milha por hora
		    	resul = num*0.62;	
		    }else if(item1 == 2 && item2 == 7){//Pé por segundo
		    	resul= num*0.91;
		    }else if(item1 == 2 && item2 == 8){//Nó
		    	resul= num*0.54;
		    }else if(item1 == 2 && item2 == 9){//Velocidade da luz
		    	resul= num*0.000000000927; 
		    }else if(item1 == 2 && item2 == 10){//Velocidade do som
		    	resul= num*0.00081; 
		    }
			//Milimetro por segundo(mm/s) para ...
		     else if(item1 == 3 && item2 == 0){//Km/s
		    	resul = num*0.000001;
		    }else if(item1 == 3 && item2 == 1){//m/s
		    	resul= num*0.001; 
		    }else if(item1 == 3 && item2 == 2){//Km/h
		  	  	resul= num*0.0036; 
		    }else if(item1 == 3 && item2 == 3){//Milimetro por segundo(mm/s)                      
		  	  	resul= num; 
		    }else if(item1 == 3 && item2 == 4){//Micrômetro por segundo(µm/s)
		    	resul= num*1000; 
		    }else if(item1 == 3 && item2 == 5){//Milha por segundo
		    	resul= num*0.000000621; 
		    }else if(item1 == 3 && item2 == 6){//Milha por hora
		    	resul = num*0.00224;	
		    }else if(item1 == 3 && item2 == 7){//Pé por segundo
		    	resul= num*0.00328;
		    }else if(item1 == 3 && item2 == 8){//Nó
		    	resul= num*0.00194;
		    }else if(item1 == 3 && item2 == 9){//Velocidade da luz
		    	resul= num*0.00000000000334; 
		    }else if(item1 == 3 && item2 == 10){//Velocidade do som
		    	resul= num*0.00000292;
		    }
			//Micrômetro por segundo(µm/s)para...
		     else if(item1 == 4 && item2 == 0){//Km/s
		    	resul = num*0.000000001;
		    }else if(item1 == 4 && item2 == 1){//m/s
		    	resul= num*0.000001; 
		    }else if(item1 == 4 && item2 == 2){//Km/h
		  	  	resul= num*0.0000036; 
		    }else if(item1 == 4 && item2 == 3){//Milimetro por segundo(mm/s)                      
		  	  	resul= num*0.001; 
		    }else if(item1 == 4 && item2 == 4){//Micrômetro por segundo(µm/s)
		    	resul= num; 
		    }else if(item1 == 4 && item2 == 5){//Milha por segundo
		    	resul= num*0.000000000621; 
		    }else if(item1 == 4 && item2 == 6){//Milha por hora
		    	resul = num*0.00000224;	
		    }else if(item1 == 4 && item2 == 7){//Pé por segundo
		    	resul= num*0.00000328;
		    }else if(item1 == 4 && item2 == 8){//Nó
		    	resul= num*0.00000194;
		    }else if(item1 == 4 && item2 == 9){//Velocidade da luz
		    	resul= num*0.00000000000000334; 
		    }else if(item1 == 4 && item2 == 10){//Velocidade do som
		    	resul= num*0.00000000292;
		    }
			//Milha por segundo para ...
		     else if(item1 == 5 && item2 == 0){//Km/s
		    	resul = num*1.61;
		    }else if(item1 == 5 && item2 == 1){//m/s
		    	resul= num*1609.34; 
		    }else if(item1 == 5 && item2 == 2){//Km/h
		  	  	resul= num*5793.64; 
		    }else if(item1 == 5 && item2 == 3){//Milimetro por segundo(mm/s)                      
		  	  	resul= num*1609343.98; 
		    }else if(item1 == 5 && item2 == 4){//Micrômetro por segundo(µm/s)
		    	resul= num*1610000000; 
		    }else if(item1 == 5 && item2 == 5){//Milha por segundo
		    	resul= num; 
		    }else if(item1 == 5 && item2 == 6){//Milha por hora
		    	resul = num*3600;	
		    }else if(item1 == 5 && item2 == 7){//Pé por segundo
		    	resul= num*5280;
		    }else if(item1 == 5 && item2 == 8){//Nó
		    	resul= num*3128.32;
		    }else if(item1 == 5 && item2 == 9){//Velocidade da luz
		    	resul= num*0.00000537; 
		    }else if(item1 == 5 && item2 == 10){//Velocidade do som
		    	resul= num*4.69; 
		    }
			//Milha por hora para ...
		     else if(item1 == 6 && item2 == 0){//Km/s
		    	resul = num*0.000447;
		    }else if(item1 == 6 && item2 == 1){//m/s
		    	resul= num*0.45; 
		    }else if(item1 == 6 && item2 == 2){//Km/h
		  	  	resul= num*1.61; 
		    }else if(item1 == 6 && item2 == 3){//Milimetro por segundo(mm/s)                      
		  	  	resul= num*447.04; 
		    }else if(item1 == 6 && item2 == 4){//Micrômetro por segundo(µm/s)
		    	resul= num*447040.06; 
		    }else if(item1 == 6 && item2 == 5){//Milha por segundo
		    	resul= num*0.000278; 
		    }else if(item1 == 6 && item2 == 6){//Milha por hora
		    	resul = num;	
		    }else if(item1 == 6 && item2 == 7){//Pé por segundo
		    	resul= num*1.47;
		    }else if(item1 == 6 && item2 == 8){//Nó
		    	resul= num*0.87;
		    }else if(item1 == 6 && item2 == 9){//Velocidade da luz
		    	resul= num*0.00000000149; 
		    }else if(item1 == 6 && item2 == 10){//Velocidade do som
		    	resul= num*0.0013; 
		    }
			//Pé por segundo para ...
		     else if(item1 == 7 && item2 == 0){//Km/s
		    	resul = num*0.000305;
		    }else if(item1 == 7 && item2 == 1){//m/s
		    	resul= num*0.3; 
		    }else if(item1 == 7 && item2 == 2){//Km/h
		  	  	resul= num*1.1; 
		    }else if(item1 == 7 && item2 == 3){//Milimetro por segundo(mm/s)                      
		  	  	resul= num*304.8; 
		    }else if(item1 == 7 && item2 == 4){//Micrômetro por segundo(µm/s)
		    	resul= num*304799.99; 
		    }else if(item1 == 7 && item2 == 5){//Milha por segundo
		    	resul= num*0.000189; 
		    }else if(item1 == 7 && item2 == 6){//Milha por hora
		    	resul = num*0.68;	
		    }else if(item1 == 7 && item2 == 7){//Pé por segundo
		    	resul= num;
		    }else if(item1 == 7 && item2 == 8){//Nó
		    	resul= num*0.59;
		    }else if(item1 == 7 && item2 == 9){//Velocidade da luz
		    	resul= num*0.00000000102; 
		    }else if(item1 == 7 && item2 == 10){//Velocidade do som
		    	resul= num*0.000889; 
		    }
			//Nó para ...
		     else if(item1 == 8 && item2 == 0){//Km/s
		    	resul = num*0.000514;
		    }else if(item1 == 8 && item2 == 1){//m/s
		    	resul= num*0.51; 
		    }else if(item1 == 8 && item2 == 2){//Km/h
		  	  	resul= num*1.85; 
		    }else if(item1 == 8 && item2 == 3){//Milimetro por segundo(mm/s)                      
		  	  	resul= num*514.44; 
		    }else if(item1 == 8 && item2 == 4){//Micrômetro por segundo(µm/s)
		    	resul= num*514444.31; 
		    }else if(item1 == 8 && item2 == 5){//Milha por segundo
		    	resul= num*0.00032; 
		    }else if(item1 == 8 && item2 == 6){//Milha por hora
		    	resul = num*1.15;	
		    }else if(item1 == 8 && item2 == 7){//Pé por segundo
		    	resul= num*1.69;
		    }else if(item1 == 8 && item2 == 8){//Nó
		    	resul= num;
		    }else if(item1 == 8 && item2 == 9){//Velocidade da luz
		    	resul= num*0.00000000172; 
		    }else if(item1 == 8 && item2 == 10){//Velocidade do som
		    	resul= num*0.0015; 
		    }
			//Velocidade da luz para ...
		     else if(item1 == 9 && item2 == 0){//Km/s
		    	resul = num*299792.46;
		    }else if(item1 == 9 && item2 == 1){//m/s
		    	resul= num*299792458; 
		    }else if(item1 == 9 && item2 == 2){//Km/h
		  	  	resul= num*1079252848.8; 
		    }else if(item1 == 9 && item2 == 3){//Milimetro por segundo(mm/s)                      
		  	  	resul= num*299792458;
		  	  	resul*= 1000;
		    }else if(item1 == 9 && item2 == 4){//Micrômetro por segundo(µm/s)
		    	resul= num*300000000;
		    	resul*=1000000;
		    }else if(item1 == 9 && item2 == 5){//Milha por segundo
		    	resul= num*186281.4; 
		    }else if(item1 == 9 && item2 == 6){//Milha por hora
		    	resul = num*640616541.83;	
		    }else if(item1 == 9 && item2 == 7){//Pé por segundo
		    	resul= num*983571087.9;
		    }else if(item1 == 9 && item2 == 8){//Nó
		    	resul= num*582750070.52;
		    }else if(item1 == 9 && item2 == 9){//Velocidade da luz
		    	resul= num; 
		    }else if(item1 == 9 && item2 == 10){//Velocidade do som
		    	resul= num*874030.49; 
		    }
			//Velocidade do som para ...
		     else if(item1 == 10 && item2 == 0){//Km/s
		    	resul = num*0.34;
		    }else if(item1 == 10 && item2 == 1){//m/s
		    	resul= num*343; 
		    }else if(item1 == 10 && item2 == 2){//Km/h
		  	  	resul= num*1234.8; 
		    }else if(item1 == 10 && item2 == 3){//Milimetro por segundo(mm/s)                      
		  	  	resul= num*343000; 
		    }else if(item1 == 10 && item2 == 4){//Micrômetro por segundo(µm/s)
		    	resul= num*343000000; 
		    }else if(item1 == 10 && item2 == 5){//Milha por segundo
		    	resul= num*0.21; 
		    }else if(item1 == 10 && item2 == 6){//Milha por hora
		    	resul = num*767.27;	
		    }else if(item1 == 10 && item2 == 7){//Pé por segundo
		    	resul= num*1125.33;
		    }else if(item1 == 10 && item2 == 8){//Nó
		    	resul= num*666.74;
		    }else if(item1 == 10 && item2 == 9){//Velocidade da luz
		    	resul= num*0.00000114; 
		    }else if(item1 == 10 && item2 == 10){//Velocidade do som
		    	resul= num;
		    }
			if(item2 == 0)
                unid="Km/s";
            else if(item2 == 1)
                unid="m/s";
            else if(item2 == 2)
                unid="Km/h";
            else if(item2 == 3)
                unid="mm/s";
            else if( item2 == 4)
                unid="µm/s";
            else if( item2 == 5)
                unid="Mps";
            else if(item2 == 6)
                unid="Mph";
            else if(item2 == 7)
                unid="Pés/s";
            else if( item2 == 8)
                unid="Nó";
            else if(item2 == 9)
                unid="Velocidade da Luz";
            else if(item2 == 10)
                unid="Velocidade do som";

			window.alert("Resultado: " + resul +" "+ unid);


}