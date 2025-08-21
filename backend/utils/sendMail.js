import nodemailer from "nodemailer";

export const sendOTP = async (email, otp) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,   // in .env
        pass: process.env.EMAIL_PASS,   // Gmail App Password
      },
    });

    const mailOptions = {
      from: `"Forever Full Stack" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your OTP for Account Verification",
      text: `Your OTP code is ${otp}. It will expire in 5 minutes.`,
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ OTP sent successfully to:", email);
  } catch (error) {
    console.error("❌ Error sending OTP:", error);
    throw new Error("Failed to send OTP. Try again later.");
  }
};
