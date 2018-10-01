
export default function renderFullPage(html, preloadedState, helmet) {
	return `<!DOCTYPE html>
		<html>
		<head>
            ${helmet.meta.toString()}
			${helmet.title.toString()}
            ${helmet.link.toString()}

			<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
			
		

			<link rel="stylesheet" href="/src/css/icons/style.css">
			
			<link href="https://fonts.googleapis.com/css?family=Roboto:300,400" rel="stylesheet">

			<link rel="stylesheet" href="/src/css/libs/code.css">
			
			<script>
				window.__initialData__ = ${JSON.stringify(preloadedState)}

			</script>
		</head>
		<body ${helmet.bodyAttributes.toString()}>

		<div id='app'>${html}</div>
		
    	<script src='/src/js/libs/highlight.min.js'></script>
		<script src='/dist/bundle.js'></script>
    	
    	<script>
    		hljs.initHighlightingOnLoad();
    	</script>

	</body>
	</html>`
}