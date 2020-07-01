let coin = {
    state: 0,
    flip: function () {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
        let randNum = Math.random()
        //console.log(randNum)

        //if randNum > .5 we can set this .state to 0
        // else we can set this .state to 1
        if (randNum > .5) {
            this.state === 0
        }
        else {
            this.state = 1
        }
    },

    toString: function () {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
        console.log(this.state)
        if (this.state === 0) {
            return ("Heads")
        }
        else {
            return ("Tails")

        }

    },
    toHTML: function () {
        let image = document.createElement('img');
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        let bodyElement = document.querySelector("body")
        image.src1 = "https://upload.wikimedia.org/wikipedia/commons/a/a0/2006_Quarter_Proof.png"
        image.src2 = "https://bjc.edc.org/June2017/bjc-r/img/5-algorithms/img_flipping-a-coin/Tails.png"
        bodyElement.append(image.src1,imagesrc2)


        if (this.state === 0) {
            
            return image.src1

        } else {

            return image.src2

        }

        return image;
    }
}


function display20Flips() {

    for (let i = 0; i < 20; i = i + 1) {
        coin.flip()
        console.log(coin.toString)
    }
    return toString

}


//console.log(coin)

coin.flip()
console.log(coin.toString())

//console.log(coin)

//let myString = coin.toString()

//console.log(myString)

//let myImageElement = coin.toHTML()

//console.log (myImageElement)

