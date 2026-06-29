const sharp = require("sharp");
const path = require("path");

const src = path.join(__dirname, "../assets/logo-source.png");
const publicDir = path.join(__dirname, "../public");

async function main() {
  const meta = await sharp(src).metadata();
  const w = meta.width;
  const h = meta.height;
  console.log("Source:", w, "x", h);

  const headerCropH = Math.round(h * 0.72);
  await sharp(src)
    .extract({ left: 0, top: 0, width: w, height: headerCropH })
    .resize({ height: 52, withoutEnlargement: false })
    .png()
    .toFile(path.join(publicDir, "logo-header.png"));

  const iconCropH = Math.round(h * 0.38);
  const iconSize = Math.min(w, iconCropH);
  const iconLeft = Math.round((w - iconSize) / 2);
  await sharp(src)
    .extract({ left: iconLeft, top: 0, width: iconSize, height: iconCropH })
    .resize(128, 128, {
      fit: "contain",
      background: { r: 255, g: 248, b: 240, alpha: 1 },
    })
    .png()
    .toFile(path.join(publicDir, "logo-icon.png"));

  await sharp(src)
    .resize({ width: 280, withoutEnlargement: false })
    .png()
    .toFile(path.join(publicDir, "logo-full.png"));

  await sharp(path.join(publicDir, "logo-header.png"))
    .png()
    .toFile(path.join(publicDir, "logo.png"));

  await sharp(path.join(publicDir, "logo-icon.png"))
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, "favicon.png"));

  const fullBuf = await sharp(path.join(publicDir, "logo-full.png")).toBuffer();

  await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 3,
      background: { r: 255, g: 248, b: 240 },
    },
  })
    .composite([{ input: fullBuf, gravity: "centre" }])
    .jpeg({ quality: 90 })
    .toFile(path.join(publicDir, "og-image.jpg"));

  console.log("Logo assets created in public/");
}

main().catch(console.error);
