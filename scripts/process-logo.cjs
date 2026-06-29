const sharp = require("sharp");
const path = require("path");

const src = path.join(__dirname, "../assets/logo-source.png");
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
    .resize(size, size, { fit: "cover", position: "centre" })
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

async function main() {
  const meta = await sharp(src).metadata();
  const w = meta.width;
  const h = meta.height;
  console.log("Source:", w, "x", h);

  const iconCropH = Math.round(h * 0.4);
  const iconSize = Math.min(w, iconCropH);
  const iconLeft = Math.round((w - iconSize) / 2);
  const modakExtract = sharp(src).extract({
    left: iconLeft,
    top: 0,
    width: iconSize,
    height: iconCropH,
  });

  const circle256 = await makeCircularLogo(modakExtract, 256);
  await sharp(circle256).toFile(path.join(publicDir, "logo-circle.png"));

  const circle128 = await makeCircularLogo(modakExtract, 128);
  await sharp(circle128).toFile(path.join(publicDir, "logo-icon.png"));

  await sharp(circle256).resize(32, 32).png().toFile(path.join(publicDir, "favicon.png"));

  await sharp(circle256).resize(96, 96).png().toFile(path.join(publicDir, "logo.png"));

  const headerCropH = Math.round(h * 0.72);
  await sharp(src)
    .extract({ left: 0, top: 0, width: w, height: headerCropH })
    .resize({ height: 52, withoutEnlargement: false })
    .png()
    .toFile(path.join(publicDir, "logo-header.png"));

  await sharp(src)
    .resize({ width: 280, withoutEnlargement: false })
    .png()
    .toFile(path.join(publicDir, "logo-full.png"));

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
            <text x="600" y="570" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="#8B6F5E">Taste of Tradition</text>
          </svg>`
        ),
        top: 0,
        left: 0,
      },
    ])
    .jpeg({ quality: 90 })
    .toFile(path.join(publicDir, "og-image.jpg"));

  console.log("Circular logo assets created in public/");
}

main().catch(console.error);
