const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const statusBox = document.getElementById('statusBox');
const statusText = document.getElementById('statusText');
const downloadBtn = document.getElementById('downloadBtn');

// Drag and drop handlers
dropZone.ondragover = (e) => {
    e.preventDefault();
    dropZone.style.borderColor = '#34495e';
};

dropZone.ondragleave = () => {
    dropZone.style.borderColor = '#2c3e50';
};

dropZone.ondrop = (e) => {
    e.preventDefault();
    dropZone.style.borderColor = '#2c3e50';
    handleFile(e.dataTransfer.files[0]);
};

// File input handler
fileInput.onchange = (e) => handleFile(e.target.files[0]);

async function handleFile(file) {
    if (!file) return;

    // Show loading
    statusBox.style.display = 'block';
    statusText.textContent = 'Converting...';
    downloadBtn.classList.add('hidden');

    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('/convert', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        
        if (result.status === 'success') {
            downloadBtn.href = `/download/${result.pdf_path}`;
            downloadBtn.classList.remove('hidden');
            statusText.textContent = 'Conversion successful!';
        } else {
            statusText.textContent = `Error: ${result.message}`;
        }
    } catch (error) {
        statusText.textContent = 'Error converting file';
    } finally {
        statusBox.querySelector('.loader').style.display = 'none';
    }
}