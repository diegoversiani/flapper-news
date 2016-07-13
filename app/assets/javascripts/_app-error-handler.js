function handleError(response) {
  console.log(response);

  document.getElementById("error-message").innerText = response.data.error;
}