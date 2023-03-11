const outputs = document.querySelectorAll('.output');
outputs[0].textContent = 'new value';
outputs[0].style.border = '1px solid black';
outputs[0].setAttribute('contenteditable','true');

outputs[1].style.background = 'red';
outputs[1].style.width = '50%'
outputs[1].textContent = 'SUBMIT';
outputs[1].style.textAlign  = 'center';
outputs[1].style.color = 'white';

outputs[1].addEventListener('click',(e)=>{
    let myStr = outputs[0].textContent;
    if(myStr !=''){
          outputs[0].textContent = '';
          const li = document.createElement
          ('li');
          li.textContent = myStr;
          li.onclick = function(){
            if(li.style.color == 'red'){
                li.style.color = 'black';
            }else{
                li.style.color = 'red';
            }
          }
          ul.append(li);

    }

})

outputs[2].innerHTML = '';
const ul = document.createElement('ul')
outputs[2].append(ul);


