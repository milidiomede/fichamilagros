
function applyTheme(theme) {
    if (theme === "dark") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
}

function updateToggleIcon(theme) {
    var toggle = document.getElementById("themeToggle");
    if (!toggle) return;

    if (theme === "dark") {
        toggle.textContent = "☀️"; 
    } else {
        toggle.textContent = "🌙"; 
    }
}

function initTheme() {
    var savedTheme = localStorage.getItem("theme");
    if (!savedTheme) {
        savedTheme = "light";
    }
    applyTheme(savedTheme);
    updateToggleIcon(savedTheme);

    var toggle = document.getElementById("themeToggle");
    if (toggle) {
        toggle.addEventListener("click", function () {
            var isDark = document.body.classList.contains("dark-mode");
            var newTheme = isDark ? "light" : "dark";
            applyTheme(newTheme);
            updateToggleIcon(newTheme);
            localStorage.setItem("theme", newTheme);
        });
    }
}


function initContactForm() {
    var form = document.getElementById("contactForm");
    if (!form) return; 

    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");

    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var messageError = document.getElementById("messageError");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        var isValid = true;

        
        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";

        nameInput.classList.remove("input-error");
        emailInput.classList.remove("input-error");
        messageInput.classList.remove("input-error");

        
        if (nameInput.value.trim() === "") {
            nameError.textContent = "Por favor, ingresá tu nombre completo.";
            nameInput.classList.add("input-error");
            isValid = false;
        }

        
        var emailValue = emailInput.value.trim();
        if (emailValue === "") {
            emailError.textContent = "Por favor, ingresá tu email.";
            emailInput.classList.add("input-error");
            isValid = false;
        } else {
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailValue)) {
                emailError.textContent = "Ingresá un email válido (con @ y dominio).";
                emailInput.classList.add("input-error");
                isValid = false;
            }
        }

      
        if (messageInput.value.trim() === "") {
            messageError.textContent = "Por favor, escribí un comentario.";
            messageInput.classList.add("input-error");
            isValid = false;
        }

        if (isValid) {
            alert("Tu mensaje fue enviado exitosamente. ¡Muchas gracias!");
            form.reset();
        }
    });
}


document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initContactForm();
});
