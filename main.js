for (link of document.querySelectorAll("a"))
	if (link.href.startsWith("https://www.bing.com/ck")) {
		try {
			link.href = atob(
				// Tracker parameters are base64 encoded at the end of the URL
				link.href.split("&u=a1")[1].split("&ntb=1")[0]
			)
		} catch (e) {
			link.style.background = "red"
		}
	}
