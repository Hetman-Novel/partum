"use strict"

document.addEventListener('DOMContentLoaded', function () {

   // Contact form ->
   const form = document.getElementById('work-with-us-form');
   form.addEventListener('submit', formSend);

   async function formSend(e) {
      e.preventDefault();

      let error = formValidation(form);

      let formData = new FormData(form);
      //formData.append('upload-file', file.files[0]);

      if (error === 0) {
         form.classList.add('_sending');
         /*let response = await fetch('contact.php', {
            method: 'POST',
            body: formData
         });*/
         if (response.ok) { // Отправлено
            let result = await response.json();
            //alert(result.message);
            /*formPreview.innerHTML = '';
            form.reset();
            form.classList.remove('_sending');
            document.getElementById('contact-text-after-sending').classList.add('good');
            setTimeout(() => {
               document.getElementById('contact-text-after-sending').classList.remove('good');
            }, 5000);*/
         } else { // Не отправлено
            //alert('Произошла ошибка при отправке');
            /*form.classList.remove('_sending');
            document.getElementById('contact-text-after-sending').classList.add('no-good');
            setTimeout(() => {
               document.getElementById('contact-text-after-sending').classList.remove('no-good');
            }, 5000);*/
         }
      } else {
         //alert('Заполните обязательные поля');
      }
   }

   function formValidation(form) {

      let error = 0;
      let formReq = document.querySelectorAll('._require');

      for (let index = 0; index < formReq.length; index++) {
         const input = formReq[index];
         formRemoveError(input);

         if (input.classList.contains('_email')) {
            if (emailTest(input)) {
               formAddError(input);
               error++;
            }
         } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
            formAddError(input);
            error++;
         } else {
            if (input.value === '') {
               formAddError(input);
               error++;
            }
         }
      }
      return error;
   }
   function formAddError(input) {
      input.parentElement.classList.add('no-valid');
      input.classList.add('no-valid');
   }
   function formRemoveError(input) {
      input.parentElement.classList.remove('no-valid');
      input.classList.remove('no-valid');
   }
   function emailTest(input) {
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
   }

   const fileInput = document.getElementById('upload-file')
   const fileInfoElement = document.getElementById('work-with-us-file-name')
   fileInput.addEventListener('change', function() {
      if (fileInput.files.length > 0) {
            const selectedFile = fileInput.files[0]
            const fileName = selectedFile.name
            const fileFormat = fileName.split('.').pop().toLowerCase()
            const supportedFormats = [".doc", ".docx", ".odt", ".rtf", ".pdf", ".ppt", ".pptx"]
            if (supportedFormats.includes(`.${fileFormat}`)) {
               fileInfoElement.textContent = `${fileName}`
            } else {
               fileInfoElement.textContent = 'Only .doc, .docx, .odt, .rtf, .pdf, .ppt, .pptx supported.'
               fileInput.value = '';
            }
      } else {
         fileInfoElement.textContent = ''
      }
   })
})