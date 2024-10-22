// Load the navigation bar
document.addEventListener('DOMContentLoaded', () => {
  fetch('components/navbar.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('navbar').innerHTML = data;
      })
      .catch(error => console.log('Error loading navbar:', error));
});

//Booking Appointment and meditation
const appointmentModal = document.getElementById('appointmentModal');
const meditationModal = document.getElementById('meditationModal');

const bookAppointmentBtn = document.getElementById('bookAppointmentBtn');
const bookSessionBtn = document.getElementById('bookSessionBtn');

const closeAppointment = document.getElementById('closeAppointment');
const closeMeditation = document.getElementById('closeMeditation');

bookAppointmentBtn.addEventListener('click', () => {
    appointmentModal.style.display = 'block';
    document.body.classList.add('modal-open');
});

bookSessionBtn.addEventListener('click', () => {
    meditationModal.style.display = 'block';
    document.body.classList.add('modal-open');
});

closeAppointment.addEventListener('click', () => {
    appointmentModal.style.display = 'none';
    document.body.classList.remove('modal-open');
});

closeMeditation.addEventListener('click', () => {
    meditationModal.style.display = 'none';
    document.body.classList.remove('modal-open');
});

window.addEventListener('click', (event) => {
    if (event.target == appointmentModal) {
        appointmentModal.style.display = 'none';
        document.body.classList.remove('modal-open');
    }
    if (event.target == meditationModal) {
        meditationModal.style.display = 'none';
        document.body.classList.remove('modal-open');
    }
});




// Contact info
 document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  alert(`Thank you, ${name}! Your message has been sent successfully.`);
  this.reset();
});


//Service:
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');

const services = {
    'counseling': {
        title: 'Counseling Services',
        description: 'Our counseling services are designed to offer you the support you need in a one-on-one or group setting. Whether you are dealing with stress, anxiety, depression, or life transitions, our trained counselors are here to help you navigate through your challenges.'
    },
    'group-therapy': {
        title: 'Group Therapy Sessions',
        description: 'Group therapy offers a supportive environment where you can share your experiences and learn from others. Our group sessions are focused on building connections, promoting understanding, and fostering personal growth.'
    },
    'workshops': {
        title: 'Workshops',
        description: 'Our workshops are designed to offer hands-on learning experiences focused on mental wellness. From stress management to mindfulness, these workshops help you acquire practical skills for your everyday life.'
    },
    'meditation': {
        title: 'Meditation Sessions',
        description: 'Join our guided meditation sessions to help reduce stress, improve focus, and cultivate a sense of calm. Our meditation leaders will guide you through relaxation techniques designed to restore mental clarity.'
    }
};

function openModal(service) {
    modalTitle.textContent = services[service].title;
    modalDescription.textContent = services[service].description;
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
