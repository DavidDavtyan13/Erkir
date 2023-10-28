function start(){
    with(document){
        let l1 = String(getElementByID('left_1').value);
        let l2 = String(getElementByID('left_2').value);
        let l3 = String(getElementByID('left_3').value);
        let l4 = String(getElementByID('left_4').value);
        let l5 = String(getElementByID('left_5').value);
        let l6 = String(getElementByID('left_6').value);
        let r1 = String(getElementByID('right_1').value);
        let r2 = String(getElementByID('right_2').value);
        let r3 = String(getElementByID('right_3').value);
        let r4 = String(getElementByID('right_4').value);
        let r5 = String(getElementByID('right_5').value);

        let result=0;
        let quality;

        if(l1 == 'Yerevan'){
            result+=1
            getElementByID('left_1'.style.backgroundColor = 'green')
        }else{
            getElementByID('left_1'.style.backgroundColor = 'red')
        }
        if(l2 == 'America'){
            result+=1
            getElementByID('left_2'.style.backgroundColor = 'green')
        }else{
            getElementByID('left_2'.style.backgroundColor = 'red')
        }
        if(l3 == 'Pekin'){
            result+=1
            getElementByID('left_3'.style.backgroundColor = 'green')
        }else{
            getElementByID('left_3'.style.backgroundColor = 'red')
        }
        if(l4 == 'Ankara'){
            result+=1
            getElementByID('left_4'.style.backgroundColor = 'green')
        }else{
            getElementByID('left_4'.style.backgroundColor = 'red')
        }
        if(l5 == 'London'){
            result+=1
            getElementByID('left_5'.style.backgroundColor = 'green')
        }else
            getElementByID('left_5'.style.backgroundColor = 'red')
        }
        if(l6 == 'Madrid'){
            result+=1
            getElementByID('left_6'.style.backgroundColor = 'green')
        }else{
            getElementByID('left_6'.style.backgroundColor = 'red')
        }
        if(l2 == 'America'){
            result+=1
            getElementByID('left_2'.style.backgroundColor = 'green')
        }else{
            getElementByID('left_2'.style.backgroundColor = 'red')
        }
        if(l3 == 'China'){
            result+=1
            getElementByID('left_3'.style.backgroundColor = 'green')
        }else{
            getElementByID('left_3'.style.backgroundColor = 'red')
        }
        if(l4 == 'Turkey'){
            result+=1
            getElementByID('left_4'.style.backgroundColor = 'green')
        }else{
            getElementByID('left_4'.style.backgroundColor = 'red')
        }
        if(l5 == 'England'){
            result+=1
            getElementByID('left_5'.style.backgroundColor = 'green')
        }else
            getElementByID('left_5'.style.backgroundColor = 'red')
        }
        if(r == 'Spain'){
            result+=1
            getElementByID('right_'.style.backgroundColor = 'green')
        }else{
            getElementByID('right_'.style.backgroundColor = 'red')
        }
        if(r == 'Spain'){
            result+=1
            getElementByID('right_'.style.backgroundColor = 'green')
        }else{
            getElementByID('right_'.style.backgroundColor = 'red')
        }
  if(result<=6){
    quality = 'anbavarav'
    getElementByID('answer').style.backgroundColor = 'red'
    getElementByID('quality').style.backgroundColor = 'red'
  }    
  if(result>=6 && resualt <=15){
    quality = 'bavarav'
    getElementByID('answer').style.backgroundColor = 'gold'
    getElementByID('quality').style.backgroundColor = 'gold'
    getElementById("patasxan").style.right = "449px";
  }
   getElementById("hashiv").innerHTML =result;
        getElementById("patasxan").innerHTML=vorak;
  
