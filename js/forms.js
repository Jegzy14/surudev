document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form[data-form]');

  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const feedback = form.querySelector('.form-feedback');
      const requiredFields = form.querySelectorAll('[required]');
      let valid = true;

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          valid = false;
          field.setAttribute('aria-invalid', 'true');
        } else {
          field.setAttribute('aria-invalid', 'false');
        }
      });

      if (!valid) {
        feedback.className = 'form-feedback error';
        feedback.textContent = 'Please complete all required fields before submitting.';
        return;
      }

      feedback.className = 'form-feedback success';
      feedback.textContent = 'Thank you. Your message has been prepared and the team can follow up through the contact details provided.';
      form.reset();
    });
  });
});
