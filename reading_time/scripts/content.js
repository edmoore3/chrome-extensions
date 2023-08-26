let article = document.querySelector("article");

// document.querySelector may return null
if (article)
{
    const text = article.textContent;
    const wordMatchRegExp = /[^\s]+/g;
    const words = text.matchAll(wordMatchRegExp);
    // matchAll returns an iterator, convert to array to get word count
    const wordCount = [...words].length;
    const readingTime = Math.round(wordCount / 200); // assume 200 words per min
    const badge = document.createElement("p");
    // Use the same styling as the publish info in the article's header
    badge.classList.add("color-secondary-text", "type--caption");
    badge.textContent = `⏱️ ${readingTime} min read`;

    console.log("word count = " + wordCount);
    // Support for API reference docs
    const heading = article.querySelector("div");
    // Support for article docs with date
    const date = article.querySelector("time")?.parentNode;

    if(date)
    {
        console.log("DATE");
    }

    (date ?? heading).insertAdjacentElement("afterend", badge);
}

else // Wikipedia
{
    //article = document.getElementsByClassName("mw-parser-output")[0];
    article = document.querySelector("main");

    const text = article.textContent;
    const wordMatchRegExp = /[^\s]+/g;
    const words = text.matchAll(wordMatchRegExp);
    // matchAll returns an iterator, convert to array to get word count
    let wordCount = 0;

    for( let word of words )
    {
        wordCount += (word[0][0] != "."); // Ignores meta words
    }

    const readingTime = Math.round(wordCount / 200); // assume 200 words per min
    const badge = document.createElement("p");
    
    badge.classList.add("color-secondary-text", "type--caption");
    badge.textContent = `⏱️ ${readingTime} min read`;

    // Get title of article
    const heading = article.querySelector("header");

    heading.insertAdjacentElement("afterend", badge);
}
