let btn = document.getElementById('btn');
let inp = document.getElementById('inp');
let boxs = document.querySelectorAll('.box');
let drag = null;

btn.onclick = function(){

    if(inp.value != ''){
        if (inp.value != ''){
            boxs[0].innerHTML += `
            <p class="item" draggable="true"> ${inp.value}</p>
            `
            inp.value = '';
        }
        dragItem();
    }
    function dragItem(){
        let item = document.querySelectorAll('.item');
        item.forEach(item=>{
            item.addEventListener('dragstart', function(){
                drag = item;
                item.style.opacity = '0.5';
            })
            item.addEventListener('dragend', function(){
                drag = null;
                item.style.opacity = '1';
            })

            boxs.forEach(box=>{
                box.addEventListener('dragover', function(e){
                    e.preventDefault()                                                    
                    this.style.background = '#090';
                    this.style.color = '#fff';
                })
                box.addEventListener('dragleave', function(){
                    this.style.background = '#fff';
                    this.style.color = '#000';
                })
                box.addEventListener('drop', function(){
                    box.append(drag);
                })
            })

        })
    }
}