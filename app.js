let inp = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.querySelector('ul');

btn.addEventListener('click', function () 
{

    if (inp.value.trim() === ''){ 
        // .trim() removes any leading or trailing spaces, so if the input is empty or only contains spaces, the condition will evaluate to true.
        alert("please enter a task to add");
        inp.value="";
    }
    else{
    let item = document.createElement('li');
    item.innerText = inp.value;

    let delbtn = document.createElement('button');
    delbtn.innerText = "Delete/Done";
    delbtn.classList.add('delete');

    // Add delete functionality to the button immediately
    // delbtn.addEventListener('click', function() {
    //     console.log('btn dltd');
    //     item.remove(); // Removes the entire item (li element) from the list
    // });

    //The above works fine for deletion of the task

    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value = '';}
});

    // let dltbtns = document.querySelectorAll(".delete");
    // for (let dltbtn of dltbtns) {
    //     dltbtn.addEventListener('click',function(){
    //         let parent = dltbtn.parentElement;
    //         parent.remove();
    //     });
    // };

    //The above commented code will not work because The buttons with the class delete are created dynamically within the btn.addEventListener function, so document.querySelectorAll('.delete') won’t select them because they weren’t in the DOM when the code first ran.


    // Hence we use Event Delegation here to solve this problem - we will add the EL to the parent.




    ul. addEventListener('click', function(event){
        console.dir(event.target); // this gives what is clicked as object
        console.log(event.target.nodeName); // This gives what actually triggered the event
        // but we only need the button to trigger the event and delete the task

        if (event.target.nodeName == "BUTTON"){
            let parent = event.target.parentElement; // This gives the parent element of the clicked btn
            console.log(parent);
            parent.remove();
            
        }
    })