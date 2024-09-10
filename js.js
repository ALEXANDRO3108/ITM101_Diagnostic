function saveData() {
    // Obtener los valores del formulario
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('age').value;

    // Validar que todos los campos estén llenos
    if (name && email && age) {
        // Crear una nueva fila en la tabla
        var table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
        var newRow = table.insertRow();
        newRow.insertCell(0).textContent = name;
        newRow.insertCell(1).textContent = email;
        newRow.insertCell(2).textContent = age;

        // Limpiar el formulario
        document.getElementById('userForm').reset();
    } else {
        alert('Por favor, complete todos los campos.');
    }
}
