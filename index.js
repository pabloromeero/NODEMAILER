// Para instalar utilize o comando: npm install nodemailer
const nodemailer = require('nodemailer')

// Utilizando o hotmail
const transport = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
        user: '@hotmail.com',
        pass: '****'
    }
})

/*
    Utilizando o gmail
const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: '@gmail.com',
        pass: '****'
    }
    *Para o Gmail terá que criar uma senha para app terceiros nas configurações de conta Google.
})

*/


transport.sendMail({
    from: '@hotmail.com',
    to: '@gmail.com',
    subject: 'Enviando email com Nodemailer',
    html: '<h1>Olá, Dev</h1> <p>Esse email foi enviado usando o Nodemailer</p>',
    text: 'Olá, Dev! Esse email foi enviado usando o Nodemailer'
})
.then(() => console.log('Email enviado com sucesso'))
.catch((err) => console.log('Erro ao enviar o email: ', err))