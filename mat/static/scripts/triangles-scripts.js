
var b = document.getElementsByClassName('container')[0];
              
                b.addEventListener('keyup',function(event){
                   if (event.keyCode==13){
                    event.preventDefault();
                       document.getElementById('bt').click();
                   }
               })
               
function reset(){
                var abc = document.getElementById("abc").value="";
                var bca = document.getElementById("bca").value="";
                var cab = document.getElementById("cab").value="";
                var lado_a = document.getElementById("lado_a").value="";
                var lado_b= document.getElementById("lado_b").value="";
                var lado_c= document.getElementById("lado_c").value="";
                var c1 = document.getElementById("canvas_tri");
                var ctx = c1.getContext("2d");

                document.getElementById("cal_a").innerHTML="";
                document.getElementById("cal_b").innerHTML="";
                document.getElementById("cal_c").innerHTML="";
                document.getElementById("cal_abc").innerHTML="";
                document.getElementById("cal_bca").innerHTML="";
                document.getElementById("cal_cab").innerHTML="";
                document.getElementById("result_a").innerHTML=""
                document.getElementById("result_b").innerHTML=""
                document.getElementById("result_c").innerHTML=""
                document.getElementById("result_abc").innerHTML=""
                document.getElementById("result_bca").innerHTML=""
                document.getElementById("result_cab").innerHTML=""
                document.getElementById("cof").innerHTML=""
                document.getElementById("ang_restante").innerHTML=""
                document.getElementById("erro_input").innerHTML=""
                document.getElementById("erro_existencia").innerHTML=""
                document.getElementById("result_altura_a").innerHTML=""
                document.getElementById("result_altura_b").innerHTML=""
                document.getElementById("result_altura_c").innerHTML=""
                document.getElementById("result_area").innerHTML=""
                
                
                ctx.clearRect(0,0, 500, 500);       
                
                
            }
     
function draw_tri(){
                
                document.getElementById("cal_a").innerHTML="";
                document.getElementById("cal_b").innerHTML="";
                document.getElementById("cal_c").innerHTML="";
                document.getElementById("cal_abc").innerHTML="";
                document.getElementById("cal_bca").innerHTML="";
                document.getElementById("cal_cab").innerHTML="";
                document.getElementById("erro_input").innerHTML=""
                
                document.getElementById("erro_existencia").innerHTML=""
                document.getElementById('titulo').innerHTML=''
                
                
                var c1 = document.getElementById("canvas_tri");
                var ctx = c1.getContext("2d");
            
                ctx.clearRect(0,0, 500, 500);   
                ctx.translate(150,250)
                ctx.save()

                var lado_a = document.getElementById("lado_a").value;
                var lado_b= document.getElementById("lado_b").value;
                var lado_c= document.getElementById("lado_c").value;
               
                var chs=document.getElementById("opc").selectedIndex;
                if(chs==1){

                    console.log("sim")
                    var abc = document.getElementById("abc").value*180/Math.PI;
                    var bca = document.getElementById("bca").value*180/Math.PI;
                    var cab = document.getElementById("cab").value*180/Math.PI;
                    var ab = document.getElementById("abc").value;
                    var bc = document.getElementById("bca").value;
                    var ca = document.getElementById("cab").value;
                   

                    // aceita os valore de pi/2.... etc
                    // ve se o input contem "pi" e usa o regex pra deixa soment o numero na sting da input
                   if(ab.indexOf('pi')!=-1){
                    
                    var cof = ab.replace(/[^0-9.]/g, "");
                    console.log('cof '+ cof)
                    abc= (Math.PI  / Number(cof)) *180/Math.PI;
                    console.log(abc)
                   }
                   if(bc.indexOf('pi')!=-1){
                   
                    var cof = bc.replace(/[^0-9.]/g, "");
                    console.log('cof '+ cof)
                    bca= (Math.PI  / Number(cof)) *180/Math.PI;
                    console.log(bca)
                   }
                   if(ca.indexOf('pi')!=-1){
                   
                    var cof = ca.replace(/[^0-9.]/g, "");
                    console.log('cof '+ cof)
                    cab= (Math.PI  / Number(cof)) *180/Math.PI;
                    console.log(cab)
                   }
                }

                else{
                var abc = document.getElementById("abc").value;
                var bca = document.getElementById("bca").value;
                var cab = document.getElementById("cab").value;
                }

                var inputs =[Number(lado_a),Number(lado_b),Number(lado_c),Number(bca).toFixed(3),Number(cab).toFixed(3),Number(abc).toFixed(3)];
                console.log(inputs)

                var valid =inputs.filter(func);

function func(value){
                return value !=0 && value !=Number(0)
                
            }
            console.log(valid)
            if (valid.length != 3){
               
          
               reset()
               document.getElementById("erro_input").innerHTML="insira  3 valores"
              document.getElementById("erro_existencia").innerHTML=""
                ctx.translate(-150,-250)
           }
           //se tiver mais ou menos de 3 inputs roda o algoritmo
          else{
           
            
    // muda os inputs de "" para 0 se necessario
    var z
    for (z=0;z<inputs.length;z++){
        if(inputs[z]==""){
            inputs[z]=0
        }
    }
    
    
    
    
    
var angulos = [abc,bca,cab]
    // checando se o input contem 2 angulos  e pegando o 3 se isso for true 

    //  isso é necessario pois o codigo se baseia em pares de lados e angulso opostos
    // com 2 angulos e um lado é possivel ter angulos adjacentes ao msm lado
var qtd_ang =angulos.filter(qtd);
                function qtd(value){
                    return value ==0
                    }
var qtd_lados=angulos.filter(qd);
                function qd(value){
                    return value ==0 
                    }
                  
    
if(qtd_ang.length==1  ){
    
            if(abc==0)
            {abc=180-bca-cab}
            
            if(bca==0)
            {bca=180-abc-cab}
    
            if(cab==0)
            {cab=180-abc-bca}
            
    }
    
    // pegando o coeficiente de lado/sinx(angulo oposto)
    ax=lado_a/Math.sin(Math.PI * bca/180)
    bx=lado_b/Math.sin(Math.PI * cab/180)
    cx= lado_c/Math.sin(Math.PI * abc/180)
    var xx= [ax,bx,cx]
    // itering pelos pares de lados e angulos opostos
    var zz
    
for(zz=0;zz<xx.length;zz++){
        
    
    
        if(isNaN(xx[zz])==false && xx[zz] !=0 &&  xx[zz]!= Infinity){
            var coeficeinte=xx[zz]
            console.log(coeficeinte )
            if(xx[zz]==ax){
                var cfc=String(lado_a)+'/ Sin('+String(bca)+')'
             }
             if(xx[zz]==bx){
                var cfc=String(lado_b)+'/ Sin('+String(cab)+')'
             }
             if(xx[zz]==cx){
                var cfc=String(lado_c)+'/ Sin('+String(abc)+')'
             }
       
    }
    }
    // definindo os valores para mostra no calculo do coeficiente
    
    for (var t=0;t<xx.length;t++){
        if(xx[zz]=coeficeinte){
            if(zz==0){
                var cfc=
                String(lado_a)+'/ Sin('+bca+')'
            }
            
            
        }
    }

    // casos onde nao é possivel definir o coeficiente
    if(coeficeinte==undefined ){
     
        // lado angulo lado
        if(lado_c==0 && qtd_ang.length==2){
         
               
    
               
                lado_c=Math.sqrt(  (lado_b**2+lado_a**2- (2*lado_a*lado_b*Math.cos(Math.PI *abc /180))  ))
            
                cab=Math.acos((lado_c**2+lado_a**2-lado_b**2)/(2*lado_a*lado_c))*180/Math.PI
                bca=Math.acos((lado_b**2+lado_c**2-lado_a**2)/(2*lado_b*lado_c))*180/Math.PI
        }
    
        if (lado_b==0 && qtd_ang.length==2){
           
        
            lado_b=Math.sqrt(  (lado_c**2+lado_a**2- (2*lado_a*lado_c*Math.cos(Math.PI *cab /180))  ))
            
            abc=Math.acos((lado_b**2+lado_a**2-lado_c**2)/(2*lado_a*lado_b))*180/Math.PI
            bca=Math.acos((lado_b**2+lado_c**2-lado_a**2)/(2*lado_b*lado_c))*180/Math.PI

        }
        if (lado_a==0 && qtd_ang.length==2 ){
           
           
            lado_a=Math.sqrt(  (lado_c**2+lado_b**2- (2*lado_b*lado_c*Math.cos(Math.PI *bca/180))  ))
            
            abc=Math.acos((lado_b**2+lado_a**2-lado_c**2)/(2*lado_a*lado_b))*180/Math.PI
            cab=Math.acos((lado_c**2+lado_a**2-lado_b**2)/(2*lado_a*lado_c))*180/Math.PI
        }
        // lado lado lado
        // resolvido com lei dos cossenos
        if(lado_a!=0 && lado_b!=0 && lado_c!=0
         && abc==0 && bca==0 && cab==0
        ){
        cab=Math.acos((lado_c**2+lado_a**2-lado_b**2)/(2*lado_a*lado_c))*180/Math.PI
        abc=Math.acos((lado_a**2+lado_b**2-lado_c**2)/(2*lado_a*lado_b))*180/Math.PI

        bca=180-abc-cab
      
         }

       
    }
    

    // caso com coeficiente definido
    else{
    
    
        console.log(abc,bca,cab)
            if(Math.sin(Math.PI * bca/180)*coeficeinte !=0 )
            {lado_a= Math.sin(Math.PI * bca/180)*coeficeinte 
           
            }
    
            if(Math.sin(Math.PI * cab/180)*coeficeinte !=0 )
            {lado_b=Math.sin(Math.PI * cab/180)*coeficeinte}
    
            if(Math.sin(Math.PI * abc/180)*coeficeinte !=0 )
            {lado_c=Math.sin(Math.PI * abc/180)*coeficeinte}
            
            
            if(Math.asin(lado_c/coeficeinte) !=0 && qtd_ang.length!=1)
            {abc=Math.asin(lado_c/coeficeinte) *180/Math.PI}
            
    
            if(Math.asin(lado_a/coeficeinte) !=0  && qtd_ang.length!=1)
            {bca=Math.asin(lado_a/coeficeinte) *180/Math.PI}
    
            if(Math.asin(lado_b/coeficeinte) !=0  && qtd_ang.length!=1)
            {cab=Math.asin(lado_b/coeficeinte) *180/Math.PI}

            console.log(abc,bca,cab)
            //  o codigo acima retorna 1 variavel a mais pois testa as combinaçoes que retornan algo valido 
    
            //  o codigo abaixo retorna as outras 2 variaveis que faltam com o valor valido que foi descoberto acima
            if(abc==0)
            {abc=180-bca-cab
            }
    
            if(bca==0)
            {bca=180-abc-cab 
           }
    
            if(cab==0)
            {cab=180-abc-bca
            }
            
            if(lado_a==0)
            {lado_a= Math.sin(Math.PI * bca/180)*coeficeinte }
    
            if(lado_b==0)
            {lado_b=Math.sin(Math.PI * cab/180)*coeficeinte }
    
            if(lado_c==0)
            {lado_c=Math.sin(Math.PI * abc/180)*coeficeinte}
            console.log(abc,bca,cab)
    
    
    }
    // arrays com os valores conhecido
    var know=inputs.filter(fnc);
            function fnc(value){
                    if( value !=0)
                    { return value}
            }
   
            
    
                    var a=parseFloat(lado_a)
                    var b=parseFloat(lado_b);
                    var c=parseFloat(lado_c);
                    var ABC = parseFloat(abc).toFixed(3);
                    var BCA =parseFloat(bca).toFixed(3);
                    var CAB=parseFloat(cab).toFixed(3);
    
                var maior_lado =  Math.max(lado_a,lado_b,lado_c);
                console.log('maior lado = '+ maior_lado)
                // var true_lado = 150
                var temp = document.getElementById('canvas_tri').style.height
                var temp2=temp.replace(/\D/g,'')
                var true_lado= temp2*2
                console.log(true_lado)
                var k= parseFloat(true_lado/parseFloat(maior_lado))
    
    
           
                var O ={
                    x:0,
                    y:0
                };
                var A= {
                        x: (a/2)*k,
                        y: 0
                    };
    
                var B = {
                        x: a/2*k - Math.cos(Math.PI *ABC /180)*b*k,
                        y: -Math.sin(Math.PI *ABC /180)*b*k
                    };
                var C = {
                        x: (-a/2)*k,
                        y: 0
                    };
                
          
    
               console.log("LADOS  "+  lado_a,lado_b,lado_c)
               console.log("ANGULOS  " +abc,cab,bca)
               console.log("k= "+ k)
             
    
    
    
            // juntado os nomes e os valores dos lados e angulos
            
               
            //   var final sao os valores finals dos lados e angulos
               var final=[lado_a,lado_b,lado_c,bca,cab,abc]
               for(var p=0;p<final.length;p++){
                   
                   final[p]=Number(final[p])
               }
    
               
              
                var y
            //    comparando os valores inicias e os finais para ver se os valroes inicias nao foram mudados
            // se os valores iniciais foram mudados o triangulo nao atende as condiçoes de existencia
                for(y=0;y<inputs.length;y++){
    
                    if(Number(inputs[y]).toFixed(3)!= Number(final[y]).toFixed(3) && inputs[y]!=0){
                        
                        console.log("erro de mudança")
                        console.log(inputs[y],final[y])
                        
                    a=0;
                    b=0;
                    c=0;
                    ABC=0;
                    BCA=0,
                    CAB=0 
                    if(valid.length==3){
                     document.getElementById("erro_existencia").innerHTML=
                    "esses  valores nao atendem as condiçoes de existencia de um triangulo ";
                    }
                
                    }
                console.log("lados e angulos finasl " +a,b,c,ABC,BCA,CAB)
            
                }
    
                // a ultima condiçao flexibiliza um pouco os inputs que podem ser colocados ,   
                // condiçoes de existencia
                  
                  if(b-c>a || b+c<a || a-c>b || a+c<b ||a-b>c ||a +b<c || a<=0 || b<=0 || c<=0 || isNaN(a)|| isNaN(b) || isNaN(c) || 
                  ABC<0 || BCA<0 || CAB<0|| ABC>=180|| BCA>=180 || CAB>=180|| (Number(180)% (Number(ABC)+Number(BCA)+Number(CAB))).toFixed==0 )
                    
                    {
                        reset()
                    
    
                    ctx.clearRect(0, 0, 300, 300);   
                    
                    ctx.translate(-150,-250)

                   
                    document.getElementById("erro_existencia").innerHTML=
                    "os valores nao atendem as condiçoes de existencia de um triangulo ";
                    }
    
                    else{
                        
        
                        // se condiçao de existencia for possivel : desenhar o poligono
                        var err2= document.getElementById("erro_existencia").innerHTML=""
    
                        ctx.clearRect(0, 0, 300, 300);      
                        
                        ctx.beginPath();
                        ctx.moveTo(C.x,C.y);
                        ctx.lineTo(A.x,A.y);
                        ctx.lineTo(B.x,B.y);
                        ctx.lineTo(C.x,C.y);
                        ctx.closePath();
    
                        ctx.stroke();
                        ctx.font = '13px serif';
                        ctx.fillStyle = "#ff0000";

                        // variaveis que inicialemente nao eram conhecidas no input
                        var unknow =inputs.filter(fc);
                            function fc(value){
                                    if( value ==0)
                                    return value}

      
        
                        if (chs==1){
                            ctx.fillText("abc="+ parseFloat(ABC*Math.PI/180).toFixed(3), A.x,A.y);
                            ctx.fillText("bca="+ parseFloat(BCA*Math.PI/180).toFixed(3), B.x-30,B.y);
                            ctx.fillText("cab="+ parseFloat(CAB*Math.PI/180).toFixed(3) , C.x-55,C.y);


                        }
                        else{
                            ctx.fillText("abc="+ parseFloat(ABC).toFixed(3), A.x,A.y);
                            ctx.fillText("bca="+ parseFloat(BCA).toFixed(3), B.x-30,B.y);
                            ctx.fillText("cab="+ parseFloat(CAB).toFixed(3) , C.x-55,C.y);
                        }
                     
                        ctx.fillStyle = "green";
                        ctx.fillText("a="+ parseFloat(a).toFixed(3),-25,20 );
                        ctx.fillText("b="+ parseFloat(b).toFixed(3),A.x/2+20,B.y/2);
                        ctx.fillText("c="+ parseFloat(c).toFixed(3),-A.x/2-60,B.y/2);
    
    
                        ctx.restore()
                      
                        ctx.translate(-150,-250)

                        // fixando quantidade de casas decimais
                        a=Number(a).toFixed(3)
                        b=Number(b).toFixed(3)
                        c=Number(c).toFixed(3)
                        ABC=Number(ABC).toFixed(3)
                        BCA=Number(BCA).toFixed(3)
                        CAB=Number(CAB).toFixed(3)

                        // inserindo resultados
                        document.getElementById("result_a").innerHTML="Lado A =" +a
                        document.getElementById("result_b").innerHTML="Lado B =" +b
                        document.getElementById("result_c").innerHTML="Lado C =" +c
                        document.getElementById("result_abc").innerHTML="Angulo ABC =" +ABC+"° = "+(ABC*Math.PI/180).toFixed(3) +'rad'+"= π/" +((ABC/180)**-1).toFixed(2)
                        document.getElementById("result_bca").innerHTML="Angulo BCA =" +BCA+"° = "+(BCA*Math.PI/180).toFixed(3) +'rad'+"= π/" +((BCA/180)**-1).toFixed(2)
                        document.getElementById("result_cab").innerHTML="Angulo CAb =" +CAB+"° = "+(CAB*Math.PI/180).toFixed(3) +'rad'+"= π/" +((CAB/180)**-1).toFixed(2)

                        // inserindo calculo
                        
                      
                        if( coeficeinte!= undefined){
                            coeficeinte= (coeficeinte).toFixed(3)
                            if( qtd_ang.length==1){
                                document.getElementById('titulo').innerHTML='Metodo de resoluçao: lei dos senos'
                                // dois angulos e um lado 
                                console.log(inputs[5],inputs[4],inputs[3])
                                if(inputs[5]==0)
                                {var angR=document.getElementById('ang_restante').innerHTML='abc ='+ 180 + '- ' + CAB + '- ' +BCA+' = '+ ABC +"° ="+(ABC*Math.PI/180).toFixed(3) +" rad = π/" +((ABC/180)**-1).toFixed(2)}
                                
                        
                                if(inputs[3]==0)
                                {var angR=document.getElementById('ang_restante').innerHTML='bca ='+ 180 +'- ' + CAB + '- ' +ABC+' = '+ BCA +"° ="+(BCA*Math.PI/180).toFixed(3) +" rad = π/" +((BCA/180)**-1).toFixed(2)}
                        
                                if(inputs[4]==0 )
                                {var angR=document.getElementById('ang_restante').innerHTML='cab ='+ 180 + '- ' + ABC + '- ' +BCA+' = '+ CAB+"° ="+(CAB*Math.PI/180).toFixed(3) +" rad = π/" +((CAB/180)**-1).toFixed(2)}
                            
                            else{

                                var angR=""
                                
                            }
                            }   
                                document.getElementById('titulo').innerHTML='Metodo de resoluçao: lei dos senos'
                                var ccc= document.getElementById('cof').innerHTML=  'Lado A/Sin(bca) = lado B/Sin(cab) = lado C/sin(abc) = ' + coeficeinte
                            
                                
                                if(inputs[0]=="" ){
                                    document.getElementById('cal_a').innerHTML="Lado A = "+  "Sin(" +BCA +") * " + coeficeinte + ' = ' + a
                                }
                                else{
                                   document.getElementById('cal_a').innerHTML=""
                                }

                                if(inputs[1]=="" ){
                                    document.getElementById('cal_b').innerHTML="Lado B = "+  "Sin(" +CAB +") * " + coeficeinte + ' = ' + b
                                }
                                else{
                                    document.getElementById('cal_b').innerHTML=""
                                }
                    
                                if(inputs[2]=="" ){
                                    document.getElementById('cal_c').innerHTML="Lado C = "+  "Sin(" +ABC +") * " + coeficeinte + ' = ' + c
                                }
                                else{
                                    document.getElementById('cal_b').innerHTML=""
                                }


                                if(inputs[3]==0 && qtd_ang.length!=1){
                                    document.getElementById('cal_bca').innerHTML="BCA =  Sin -¹(" +  a+') / '   + coeficeinte +") = " +BCA +"° ="+(BCA*Math.PI/180).toFixed(3) +" rad = π/" +((BCA/180)**-1).toFixed(2)

                                }
                                else{
                                    document.getElementById('cal_bca').innerHTML=""
                                }


                                if(inputs[4]==0 && qtd_ang.length!=1){
                                    document.getElementById('cal_cab').innerHTML="CAB =  Sin -¹(" +  b+') / '   + coeficeinte +") = " +CAB +"° ="+(CAB*Math.PI/180).toFixed(3) +" rad = π/" +((CAB/180)**-1).toFixed(2)
                                }
                                else{
                                    document.getElementById('cal_cab').innerHTML=""
                                }
                    
                                if(inputs[5]==0 && qtd_ang.length!=1){
                                    document.getElementById('cal_abc').innerHTML="ABC =  Sin -¹(" +  c+') / '   +(coeficeint) +") = " +ABC +"° ="+(ABC*Math.PI/180).toFixed(3) +" rad = π/" +((ABC/180)**-1).toFixed(2)
                                }
                                else{
                                    document.getElementById('cal_abc').innerHTML=""
                                }
                        
                    

                        }
                        else{
                            
                            document.getElementById('titulo').innerHTML='Metodo de resoluçao: lei dos cosenos'
                            var ccc= document.getElementById('cof').innerHTML=  ''
                            
                        //    coeficiente undefined
                            // caso de lado lado lado 
                            if(inputs[0]!=0 && inputs[1]!=0 && inputs[2]!=0 && inputs[3]==0 && inputs[4]==0 && inputs[5]==0  ) {
                                ABC=Number(ABC).toFixed(3)
                                BCA=Number(BCA).toFixed(3)
                                CAB=Number(CAB).toFixed(3)
                                
                                document.getElementById('titulo').innerHTML='Metodo de resoluçao: lei dos cossenos '
                                    
                                    document.getElementById('cal_bca').innerHTML="BCA=  Cos -¹(( "+ b +" ² + "+ c+"  ² - "+a +" ² ) / ( 2 *"+b+"*"+c +" ))="+BCA +"°="+(BCA*Math.PI/180).toFixed(3) +" rad = π/" +((BCA/180)**-1).toFixed(2)
                                    document.getElementById('cal_cab').innerHTML="CAB=  Cos -¹(( "+ c +" ² + "+a +"  ² - "+ b+" ² ) / ( 2 *"+a+"*"+c +" ))="+CAB +"°="+(CAB*Math.PI/180).toFixed(3) +" rad = π/" +((CAB/180)**-1).toFixed(2)
                          
                              
                                    document.getElementById('cal_abc').innerHTML="ABC=  Cos -¹(( "+ a+" ² + "+ b+" ² - "+ c+" ² ) / ( 2 * "+a+"*"+ b+" ))="+ABC +"°="+(CAB*Math.PI/180).toFixed(3) +" rad = π/" +((ABC/180)**-1).toFixed(2)
                            
                            }
                            // caso de lado angulo lado 
                            else{
                                
                                if(inputs[0]==0){
                                    console.log(123213213)
                                    document.getElementById('cal_a').innerHTML="Lado A =√("+ lado_b+"² +" + lado_c+"² - 2*"+lado_b+"*"+lado_c +"* Cos("+bca+") )="+a 
                                    document.getElementById('cal_abc').innerHTML="ABC=  Cos -¹(( "+ b +" ² + "+a +"  ² - "+ c+" ² ) / ( 2 *"+a+"*"+b +" ))="+ABC +" °="+(ABC*Math.PI/180).toFixed(3) +" rad = π/" +((ABC/180)**-1).toFixed(2)
                                    document.getElementById('cal_cab').innerHTML="CAB  Cos -¹(( "+ a+" ² + "+ b+" ² - "+ c+" ² ) / ( 2 * "+a+"*"+ c+ " ))="+CAB +" °="+(CAB*Math.PI/180).toFixed(3) +" rad = π/" +((CAB/180)**-1).toFixed(2)
                                
                                }
                                if(inputs[1]==0){
                                    console.log(123213213)
                                    document.getElementById('cal_b').innerHTML="Lado B =√("+ lado_c+"² +" + lado_a+"² - 2*"+lado_a+"*"+lado_c +"* Cos("+cab+") )="+b 
                                    document.getElementById('cal_abc').innerHTML="ABC=  Cos -¹(( "+ b +" ² + "+a +"  ² - "+ c+" ² ) / ( 2 *"+a+"*"+b +" ))="+ABC +" °="+(ABC*Math.PI/180).toFixed(3) +" rad = π/" +((ABC/180)**-1).toFixed(2)
                                    document.getElementById('cal_bca').innerHTML="BCA=  Cos -¹(( "+ b +" ² + "+ c+"  ² - "+a +" ² ) / ( 2 *"+b+"*"+c +" ))="+BCA +" °="+(BCA*Math.PI/180).toFixed(3) +" rad = π/" +((BCA/180)**-1).toFixed(2)

                                
                                }
                                if(inputs[2]==0){
                                    console.log(123213213)
                                    document.getElementById('cal_c').innerHTML="Lado C =√("+ lado_b+"² +" + lado_a+"² - 2*"+lado_b+"*"+lado_a +"* Cos("+abc+") )="+c 
                                    document.getElementById('cal_bca').innerHTML="BCA=  Cos -¹(( "+ b +" ² + "+ c+"  ² - "+a +" ² ) / ( 2 *"+b+"*"+c +" ))="+BCA +" °="+ (BCA*Math.PI/180).toFixed(3) +" rad = π/" +((BCA/180)**-1).toFixed(2)
                                    document.getElementById('cal_cab').innerHTML="CAB=  Cos -¹(( "+ a+" ² + "+ b+" ² - "+ c+" ² ) / ( 2 * "+a+"*"+ c+" ))="+CAB+" °="+ (CAB*Math.PI/180).toFixed(3) +" rad = π/" +((CAB/180)**-1).toFixed(2)
                     
                                }
                            }

               }
               
              
               area=a*b*Math.sin(ABC/180*Math.PI)/2
               document.getElementById('result_area').innerHTML='Area =' + area.toFixed(3)
               document.getElementById("result_altura_a").innerHTML= 'Altura A ='+(2*area/a).toFixed(3)
               document.getElementById("result_altura_b").innerHTML= 'Altura B ='+(2*area/b).toFixed(3)
               document.getElementById("result_altura_c").innerHTML= 'Altura C ='+(2*area/c).toFixed(3)
               if(window.screen.width<600){
               window.scrollTo(0, 1100)
               }
               else{
                window.scrollTo(0, 130)
               }

            }
            }
           
            function expand(){
            document.getElementsByClassName('heads-mobile')[0].classList.toggle('active');
            

             }
            }
            
            