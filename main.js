import { Buffer } from "Buffer"

for (const link of document.querySelectorAll("a"))
	if (link.href.startsWith("https://www.bing.com/ck"))
		try {
			// Tracker parameters are base64 encoded at the end of the URL
			const trackerParams = link.href.split("&u=a1")[1].split("&ntb=1")[0]

			link.href = Buffer.from(trackerParams, "base64").toString("utf-8")
		} catch (e) {
			link.style.background = "red"
			console.error(e.message)
		}
