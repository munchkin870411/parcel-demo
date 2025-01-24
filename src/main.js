import anime from "animejs";
const img = document.createElement("img");
document.body.append(img);

const urlObj = new URL(
  "./media/super_mario__power_star_2d_by_joshuat1306_dcn2u2d-fullview.png",
  import.meta.url
);

img.src = urlObj.href;

anime({
  targets: img,
  rotate: 360,
  duration: 8000,
  loop: true,
});
