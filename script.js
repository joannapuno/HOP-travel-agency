// Code by Joanna Puno
// Email: j.puno0909@gmail.com
// 10/19/2018
// CPNT 262 -WBD Web Client and Server Programming
// Instructor: Heather Tovery
// JavaScript


// Mobile Menu


var button = document.querySelector('#hamburger-button')
var menu = document.querySelector('#menu')
var closeButton = document.querySelector('#close-button')

function openMenu() {
    menu.className = 'menu'
}

function closeMenu() {
    menu.className = 'menu closed'
}


button.addEventListener('click', openMenu)
closeButton.addEventListener('click', closeMenu)


// Footer Current Date
let currentDate = new Date();
$('#currentDate').html(currentDate);


// Form Validations

$(document).ready(function() {
    $('#error').hide();
    $('#registerBtn').on('click',function(event){
        event.preventDefault();
        console.log('hey');

        var invalid = false;
        $('#user-register input').each(function(){
    
            if($(this).val() === '') {
                invalid = true;
            }
        });
    
        if(invalid) {
            $('#error').fadeIn(500);
            
        }
        if(!invalid) {
            $('#error').hide();
            
        }
      });
        
    });
        


// On Submit ---will use PHP


// Contact Agents
const agentNames = ['Jenna Garcia', 'Chloe Smith','Jacob Asper','Jem Puno'];
const agentPhone = ['403-535-7297','403-555-7357','403-555-5477','403-555-7677'];
const agentEmail = ['J.Garcia@hop.com','C.Smith@hop.com','J.Asper@hop.com','J.Puno@hop.com'];

$(agentNames).each(function(i) {
    $('h5')[i].append(agentNames[i]);
    $('.agent-box p')[i].append(agentPhone[i]);
    $('.agent-box span')[i].append(agentEmail[i]);
  });

  

  // Package Deal
const packageImages = [
    './img/beach.jpg',
    './img/cruise2.jpg',
    './img/tour2.jpg'
];

const defaultImg = [
    './img/resort.jpg',
    './img/cruise.jpg',
    './img/tour.jpg'
];

$(packageImages).each(function(i) {
    
    let img = ($('.products-content img')[i]);
    let info = ($('.products-content')[i]);
        $(info).on({
        mouseenter: function(){
            $(img).fadeOut(function(){
                $(this).attr('src',packageImages[i]).fadeIn('slow');
            });  
        
        },
        mouseleave: function() {  
            $(img).attr('src',defaultImg[i]);
        }
    })
});



//Flying plane
$(document).ready(function() {
    let loopPlane = () => {
        $('#flying-plane').css({left:0});
        $('#flying-plane').animate ({
            left: '+=1400',
            
        }, 10000, 'swing', function() {
            loopPlane();
        });
    }
    loopPlane();
});















