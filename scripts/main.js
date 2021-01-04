
function start() {

    document.getElementById("first").remove();
    play()

}


function play() {



    var div = document.getElementById("main");
    document.querySelector('#second').insertAdjacentHTML(
        'afterbegin',
        `<div style="display: flex; flex-direction: column;justify-content: center;align-items:center">

        <div>
            <div>
                <!-- timer positon -->
                <span style="color:blue;font-size:1.5rem;font-weight:600" >YOUR TIME STARTS NOW : </span>
                <button id="timer" style="margin:2rem;   background-color: #4CAF50;" class="button2">10/10</button>
                </div>
        </div>

        <div class="box-container">

            <div class="inst" style="width: 50%;">
                <!-- instruction for the user  -->
                <ul>
                    <li>
                        Remember the words given in the right side of the screen
                    </li>
                    <li>
                        You have the time untill timer becomes zero
                    </li>
                </ul>

            </div>

            <div class="animal-section" style="width: 50%;">
                <!-- this section contains the main section list -->
                <ul class="animal-list">

                    <li style="color: blue;">
                       Yak 
                    </li>
                    <li style="color: brown;">
                    Horse
                    </li>
                    <li style="color:darkcyan;">
                    Panda
                    </li>
                    <li style="color: chocolate;">
                    Lion
                    </li>

                </ul>
                <ul class="animal-list">
                    <li style="color: darkgreen;">
                        Tiger
                    </li>
                    <li style="color: darkmagenta;">
                    Kangaroo
                    </li>
                    <li style="color: darkred;">
                    Monkey
                    </li>
                    <li style="color: deeppink;">
                        Cat
                    </li>


                </ul>
            </div>
        </div>
    </div>`
    )




    var timeleft = 9
    var downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("second").remove()
            remember()
        } else {
            document.getElementById("timer").innerHTML = timeleft + "/10";
        }
        timeleft -= 1;
    }, 1000);
    


}





function remember() {

    // document.getElementById("second").remove();
    var div = document.getElementById("main");
    document.querySelector('#main').insertAdjacentHTML(
        'afterbegin',
        `  <div id="third">
        <div style="display: flex; flex-direction: row;justify-content: center;">

            <div class="box-container">

                <div class="inst" style="width: 50%;">
                    <!-- instruction for the user  -->
                    <ul>
                        <li>
                            Select the animals that you can remember from the previous list
                        </li>

                    </ul>

                </div>
                <div
                    style="display: flex;flex-direction: column; justify-content: center;align-items: center; width: 50%;">
                    <div class="animal-section" id="selected-animal">
                        <!-- this section contains the main section list -->
                        <ul class="animal-list">

                            <li style="color: blue;">
                                <input type="checkbox"><span>Lion</span>
                            </li>
                            <li style="color: brown;">
                                <input type="checkbox"><span>Tiger</span>
                            </li>
                            <li style="color: crimson;">
                            <input type="checkbox"><span>Gorilla</span>
                            </li>
                            <li style="color:peru">
                            <input type="checkbox"><span>Leapord</span>
                            </li>
                            <li style="color:darkcyan;">
                                <input type="checkbox"><span>Cat</span>
                            </li>
                            <li style="color: darkmagenta;">
                            <input type="checkbox"><span>Monkey</span>
                            </li>
                 

                    
                           
                          
                        </ul>
                        <ul class="animal-list">
                            <li style="color: darkgreen;">
                                <input type="checkbox"> <span>Horse</span>
                            </li>
                            <li style="color: chocolate;">
                            <input type="checkbox"> <span>Yak</span>
                            </li>
                            <li style="color: darkred;">
                                <input type="checkbox"><span>Kangaroo</span>
                            </li>
                            <li style="color:sienna;">
                            <input type="checkbox"> <span>Panther</span>
                            </li>

                            <li style="color: deeppink;">
                                <input type="checkbox"> <span>Panda</span>
                            </li>

                            <li style="color:peru">
                            <input type="checkbox"><span>Elephant</span>
                            </li>
               
                         
                        </ul>
                    </div>
                    <div>
                        <button onclick="myFunction(this)" class="button"><span>DONE </span></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
`)
};
function restart()
{
    location.reload();
}


function myFunction(element) {




    var chks = document.querySelectorAll("#selected-animal input[type='checkbox']");
    let selected_animals = [];
    let animals = ["Lion", "Tiger","Gorilla", "Leapord","Cat", "Monkey", "Horse","Yak", "Kangaroo", "Panther", "Panda","Elephant"]
    let present_animal = ["Yak","Horse","Panda","Lion","Tiger", "Kangaroo", "Monkey", "Cat"];
    let index = {}
    let present_index = {}

    for (let i = 0; i < present_animal.length; i++) {
        let x = present_animal[i];
        if(i>=4)
        present_index[x] = i-4;
        else
        present_index[x] = i;
    }


    for (let i = 0; i < chks.length; i++) {
        let x = animals[i];
        index[x] = i;
        selected_animals.push(chks[i].checked);
    }
    console.log(animals)
    console.log(selected_animals)

    document.getElementById("third").remove();

    var div = document.getElementById("main");
    document.querySelector('#main').insertAdjacentHTML(
        'afterbegin',
        `        <!-- fourth page for showing the result -->
        <div id="fourth">
            <div style="display: flex; flex-direction: row;justify-content: center;">

                <div class="box-container">

                    <div class="inst" style="width: 40%;">
                        <!-- instruction for the user  -->
                        <ul id="inst-last">
                            <li>
                                On the right side is the list of the word that are shown to you previously.

                            </li>
                            <li>
                                Highligted and Italic words are the one's that you are recalled
                            </li>
                        </ul>

                    </div>
                    <div style="display: flex;flex-direction: column; justify-content: center;align-items: center;">
                        <div class="animal-section" onclick="myFunction(this)" id="selected-animal">
                            <!-- this section contains the main section list -->
                            <ul class="animal-list" id="first-half">
                            </ul>
                            <ul class="animal-list" id="second-half">
                            </ul>
                        </div>
                        <div>
                            <button onclick="restart()" class="button" ><span>RESTART </span></button>

                        </div>
                    </div>
                </div>
            </div>
        </div>`
    )





    let atleastone = false;
    let index_in_presented_animals = []
    let colors = ["blue", "brown", "chocolate", "crimson", "palevioletred", "darkgreen", "darkmagenta", "darkred", "deeppink","palevioletred"]
    console.log(present_animal)


    for (let i = 0; i < present_animal.length; i++) {
        let str = `<li>${present_animal[i]} </li>`
        if (i >= 4) {
            var parent = document.getElementById('second-half')
            let child = document.createElement('li')
            child.innerHTML = str;
            child.style.color = colors[i];


            if (selected_animals[index[present_animal[i]]]) {
                index_in_presented_animals.push(present_index[present_animal[i]]);
                child.style.fontWeight = 1000;
                child.style.fontStyle = "italic";
                child.style.color = "black"
                atleastone = true;
            }
            parent.appendChild(child)
        }
        else {
            var parent = document.getElementById('first-half')
            let child = document.createElement('li')
            child.innerHTML = str;
            child.style.color = colors[i];
            if (selected_animals[index[present_animal[i]]]) {
                index_in_presented_animals.push(present_index[present_animal[i]]);
                child.style.fontWeight = 1000;
                child.style.fontStyle = "italic";
                child.style.color = "black"
                atleastone = true;
            }
            parent.appendChild(child)
        }
    }

    console.log(index_in_presented_animals)
    if (!atleastone) {
        var parent = document.getElementById('inst-last')
        let child = document.createElement('p')
        let str = "It seems you were not able to recall any of the words correctly, do you wish to restart the experiment? "
        child.innerHTML = str;
        child.style.color = "black"
        child.style.fontWeight = 600;
        child.style.padding = "3rem"
        parent.appendChild(child)
    }
    else {

        let counttop = 0;
        let countmid = 0;
        for(let i = 0;i<index_in_presented_animals.length;i++)
        {
            if(index_in_presented_animals[i] === 0|| index_in_presented_animals[i] === 3)
            {
                counttop += 1;
            }
            else
            {
                countmid +=1;
            }
        }

        console.log(countmid,counttop)

        if(counttop>countmid)
        {
        var parent = document.getElementById('inst-last')
        let child = document.createElement('p')
        let str = "As can be seen, you recalled more animals from the top and bottom position than the middle position.This result is in consonance with the Serial Position Effect. This shows the influence of Serial Position Effect on recall from a list of items"
        child.innerHTML = str;
        child.style.color = "black"
        child.style.fontWeight = 600;
        child.style.padding = "3rem"
        parent.appendChild(child)
        }
        else
        {
            var parent = document.getElementById('inst-last')
            let child = document.createElement('p')
            let str = "The recall results are not in confirmation with what the Serial Position Effect predicts. The possible reasons for interference could be:"
            child.innerHTML = str;
            child.style.color = "black"
            child.style.fontWeight = 600;
            parent.appendChild(child)  
            
            child = document.createElement('li')
            str = " Personal bias to certain words used in the list."
            child.innerHTML = str;
            child.style.color = "black"
            child.style.fontWeight = 100;
            parent.appendChild(child)  

            child = document.createElement('li')
            str = "Or may be beacause of the favorite animal factor"
            child.innerHTML = str;
            child.style.color = "black"
            child.style.fontWeight = 100;
            parent.appendChild(child) 
            child = document.createElement('li')
            str = "Random selection of colors.(if this is the case, then it is suggested that you redo the test after lapse of 10 mins.)."
            child.innerHTML = str;
            child.style.color = "black"
            child.style.fontWeight = 100;
            parent.appendChild(child) 

        }

    }
}

