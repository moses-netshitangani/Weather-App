let body = document.getElementsByClassName("color-buttons")[0].parentElement;
let heading = document.getElementsByTagName("h1");
let sub_heading = document.getElementsByTagName("h2");
let degree = document.getElementsByTagName("sup");

let white = () => {
    body.style.background = "white";
    black_color_change();
}

let black = () => {
    body.style.background = "linear-gradient(#141E30,#243B55)";
    white_color_change();
}

let orange = () => {
    body.style.background = "radial-gradient( circle farthest-corner at 45% 40%,  rgba(255,230,67,1) -70%, rgba(255,80,80,1) 90.2% )";
    white_color_change();
}

let black_color_change = () => {
    for (let i = 0; i < heading.length; i++) {
        heading[i].style.color = "black";
    }
    for (let i = 0; i < sub_heading.length; i++) {
        sub_heading[i].style.color = "black";
    }
    degree[0].style.color = "black";
    heading[0].style.borderBottom = "unset";
    // heading[0].style.borderBottom = "3px solid black";
}

let white_color_change = () => {
    for (let i = 0; i < heading.length; i++) {
        heading[i].style.color = "white";
    }
    for (let i = 0; i < sub_heading.length; i++) {
        sub_heading[i].style.color = "white";
    }
    degree[0].style.color = "white";
    heading[0].style.borderBottom = "unset";
    // heading[0].style.borderBottom = "3px solid white";
    
}