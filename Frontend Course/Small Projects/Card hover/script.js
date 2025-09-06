const cardGroups = document.querySelectorAll('.card-group');
const images = document.querySelectorAll('.image');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }else {entry.target.classList.remove('visible');}
    
  });
}, { threshold: 1 }); // triggers when 40% of group is visible

cardGroups.forEach(group => observer.observe(group));

const imgURLs = [
  "https://plus.unsplash.com/premium_photo-1700984735869-bd9eba083198?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",

  "https://images.unsplash.com/photo-1567093322102-6bdd32fba67d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",

  "https://images.unsplash.com/photo-1755644500147-8e713d146c22?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",

  "https://images.unsplash.com/photo-1593019079637-ac824a5e6330?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",

  "https://plus.unsplash.com/premium_photo-1711407243278-b05bb4957d4c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",

  "https://images.unsplash.com/photo-1526648856597-c2b6745ad7bd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",

  "https://images.unsplash.com/photo-1527685609591-44b0aef2400b?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",

  "https://plus.unsplash.com/premium_photo-1683121713210-97667d2e83c8?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
];

images.forEach((img, index) => {
  if (imgURLs[index]){
    img.style.backgroundImage = `url('${imgURLs[index]}')`;
  }
});