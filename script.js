document.addEventListener('DOMContentLoaded', () => {
  
    const skills = [
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 90 },
      { name: 'Node.js', level: 80 },
      { name: 'HTML & CSS', level: 95 },
      { name: 'MongoDB', level: 75 }
    ];
  
    skills.forEach((skill, index) => {
      const skillElement = document.querySelectorAll('.skill')[index];
      if (skillElement) {
        const progressBar = skillElement.querySelector('.progress');
        const percent = skillElement.querySelector('.percent');
  
        if (progressBar && percent) {
          progressBar.style.setProperty('--progress', skill.level + '%');
          progressBar.style.width = skill.level + '%';
          percent.textContent = skill.level + '%';
        }
      }
    });
  
  
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeToggle.textContent = document.body.classList.contains('dark-mode') ? '🌞' : '🌙';
      });
    }
  
    
    var typed = new Typed(".text", {
      strings: ["Frontend Developer", "Java Developer", "Web Developer"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    });
  
    const experiences = [
      {
        title: "Newrise Technosys",
        duration: "(Aug 2024 – Present)",
        designation: "Senior Frontend Developer",
        location: "Bhopal, Madhya Pradesh",
        responsibilities: [
          "Developed responsive user interfaces using Angular and React.",
          "Collaborated with backend developers to integrate Node.js APIs.",
          "Optimized front-end performance for faster load times and improved user experience.",
          "Utilized Angular Material and Bootstrap for efficient UI development.",
          "Implemented state management using Redux (React) and NgRx (Angular).",
          "Worked on integrating RESTful APIs with React and Angular applications."
        ]
      },
      {
        title: "Capital Hub",
        designation: "Software Developer",
        duration: "(Apr 2023 – Jun 2024)",
        location: "Bengaluru, Karnataka",
        responsibilities: [
          "Created and maintained full-stack web applications using Angular, Node.js, and Express.js.",
          "Developed real-time data handling using WebSockets in Node.js.",
          "Worked with MongoDB for database management and optimization.",
          "Built and maintained responsive UIs with React and integrated dynamic state management using Redux.",
          "Developed RESTful services and integrated third-party APIs."
        ]
      },
      {
        title: "Wittybrains Software Technologies",
        designation: "Software Developer",
        duration: "(Jun 2022 – Mar 2023)",
        location: "Noida, Uttar Pradesh",
        responsibilities: [
          "Built scalable applications using Angular and React with TypeScript.",
          "Collaborated in Agile teams to deliver high-quality software solutions.",
          "Implemented server-side logic and API development with Node.js and Express.js.",
          "Utilized MongoDB for database design and optimization for large-scale applications.",
          "Contributed to front-end UI components and frameworks for reusable design patterns."
        ]
      }
    ];
    
  
  function populateExperience() {
    const container = document.getElementById('experience-container');
  
    experiences.forEach(exp => {
      const experienceItem = document.createElement('div');
      experienceItem.classList.add('experience-item');
  
      const experienceTitle = document.createElement('h3');
      experienceTitle.innerHTML  = `<em>${exp.title}</em>`;
      experienceItem.appendChild(experienceTitle);
  
      const experienceDesignation = document.createElement('p');
      experienceDesignation.innerHTML = `<strong>${exp.designation}</strong>`;
      experienceItem.appendChild(experienceDesignation);
  
      const experienceLocation = document.createElement('p');
      experienceLocation.textContent = exp.location;
      experienceItem.appendChild(experienceLocation);
  
      const experienceDuration = document.createElement('p');
      experienceDuration.innerHTML = `<em>${exp.duration}</em>`;
      experienceItem.appendChild(experienceDuration);
  
      const responsibilitiesList = document.createElement('ul');
  responsibilitiesList.style.textAlign = 'left'; 
  experienceItem.appendChild(responsibilitiesList); 
  
  function typeResponsibility(responsibilities, index = 0) {
    if (index < responsibilities.length) {
      const listItem = document.createElement('li');
      listItem.style.marginTop = '10px'; 
  
  
    
      responsibilitiesList.style.listStyleType = 'none'; 
      responsibilitiesList.appendChild(listItem); 
      
      let text = responsibilities[index];
      let charIndex = 0;
      
      function typeCharacter() {
        if (charIndex < text.length) {
          listItem.textContent += text.charAt(charIndex); 
          charIndex++;
          setTimeout(typeCharacter, 50); 
        } else {
          setTimeout(() => typeResponsibility(responsibilities, index + 1), 300); 
        }
      }
      
      typeCharacter();
    }
  }
  
  
  typeResponsibility(exp.responsibilities);
  
      
  
      experienceItem.appendChild(responsibilitiesList);
      container.appendChild(experienceItem);
    });
  }
  
  
  populateExperience();
  
  const projects = [
    {
        title: "Betternight",
        role: "Frontend Developer",
        technologies: "Angular, TypeScript, HTML, CSS, RESTful APIs, Git",
        description: "Worked on the Betternight project, a healthcare-focused web application designed to improve patient outcomes by providing sleep solutions and comprehensive care services. Leveraged Angular to develop and enhance user interfaces, ensuring a seamless and responsive user experience across devices. Collaborated closely with cross-functional teams to optimize components, implement error handling, and deliver high-quality, scalable code. Focused on improving accessibility, usability, and performance to meet healthcare industry standards.",
    },
    {
        title: "Sharecare",
        role: "Frontend Developer",
        technologies: "Angular, TypeScript, HTML, CSS, RESTful APIs, Git",
        description: "Contributed to the Sharecare project, a health and wellness platform that offers personalized resources for users to manage their well-being. Utilized Angular to build and refine responsive web components, improving user engagement and accessibility. Collaborated with designers and backend teams to ensure seamless integration of features and a cohesive user experience. Focused on delivering a scalable, high-performance application that meets the diverse needs of healthcare consumers and providers.",
    },
    {
        title: "PharmaDem",
        role: "Frontend Developer",
        technologies: "Angular, TypeScript, HTML, CSS, RESTful APIs, Git",
        description: "Currently working on the PharmaDem project, an advanced platform designed for healthcare professionals to streamline pharmaceutical services. Focusing on the development of the admin panel using Angular, responsible for creating and enhancing user-friendly interfaces that support efficient management of data and processes. Collaborating with backend and design teams to implement robust features, manage error handling, and improve overall performance. Ensuring the application aligns with industry standards for security, accessibility, and usability.",
    },
    {
        title: "Beej Nigam (Govt. Accounting Project)",
        role: "Full Stack Developer",
        technologies: "React, TypeScript, HTML, CSS, Node.js, Express.js, MySQL, Git",
        description: "Developed a comprehensive government accounting platform designed to streamline financial and administrative processes. Responsibilities included implementing features for managing charts of accounts, bank details, and employee records. The system securely stores and verifies various proof documents, ensuring compliance with government standards. Enabled users to access and manage their profiles through an intuitive interface. Leveraged a robust tech stack, including React and TypeScript for the frontend and Node.js, Express.js, and MySQL for backend operations, to deliver a secure, high-performance application.",
    },
    {
        title: "CMS Tool (Client Management System)",
        role: "Frontend Developer",
        technologies: "Angular, TypeScript, HTML, CSS, RESTful APIs, Git",
        description: "Worked on the development of a Client Management System (CMS) designed to streamline project management workflows. The system allows administrators to add users, manage project details, and track bidding information throughout the lifecycle of a project. Focused on building dynamic user interfaces that facilitate seamless project management, from initial bidding through to project completion. Collaborated with backend developers to ensure smooth data flow, including project and user management, bidding details, and progress tracking. Implemented a user-friendly, responsive layout to enhance user engagement and improve administrative efficiency. Ensured the system met security and usability standards to support diverse business needs.",
    },
  ];
  
  const projectsContainer = document.querySelector('.projects-container');
  
  projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
  
    const title = document.createElement('h3');
    title.textContent = project.title;
    projectDiv.appendChild(title);
  
    const role = document.createElement('p');
  role.textContent = `${project.role}`;
  role.style.fontWeight = 'bold';  
  role.style.background = 'linear-gradient(90deg, #e50c66, #0aacd8, #ff0000)';  
  role.style.webkitBackgroundClip = 'text';  
  role.style.color = 'transparent';  
  projectDiv.appendChild(role);
  
    const technologies = document.createElement('p');
    technologies.textContent = ` ${project.technologies}`;
    technologies.style.fontWeight = 'bold'; 
    projectDiv.appendChild(technologies);
  
    const description = document.createElement('p');
    description.style.textAlign = 'left'; 
    description.textContent = project.description;
    projectDiv.appendChild(description);
  
    projectsContainer.appendChild(projectDiv);
  });
  
  
  
  
  
         
    
  
  });
  // Sample reviews data with names, images, and reviews
  const reviews = [
    {
        text: "The web development team delivered an exceptional website with a clean, modern design. Our customers love the new user experience, and it has greatly improved our conversion rates.",
        user: "Sarah Johnson",
        location: "CEO, Tech Innovations",
        image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
        text: "They did an excellent job on our website. We had a tight deadline, and the team worked tirelessly to deliver the product on time. The design and functionality exceeded our expectations.",
        user: "Michael Davis",
        location: "Founder, Startup Solutions",
        image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
        text: "Great team to work with! We were impressed with their technical skills and ability to understand our business needs. Highly recommend their web development services.",
        user: "Emily Martinez",
        location: "Marketing Manager, GreenTech Solutions",
        image: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
        text: "The project was handled professionally and completed on time. The team understood our requirements and delivered beyond expectations.",
        user: "John Smith",
        location: "CTO, InnovateX",
        image: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
        text: "Absolutely fantastic experience! Their team is dedicated and responsive, and they built a site that has helped us expand our reach.",
        user: "Anna Lee",
        location: "Founder, Digital Solutions",
        image: "https://randomuser.me/api/portraits/women/5.jpg"
    },
    {
        text: "Amazing work on our new website. The communication was seamless, and the final product was exactly what we envisioned.",
        user: "Chris Miller",
        location: "CEO, GreenStart",
        image: "https://randomuser.me/api/portraits/men/6.jpg"
    }
  ];
  
  let currentIndex = 0; // Start at the first set of reviews
  
  // Function to render the current set of reviews
  function renderReviews() {
    const reviewList = document.getElementById('reviewList');
    reviewList.innerHTML = ''; // Clear existing reviews
  
    // Display the current set of 3 reviews
    for (let i = currentIndex; i < currentIndex + 3 && i < reviews.length; i++) {
        const review = reviews[i];
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');
        reviewItem.innerHTML = `
            <img src="${review.image}" alt="${review.user}'s profile picture">
            <p class="review-text">"${review.text}"</p>
            <p class="review-user">${review.user}</p>
            <p class="review-location">${review.location}</p>
        `;
        reviewList.appendChild(reviewItem);
    }
  }
  
  // Function to move to the next set of 3 reviews
  function nextReview() {
    currentIndex = (currentIndex + 3) % reviews.length; // Loop back to the first set
    renderReviews();
  }
  
  // Automatically move to the next set of 3 reviews every 5 seconds
  setInterval(nextReview, 5000);
  
  // Initial render of the first set of reviews
  window.onload = () => {
    renderReviews();
  };
  
  
  
  const services = [
    {
        title: "Frontend Development",
        image: "./assest/ux-design.png",
        description: "Build responsive, dynamic, and scalable web applications using React, Angular, perfect for enterprise-level solutions and SPAs."
    },
    {
        title: "Backend Development",
        image: "./assest/backend.png",
        description: "Create fast, scalable server-side applications using Node.js, Express.js, NestJS, and manage NoSQL databases with MongoDB."
    },
    {
      title: "App Development",
      image: "./assest/android.png",
      description: "Develop high-performance Android and iOS applications using the latest tools and technologies."
  },
    {
        title: "UI/UX Development",
        image: "./assest/ux-design.png",
        description: "Design modern, user-friendly interfaces and craft intuitive experiences to maximize user satisfaction."
    },
  
  ];
  
  function generateServices() {
    const container = document.getElementById("servicesContainer");
    container.innerHTML = services.map(service => `
        <div class="service-item">
            <h3>${service.title}</h3>
            <div class="service-details">
                <img src="${service.image}" alt="${service.title}">
                <p>${service.description}</p>
            </div>
        </div>
    `).join("");
  }
  
  // Fade-in animation on scroll
  function handleScroll() {
    const section = document.getElementById("services");
    if (section.getBoundingClientRect().top < window.innerHeight - 100) {
        section.classList.add("visible");
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    generateServices();
    handleScroll();
  });
  
  window.addEventListener("scroll", handleScroll);
  
  
  
  
  
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    if (name && email && message) {
        alert("Thank you, " + name + "! Your message has been sent.");
        document.getElementById("contactForm").reset();
    } else {
        alert("Please fill out all fields correctly.");
    }
  });
  
  
  function downloadCV() {
    
    const cvPath = "assest/Shivam_Kumar_6201763368.pdf";
  
   
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "Shivam_Kumar_CV.pdf";  
  
   
    document.body.appendChild(link);
    link.click();
  
    
    document.body.removeChild(link);
  }