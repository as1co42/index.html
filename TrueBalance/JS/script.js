const header = document.getElementById('header2');
const service = document.getElementById('service');

window.addEventListener("scroll", () => {
    if (window.scrollY >= service.offsetTop) {
        header.classList.add("show");
    } else {
        header.classList.remove("show");
    }
});


 // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', e => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // close mobile on navigate
          if (!mobile.hidden) { toggle.click(); }
        }
      })
    });



// Telegram bot Contact

const BOT_TOKEN = "8444628879:AAG2biFOAxUYw0uH64av47VbNEAARYRBx-E";
const CHAT_ID = "1068209592";
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("Name").value;
    let email = document.getElementById("Email").value;
    let phone = document.getElementById("Phone").value;
    let inquiry = document.getElementById("Inquiry").value;
    let message = document.getElementById("message").value;

    let mess = `📩 New Contact Request:\n\n👤 Name: ${name}\n📧 Email: ${email}\n📞 Phone: ${phone}\n✉️ Inquiry: ${inquiry}\n💬 Message: ${message}`;
    fetch(TELEGRAM_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: mess,
            parse_mode: "Markdown"
        })
    })
        .then(response => response.json())
        .then(data => {
            alert("Message sent successfully");
            documnet.getElementById("contactForm").reset();
        })
        .catch(error => {
            alert("Error sending message.");
            console.error(error);
        });

});


