$(document).ready(function() {
    // --- Amenazas Comunes: Ocultar/Mostrar información con jQuery ---
    $('.show-more-info').on('click', function() {
        var targetId = $(this).data('target');
        var $cardBody = $(this).closest('.card-body');
        var $mainText = $cardBody.find('.card-text');
        var $moreInfo = $cardBody.find(targetId);

        $mainText.slideToggle(400); // Oculta/muestra el texto principal
        $moreInfo.slideToggle(400); // Oculta/muestra la info extendida

        var buttonText = $(this).text();
        if (buttonText === 'Ver Más') {
            $(this).text('Ver Menos');
        } else {
            $(this).text('Ver Más');
        }
    });

    // --- Consejos de Seguridad: Validación de Formulario de Contacto con jQuery ---
    $('#contactForm').on('submit', function(event) {
        event.preventDefault(); // Evita el envío por defecto del formulario

        var isValid = true;

        // Validar Nombre
        var nameInput = $('#name');
        if (nameInput.val().trim() === '') {
            nameInput.addClass('is-invalid');
            isValid = false;
        } else {
            nameInput.removeClass('is-invalid').addClass('is-valid');
        }

        // Validar Correo Electrónico
        var emailInput = $('#email');
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.val())) {
            emailInput.addClass('is-invalid');
            isValid = false;
        } else {
            emailInput.removeClass('is-invalid').addClass('is-valid');
        }

        // Validar Mensaje
        var messageInput = $('#message');
        if (messageInput.val().trim() === '') {
            messageInput.addClass('is-invalid');
            isValid = false;
        } else {
            messageInput.removeClass('is-invalid').addClass('is-valid');
        }

        if (isValid) {
            alert('¡Formulario enviado con éxito! Nos pondremos en contacto pronto.');
            // Aquí podrías enviar los datos del formulario a un servidor con AJAX
            this.reset(); // Limpia el formulario
            // Eliminar clases de validación después de enviar
            $('.form-control').removeClass('is-valid');
        } else {
            alert('Por favor, corrige los errores en el formulario.');
        }
    });

    // --- Consejos de Seguridad: Test de Seguridad (Modal) con jQuery ---
    $('#securityTestForm').on('submit', function(event) {
        event.preventDefault();

        var score = 0;
        var feedback = '';

        // Pregunta 1
        var q1Answer = $('input[name="q1"]:checked').val();
        if (q1Answer === 'b') {
            score++;
            feedback += '<p class="text-success"><strong>1. Correcto:</strong> El phishing es un intento de engañarte para que reveles información personal.</p>';
        } else {
            feedback += '<p class="text-danger"><strong>1. Incorrecto:</strong> El phishing busca robar tu información personal a través de engaños.</p>';
        }

        // Pregunta 2
        var q2Answer = $('input[name="q2"]:checked').val();
        if (q2Answer === 'b') {
            score++;
            feedback += '<p class="text-success"><strong>2. Correcto:</strong> Usar contraseñas únicas protege tus demás cuentas si una es comprometida.</p>';
        } else {
            feedback += '<p class="text-danger"><strong>2. Incorrecto:</strong> La reutilización de contraseñas es un gran riesgo de seguridad.</p>';
        }

        // Pregunta 3
        var q3Answer = $('input[name="q3"]:checked').val();
        if (q3Answer === 'b') {
            score++;
            feedback += '<p class="text-success"><strong>3. Correcto:</strong> 2FA añade una capa extra de seguridad con una segunda verificación.</p>';
        } else {
            feedback += '<p class="text-danger"><strong>3. Incorrecto:</strong> 2FA es crucial para una mayor seguridad de la cuenta.</p>';
        }

        var totalQuestions = 3;
        $('#scoreMessage').text('Obtuviste ' + score + ' de ' + totalQuestions + ' preguntas correctas.');
        $('#feedbackDetails').html(feedback);
        $('#testResults').slideDown(); // Muestra los resultados con animación
    });
});