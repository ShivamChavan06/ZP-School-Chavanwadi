function exploreMore() {
  alert("स्वागत आहे! खाली स्क्रोल करून गॅलरी, शिक्षक, विद्यार्थी आणि निकाल पाहा.");
}

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});


window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let progress = (scrollTop / scrollHeight) * 100;
  document.getElementById("progress-bar").style.width = progress + "%";
});


const timelineItems = document.querySelectorAll(".timeline li");

window.addEventListener("scroll", () => {
  timelineItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      item.classList.add("show");
    }
  });
});

const principalSection = document.querySelector(".principal-message");

window.addEventListener("scroll", () => {
  const rect = principalSection.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    principalSection.classList.add("show");
  }
});


const studentCards = document.querySelectorAll(".student-card");

window.addEventListener("scroll", () => {
  studentCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.classList.add("show");
    }
  });
});


const vmSection = document.querySelector(".vision-mission");

window.addEventListener("scroll", () => {
  const rect = vmSection.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    vmSection.classList.add("show");
  }
});



