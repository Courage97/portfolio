// Navbar section

document.querySelectorAll('.menu-toggle').forEach(function(el) {
    el.addEventListener("click", function() {
      var nav = document.querySelector(".nav");
      
      nav.classList.toggle("mobile-nav");
      this.classList.toggle("is-active");
    });
  });
// End of navbar section
//   Skill section
function createChart(canvasId, proficientPercentage, learningPercentage) {
    var ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Proficient', 'Learning'],
            datasets: [{
                data: [proficientPercentage, learningPercentage],
                backgroundColor: [
                    'rgb(26,140,184)', // Proficient
                    'rgb(205, 19, 54)'  // Learning
                ],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            var label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += context.parsed + '%';
                            return label;
                        }
                    }
                }
            }
        }
    });
}

// Create charts for each skill
createChart('htmlChart', 90, 10);
createChart('cssChart', 75, 25);
createChart('bootstrapChart', 85, 15);
createChart('jsChart', 70, 30);
createChart('tailwindChart', 80, 20);
createChart('reactChart', 80, 20);


// scroll reveal

ScrollReveal({ reset: true });
ScrollReveal().reveal('.home', { origin: 'top' });
    ScrollReveal().reveal('.about', { origin: 'left' });
    ScrollReveal().reveal('.skills', { origin: 'right', delay: 500 });
    ScrollReveal().reveal('.service', { origin: 'left', duration: 500 });
    ScrollReveal().reveal('.portfolio', { origin: 'right', interval: 500 });
    ScrollReveal().reveal('.contact', { origin: 'left', delay: 500 });
    ScrollReveal().reveal('.footer', { origin: 'bottom', delay: 500 });
    

    ScrollReveal().reveal('section', {
      delay: 200,  // Delay between each section's appearance
      duration: 1000, // Duration of the reveal animation
      distance: '50px', // Distance the section moves in from the bottom and right
    //   origin: 'right', // The direction the section moves from (top, bottom, left, right)
      easing: 'ease-in-out', // Easing function for the reveal animation
      interval: 200 // Interval between each section's appearance
    });