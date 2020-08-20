
//galeria

let filterNav = document.querySelectorAll('[data-filter]');
let imagesGallery = document.querySelectorAll('[data-obra]');

filterNav.forEach(link =>{
    link.addEventListener('click',(e)=>{
        e.preventDefault();

        let id = e.target.id;
        let img = document.querySelectorAll('[data-obra]');

    
        img.forEach(image =>{
           if(id === "todos"){
               image.style = ""
               return;
            }

            let isEqual = image.dataset.obra === id;
            isEqual ? image.style = "" : image.style = "display:none;";
 
        })

    })
})


imagesGallery.forEach(img =>{
    img.addEventListener('click', () =>{
      
    })
})



  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.querySelectorAll('[data-obra]');

  
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");

  function imgOnclick(img){
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
  }

  img.forEach(img =>{
      img.addEventListener('click',()=>{
        imgOnclick(img);
      })
  })
  

  modal.onclick = function() { 
    modal.style.display = "none";
  }
