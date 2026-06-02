const crypto = require('crypto');

const passphrase = process.argv[2];
if (!passphrase) {
  console.error('Usage: node tools/encrypt-supporter-content.js "your supporter passphrase"');
  process.exit(1);
}

const payload = {
  updated: new Date().toISOString().slice(0, 10),
  articles: [
    {
      title: 'Supporter Article Title',
      date: 'Private',
      tag: 'Supporters',
      body: [
        'Replace this with the first private article paragraph.',
        'Add more paragraphs as needed.'
      ]
    }
  ]
};

const salt = crypto.randomBytes(16);
const iv = crypto.randomBytes(12);
const key = crypto.pbkdf2Sync(passphrase, salt, 250000, 32, 'sha256');
const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
const ciphertext = Buffer.concat([cipher.update(Buffer.from(JSON.stringify(payload), 'utf8')), cipher.final()]);
const tag = cipher.getAuthTag();

console.log(JSON.stringify({
  version: 1,
  kdf: 'PBKDF2-SHA256',
  iterations: 250000,
  salt: salt.toString('base64'),
  iv: iv.toString('base64'),
  tag: tag.toString('base64'),
  data: ciphertext.toString('base64')
}, null, 2));
