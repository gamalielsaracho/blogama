
export default function renderFullPage(html, preloadedState, helmet) {
	return `<!DOCTYPE html>
		<html>
		<head>
			${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}

			<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
			
			
			<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
			<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" type="text/css">


			<script src='/src/js/libs/material.min.js'></script>


			<link rel="stylesheet" href="/src/css/activity.css">
			<link rel="stylesheet" href="/src/css/footer.css">
			<link rel="stylesheet" href="/src/css/projectsList.css">
			<link rel="stylesheet" href="/src/css/projectShow.css">

			<link rel="stylesheet" href="/src/css/postsList.css">


			<link rel="stylesheet" href="/src/css/libs/code.css">


			<link rel="stylesheet" href="/src/css/material.min.css">
			<link rel="stylesheet" href="/src/css/icons/style.css">
			
			<link rel="stylesheet" href="/src/css/flexboxgrid.css">

			<link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.lime-red.min.css" />
			<style>
				

				.photo-freelance {
				   width: 190px;
				   height: 190px;
				   display: inline-block;
				   border-radius: 50%;
				   background-image: url('./src/images/gama2.jpg');
				   background-size: cover;
				   background-position: center;
				}
				// ......................
				

			</style>
			<script>
				window.__initialData__ = ${JSON.stringify(preloadedState)}

			</script>
		</head>
		<body ${helmet.bodyAttributes.toString()}>

		<div id='app'>${html}</div>
		
		<script src='/dist/bundle.js'></script>
    	<script src='/src/js/libs/highlight.min.js'></script>
    	
    	<script>
    		hljs.initHighlightingOnLoad();
    	</script>

	</body>
	</html>`
}