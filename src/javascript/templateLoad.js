const navPage = `
<nav class="navbar" style="height: 74px">
    <div class="logo">
        <a href="#" style="display: flex">
            <img
                src="../assets/logo-no-bg.png"
                style="filter: grayscale(1) brightness(100); height: 60px"
            />
            <img
                src="../assets/icon-no-bg.png"
                style="
                    filter: grayscale(1) brightness(100);
                    height: 60px;
                    margin-right: -30px;
                "
            />
        </a>
    </div>

    <ul>
        <li><a href="Homepage.html">עמוד הבית</a></li>
        <li><a href="Flights.html">טיסות</a></li>
        <li><a href="Clothes.html">בגדים</a></li>
        <li><a href="#">אטרקציות</a></li>
        <li><a href="ContactUs.html">צור קשר</a></li>
        <li><a href="#">חיפוש &#8981;</a></li>
    </ul>

    <div class="nav-login">
        <a href="Login.html">התחברות</a>
        <a href="Signup.html">הרשמה</a>
    </div>
</nav>
`;

const footerPage = `
<div id="Contact">
    <br />
    <h3>כל הזכויות שמורות ל:</h3>
    <br />
    <p>&#169; ת"ז 1: 213030885</p>
    <p>&#169; ת"ז 2: 325755213</p>
    <p>&#169; ת"ז 3: 322294877</p>
    <p>&#169; ת"ז 4: 201283777</p>
    <br />
</div>
`;


// (async () => {
//     let page = await fetch("./navbar.html");
//     let raw = await page.text();

//     const nav = document.createElement("template");
//     nav.innerHTML = raw;
//     document.body.prepend(nav.content);

//     console.log("start...")
//     console.log(page);

//     page = await fetch("./footer.html");
//     raw = await page.text();

//     const footer = document.createElement("template");
//     footer.innerHTML = raw;
//     document.body.append(footer.content);

//     console.log("done loading footer and header");
// })();


document.addEventListener("DOMContentLoaded", () => {
    console.log("egleo")
    // load nav
    const nav = document.createElement("template");
    nav.innerHTML = navPage;
    document.body.prepend(nav.content);

    // load footer
    const footer = document.createElement("template");
    footer.innerHTML = footerPage;
    document.body.append(footer.content);
});