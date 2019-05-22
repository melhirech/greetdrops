const product = {
  Product: "",
  User_main_image: "",
  Greetings: []
};
const prewiew = document.getElementById("preview");
const error = document.getElementById('error')

const greetingLimit = 36

const updatePreview = () => {
    prewiew.innerHTML = JSON.stringify(product, undefined, 2);
  };
  

const productOptions = document.Demo_Form.product_category;
const imageOptions = document.Demo_Form.main_image;

//attach event listeners to radio button: product_category
for (let i = 0; i < productOptions.length; i++) {
  if (productOptions[i].checked) {
    product.Product = productOptions[i].value;
    updatePreview();
  }
  productOptions[i].addEventListener("change", function() {
    product.Product = this.value;
    updatePreview();
  });
}
//attach event listeners to radio button: main_image
for (let i = 0; i < imageOptions.length; i++) {
    if (imageOptions[i].checked) {
      product.User_main_image = imageOptions[i].value;
        updatePreview();
      }
  imageOptions[i].addEventListener("change", function() {
    product.User_main_image = this.value;
    updatePreview();
  });
}

const generateGreeting = () => {
  if (product.Greetings.length == greetingLimit) {
    error.innerText = `You have reached the limit number of greetings: ${greetingLimit}`
    return;
  }
  const greeting = {
    Header_text: faker.lorem.sentence().slice(0, 30),
    Message_text: faker.lorem.paragraph().slice(0, 140),
    User_signer_image_url: "https://www.wonderplugin.com/videos/demo-image0.jpg",
    Signature_text: faker.lorem.word()
  };
  product.Greetings.push(greeting);
  updatePreview();
};

updatePreview();
