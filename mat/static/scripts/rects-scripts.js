var b = document.getElementsByClassName('container_quadrado')[0];
              
                b.addEventListener('keyup',function(event){
                   if (event.keyCode==13){
                    event.preventDefault();
                       document.getElementsByClassName('butao1')[0].click();
                   }
               })
function area_retangulo(){
   var ladoa =document.getElementById('lado_1').value
   var ladob=document.getElementById('lado_2').value
   if (ladoa >0 && ladob >0){
       document.getElementById('error').innerHTML=""
       var area=ladoa*ladob
       var perimetro=ladoa*2+ladob*2
       var diagonal = Math.sqrt(ladoa**2+ladob**2)
       document.getElementById('res_area_retangulo').innerHTML='Área = lado A * lado B ='+ ladoa +"*"+ ladob +"= "+area
       document.getElementById('res_perimetro_retangulo').innerHTML='Perímetro = 2* lado A + 2* lado B = 2 *'+ladoa +"+ 2 *"+ ladob +"="+ perimetro
       document.getElementById('res_diagonal_retangulo').innerHTML='Diagonal=√(lado A² + lado B²) = √ ('+ladoa+"²+"+ladob+"²) = "+(diagonal).toFixed(3)
       if (Number(ladoa)>Number(ladob)){
           var maior =ladoa
           var menor = ladob
       }
       else{
           var maior= ladob
           var menor = ladoa
       }
       var temp = document.getElementById('canvas').style.height
   
       var temp2=temp.replace(/\D/g,'')
       var true_lado= 250
       var k=true_lado/Number(maior)
      
       
   var canvas = document.getElementById('canvas');
  
   var ctx = canvas.getContext('2d');
   ctx.setLineDash([0,0])
   ctx.clearRect(0, 0, 400, 400);
   ctx.strokeRect(5, 25,true_lado,menor*k) ;
   ctx.font = '25px serif';
   ctx.fillText("Lado a ="+ ladoa,true_lado/2-40,menor*k+50);
   ctx.fillText('Lado b ='+ ladob,true_lado+5,menor*k/2+30);
   ctx.fillText('d ='+ (diagonal).toFixed(3),true_lado/2-40,menor*k/2+30);
 
   ctx.setLineDash([15,30])
   ctx.beginPath()
   ctx.moveTo(5,25);
   ctx.lineTo(true_lado+5,menor*k+25)
   ctx.stroke()
   }
   else{
       document.getElementById('error').innerHTML='Insira dois números reais e maiores que zero.'
   }
   }
    
    
    