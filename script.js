// ================================
// MENU MOBILE
// ================================

function toggleMenu() {

    const nav =
        document.getElementById("navLinks");

    if (nav) {

        nav.classList.toggle("show");

    }

}


// ================================
// TUTUP MENU
// ================================

const navLinks =
    document.querySelectorAll(".nav-links a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        const nav =
            document.getElementById("navLinks");

        if (nav) {

            nav.classList.remove("show");

        }

    });

});


// ================================
// FORM KONTAK
// ================================

function kirimPesan(event) {

    event.preventDefault();


    const nama =
        document.getElementById("nama").value;

    const email =
        document.getElementById("email").value;

    const pesan =
        document.getElementById("pesan").value;


    if (nama && email && pesan) {

        alert(
            "Terima kasih, " +
            nama +
            "! Pesan kamu berhasil disiapkan."
        );


        document
            .querySelector("form")
            .reset();

    } else {

        alert(
            "Silakan lengkapi semua data."
        );

    }

}


// ================================
// ANIMASI SCROLL
// ================================

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: 0.15
        }

    );


const animatedElements =
    document.querySelectorAll(
        ".card, " +
        ".potential-card, " +
        ".gallery-item, " +
        ".vision-grid div, " +
        ".contact-item"
    );


animatedElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity .7s ease, transform .7s ease";

    observer.observe(element);

});
