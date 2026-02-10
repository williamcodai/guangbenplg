// NOMOR WA TANPA + TANPA SPASI TANPA STRIP
const nomorWhatsApp = "6289604276668"; // ganti nomor kamu

function showForm(type) {
    document.getElementById("form-anak").classList.add("hidden");
    document.getElementById("form-remaja").classList.add("hidden");

    if (type === "anak") {
        document.getElementById("form-anak").classList.remove("hidden");
    } else {
        document.getElementById("form-remaja").classList.remove("hidden");
    }
}

// ================= ANAK-ANAK =================
function sendWhatsAppAnak(event) {
    event.preventDefault();

    const nama = document.getElementById("anak-nama").value;
    const uang = document.getElementById("anak-uang").value;

    const pesan = 
`Absensi Kelas Anak-anak
Nama: ${nama}
Uang Sumbangan: Rp ${uang}`;

    const url = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");
}

// ================= REMAJA =================
function sendWhatsAppRemaja(event) {
    event.preventDefault();

    const nama = document.getElementById("remaja-nama").value;
    const uang = document.getElementById("remaja-uang").value;
    const kelompok = document.getElementById("remaja-kelompok").value;

    const pesan = 
`Absensi Kelas Remaja
Nama: ${nama}
Kelompok: ${kelompok}
Uang Sumbangan: Rp ${uang}`;

    const url = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");
}
