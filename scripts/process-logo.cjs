const sharp = require("sharp");
const path = require("path");

const src = path.join(__dirname, "../assets/logo-source.png");
const heroSrc = path.join(__dirname, "../assets/hero-modak-source.png");
const publicDir = path.join(__dirname, "../public");

function circleMask(size) {
  return Buffer.from(
    `<svg width="${size}" height="${size}">
      <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="white"/>
    </svg>`
  );
}

function circleRing(size, stroke = "#E8890C", strokeWidth = 4) {
  const r = size / 2 - strokeWidth / 2;
  return Buffer.from(
    `<svg width="${size}" height="${size}">
      <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="${stroke}" stroke-width="${strokeWidth}"/>
    </svg>`
  );
}

async function makeCircularLogo(extract, size, withRing = true) {
  const resized = await extract
    .clone()
    .resize(size, size, {
      fit: "contain",
      background: { r: 255, g: 248, b: 240, alpha: 1 },
    })
    .png()
    .toBuffer();

  const masked = await sharp(resized)
    .composite([{ input: circleMask(size), blend: "dest-in" }])
    .png()
    .toBuffer();

  if (!withRing) return masked;

  return sharp(masked)
    .composite([{ input: circleRing(size) }])
    .png()
    .toBuffer();
}

async function createSiteImages() {
  const fs = require("fs");
  const meta = await sharp(src).metadata();
  const w = meta.width;
  const h = meta.height;

  const modakCropH = Math.round(h * 0.52);
  const modakSize = Math.min(w, modakCropH);
  const modakLeft = Math.round((w - modakSize) / 2);
  const modakExtract = sharp(src).extract({
    left: modakLeft,
    top: 0,
    width: modakSize,
    height: modakCropH,
  });

  const heroInput = fs.existsSync(heroSrc) ? heroSrc : src;
  await sharp(heroInput)
    .resize(900, 900, {
      fit: "cover",
      position: "centre",
    })
    .jpeg({ quality: 88 })
    .toFile(path.join(publicDir, "hero-modak.jpg"));

  await sharp(heroInput)
    .resize(700, 875, { fit: "cover", position: "centre" })
    .jpeg({ quality: 88 })
    .toFile(path.join(publicDir, "about-kitchen.jpg"));

  const galleryCrops = [
    { top: 0, height: 0.52, label: "gallery-1.jpg", caption: "Ukhdiche Modak" },
    { top: 0.05, height: 0.55, label: "gallery-2.jpg", caption: "Fresh Modak" },
    { top: 0, height: 0.48, label: "gallery-3.jpg", caption: "Handcrafted" },
    { top: 0.08, height: 0.5, label: "gallery-4.jpg", caption: "Festive Modak" },
    { top: 0, height: 0.6, label: "gallery-5.jpg", caption: "Modakmay Special" },
    { top: 0.02, height: 0.58, label: "gallery-6.jpg", caption: "Gift Ready" },
  ];

  for (const crop of galleryCrops) {
    const cropH = Math.round(h * crop.height);
    const cropW = Math.min(w, cropH);
    const left = Math.round((w - cropW) / 2);
    const top = Math.round(h * crop.top);
    await sharp(src)
      .extract({
        left,
        top: Math.min(top, h - cropH),
        width: cropW,
        height: Math.min(cropH, h - top),
      })
      .resize(600, 450, { fit: "cover", position: "centre" })
      .jpeg({ quality: 85 })
      .toFile(path.join(publicDir, crop.label));
  }

  return modakExtract;
}

async function main() {
  const meta = await sharp(src).metadata();
  console.log("Source:", meta.width, "x", meta.height);

  const modakExtract = await createSiteImages();

  const circle256 = await makeCircularLogo(modakExtract, 256);
  await sharp(circle256).toFile(path.join(publicDir, "logo-circle.png"));

  const circle128 = await makeCircularLogo(modakExtract, 128);
  await sharp(circle128).toFile(path.join(publicDir, "logo-icon.png"));

  await sharp(circle256).resize(32, 32).png().toFile(path.join(publicDir, "favicon.png"));
  await sharp(circle256).resize(96, 96).png().toFile(path.join(publicDir, "logo.png"));

  const ogCircle = await makeCircularLogo(modakExtract, 420, true);
  await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 3,
      background: { r: 255, g: 248, b: 240 },
    },
  })
    .composite([
      { input: ogCircle, gravity: "centre" },
      {
        input: Buffer.from(
          `<svg width="1200" height="630">
            <text x="600" y="520" text-anchor="middle" font-family="Georgia, serif" font-size="52" font-weight="bold" fill="#3D2314">Modakmay</text>
            <text x="600" y="570" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="#8B6F5E">Taste of Tradition · Since Jan 2025</text>
          </svg>`
        ),
        top: 0,
        left: 0,
      },
    ])
    .jpeg({ quality: 90 })
    .toFile(path.join(publicDir, "og-image.jpg"));

  console.log("All image assets updated in public/");
}

main().catch(console.error);
