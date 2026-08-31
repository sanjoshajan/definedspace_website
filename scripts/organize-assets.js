const fs = require('fs');
const path = require('path');

const baseDir = process.cwd();
const publicDir = path.join(baseDir, 'public');
const logoDir = path.join(publicDir, 'logo');
const worksDir = path.join(publicDir, 'works');
const videosDir = path.join(publicDir, 'videos');

[publicDir, logoDir, worksDir, videosDir].forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

// Copy logo
if (fs.existsSync(path.join(baseDir, 'logo.jpeg'))) {
  fs.copyFileSync(path.join(baseDir, 'logo.jpeg'), path.join(publicDir, 'logo.jpg'));
  fs.copyFileSync(path.join(baseDir, 'logo.jpeg'), path.join(publicDir, 'logo.jpeg'));
  fs.copyFileSync(path.join(baseDir, 'logo.jpeg'), path.join(logoDir, 'logo.jpg'));
  console.log('Logo copied successfully.');
}

// Copy hero video
if (fs.existsSync(path.join(baseDir, 'jobinsite.mp4'))) {
  fs.copyFileSync(path.join(baseDir, 'jobinsite.mp4'), path.join(publicDir, 'hero.mp4'));
  fs.copyFileSync(path.join(baseDir, 'jobinsite.mp4'), path.join(videosDir, 'jobinsite.mp4'));
  console.log('Hero video copied successfully.');
}

// Identify image and video files in workspace root
const files = fs.readdirSync(baseDir);

const imageFiles = files.filter(f => /\.(jpe?g|png|webp)$/i.test(f) && !f.startsWith('logo'));
const videoFiles = files.filter(f => /\.(mp4|mov|webm)$/i.test(f) && f !== 'hero.mp4');

console.log('Found images:', imageFiles.length);
imageFiles.forEach((file, index) => {
  const destClean = path.join(worksDir, 'project-' + (index + 1) + '.jpg');
  const destOrig = path.join(worksDir, file);
  fs.copyFileSync(path.join(baseDir, file), destClean);
  fs.copyFileSync(path.join(baseDir, file), destOrig);
  console.log('Copied image: ' + file + ' -> project-' + (index + 1) + '.jpg');
});

console.log('Found videos:', videoFiles.length);
videoFiles.forEach((file, index) => {
  const destClean = path.join(videosDir, 'video-' + (index + 1) + '.mp4');
  const destOrig = path.join(videosDir, file);
  fs.copyFileSync(path.join(baseDir, file), destClean);
  fs.copyFileSync(path.join(baseDir, file), destOrig);
  console.log('Copied video: ' + file + ' -> video-' + (index + 1) + '.mp4');
});
