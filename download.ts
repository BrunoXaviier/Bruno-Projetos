import fs from 'fs';
import { Readable } from 'stream';
import { finished } from 'stream/promises';

async function downloadFile(id: string, filename: string) {
  const url = `https://drive.google.com/uc?export=download&id=${id}`;
  console.log(`Downloading ${url} to ${filename}...`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`unexpected response ${res.statusText}`);
  const fileStream = fs.createWriteStream(filename);
  // @ts-ignore
  await finished(Readable.fromWeb(res.body).pipe(fileStream));
  console.log(`Downloaded ${filename}`);
}

async function main() {
  if (!fs.existsSync('public')) {
    fs.mkdirSync('public');
  }
  await downloadFile('1X6o-jpEkW5Tk8peCZMlGPnFglz0adOD-', 'public/logo.jpg');
  await downloadFile('1x8aWMnM4oxrEpCrGR__deTBwYkfMp1L1', 'public/bruno.jpg');
  await downloadFile('1gsO9n7WdUsleH5By_2ndOxXT1Z5b7BRE', 'public/priscila.jpg');
  await downloadFile('1q3jYYL_GdLC6mjs6k5YPqqj2KJ3Z-uyz', 'public/hebert.jpg');
}

main().catch(console.error);
