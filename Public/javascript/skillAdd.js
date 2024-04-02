function addInput() {
    const inputContainer = document.getElementById('inputContainer');

    // Create a new row for input and button
    const row = document.createElement('div');
    row.className = 'row';

    // Input field
    const inputCol = document.createElement('div');
    inputCol.className = 'col-md-8';
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'form-control mt-3';
    input.placeholder = 'Enter value';
    inputCol.appendChild(input);

    // Button to remove input
    const btnCol = document.createElement('div');
    btnCol.className = 'col-md-4';
    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.className = 'btn btn-danger mt-3';
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', function() {
      inputContainer.removeChild(row);
    });
    btnCol.appendChild(removeBtn);

    // Append input field and button to row
    row.appendChild(inputCol);
    row.appendChild(btnCol);

    // Append row to input container
    inputContainer.appendChild(row);
  }

  function removeInput(btn) {
    const inputContainer = document.getElementById('inputContainer');
    const row = btn.closest('.row');
    inputContainer.removeChild(row);
  }