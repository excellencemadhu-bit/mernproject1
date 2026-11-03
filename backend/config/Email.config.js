import nodemailer from "nodemailer";

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user:"excellencemadhu@gmail.com",
    pass:"fils bpaz uabt fghb",
  },
});


export default transporter;



