/*========= CONTACT FORM =========*/
const form: HTMLFormElement | null = document.getElementById(
  "contact-form"
) as HTMLFormElement;

if (form != null) form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event: Event) {
  if (form != null) {
    event.preventDefault();

    const formData: FormData = new FormData(form);
    postFormData(formData).then(() => {
      form.reset();
      form.classList.toggle("hidden");

      const contactFormSuccess: HTMLElement | null = document.getElementById(
        "contact-form-success"
      );
      if (contactFormSuccess != null)
        contactFormSuccess.classList.toggle("hidden");
    });
  }
}

function postFormData(formData: FormData) {
  return fetch("/handle_contact-form.php", {
    method: "POST",
    body: formData,
  });
}
