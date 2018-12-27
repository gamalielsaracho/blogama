
// export const urlApi = `http://localhost:5000/api`
export const urlApi = `https://gamalielsaracho.github.io/public/api`


// replace the special strings with server generated strings
export function metaTags(data, content) {
    // Estandar
    data = data.replace(/\$STRD_DESCRIPTION/g, content.STRD_DESCRIPTION);

    // makup Schema.org for Google+
    data = data.replace(/\$ITEMPROP_DESCRIPTION/g, content.ITEMPROP_DESCRIPTION);

    // Twitter Card
    data = data.replace(/\$TW_TITLE/g, content.TW_TITLE);
    data = data.replace(/\$TW_DESCRIPTION/g, content.TW_DESCRIPTION);
    data = data.replace(/\$TW_AUTHOR/g, content.TW_AUTHOR);
    data = data.replace(/\$TW_IMAGE/g, content.TW_IMAGE);

	// open Graph
    data = data.replace(/\$OG_TITLE/g, content.OG_TITLE);
    data = data.replace(/\$OG_URL/g, content.OG_URL);
    data = data.replace(/\$OG_IMAGE/g, content.OG_IMAGE);
    data = data.replace(/\$OG_DESCRIPTION/g, content.OG_DESCRIPTION);
    data = data.replace(/\$OG_PUBLISHED_TIME/g, content.OG_PUBLISHED_TIME);
    data = data.replace(/\$OG_MODIFIED_TIME/g, content.OG_MODIFIED_TIME);
    data = data.replace(/\$OG_ARTICLE_SECTION/g, content.OG_ARTICLE_SECTION);
    var result = data.replace(/\$OG_TAG/g, content.OG_TAG);

    return result
}
