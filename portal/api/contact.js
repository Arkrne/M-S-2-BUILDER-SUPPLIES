module.exports = (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message, phone, category } = req.body;
    console.log('Received contact form:', { name, email, message, phone, category });
    
    // In a real production app, you would integrate an email service like SendGrid, Postmark, or Resend here.
    // For now, we simulate success.
    
    return res.status(200).json({ 
      success: true, 
      message: 'Transmission Received. Our logistics team will contact you shortly.' 
    });
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
