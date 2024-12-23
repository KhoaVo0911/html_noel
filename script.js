// jQuery(document).ready(function () {
//   giftOpen();
// });

// //Gift Open

// let isGiftOpened = false;

// function giftOpen() {
//   jQuery("section.gift").on("click touchstart", function () {
//     if (isGiftOpened) return; // Nếu quà đã được mở, dừng lại

//     isGiftOpened = true; // Đánh dấu quà đã được mở
//     jQuery(".error").hide();
//     jQuery(".lbWrapper,.lbWrapper .signupWrapper").hide();
//     jQuery(".gift-top").removeClass("hovered");
//     jQuery(".gift-text").hide();

//     jQuery(".gift-final-text").show();
//     jQuery(".gift-bottom").addClass("fadeout");
//     jQuery(".gift-top").addClass("fadeout");

//     jQuery(".santa-wrapper").fadeIn(1000);
//     jQuery("#merry").fadeIn(1000);
//     jQuery("#houu").fadeIn(1000);
//     jQuery("#box").fadeIn(1000);
//   });
// }

// //Snow Fall

// function createSnow() {
//   const canvas = document.getElementById("snow");
//   if (!canvas || !canvas.getContext) return; // Kiểm tra canvas tồn tại

//   const ctx = canvas.getContext("2d");
//   let windowWidth = window.innerWidth;
//   let windowHeight = window.innerHeight;

//   canvas.width = windowWidth;
//   canvas.height = windowHeight;

//   const particles = [];
//   const maxParticles = windowWidth > 768 ? 100 : 50; // Giảm số lượng hạt trên màn hình nhỏ

//   for (let i = 0; i < maxParticles; i++) {
//     particles.push({
//       x: Math.random() * windowWidth,
//       y: Math.random() * windowHeight,
//       r: Math.random() * 3,
//       d: Math.random() * maxParticles,
//     });
//   }

//   function render() {
//     ctx.clearRect(0, 0, windowWidth, windowHeight);
//     ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
//     ctx.beginPath();

//     for (const p of particles) {
//       ctx.moveTo(p.x, p.y);
//       ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
//     }

//     ctx.fill();
//     update();
//   }

//   function update() {
//     for (let i = 0; i < maxParticles; i++) {
//       const p = particles[i];
//       p.y += Math.cos(p.d) + p.r;
//       p.x += (Math.sin(0.005) * Math.PI) / 10;

//       if (p.y > windowHeight) {
//         particles[i] = {
//           x: Math.random() * windowWidth,
//           y: 0,
//           r: p.r,
//           d: p.d,
//         };
//       }
//     }
//   }

//   window.addEventListener("resize", function () {
//     windowWidth = window.innerWidth;
//     windowHeight = window.innerHeight;
//     canvas.width = windowWidth;
//     canvas.height = windowHeight;
//   });

//   setInterval(render, 33);
// }

jQuery(document).ready(function () {
  giftOpen();
});

// Flag kiểm soát mở quà
let isGiftOpened = false;

// Hàm mở quà
function giftOpen() {
  jQuery("section.gift").on("click touchstart", function () {
    if (isGiftOpened) return; // Nếu quà đã được mở, không làm gì thêm

    isGiftOpened = true; // Đánh dấu quà đã được mở

    // Ẩn và hiển thị các thành phần
    jQuery(".error").hide();
    jQuery(".lbWrapper,.lbWrapper .signupWrapper").hide();
    jQuery(".gift-top").removeClass("hovered");
    jQuery(".gift-text").hide();

    jQuery(".gift-final-text").fadeIn(1000);
    jQuery(".gift-bottom").addClass("fadeout");
    jQuery(".gift-top").addClass("fadeout");

    setTimeout(() => {
      jQuery(".santa-wrapper").fadeIn(1000);
      jQuery("#merry").fadeIn(1000);
      jQuery("#houu").fadeIn(1000);
      jQuery("#box").fadeIn(1000);
    }, 500);
  });
}
