// ========================================
// FORM KONTAK KE WHATSAPP
// ========================================

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function(event) {

    // Mencegah halaman melakukan refresh
    event.preventDefault();

    // Mengambil nilai dari form
    const nama = contactForm.querySelector(
        'input[type="text"]'
    ).value;

    const email = contactForm.querySelector(
        'input[type="email"]'
    ).value;

    const pesan = contactForm.querySelector(
        "textarea"
    ).value;


    // ========================================
    // NOMOR WHATSAPP TUJUAN
    // ========================================

    const nomorWhatsApp = "6283820544078";


    // ========================================
    // MEMBUAT PESAN
    // ========================================

    const pesanWhatsApp =
        "Halo Wandi, saya ingin menghubungi kamu.%0A%0A" +

        "*Nama:* " +
        encodeURIComponent(nama) +

        "%0A" +

        "*Email:* " +
        encodeURIComponent(email) +

        "%0A" +

        "*Pesan:* " +
        encodeURIComponent(pesan);


    // ========================================
    // MEMBUAT LINK WHATSAPP
    // ========================================

    const linkWhatsApp =
        "https://wa.me/" +
        nomorWhatsApp +
        "?text=" +
        pesanWhatsApp;


    // ========================================
    // MEMBUKA WHATSAPP
    // ========================================

    window.open(linkWhatsApp, "_blank");

});