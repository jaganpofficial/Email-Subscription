const scriptURL =
				"https://script.google.com/macros/s/AKfycbwloBp8PrWm53sKH-EelFo_zrKNfKJiYKzmPI-uyyDB9KN4tIzy3Iw1x4U798_fAVAz/exec";
			const form = document.forms["submit-to-google-sheet"];
			const msg = document.getElementById("msg");
			form.addEventListener("submit", (e) => {
				e.preventDefault();
				fetch(scriptURL, { method: "POST", body: new FormData(form) })
					.then((response) => {
						msg.innerHTML = "Thank you For Subscribing!";
						setTimeout(() => {
							msg.innerHTML = "";
						}, 5000);
						form.reset();
					})
					.catch((error) => console.error("Error!", error.message));
			});