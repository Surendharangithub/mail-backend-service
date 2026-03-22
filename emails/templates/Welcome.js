const welcomeEmail = ({ name, email }) => {

    const BANNER_URL = 'https://i.ibb.co/RGjPMWhp/Orange-and-White-Grad-xxxxx.webp';
    return `
    <!DOCTYPE html>
    <html>
      <body style="margin:0; padding:0; font-family:Arial, sans-serif; background-color:#f4f4f4;">


        <!-- Banner Image -->
        <div style="text-align:center;">
          <img 
             src="${BANNER_URL}" 
            alt="Banner" 
            width="600"
            style="width:100%; max-width:600px;"
          />
        </div>

        <!-- Content -->
        <div style="background-color:#ffffff; max-width:600px; margin:20px auto; padding:30px; border-radius:8px;">
          <h1 style="color:#333;">Welcome, ${name}! 👋</h1>
          <p style="color:#666; font-size:16px;">
            Thanks for signing up with <strong>${email}</strong>.
            We're excited to have you on board!
          </p>

          <!-- Button -->
          <div style="text-align:center; margin:30px 0;">
            <a 
              href="https://yourapp.com/dashboard"
              style="background-color:#4F46E5; color:#fff; padding:14px 28px; border-radius:6px; text-decoration:none; font-size:16px;"
            >
              Get Started
            </a>
          </div>

          <hr style="border:none; border-top:1px solid #eee;" />

          <!-- Footer -->
          <p style="color:#999; font-size:12px; text-align:center;">
            You received this because you signed up at MyApp.
          </p>
        </div>

      </body>
    </html>
  `;
};

module.exports = { welcomeEmail };