var btn=document.querySelector('button')
var task=document.querySelector('input')
var list=document.querySelector('#to-do_list')
btn.addEventListener('click',()=>{
    var task_list=JSON.parse(localStorage.getItem('to-do_list')) ?? []
    var last_index,index=0
    task_list.forEach((task,index)=>{
        last_index =index
    })
    // console.log(task_list)
    if(task_list.length===0){
        addtask(task.value,index)
    }else{
        
        addtask(task.value,last_index+1)

    }
    task.value=''
})
var task_list=JSON.parse(localStorage.getItem('to-do_list')) ?? []
// console.log(task_list)
var li=''
task_list.map((task,index)=>{
    li+=`<li onclick='check_li(${index})'><span class='task'>${task}</span><span class='delete' onclick='delete_li(${index})'><i class="fa-solid fa-xmark"></i></span></li>`
    list.innerHTML=li
})
function addtask(task,index){
    var list=document.querySelector('#to-do_list')
    var li=''
    var task_list=JSON.parse(localStorage.getItem('to-do_list')) ?? []
    task_list.map((task,index)=>{
     li+=`<li onclick='check_li(${index})'><span class='task'>${task}</span><span class='delete' onclick='delete_li(${index})'><i class="fa-solid fa-xmark"></i></span></li>`
    })
    li+=`<li onclick='check_li(${index})'><span class='task'>${task}</span><span class='delete' onclick='delete_li(${index})'><i class="fa-solid fa-xmark"></i></span></li>`
    // console.log(li)
    list.innerHTML=li
    var task_list=JSON.parse(localStorage.getItem('to-do_list')) ?? []
    task_list.push(task)
    localStorage.setItem('to-do_list',JSON.stringify(task_list))
}
function check_li(index){
    var li=document.querySelectorAll('li')
    li.forEach((li,id)=>{
        if(id==index){
            li.classList.toggle('checked')
        } 
    })
}
function delete_li(index){
    var li=document.querySelectorAll('li')
    
    li.forEach((li,id)=>{
        // console.log('id'+id)
        if(id==index){
            li.remove()
        }
    })
    var local_tasks=JSON.parse(localStorage.getItem('to-do_list')) ?? []
    local_tasks.splice(index,1)
    // console.log(local_tasks)
    localStorage.setItem('to-do_list',JSON.stringify(local_tasks))

    var task_list=JSON.parse(localStorage.getItem('to-do_list')) ?? []
    var li_item=''
    task_list.map((task,index)=>{
    li_item+=`<li onclick='check_li(${index})'><span class='task'>${task}</span><span class='delete' onclick='delete_li(${index})'><i class="fa-solid fa-xmark"></i></span></li>`
    list.innerHTML=li_item
    })
}
