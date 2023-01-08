const book1 = {
    title: "The Robots of dawn",
    author: "Isaac Asimov",
    readingStatus: true,
    readingStatusInfo: function () {
        if(this.readingStatus === true) 
        {
            console.log("Already read: "+ this.title + " by " + this.author);
        }
        else {
            console.log("You still need to read: "+ this.title + " by " + this.author);
        }
    }
}
book1.readingStatusInfo();

const book2 = {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    readingStatus: false,
    readingStatusInfo: function () {
        if(this.readingStatus === true) 
        {
            console.log("Already read: "+ this.title + " by " + this.author);
        }
        else {
            console.log("You still need to read: "+ this.title + " by " + this.author);
        }
    }
}

book2.readingStatusInfo();


