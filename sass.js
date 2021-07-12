const innerSlider = document.querySelector('.inner-slider');
const divs = document.querySelectorAll('.inner-slider div');
const header = document.querySelector('.header');

console.log(home);

let counter = 0;
	const size = 750;


  window.addEventListener('scroll', () => {
	  if (window.scrollY > 0) {
		  header.style.position = 'sticky';
		  header.style.top = 0 + 'px';
		  header.style.background = 'silver';
		  header.style.transition = '.7s ease-in-out';
	  } else {
		header.style.position = 'sticky';
		header.style.top = 0 + 'px';
		header.style.background = 'transparent';
		header.style.transition = '.7s ease-in-out';
	  }
  })


	function move() {
    if (counter < 3) {
		  	counter++;
    innerSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
	innerSlider.style.transition = '.7s ease-in-out';
	// console.log(counter);
	}
	 else if (counter = 1) {
        counter--;
  innerSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
  innerSlider.style.transition = '.7s ease-in-out';
	// console.log(counter);
	}
}


function slider() {
	setInterval(move, 3000);
}
 
 slider();



 //nav


 const navSlide = () => {
	const burger = document.querySelector(".burger");
	const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

	burger.addEventListener('click', () => {
		//toggle Links
		nav.classList.toggle('nav-active');
	//Animate Links
	navLinks.forEach((link, index) => {
		if(link.style.animation) {
			link.style.animation = ''
		}else {
			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
		}
	});
	//burger animation
	burger.classList.toggle('toggle');

	});
	}
  navSlide();




function scrollAppear() {
	var box1 = document.querySelector('.services-box1');
	var box2 = document.querySelector('.services-box2');
	var box3 = document.querySelector('.services-box3');
	var box4 = document.querySelector('.services-box4');
	var aboutImg = document.querySelector('.about-image');
	var aboutContent = document.querySelector('.about-content');
	var servicesContent = document.querySelector('.services-content');
	var experienceHeading = document.querySelector('.experience-heading');
	var experience1Content = document.querySelector('.experience1-content');
	var experience1Img = document.querySelector('.experience1-img');
	var experience2 = document.querySelector('.experience2');
	var experience2Img = document.querySelector('.experience2-img');
	var experience2Content = document.querySelector('.experience2-content');
	var experience3Content = document.querySelector('.experience3-content');
	var experience3Img = document.querySelector('.experience3-img');
	var satisfied = document.querySelector('.satisfied');
	var totalProject = document.querySelector('.total-project');
	var workCompleted = document.querySelector('.work-completed');
	var workCompleted2 = document.querySelector('.work-completed2');
	var testimonialHeading = document.querySelector('.testimonial-heading');
	var container = document.querySelector('.container');
	var video = document.querySelector('.video');
	var teamHeading = document.querySelector('.team-heading');
	var teamBox1 = document.querySelector('.team-box1');
	var teamBox2 = document.querySelector('.team-box2');
	var teamBox3 = document.querySelector('.team-box3');
	var newsHeading = document.querySelector('.news-heading');
	var newsBox1 = document.querySelector('.news-box1');
	var newsBox2 = document.querySelector('.news-box2');
	var newsBox3 = document.querySelector('.news-box3');
	var contactContent = document.querySelector('.contact-content');
	var name = document.querySelector('.name');
	var phone = document.querySelector('.phone');
	var email = document.querySelector('.email');
	var textarea = document.querySelector('.textarea');

    
	var textareaPosition = textarea.getBoundingClientRect().top;
	var emailPosition = email.getBoundingClientRect().top;
	var phonePosition = phone.getBoundingClientRect().top;
	var namePosition = name.getBoundingClientRect().top;
	var contactContentPosition = contactContent.getBoundingClientRect().top;
	var newsBox3Position = newsBox3.getBoundingClientRect().top;
	var newsBox2Position = newsBox2.getBoundingClientRect().top;
	var newsBox1Position = newsBox1.getBoundingClientRect().top;
	var newsHeadingPosition = newsHeading.getBoundingClientRect().top;
	var teamBox3Position = teamBox3.getBoundingClientRect().top;
	var teamBox2Position = teamBox2.getBoundingClientRect().top;
	var teamBox1Position = teamBox1.getBoundingClientRect().top;
	var teamHeadingPosition = teamHeading.getBoundingClientRect().top;
	var videoPosition = video.getBoundingClientRect().top;
	var containerPosition = container.getBoundingClientRect().top;
	var testimonialHeadingPosition = testimonialHeading.getBoundingClientRect().top;
	var workCompleted2Position = workCompleted2.getBoundingClientRect().top;
	var workCompletedPosition = workCompleted.getBoundingClientRect().top;
	var totalProjectPosition = totalProject.getBoundingClientRect().top;
    var satisfiedPosition = satisfied.getBoundingClientRect().top;    
	var experience3ImgPosition = experience3Img.getBoundingClientRect().top;
	var experience3ContentPosition = experience3Content.getBoundingClientRect().top;
	var experience2Position = experience2.getBoundingClientRect().top;
	var experience2ContentPosition = experience2Content.getBoundingClientRect().top;
	var experience2ImgPosition = experience2Img.getBoundingClientRect().top;
	var experience1ImgPosition = experience1Img.getBoundingClientRect().top;
	var experience1ContentPosition = experience1Content.getBoundingClientRect().top;
	var experienceHeadingPosition = experienceHeading.getBoundingClientRect().top;
	var servicesContentPosition = servicesContent.getBoundingClientRect().top;
	var aboutContentPosition = aboutContent.getBoundingClientRect().top;
	var aboutImgPosition = aboutImg.getBoundingClientRect().top;
	var box4Position = box4.getBoundingClientRect().top;
	var box1Position = box1.getBoundingClientRect().top;
	var box2Position = box2.getBoundingClientRect().top;
	var box3Position = box3.getBoundingClientRect().top;
	var screenPosition = window.innerHeight / 1.6;
    
    if (box2Position <screenPosition) {
	  box2.classList.add('box2-appear');
	  
    } else {
	  box2.classList.remove('box2-appear');
    }

	if(box1Position < screenPosition) {
		box1.classList.add('box1-appear');
	} else {
		box1.classList.remove('box1-appear');
	}

	if(box3Position < screenPosition) {
		box3.classList.add('box3-appear');
	} else {
		box3.classList.remove('box3-appear');
	}

	if(box4Position < screenPosition) {
		box4.classList.add('box4-appear');
	} else {
		box4.classList.remove('box4-appear');
	}
    if (aboutImgPosition < screenPosition) {
		aboutImg.classList.add('about-imgap');
	} else {
		aboutImg.classList.remove('about-imgap');
	}
	if (aboutContentPosition < screenPosition) {
		aboutContent.classList.add('about-contap');
	} else {
		aboutContent.classList.remove('about-contap');
	}

	if (servicesContentPosition < screenPosition) {
		servicesContent.classList.add('services-contap');
	} else {
		servicesContent.classList.remove('services-contap');
	}

	if (experienceHeadingPosition < screenPosition) {
         experienceHeading.classList.add('experience-headap');
	} else {
		experienceHeading.classList.remove('experience-headap');
	}

	if (experience1ContentPosition < screenPosition) {
		experience1Content.classList.add('experience1-contap');
	} else {
		experience1Content.classList.remove('experience1-contap');
	}

	if (experience1ImgPosition < screenPosition) {
		experience1Img.classList.add('experience1-imgap');
	} else {
		experience1Img.classList.remove('experience1-imgap');
	}

	if (experience2ImgPosition < screenPosition) {
		experience2Img.classList.add('experience2-imgap');
	} else {
		experience2Img.classList.remove('experience2-imgap');
	}

	if (experience2ContentPosition < screenPosition) {
		experience2Content.classList.add('experience2-contap');
	} else {
		experience2Content.classList.remove('experience2-contap');
	}

	if (experience2Position < screenPosition) {
		experience2.classList.add('experience2-appear');
	} else {
		experience2.classList.remove('experience2-appear');
	}

	if (experience3ContentPosition < screenPosition) {
		experience3Content.classList.add('experience3-contap');
	} else {
		experience3Content.classList.remove('experience3-contap');
	}

	if (experience3ImgPosition < screenPosition) {
		experience3Img.classList.add('experience3-imgap');
	} else {
		experience3Img.classList.remove('experience3-imgap');
	} 

	if (satisfiedPosition < screenPosition) {
		satisfied.classList.add('satisfied-appear');
	} else {
		satisfied.classList.remove('satisfied-appear');
	}
  
	if (totalProjectPosition < screenPosition) {
		totalProject.classList.add('total-projectap');
	} else {
		totalProject.classList.remove('total-projectap');
	}

	if (workCompletedPosition < screenPosition) {
		workCompleted.classList.add('work-completedap');
	} else {
		workCompleted.classList.remove('work-completedap');
	}

	if (workCompleted2Position < screenPosition) {
		workCompleted2.classList.add('work-completed2ap');
	} else {
		workCompleted2.classList.remove('work-completed2ap');
	}
	
    if (testimonialHeadingPosition < screenPosition) {
		testimonialHeading.classList.add('testimonial-headingap');
	} else {
		testimonialHeading.classList.remove('testimonial-headingap');
	}

	if (containerPosition < screenPosition) {
		container.classList.add('container-appear');
	} else {
		container.classList.remove('container-appear');
	}

	if (videoPosition < screenPosition) {
		video.classList.add('video-appear');
	} else {
		video.classList.remove('video-appear');
	}

	if (teamHeadingPosition < screenPosition) {
		teamHeading.classList.add('team-headingap');
	} else {
		teamHeading.classList.remove('team-headingap');
	}

	if (teamBox1Position < screenPosition) {
		teamBox1.classList.add('team-box1ap');
	} else {
		teamBox1.classList.remove('team-box1ap');
	}

	if(teamBox3Position < screenPosition) {
		teamBox3.classList.add('team-box3ap');
	} else {
		teamBox3.classList.remove('team-box3ap');
	}

	if (teamBox2Position < screenPosition) {
		teamBox2.classList.add('team-box2ap');
	} else {
		teamBox2.classList.remove('team-box2ap');
	}

	if (newsHeadingPosition < screenPosition) {
		newsHeading.classList.add('news-headingap');
	} else {
		newsHeading.classList.remove('news-headingap');
	}

	if (newsBox1Position < screenPosition) {
		newsBox1.classList.add('news-box1ap');
	} else {
		newsBox1.classList.remove('news-box1ap');
	}

	if (newsBox2Position < screenPosition) {
		newsBox2.classList.add('news-box2ap');
	} else {
		newsBox2.classList.remove('news-box2ap');
	}

	if (newsBox3Position < screenPosition) {
		newsBox3.classList.add('news-box3ap');
	} else {
		newsBox3.classList.remove('news-box3ap');
	}

	if (contactContentPosition < screenPosition) {
		contactContent.classList.add('contact-contentap');
	} else {
		contactContent.classList.remove('contact-contentap');
	}

	if (namePosition < screenPosition) {
		name.classList.add('name-appear');
	} else {
		name.classList.remove('name-appear');
	}

	if (phonePosition < screenPosition) {
		phone.classList.add('phone-appear');
	} else {
		phone.classList.remove('phone-appear');
	}

	if (emailPosition < screenPosition) {
		email.classList.add('email-appear');
	} else {
		email.classList.remove('email-appear');
	}

	if(textareaPosition < screenPosition) {
		textarea.classList.add('textarea-appear');
	} else {
		textarea.classList.remove('textarea-appear');
	}

  };

  

  function onScroll() {
	  var homeContent = document.querySelector('.home-content');
	  var homeContentPosition = homeContent.getBoundingClientRect().top;
	  
	  var homeImg = document.querySelector('.hm-img');
	  var homeImgPosition = homeImg.getBoundingClientRect().top;
	 
	 
	  var screenPosition = window.innerHeight / 1.6;

	  if (homeContentPosition < screenPosition) {
		  homeContent.classList.add('home-conap');
	  } else {
		  homeContent.classList.remove('home-conap');
	  }

	  if (homeImgPosition < screenPosition) {
		  homeImg.classList.add('home-imgap');
	  } else {
		  homeImg.classList.remove('home-imgap');
	  }
  }
  


window.addEventListener('load', onScroll);  
window.addEventListener('scroll', scrollAppear);


