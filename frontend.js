async function sendPrompt(prompt) {
  const res = await fetch("http://ayushbot.strangled.net:11434/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt })
  });

  const data = await res.json();
  console.log("Response:", data.response);
  // You can also display it in the UI
  document.getElementById("response").textContent = data.response;
}

