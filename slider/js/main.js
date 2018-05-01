$(function() {
var SliderModule = (function() {
      var pb =  {};
      pb.el = $('#slider');
      pb.items = {
          panel: pb.el.find('li')
          
      }    
      
      // Variables necesarias
      var SliderInterval,
          currentSlider = 0,
          nextSlider = 1,
          lengthSlider = pb.items.panel.length;
    
    // Iniciar
      pb.init = function(settings){
          
          // Activamos Slider
          SliderInit();
          
          
          // Controles Slider
          $('#controles').on('click', 'li', function(e){
             var $this = $(this) ;
              if (currentSlider !== $this.index()){
                 changePanel($this.index()); 
              }
              
          });
          
      }
      
      var SliderInit=function() {
          SliderInterval = setInterval(pb.startSlider, 8000);
      }
      
      pb.startSlider = function() {
          var panels = pb.items.panel;
                controls = $('#controles li');
          if (nextSlider>=lengthSlider) {
           nextSlider = 0;
              currentSlider = lengthSlider-1;
          }
          
          // Efectos
          controls.removeClass('active').eq(nextSlider).addClass('active');
          panels.eq(currentSlider).fadeOut('slow');
          panels.eq(nextSlider).fadeIn('slow');
          // Actualizamos datos
          
          currentSlider = nextSlider;
          nextSlider+=1;
      }
      
      // Funcion controles slider
    
      var changePanel = function(id){
          clearInterval(SliderInterval);
          var panels = pb.items.panel;
          controls = $('#controles li');
          
          // Comprobar ID
          if (id >= lengthSlider){
              id = 0;
          }else if (id < 0){
              id = lengthSlider-1;
          }
          // Efectos
          controls.removeClass('active').eq(id).addClass('active');
          panels.eq(currentSlider).fadeOut('slow');
          panels.eq(id).fadeIn('slow');
          
          // Actualizamos datos
          currentSlider = id;
          nextSlider = id+1;
          
          // Reactivamos slider
          SliderInit();
      }
      
      return pb;
  }());
    SliderModule.init();
});
      
      
    