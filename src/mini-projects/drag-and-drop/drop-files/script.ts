document.addEventListener('DOMContentLoaded', () => {
  const fileDropZone = document.getElementById('file-dropzone') as HTMLElement;
  const output = document.getElementById('output') as HTMLElement;

  // Ensure elements exist
  if (!fileDropZone || !output) {
    alert('Required elements are missing from the DOM.');
    return;
  }

  // // Prevent default behavior for dragover and drop events on the document
  // document.addEventListener('dragover', (e: DragEvent) => {
  //   e.preventDefault();
  //   console.log('Document dragover event triggered');
  // });

  // document.addEventListener('drop', (e: DragEvent) => {
  //   e.preventDefault();
  //   console.log('Document drop event triggered');
  // });

  // Check if the browser supports the File API
  if (window.FileList && window.File) {
    fileDropZone.addEventListener('dragover', (e: DragEvent) => {
      e.stopPropagation();
      e.preventDefault();

      // Set the dropEffect to copy
      e.dataTransfer!.dropEffect = 'copy';
      fileDropZone.classList.add('dragover');
      console.log('Dragover event triggered');
    });

    // Remove the dragover class when the user leaves the dropzone
    fileDropZone.addEventListener('dragleave', () => {
      fileDropZone.classList.remove('dragover');
      console.log('Dragleave event triggered');
    });

    // Handle file drop
    fileDropZone.addEventListener('drop', (e: DragEvent) => {
      fileDropZone.classList.remove('dragover');
      e.stopPropagation();
      e.preventDefault();
      console.log('Drop event triggered');

      for (const file of e.dataTransfer!.files) {
        const name = file.name;
        const size = file.size ? Math.round(file.size / 1000) : 0;

        // Check if the file is an image
        if (file.type && file.type.startsWith('image/')) {
          const li = document.createElement('li');
          li.textContent = `${name} (${size}kb)`;
          output.appendChild(li);
        }
      }
    });

  } else {
    alert('File API is not supported in this browser.');
  }
});
