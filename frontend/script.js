function LoadEvent(eventObject){
    //console.log(eventObject);
    const rootElement = document.getElementById("root");
    //console.dir(document);
    console.dir(rootElement);

    const listOfSectionElements = document.querySelectorAll("section")
    console.log(listOfSectionElements);

    //rootElement.classList.add("newClass");
    // listOfSectionElements[0].classList.add("newClass")
    // listOfSectionElements[1].classList.add("newClass")
    // listOfSectionElements[2].classList.add("newClass")
    // listOfSectionElements[3].classList.add("newClass")
    // listOfSectionElements[4].classList.add("newClass")

let anchors = "";

for (const sectionElement of listOfSectionElements) {
    //sectionElement.classList.add("newClass");
    //anchors = anchors + `<a> ${sectionElement.id} </a>`
    anchors += `<a href="#${sectionElement.id}"> ${sectionElement.id} </a>`;
}

    console.log(anchors);
    rootElement.insertAdjacentHTML("afterbegin",`<header>${anchors}</header>`) //header előjön a weboldalon

}

window.addEventListener("load", LoadEvent);