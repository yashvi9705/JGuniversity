// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mainMenu = document.querySelector('.main-menu');
  
  menuToggle.addEventListener('click', function() {
      mainMenu.classList.toggle('active');
  });
  
  // Dropdown Toggle for Mobile
  const menuItems = document.querySelectorAll('.main-menu > li');
  menuItems.forEach(item => {
      item.addEventListener('click', function() {
          if (window.innerWidth <= 768) {
              this.classList.toggle('active');
          }
      });
  });
  
  // Hero Carousel
  const carouselItems = document.querySelectorAll('.carousel-item');
  const carouselIndicators = document.querySelectorAll('.carousel-indicator');
  const prevButton = document.querySelector('.carousel-control.prev');
  const nextButton = document.querySelector('.carousel-control.next');
  let currentIndex = 0;
  
  function showSlide(index) {
      carouselItems.forEach(item => item.classList.remove('active'));
      carouselIndicators.forEach(indicator => indicator.classList.remove('active'));
      
      carouselItems[index].classList.add('active');
      carouselIndicators[index].classList.add('active');
      currentIndex = index;
  }
  
  function nextSlide() {
      let newIndex = currentIndex + 1;
      if (newIndex >= carouselItems.length) {
          newIndex = 0;
      }
      showSlide(newIndex);
  }
  
  function prevSlide() {
      let newIndex = currentIndex - 1;
      if (newIndex < 0) {
          newIndex = carouselItems.length - 1;
      }
      showSlide(newIndex);
  }
  
  // Auto slide every 5 seconds
  setInterval(nextSlide, 5000);
  
  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);
  
  carouselIndicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => showSlide(index));
  });
  
  // Faculty Slider
  const facultyTrack = document.querySelector('.faculty-track');
  const facultyPrev = document.querySelector('.faculty-prev');
  const facultyNext = document.querySelector('.faculty-next');
  const facultyCards = document.querySelectorAll('.faculty-card');
  let facultyPosition = 0;
  const cardWidth = facultyCards[0].offsetWidth + 20; // Card width + gap
  
  facultyNext.addEventListener('click', function() {
      facultyPosition -= cardWidth;
      const maxPosition = -(facultyCards.length * cardWidth - facultyTrack.offsetWidth);
      if (facultyPosition < maxPosition) {
          facultyPosition = 0;
      }
      facultyTrack.style.transform = `translateX(${facultyPosition}px)`;
  });
  
  facultyPrev.addEventListener('click', function() {
      facultyPosition += cardWidth;
      if (facultyPosition > 0) {
          facultyPosition = -(facultyCards.length * cardWidth - facultyTrack.offsetWidth);
      }
      facultyTrack.style.transform = `translateX(${facultyPosition}px)`;
  });
  
  // Campus Sliders
  const campusSliders = document.querySelectorAll('.campus-slider');
  
  campusSliders.forEach(slider => {
      const track = slider.querySelector('.campus-track');
      const slides = slider.querySelectorAll('.campus-slide');
      const prevBtn = slider.querySelector('.campus-prev');
      const nextBtn = slider.querySelector('.campus-next');
      let currentSlide = 0;
      
      function updateSlider() {
          track.style.transform = `translateX(-${currentSlide * 100}%)`;
      }
      
      prevBtn.addEventListener('click', function() {
          currentSlide--;
          if (currentSlide < 0) {
              currentSlide = slides.length - 1;
          }
          updateSlider();
      });
      
      nextBtn.addEventListener('click', function() {
          currentSlide++;
          if (currentSlide >= slides.length) {
              currentSlide = 0;
          }
          updateSlider();
      });
      
      // Auto slide every 7 seconds
      setInterval(function() {
          currentSlide++;
          if (currentSlide >= slides.length) {
              currentSlide = 0;
          }
          updateSlider();
      }, 7000);
  });
  
  // Testimonial Slider
  const testimonialTrack = document.querySelector('.testimonial-track');
  const testimonialPrev = document.querySelector('.testimonial-prev');
  const testimonialNext = document.querySelector('.testimonial-next');
  const testimonialSlides = document.querySelectorAll('.testimonial-slide');
  let testimonialIndex = 0;
  
  function showTestimonial(index) {
      testimonialTrack.style.transform = `translateX(-${index * 100}%)`;
      testimonialIndex = index;
  }
  
  testimonialNext.addEventListener('click', function() {
      testimonialIndex++;
      if (testimonialIndex >= testimonialSlides.length) {
          testimonialIndex = 0;
      }
      showTestimonial(testimonialIndex);
  });
  
  testimonialPrev.addEventListener('click', function() {
      testimonialIndex--;
      if (testimonialIndex < 0) {
          testimonialIndex = testimonialSlides.length - 1;
      }
      showTestimonial(testimonialIndex);
  });
  
  // Auto slide testimonials every 10 seconds
  setInterval(function() {
      testimonialIndex++;
      if (testimonialIndex >= testimonialSlides.length) {
          testimonialIndex = 0;
      }
      showTestimonial(testimonialIndex);
  }, 10000);
  
  // Popup
  const popup = document.getElementById('admissionPopup');
  const closePopup = document.getElementById('closePopup');
  const admissionButtons = document.querySelectorAll('.primary-cta');
  
  // Show popup after 3 seconds
  // setTimeout(function() {
  //     popup.classList.add('active');
  // }, 3000);
  
  // Close popup when clicking the close button
  // closePopup.addEventListener('click', function() {
  //     popup.classList.remove('active');
  // });
  
  // Close popup when clicking outside
  // window.addEventListener('click', function(event) {
  //     if (event.target === popup) {
  //         popup.classList.remove('active');
  //     }
  // });
  
  // Show popup when clicking admission buttons
  admissionButtons.forEach(button => {
      button.addEventListener('click', function(e) {
          e.preventDefault();
          popup.classList.add('active');
      });
  });
  
  // Video Thumbnails
  const playButtons = document.querySelectorAll('.play-button');
  
  playButtons.forEach(button => {
      button.addEventListener('click', function() {
          const container = this.parentElement;
          const videoId = container.querySelector('img').src.split('/')[4]; // Extract video ID from the image URL
          const iframe = document.createElement('iframe');
          iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
          iframe.setAttribute('width', '100%');
          iframe.setAttribute('height', '100%');
          iframe.setAttribute('frameborder', '0');
          iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
          iframe.setAttribute('allowfullscreen', '');
          
          container.innerHTML = ''; // Remove the thumbnail and button
          container.appendChild(iframe); // Add the iframe
      });
  });
});



document.addEventListener('DOMContentLoaded', function() {
  // Update Info Popup
  const updateInfoBtn = document.getElementById('updateInfoBtn');
  const updateInfoPopup = document.getElementById('updateInfoPopup');
  const closePopup = document.getElementById('closePopup');
  const updateInfoForm = document.getElementById('updateInfoForm');
  
  updateInfoBtn.addEventListener('click', function(e) {
      e.preventDefault();
      updateInfoPopup.classList.add('active');
  });
  
  closePopup.addEventListener('click', function() {
      updateInfoPopup.classList.remove('active');
  });
  
  window.addEventListener('click', function(event) {
      if (event.target === updateInfoPopup) {
          updateInfoPopup.classList.remove('active');
      }
  });
  
  updateInfoForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for updating your information! We will keep you informed about upcoming alumni events and opportunities.');
      updateInfoPopup.classList.remove('active');
      updateInfoForm.reset();
  });
});