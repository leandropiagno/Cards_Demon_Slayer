//modalTanjiro

function iniciaModal (modalId) {
        const modal = document.getElementById(modalId);
        if(modal) {
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) =>{
            if(e.target.id == modalId || e.target.className =='fechar') {
                modal.classList.remove('mostrar');

            }
        });
    }
}

const ativaModal = document.querySelector('.tanjiro');
ativaModal.addEventListener('click', () =>{
    iniciaModal('modal_descricao')
});


//modalInosuke

function iniciaModal1 (modalId1) {
    const modal1 = document.getElementById(modalId1);
    if(modal1) {
    modal1.classList.add('mostrar1');
    modal1.addEventListener('click', (e) =>{
        if(e.target.id == modalId1 || e.target.className =='fechar1') {
            modal1.classList.remove('mostrar1');

        }
    });
}
}

const ativaModal1 = document.querySelector('.inosuke');
ativaModal1.addEventListener('click', () =>{
iniciaModal1('modal_descricao1')
});


//modalZenitsu

function iniciaModal2 (modalId2) {
    const modal2 = document.getElementById(modalId2);
    if(modal2) {
    modal2.classList.add('mostrar2');
    modal2.addEventListener('click', (e) =>{
        if(e.target.id == modalId2 || e.target.className =='fechar2') {
            modal2.classList.remove('mostrar2');

        }
    });
}
}

const ativaModal2 = document.querySelector('.zenitsu');
ativaModal2.addEventListener('click', () =>{
iniciaModal2('modal_descricao2')
});




