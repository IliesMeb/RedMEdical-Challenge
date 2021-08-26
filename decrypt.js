import { crypto } from 'crypto';
import { readFile } from 'fs';

const ENCRYPTION_KEY = "7hC9q9DV!im^wqEoLtQMxLS@zwyXd*Y4" // Must be 256 bits (32 characters)


function decrypt(file) {
    readFile(file, 'utf-8', (err, data) => {
        if (err) throw err;
        let textParts = data.split(':')
        let iv = Buffer.from(textParts.shift(), 'utf-8'); 
        let encryptedText = Buffer.from(textParts.join(':'), 'hex');
        let decipher = crypto.createDecipheriv('AES-256-GCM', Buffer.from(ENCRYPTION_KEY), iv)
        let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);

        console.log(decrypted)

      });
    // let decipher = crypto.createDecipheriv('AES-256-GCM', Buffer.from(ENCRYPTION_KEY), iv); //Nicht Encryption Key auslesen, sondern secret.key auslesen

   
   
    // return decrypted.toString(); // nicht als string, sondern als File (zweiter Link), das File das rauskommt als ZIP auslesen nur mit Node
   }

   decrypt('./secret.enc');

