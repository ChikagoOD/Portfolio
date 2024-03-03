document.querySelector(".burger").addEventListener("click", function() {
    document.querySelector(".header-right").classList.toggle("show");
    });

    toggleCardButton.addEventListener('click', (event) => {
        event.preventDefault();
        cardBody.classList.toggle('expanded');
        extraInfo.classList.toggle('d-none');
      });





    const toggleCardButton = document.querySelector('.toggle-card-button');
    const cardBody = document.querySelector('.card-body');
    const extraInfo = document.querySelector('.extra-info');
  
    toggleCardButton.addEventListener('click', () => {
      cardBody.classList.toggle('expanded');
      extraInfo.classList.toggle('d-none');
    });
    
