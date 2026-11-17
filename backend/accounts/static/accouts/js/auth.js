
document.addEventListener("DOMContentLoaded", () => {

    // ---------- Helper Functions ----------

    function openModal(modal) {
        if (modal) {
            modal.classList.remove("hidden");
        }
    }

    function closeModal(modal) {
        if (modal) {
            modal.classList.add("hidden");
        }
    }

    function showMessage(element, message, type = "success") {
        if (!element) return;

        element.textContent = message;
        element.classList.remove(
            "hidden",
            "text-green-600",
            "text-red-600"
        );

        element.classList.add(
            type === "success" ? "text-green-600" : "text-red-600"
        );
    }

    // ---------- Login Page ----------

    const loginForm = document.getElementById("loginForm");
    const forgotModal = document.getElementById("forgotModal");
    const forgotPasswordBtn = document.getElementById("forgotPasswordBtn");
    const closeForgotModal = document.getElementById("closeForgotModal");
    const forgotForm = document.getElementById("forgotForm");

    if (forgotPasswordBtn) {
        forgotPasswordBtn.addEventListener("click", () => {
            openModal(forgotModal);

            const email = document.getElementById("email");
            const resetEmail = document.getElementById("resetEmail");

            if (email && resetEmail && email.value.trim()) {
                resetEmail.value = email.value.trim();
            }
        });
    }

    if (closeForgotModal) {
        closeForgotModal.addEventListener("click", () => {
            closeModal(forgotModal);
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value;
            const message = document.getElementById("loginMessage");

            if (!email || !password) {
                showMessage(message, "Please complete all fields.", "error");
                return;
            }

            // Demo only - connect to Django authentication API later.
            showMessage(
                message,
                "Demo mode: authentication is not connected yet.",
                "error"
            );
        });
    }

    if (forgotForm) {
        forgotForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const email = document.getElementById("resetEmail").value.trim();
            const message = document.getElementById("forgotMessage");

            if (!email) {
                showMessage(message, "Please enter your email.", "error");
                return;
            }

            // Demo only - connect to Django password reset API later.
            showMessage(
                message,
                "Password recovery is not connected yet.",
                "error"
            );
        });
    }

    // ---------- Register Page ----------

    const registerForm = document.getElementById("registerForm");
    const registerMessage = document.getElementById("registerMessage");

    if (registerForm) {
        registerForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const fullName = document.getElementById("fullName").value.trim();
            const username = document.getElementById("username").value.trim();
            const email = document.getElementById("registerEmail").value.trim();
            const password = document.getElementById("registerPassword").value;
            const confirmPassword = document.getElementById("confirmPassword").value;
            const acceptTerms = document.getElementById("acceptTerms").checked;

            if (!fullName || !username || !email || !password || !confirmPassword) {
                showMessage(
                    registerMessage,
                    "Please complete all fields.",
                    "error"
                );
                return;
            }

            if (username.length < 3) {
                showMessage(
                    registerMessage,
                    "Username must contain at least 3 characters.",
                    "error"
                );
                return;
            }

            if (password.length < 8) {
                showMessage(
                    registerMessage,
                    "Password must contain at least 8 characters.",
                    "error"
                );
                return;
            }

            if (password !== confirmPassword) {
                showMessage(
                    registerMessage,
                    "Passwords do not match.",
                    "error"
                );
                return;
            }

            if (!acceptTerms) {
                showMessage(
                    registerMessage,
                    "You must accept the Terms & Conditions.",
                    "error"
                );
                return;
            }

            // Demo only - connect to Django registration API later.
            showMessage(
                registerMessage,
                "Demo mode: registration is not connected yet.",
                "error"
            );
        });
    }

    // ---------- Terms Modal ----------

    const termsModal = document.getElementById("termsModal");
    const openTermsBtn = document.getElementById("openTermsBtn");
    const closeTermsModal = document.getElementById("closeTermsModal");
    const closeTermsBottom = document.getElementById("closeTermsBottom");

    if (openTermsBtn) {
        openTermsBtn.addEventListener("click", () => {
            openModal(termsModal);
        });
    }

    if (closeTermsModal) {
        closeTermsModal.addEventListener("click", () => {
            closeModal(termsModal);
        });
    }

    if (closeTermsBottom) {
        closeTermsBottom.addEventListener("click", () => {
            closeModal(termsModal);
        });
    }

    // ---------- Close Modal on Outside Click ----------

    [forgotModal, termsModal].forEach((modal) => {
        if (!modal) return;

        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                closeModal(modal);
            }
        });
    });

    // ---------- Close Modal with Escape ----------

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeModal(forgotModal);
            closeModal(termsModal);
        }
    });

});