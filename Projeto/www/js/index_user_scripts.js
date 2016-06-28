(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
    /*jslint browser:true, devel:true, white:true, vars:true */
      /*global $:false, intel:false, Camera: true,activate_page:true, uib_sb: treu*/
    /*jslint sloppy:true, eqeq:true, nomen:true, unparam:true */
/*global intel, google, Marker, device */
    
 function register_event_handlers()
 {
    
        /* listitem  #btnFoto */
    
    
        /* listitem  Camera Video */
    $(document).on("click", ".uib_w_6", function(evt)
    {
         activate_page("#cameraVideo"); 
    });
    
        /* listitem  Geolocalização */
    $(document).on("click", ".uib_w_7", function(evt)
    {
         activate_page("#Geolocation"); 
    });
     var img = document.getElementById("listFotos");
     var item;
        /* button  #btnImage */
     document.getElementById("btnApagar").style.display="none";
    
     $(document).on("click", "#btnImage", function(evt)
    {
        
         var fnCapturar = function(imageSrc){
             item=null;
             item = '<li><img src="data:image/jpeg;base64,'+imageSrc+'" style="width:100%!important"/></li>';
            document.getElementById("btnApagar").style.display="";
            img.innerHTML = item;
             
             
           // $("#listFotos").append(item);
        };
        var fnFalhar = function(error){
            navigator.notification.alert("Erro ao capturar: " + error, null, "INFORMAÇÃO");
        };
        var opcoes = { 
                quality : 75,
                destinationType: Camera.DestinationType.DATA_URL
        };
        
        // Capturar...
        navigator.camera.getPicture(fnCapturar, fnFalhar, opcoes);
    });
    
          var pictureSource=navigator.camera.PictureSourceType;
        var destinationType=navigator.camera.DestinationType;
    
        /* button  #btnAlbum */
    $(document).on("click", "#btnAlbum", function(evt)
    {
       
      navigator.camera.getPicture(fotoSucesso, erro, { quality: 75,
        destinationType: destinationType.DATA_URL,
        sourceType: pictureSource.SAVEDPHOTOALBUM });
    
    function fotoSucesso(imageSrc){
            item = '<li><img src="data:image/jpeg;base64,'+imageSrc+'"style="width:100%!important"/></li>';
            document.getElementById("btnApagar").style.display="";
            img.innerHTML = item;
    }
    function erro(e) {
      alert('Erro: ' + e);
    }
    });
    
        /* button  #btnApagar */
    $(document).on("click", "#btnApagar", function(evt)
    {
        
        $('#listFotos').empty();
        document.getElementById("btnApagar").style.display="none";
      
    });
    
        /* button  #btnVideo */
    $(document).on("click", "#btnVideo", function(evt)
    {
        var fnCapturar = function(mediaFiles) {
                var img = document.getElementById("listVideos");
           for (var i = 0; i < mediaFiles.length; i += 1) {
                var file = mediaFiles[i];
                var itemVideo = '<li><video controls style="width:100%!important"><source src="'+file.fullPath+'" type="'+file.type+'"></video></li>';
                //$('#listVideos').append(itemVideo);
               img.innerHTML= itemVideo;
               
           }
        };
        var fnFalhar = function(error) {
            navigator.notification.alert("Erro ao capturar: " + error, null, "INFORMAÇÃO");
        };
        var opcoes = { limit:1 };

        // Capturar...
        navigator.device.capture.captureVideo(fnCapturar, fnFalhar, opcoes);
    });
    
        /* button  #btnGeo */
    $(document).on("click", "#btnGeo", function(evt)
    {
           var fnCapturar = function(position){
           
            // Gravar dados da posição capturada em uma variável...
            var coords = position.coords;
          
            // Exibir dados das coordenadas capturadas...
            navigator.notification.alert(JSON.stringify(coords),"COORDENADAS");
            
            // GOOGLE MAPS: Mostrar marcador no mapa...
            var map = new google.maps.Map(
                            document.getElementById("map"), 
                            { 
                              center : new google.maps.LatLng( coords.latitude, coords.longitude ), 
                              zoom : 5, 
                              mapTypeId : google.maps.MapTypeId.ROADMAP 
                            }
                    );
            var marker = new google.maps.Marker({
                                title : "VOCÊ ESTÁ AQUI: "+coords.latitude+", "+coords.longitude,
                                position : new google.maps.LatLng(coords.latitude, coords.longitude)
                         });
               
            marker.setMap(map);
            
        };
        
        // Caso falhe na captura, faça isso...
        var fnFalhar = function(error){
            
            navigator.notification.alert("Erro ao capturar posição: "+error.message, "INFORMAÇÃO");
            
        };
        
        // Opções para acessar o GPS...
        var opcoes = { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true };
        
        // CAPTURAR POSIÇÃO: Chamada a API de Geolocalização (GPS) via Apache Cordova
        navigator.geolocation.getCurrentPosition(fnCapturar, fnFalhar, opcoes);
    
    });
         
      var watchID = null;
      var pos = document.getElementById('btnText');
    
        /* button  #btnCapPos */
    $(document).on("click", "#btnCapPos", function(evt)
    {
        pos.innerHTML="Carregando...  ! ";
    // Wait for device API libraries to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // device APIs are available
    //
    function onDeviceReady() {
        startWatch();
    }

    // Start watching the acceleration
    //
    function startWatch() {

        // Update acceleration every 3 seconds
        var options = { frequency: 3000 };

        watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    }

    // Stop watching the acceleration
    //
    

    // onSuccess: Get a snapshot of the current acceleration
    //
    function onSuccess(acceleration) {

            var  x =  acceleration.x ;
            var y =  acceleration.y ; 
            var z =  acceleration.z ; 
                  
     
            if(y < 0) { // O dispositivo esta de cabeça pra baixo
                if(x > 0){  
                    pos.innerHTML="Virando para ESQUERDA ficando INVERTIDO";
                    navigator.notification.vibrate(1000);
                    $("#acelerometro").css("background-color","yellow");
                }
                if(x < 0) { 
                pos.innerHTML="Virando para DIREITA ficando INVERTIDO"; 
                    navigator.notification.vibrate(1000);
                     $("#acelerometro").css("background-color","red");
                }
           } else if(y > 7) {
                pos.innerHTML="Aparelho esta em pé";
                navigator.notification.vibrate(1000);
                $("#acelerometro").css("background-color","black");
            }else if(z > 0){
                    pos.innerHTML="Aparelho esta DEITADO Com a tela para cima";
                    $("#acelerometro").css("background-color","green");
                    navigator.notification.vibrate(1000);
            }else if(z < 0){
                    pos.innerHTML="Aparelho esta DEITADO Com a tela para baixo";
                    navigator.notification.vibrate(2000);
                    $("#acelerometro").css("background-color","darkGrey"); 
            }   
    }

    // onError: Failed to get the acceleration
    //
    function onError() {
        alert('onError!');
    }

    });
       /* button  #btnParaCap */
    $(document).on("click", "#btnParaCap", function(evt)
    {
        if (watchID) {
             $("#acelerometro").css("background-color","white");
            navigator.accelerometer.clearWatch(watchID);
            watchID = null;
            navigator.notification.vibrate(2);
            pos.innerHTML="Capitura de posição está para! ";
        }
    });
    
        /* listitem  #btnFoto */
    $(document).on("click", "#btnFoto", function(evt)
    {
        /* your code goes here */ 
    });
        /* button  #btnFechar */
    $(document).on("click", "#btnFechar", function(evt)
    {            
                function onConfirm(buttonIndex) {
                    if(buttonIndex == 2)
                  navigator.app.exitApp() ;
                }
                navigator.notification.confirm(
                    'Deseja Sair?',  // message
                    onConfirm,
                    'Fechar',            // title
                    'Cancelar, Ok'          // buttonLabels
                    );
              
    });
    
      
    
        /* button  .uib_w_31 */
    $(document).on("click", ".uib_w_31", function(evt)
    {
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($(".uib_w_29"));  
    });
    
        /* button  #slidMassa */
    
    
        /* button  #slidVolume */
    $(document).on("click", "#slidVolume", function(evt)
    {
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($(".uib_w_50"));  
    });
    
        /* button  #slidArea */
    $(document).on("click", "#slidArea", function(evt)
    {
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($(".uib_w_54"));  
    });
    
        /* button  #SlidCompri */
    $(document).on("click", "#SlidCompri", function(evt)
    {
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($(".uib_w_42"));  
    });
    
        /* button  #slidVelo */
    $(document).on("click", "#slidVelo", function(evt)
    {
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($(".uib_w_58"));  
    });
    
        /* button  #slidPotencia */
    $(document).on("click", "#slidPotencia", function(evt)
    {
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($(".uib_w_62"));  
    });
    
        /* button  #slidMassa */
    $(document).on("click", "#slidMassa", function(evt)
    {
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($(".uib_w_50"));  
    });
    
        /* button  #slidCompri */
    $(document).on("click", "#slidCompri", function(evt)
    {
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($(".uib_w_42"));  
    });
    
        /* button  #slidMassa */
    $(document).on("click", "#slidMassa", function(evt)
    {
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($(".uib_w_69"));  
    });
    
        /* button  #slidVelo */
    $(document).on("click", "#slidVelo", function(evt)
    {
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($(".uib_w_58"));  
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
