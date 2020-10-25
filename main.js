// write a function for read more button
let modal = document.getElementById('simpleModal'),
    modalBtn = document.getElementById('Btn'),
    closeBtn = document.getElementById('close');

    window.addEventListener('load',  hideClose);

    modalBtn.addEventListener('click', openModal);

    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', clickOutside);


   

    function hideClose() {
        closeBtn.style.display = "none"
    }

    function openModal(){
        modal.style.display = 'block';
        closeBtn.style.display = 'block'
        modalBtn.style.display = 'none'
    }

    function closeModal(){
        modal.style.display = 'none';
        closeBtn.style.display = "none";
        modalBtn.style.display = 'block';
    }

    function clickOutside(e){
        if(e.target == modal ){
            modal.style.display = 'none';
            modalBtn.style.display = 'block';
            closeBtn.style.display = "none"
        }
    }

    