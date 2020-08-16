function submit(){
    let a=document.querySelector('#id1').value;
    if (a=='') {
        document.querySelector('#display1').innerHTML="Invalid Username";
        
    } else {

        document.querySelector('#display1').innerHTML=a;
        document.querySelector('#id1').value='';
       /* let c=document.createElement('div');
        let d=document.querySelector('#display')
        c.innerHTML=a;
        d.appendChild(c);*/
    }

    let b=document.querySelector('#id2').value;
    if (b=='') {
        document.querySelector('#display2').innerHTML="Invalid Password";
        
    } else {

        document.querySelector('#display2').innerHTML=b;
        document.querySelector('#id2').value='';
    }
}