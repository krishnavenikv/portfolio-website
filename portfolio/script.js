var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

/*-----------email us--------------------- */
const contactForm = document.getElementById('contact_form'),
  contactName = document.getElementById('contact-name'),
  contactEmail = document.getElementById('contact-email'),
  contactYourmessage = document.getElementById('contact-yourmessage'),
  contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
   e.preventDefault()
   //check if the field has a value
   if(contactName.value  ===''|| contactEmail.value === '' || contactYourmessage.value === ''){
    //add and remove colour
    contactMessage.classList.add('color-white')
    contactMessage.classList.remove('color-blue')

   }else{
       //serviceID -templateID - #form =publicKey form emailjs 
       emailjs.sendForm('service_dkv95pm','template_uholacj','#contact_form','6l51EvRHT0ZLHgWh-')
          .then(() =>{
            //show message and add color
            contactMessage.classList.add('color-white')
            contactMessage.textContent = 'Message sent ✅ '//message sended
      
            //remove message after five seconds
            setTimeout(() =>{
             contactMessage.textContent = ''
            }, 5000)

        })
    //to clear the input field
    contactName.value = ''
    contactEmail.value = ''
    contactYourmessage.value = ''    
   }
   
};
contactForm.addEventListener('submit', sendEmail);
/*-------------toggle icon navbar------------------------*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('bx-x');
};


/*--------------------scroll sections active link-----------------------------*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top =window.scrollY;
        let offset = sec.offsetTop -150;
        let height =sec.offsetHeight;
        let id = sec.getAttribute('id'); 

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*---------------sticky navbar----------------*/
    let header = document.querySelector('header');
     
    header.classList.toggle('sticky',window.scrollY > 100);
    /*--------------remove togle icon and navbar when click navbar link (scroll)--------------------*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};