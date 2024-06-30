const field=document.getElementById('demo');
const item=document.getElementById('null')
let currentodo='';
 function handlechange(){
 currentodo=field.value.trim();
}
function handleclick(){
    if(currentodo){
        item.innerHTML+=` <li class="flex items-left justify-between bg-teal-300 text-xl p-4 mb-2 border border-solid border-gray-300 rounded-lg">
                 <span>${currentodo}</span>
        <input type="checkbox" id="hello" class="todo-checkbox mr-2 mt-1 h-6 w-6">
            </li>`

            let checks=document.querySelectorAll('.todo-checkbox')
            checks.forEach(check=>{
                check.addEventListener('change',function(){
                    const listitem=check.parentElement;
                    listitem.classList.toggle('complete')
                    if(check.checked){
                        listitem.classList.add('line-through')
                }
                        else{
                            listitem.classList.remove('line-through')
                        }

                })
            })

           

        field.value='';

         currentodo='';

    }
}
