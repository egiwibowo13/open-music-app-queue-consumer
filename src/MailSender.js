const nodemailer = require('nodemailer');

class MailSender {
  constructor() {
    this._transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_ADDRESS,
        pass: process.env.MAIL_PASSWORD,
      },
    });
  }

  sendEmail(targetEmail, content) {
    const message = {
      from: 'Open Music Apps',
      to: targetEmail,
      subject: 'Ekspor Playlist Songs',
      text: 'Terlampir hasil dari ekspor playlists songs',
      attachments: [
        {
          filename: 'playlists_songs.json',
          content,
        },
      ],
    };
    return this._transporter.sendMail(message);
  }
}

module.exports = MailSender;
