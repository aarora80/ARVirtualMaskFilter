document.getElementById("upload").addEventListener("change", function (event) {
  console.log("File upload initiated");

  const file = event.target.files[0];
  if (!file) {
    console.log("No file selected");
    return;
  }

  console.log("Selected file:", file.name);

  const reader = new FileReader();
  reader.onload = function (e) {
    console.log("File loaded successfully");
    const imageUrl = e.target.result;
    console.log("Image URL:", imageUrl);

    // Update the src attribute of a-image
    const imageElement = document.querySelector("a-image");
    if (imageElement) {
      imageElement.setAttribute("src", imageUrl);
      console.log("Image source updated");
    } else {
      console.log("a-image element not found");
    }
  };

  reader.onerror = function (error) {
    console.error("FileReader error:", error);
  };

  reader.readAsDataURL(file);
});
