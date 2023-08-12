localStorage.setItem("attempt", 0);
console.log("hi");

function move(){
    scroll(0,1150);
    
}

// 
// <i class="fa-solid fa-x fa-2xl" style="color: #ff0000;"></i>


function ttt(txt){
    attempt=localStorage.getItem("attempt");
    if(txt=='b1'){
        if(attempt==0){
            b1.innerHTML=`<i class="fa-regular fa-circle fa-2xl" style="color: #000000;"></i>`;
            localStorage.setItem("attempt", 1);
        }
        else{
            b1.innerHTML=`<i class="fa-solid fa-x fa-2xl" style="color: #ff0000;"></i>`;
            localStorage.setItem("attempt", 0);
        }
        b1.disabled=true;
    }
    else if(txt=='b2'){
        if(attempt==0){
            b2.innerHTML=`<i class="fa-regular fa-circle fa-2xl" style="color: #000000;"></i>`;
            localStorage.setItem("attempt", 1);
        }
        else{
            b2.innerHTML=`<i class="fa-solid fa-x fa-2xl" style="color: #ff0000;"></i>`;
            localStorage.setItem("attempt", 0);
        }
        b2.disabled=true;
    }
    else if(txt=='b3'){
        if(attempt==0){
            b3.innerHTML=`<i class="fa-regular fa-circle fa-2xl" style="color: #000000;"></i>`;
            localStorage.setItem("attempt", 1);
        }
        else{
            b3.innerHTML=`<i class="fa-solid fa-x fa-2xl" style="color: #ff0000;"></i>`;
            localStorage.setItem("attempt", 0);
        }
        b3.disabled=true;
    }
    else if(txt=='b4'){
        if(attempt==0){
            b4.innerHTML=`<i class="fa-regular fa-circle fa-2xl" style="color: #000000;"></i>`;
            localStorage.setItem("attempt", 1);
        }
        else{
            b4.innerHTML=`<i class="fa-solid fa-x fa-2xl" style="color: #ff0000;"></i>`;
            localStorage.setItem("attempt", 0);
        }
        b4.disabled=true;
    }
    else if(txt=='b5'){
        if(attempt==0){
            b5.innerHTML=`<i class="fa-regular fa-circle fa-2xl" style="color: #000000;"></i>`;
            localStorage.setItem("attempt", 1);
        }
        else{
            b5.innerHTML=`<i class="fa-solid fa-x fa-2xl" style="color: #ff0000;"></i>`;
            localStorage.setItem("attempt", 0);
        }
        b5.disabled=true;
    }
    else if(txt=='b6'){
        if(attempt==0){
            b6.innerHTML=`<i class="fa-regular fa-circle fa-2xl" style="color: #000000;"></i>`;
            localStorage.setItem("attempt", 1);
        }
        else{
            b6.innerHTML=`<i class="fa-solid fa-x fa-2xl" style="color: #ff0000;"></i>`;
            localStorage.setItem("attempt", 0);
        }
        b6.disabled=true;
    }
    else if(txt=='b7'){
        if(attempt==0){
            b7.innerHTML=`<i class="fa-regular fa-circle fa-2xl" style="color: #000000;"></i>`;
            localStorage.setItem("attempt", 1);
        }
        else{
            b7.innerHTML=`<i class="fa-solid fa-x fa-2xl" style="color: #ff0000;"></i>`;
            localStorage.setItem("attempt", 0);
        }

        b7.disabled=true;

    }
    else if(txt=='b8'){
        if(attempt==0){
            b8.innerHTML=`<i class="fa-regular fa-circle fa-2xl" style="color: #000000;"></i>`;
            localStorage.setItem("attempt", 1);
        }
        else{
            b8.innerHTML=`<i class="fa-solid fa-x fa-2xl" style="color: #ff0000;"></i>`;
            localStorage.setItem("attempt", 0);
        }

        b8.disabled=true;
    }
    else if(txt=='b9'){
        if(attempt==0){
            b9.innerHTML=`<i class="fa-regular fa-circle fa-2xl" style="color: #000000;"></i>`;
            localStorage.setItem("attempt", 1);
        }
        else{
            b9.innerHTML=`<i class="fa-solid fa-x fa-2xl" style="color: #ff0000;"></i>`;
            localStorage.setItem("attempt", 0);
        }

        b9.disabled=true;
    }

    winner();

}

function winner(){
    console.log(b1.innerHTML);
    circle=`<i class="fa-regular fa-circle fa-2xl" style="color: #000000;"></i>`;
    x=`<i class="fa-solid fa-x fa-2xl" style="color: #ff0000;"></i>`;
    if(b1.innerHTML==circle & b2.innerHTML==circle & b3.innerHTML==circle|| b1.innerHTML==circle &b4.innerHTML==circle &b7.innerHTML==circle || b4.innerHTML==circle &b5.innerHTML==circle &b6.innerHTML==circle || b7.innerHTML==circle &b8.innerHTML==circle &b9.innerHTML==circle || b2.innerHTML==circle &b6.innerHTML==circle &b8.innerHTML==circle || b3.innerHTML==circle & b6.innerHTML==circle & b9.innerHTML==circle || b1.innerHTML==circle & b5.innerHTML==circle & b9.innerHTML==circle || b3.innerHTML==circle & b5.innerHTML==circle & b7.innerHTML==circle || b2.innerHTML==circle &b5.innerHTML==circle &b8.innerHTML==circle ){
        alert("ZERO WINS!");
        location.reload();
    }
    else if(b1.innerHTML==x & b2.innerHTML==x & b3.innerHTML==x || b1.innerHTML==x & b4.innerHTML==x & b7.innerHTML==x || b4.innerHTML==x & b5.innerHTML==x & b6.innerHTML==x || b7.innerHTML==x & b8.innerHTML==x & b9.innerHTML==x || b2.innerHTML==x & b6.innerHTML==x & b8.innerHTML==x || b3.innerHTML==x & b6.innerHTML==x & b9.innerHTML==x || b1.innerHTML==x & b5.innerHTML==x & b9.innerHTML==x || b3.innerHTML==x & b5.innerHTML==x & b7.innerHTML==x || b2.innerHTML==x & b5.innerHTML==x & b8.innerHTML==x ){
    
        alert("X WINS!");
        location.reload();
    
    }
}   