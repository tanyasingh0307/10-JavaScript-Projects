const body=document.querySelector('body');

body.addEventListener('click',(e)=>{
    console.log(e.clientX,e.clientY);

    const cirele=document.createElement('div');
    cirele.classList.add('circle');
    cirele.textContent="hi";

    const color=['red','blue','orange','green','purple','pink'];
    cirele.style.backgroundColor=color[Math.floor(Math.random()*6)];

    cirele.style.top=`${e.clientY}px`;
    cirele.style.left=`${e.clientX}px`;

    body.append(cirele);
    setTimeout(() => {

        circle.remove();

    }, 1000);
})