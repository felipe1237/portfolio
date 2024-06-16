const formu=document.querySelector('.formu_cont');
const btnconta=document.querySelector('.titulo_seccion');
const carrusel=document.querySelector('.Proyectos');
const conte_projects=document.querySelector('.conte_projects'); 
const projects=document.querySelectorAll('.projects');
let  press=false;


//this function places buttons in boxes whose content is larger than the parent box


let i=0;
btnconta.addEventListener('click',(e)=>{
    !press?(formu.style.opacity='1',press=true,formu.style.visibility='visible'):(formu.style.opacity="0",formu.style.visibility="hidden",press=false);


});

const btn=document.querySelector('button');
const div1=document.querySelectorAll('.projects');
const fanta=document.querySelectorAll('#fantasma');
const btn_mas=document.querySelectorAll('#ver_mas');
const btn_menos=document.querySelectorAll('#ver_menos');
const sig=document.querySelectorAll('#sig');
const mini_carrussel=document.querySelectorAll('.mini_carrussel');
const big_conteinner=document.querySelector('.big_conteinner');
const degrade=document.querySelector('.conte_degrade');


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
        div1[j].style.zIndex='0';},500);
        div1[j].style.left=fanta[j].offsetLeft+"px";
        div1[j].style.top=fanta[j].offsetTop+"px";
        div1[j].style.width='30%';
        div1[j].style.height='50%';
        degrade.style.display="none";
        //this is for the effect of btn(max-min)
        btn_mas[j].style.display='block';
       btn_menos[j].style.display='none';
       

    });
    element.addEventListener('click',()=>{
        //this is for the effect of btn(max-min)
        btn_mas[j].style.display='none';
        btn_menos[j].style.display='block';

        degrade.style.display="block";

        fanta[j].style.display='block';
        div1[j].style.position='absolute';
        div1[j].style.top=fanta[j].offsetTop+'px';
        div1[j].style.left=fanta[j].offsetLeft+'px';
       //this set the left value of the div with position absolute and enter to this if statement only if j<=2 because i just have 3 div elements per row,so if j=3 restart j=0 substracting -3 without change the value of j 

        // j<=2?(console.log('entro en el condicional',div1[j].style.left),
        //     div1[j].style.left=`${j*32}%`):(div1[j].style.left=`${(j-3)*32}%`,
        //     console.log('no entro '+div1[j].style.left+', x= '+x))
        
        
            //and here i just define  the height,zindex,and top of the div with the value "offsetTop" of anoter ghost div that fills the empty space from the div that have position absolute "that prevents the main flow inside the parent div from being affected"
            setTimeout(()=>{
                div1[j].style.left=`30%`
                div1[j].style.top=`${5}%`;
                div1[j].style.height='100%';
                div1[j].style.width='40%';
                div1[j].style.zIndex='100';
            },10);
        //div1[j].style.top=`${0}px`;
        
         //fanta[j].style.visibility='visible';
      
     });

});

/*
btnconta.addEventListener('click',()=>{
    !press?(formu.style.display="flex",press=true):(formu.style.display="none",press=false);
    console.log($);
});
*/




