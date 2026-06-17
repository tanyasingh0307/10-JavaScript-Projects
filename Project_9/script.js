const form=document.querySelector('form');
const allTask=document.querySelector('#allTask');
const input=document.querySelector('input');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const text=input.value.trim();
    if(text==="") return;

    const parent=document.createElement('div');
    parent.style.marginTop="20px";

    const task=document.createElement('span');
    task.textContent=text;
    task.style.marginRight="20px";
    task.style.fontSize="30px";

    const deletebut=document.createElement('button');
    deletebut.textContent="Delete";
    deletebut.style.width="50px";

    const donebut=document.createElement('button');
    donebut.textContent="Done";
    donebut.style.width="50px";
    donebut.style.marginRight="10px";

    parent.append(task,donebut,deletebut);
    
    allTask.append(parent);

    deletebut.addEventListener('click',()=>{
        parent.remove();
    });

    donebut.addEventListener('click',()=>{
      task.style.textDecoration='line-through';
      task.style.color='green';
    });

    form.reset();
});