document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const greetingMessage = document.getElementById('greetingMessage');
    
    if (name) {
        greetingMessage.textContent = ¡Hola, ${name}! Bienvenido a la aplicación.;
    } else {
        greetingMessage.textContent = 'Por favor, ingresa tu nombre.';
    }
});