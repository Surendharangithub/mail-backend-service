const express = require('express');
const dotenv = require('dotenv');
const { Resend } = require('resend');
const { welcomeEmail } = require('./emails/templates/Welcome')

dotenv.config()
const app = express();
const PORT = process.env.NODE_APP_PORT;

const resend = new Resend(process.env.NODE_APP_RESEND_API);

app.get('/', (_, res)=> {
    res.json({
        success: true,
        message: 'Route working Fine'
    })
})

app.post('/api/send-email', async (_, res) => {

    const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: ['surendharanr.19eee@kongu.edu'],
        cc: ['surendharanr.19eee@kongu.edu'],
        subject: "With Image We're Sending in this mail!",
        html: welcomeEmail({ name: 'Surendharan ', email: 'surendharanr.19eee@kongu.edu' }),
    })

    if (error) {
        console.error('Error:❌', error);
        res.json({
            success: false,
            message: error.message
        })
    } else {
        if (data.id) {
            res.json({
                message: 'Email Successfully Send!'
            })
        }
    }
})



app.listen(PORT, () => {
    console.log('HTTP running in PORT:' + PORT)
})