const formu=document.querySelector('.formu_cont');
const btnconta=document.querySelector('.titulo_seccion');
const carrusel=document.querySelector('.Proyectos');
const conte_projects=document.querySelector('.conte_projects'); 
const projects=document.querySelectorAll('.projects');
const btn=document.querySelector('button');
const div1=document.querySelectorAll('.projects');
const fanta=document.querySelectorAll('#fantasma');
const btn_mas=document.querySelectorAll('#ver_mas');
const btn_menos=document.querySelectorAll('#ver_menos');
const sig=document.querySelectorAll('#sig');
const mini_carrussel=document.querySelectorAll('.mini_carrussel');
const big_conteinner=document.querySelector('.big_conteinner');
const degrade=document.querySelector('.conte_degrade');

const nav=document.querySelector('.nav');
const btn_mobile=document.querySelector("#btn_menu");
let  press=false;


//this function places buttons in boxes whose content is larger than the parent box


let i=0;
btnconta.addEventListener('click',(e)=>{
    !press?(formu.style.opacity='1',press=true,formu.style.visibility='visible'):(formu.style.opacity="0",formu.style.visibility="hidden",press=false);


});


btn_mobile.addEventListener('click',()=>{
if(nav.style.visibility!=='visible'){
    nav.style.opacity='1';
    nav.style.visibility='visible';
}else{
    
    nav.style.opacity='0';
    nav.style.visibility='hidden';
}

});
function checkMediaQuery() {
    

    if (window.matchMedia('(max-width: 450px)').matches) {
        // Si la pantalla tiene 450px o menos, cambiar la clase
        nav.classList.remove('nav');
        nav.classList.add('nav_mobile');
        nav.style.opacity='0';
        nav.style.visibility='hidden';
    } else {
        // Si la pantalla es mayor a 450px, mantener la clase original
        nav.classList.remove('nav_mobile');
        nav.classList.add('nav');
        nav.style.opacity='1';
        nav.style.visibility='visible';
    }
}


checkMediaQuery();


window.addEventListener('resize', checkMediaQuery);


document.addEventListener('load',()=>{

div1.forEach((element,i) => {
    element.style.width=`${mini_carrussel[i].childElementCount*100}%`;
});
})


sig.forEach((element, i) => {
    const length_mini_carrussel = mini_carrussel[i].childElementCount;
    const value_decrement = 100 / length_mini_carrussel;
    let j =-value_decrement; 
    element.addEventListener('click', () => {
        mini_carrussel[i].style.transform = `translateX(${j}%)`;
        j -= value_decrement;
       
        // Usamos 'Math.abs' para evitar errores de precisión en punto flotante
        if (Math.abs(j) >= 100) {
            j = 0; // Resetear 'j' a 0 cuando alcanza el final
        }
        
    });
});


let x=0;

btn_mas.forEach((element,j) => {

    btn_menos[j].addEventListener('click',()=>{

        btn_mas[j].style.display='block';
        btn_menos[j].style.display='none';
        setTimeout(()=>{div1[j].style.position='';
        fanta[j].style.display='none';
        div1[j].style.zIndex='0';degrade.style.display="none";},500);
        //
        div1[j].style.left=(fanta[j].offsetLeft-20)+"px";
        div1[j].style.top=fanta[j].offsetTop+"px";
        div1[j].style.width='250px';
        div1[j].style.height='250px';
        degrade.style.opacity='0';
        
        
        //this is for the effect of btn(max-min)
        btn_mas[j].style.display='block';
       btn_menos[j].style.display='none';
       

    });
    element.addEventListener('click',()=>{
        //this is for the effect of btn(max-min)
        btn_mas[j].style.display='none';
        btn_menos[j].style.display='block';
        degrade.style.display="block";
         //size of the conteinner
        const tam_cont=big_conteinner.offsetWidth;
        const width_window=window.innerWidth;
    
        fanta[j].style.display='block';
        
        div1[j].style.position='absolute';
        div1[j].style.top=fanta[j].offsetTop+'px';
        div1[j].style.left=fanta[j].offsetLeft+'px';

        setTimeout(()=>{div1[j].style.top='0px';
            div1[j].style.left=((tam_cont/2)-125-20)+'px';
            },1)
     
            setTimeout(()=>{
                div1[j].style.left=width_window<=543?`${(tam_cont/2)-175-20}px`:`${(tam_cont/2)-300-20}px`;
                div1[j].style.height=width_window<=543?'auto':'600px';
                div1[j].style.width=width_window<=543?'80%':'600px';
                if (width_window <= 450) {
                    window.scrollTo(0, document.documentElement.scrollHeight * 0.10);
                    big_conteinner.scrollTo(0,0);
                }

                degrade.style.opacity='1';
                div1[j].style.zIndex='100';
            },1);
      
     });

});

/*
btnconta.addEventListener('click',()=>{
    !press?(formu.style.display="flex",press=true):(formu.style.display="none",press=false);
    console.log($);
});
*/




