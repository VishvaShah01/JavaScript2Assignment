/*
    Assignment 05
*/

$(document).ready(function () {
    // your code here

    class ContentItem {
        //uId;
        //name
        //description;
        //genre;

        constructor(uId, name, description, genre) {
            this.uId = uId;
            this.name = name;
            this.description = description;
            this.genre = genre;
        }

        //get setname(){
        //   return this.name;
        //}

        //set setname(name1){
        //    this.name = name1;
        //} 
        
        updateContentItem(id, name, description, genre) {
            if(this.id === id && ((name && description && genre) !== null))
            {
                this.id = id;
                this.name = name;
                this.description = description;
                this.genre = genre;
            }
            else {
                console.log("No data found");
            }
        }

        toString() {
            let getDiv = document.getElementById("content-item-list");
            let createDiv = document.createElement("div");
            createDiv.className = 'content-item-wrapper';
            createDiv.id = 'content-item-' + this.id;
            getDiv.appendChild(createDiv);

            let createH2 = document.createElement("h2");
            createH2.textContent = this.name;
            createDiv.appendChild(createH2);

            let createP = document.createElement("p");
            createP.textContent = this.description;
            createDiv.appendChild(createP);

            let genreDiv = document.createElement("div");
            genreDiv.textContent = this.genre;
            createDiv.appendChild(genreDiv);
            //return "something";

            let updateHtml = document.querySelector("h2").firstChild;
            updateHtml.replaceWith("Hollywood Movie Theme");
        }
    }

    let classContent = new ContentItem(08, "F R I E N D S", "Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.", "Comedy, Romance");
    console.log(classContent);
    classContent.updateContentItem(4,"vishva","hello everyone!", "abc");

    classContent.toString();

    //classContent.setname = "vish";
    //let newName = classContent.setname;
    //console.log(newName);
    
    //console.log("Update " + classContent.updateContentItem());

    const arrayContent = [{
        uId: 01,
        name: "The God father",
        description: "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
        genre: "Crime, Drama"
    },
    {
        uId: 02,
        name: "Catch Me If You Can",
        description: "Barely 21 yet, Frank is a skilled forger who has passed as a doctor, lawyer and pilot. FBI agent Carl becomes obsessed with tracking down the con man, who only revels in the pursuit.",
        genre: "Crime, Drama"
    },
    {
        uId: 03,
        name: "The Dark Knight Rises",
        description: "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
        genre: "Crime, Action"
    },
    {
        uId: 04,
        name: "A Beautiful Mind",
        description: "After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.",
        genre: "Drama"
    },
    {
        uId: 05,
        name: "F R I E N D S",
        description: "Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.",
        genre: "Comedy, Romance"
    }];
    //console.log(arrayContent[0].name);

    for (const property in arrayContent) {
       //console.log(`Property name: ${property}`);
       console.log(`Property uId: ${arrayContent[property].uId}`);
       console.log(`Property name: ${arrayContent[property].name}`);
       console.log(`Property description: ${arrayContent[property].description}`);
       console.log(`Property genre: ${arrayContent[property].genre}`);
    }

    let strArrayContent = JSON.stringify(arrayContent);

    $("div#content-item-list").append(strArrayContent);

    $(".content-item-wrapper").css({"border": "2px solid black", "width": "435px","padding":"0 5px 5px 10px", "margin":"0 5px 5px 0px", "text-align": "center",});
    
});