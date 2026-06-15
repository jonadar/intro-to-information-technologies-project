
(async () => {
    let page = await fetch("./navbar.html");
    let raw = await page.text();

    const nav = document.createElement("template");
    nav.innerHTML = raw;
    document.body.prepend(nav.content);


    console.log("start...")
    console.log(page);

    page = await fetch("./footer.html");
    raw = await page.text();

    const footer = document.createElement("template");
    footer.innerHTML = raw;
    document.body.append(footer.content);

    console.log("done loading footer and header");
})();