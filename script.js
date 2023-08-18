let form = document.getElementById("form")
let props_title = document.getElementsByClassName("props_title")[0]
let applybutton = document.getElementsByClassName("applybutton")


let closeform = document.getElementsByClassName("closeform")[0]

props_title.onclick = function () {
    form.style.right = "0px"
    form.style.display = "flex"

}
closeform.onclick = function () {
    form.style.right = "1113px"
    form.style.display = "none"
}
applybutton.onclick = function () {
    form.style.right = "1113px"
    form.style.display = "none"
}

// ***********************************************************************



var modal = document.getElementsByClassName("modal")
var cells = document.getElementsByClassName("cell")
var span = document.getElementsByClassName("close")[0]

span.onclick = function () {
    window.location.reload()
}
window.onclick = function (event) {
    if (event.target == modal) {
        window.location.reload()
        // modal.style.display = "none"`
    }
}

// ***********************************************************************
let l1 = document.getElementsByClassName("l1")
let l2 = document.getElementsByClassName("l2")
let l3 = document.getElementsByClassName("l3")
let l4 = document.getElementsByClassName("l4")
let l5 = document.getElementsByClassName("l5")
let l6 = document.getElementsByClassName("l6")
let l7 = document.getElementsByClassName("l7")
let mysound = new Audio('click.mp3')

var prop1 = document.getElementsByName("row1")
var prop2 = document.getElementsByName("row2")
var prop3 = document.getElementsByName("row3")
var prop4 = document.getElementsByName("row4")

let prop1_value
let prop2_value
let prop3_value
let prop4_value


prop1[0].addEventListener('click', check1)
prop1[1].addEventListener('click', check1)
prop1[2].addEventListener('click', check1)
prop1[3].addEventListener('click', check1)
prop1[4].addEventListener('click', check1)
prop2[0].addEventListener('click', check2)
prop2[1].addEventListener('click', check2)
prop2[2].addEventListener('click', check2)
prop2[3].addEventListener('click', check2)
prop2[4].addEventListener('click', check2)
prop3[0].addEventListener('click', check3)
prop3[1].addEventListener('click', check3)
prop3[2].addEventListener('click', check3)
prop3[3].addEventListener('click', check3)
prop3[4].addEventListener('click', check3)
prop4[0].addEventListener('click', check4)
prop4[1].addEventListener('click', check4)
prop4[2].addEventListener('click', check4)
prop4[3].addEventListener('click', check4)
prop4[4].addEventListener('click', check4)



function check1() {
    for (var i = 0; i < prop1.length; i++) {
        var rcheck = prop1[i].checked
        if (rcheck) {
            prop1_value = prop1[i].value
        }
    }
}
if(prop1_value==undefined){prop1_value="Mass-Number"}
function check2() {
    for (var i = 0; i < prop2.length; i++) {
        var rcheck = prop2[i].checked
        if (rcheck) {
            prop2_value = prop2[i].value
        }
    }
}
if(prop2_value==undefined){prop2_value="Oxidation-States"}
function check3() {
    for (var i = 0; i < prop3.length; i++) {
        var rcheck = prop3[i].checked
        if (rcheck) {
            prop3_value = prop3[i].value
        }
    }
}
if(prop3_value==undefined){prop3_value="Period"}
function check4() {
    for (var i = 0; i < prop4.length; i++) {
        var rcheck = prop4[i].checked
        if (rcheck) {
            prop4_value = prop4[i].value
        }
    }
}
if(prop4_value==undefined){prop4_value="Group"}


for (i = 0; i < cells.length; i++) {
    try { throw i }
    catch (ii) {
        cells[ii].onclick = (function () {
            for (var i = 0; i < modal.length; i++) {
                var modal1 = modal[i]
                modal1.style.display = "block"
            }




            fetch("elementsapi.txt").then((response) => {
                console.log(ii)
                return response.json();
            }).then((data) => {
                mysound.play();
                l1[0].innerHTML = JSON.stringify((data[ii].symbol)).replace(/[""]+/g, '')
                l2[0].innerHTML = JSON.stringify((data[ii].name)).replace(/[""]+/g, '')
                l3[0].innerHTML = "Atomic Number" + ":  " + JSON.stringify(data[ii].Atomic_Number)

                l4[0].innerHTML = prop1_value + ":  " + JSON.stringify((data[ii][prop1_value]));
                l5[0].innerHTML = prop2_value + ":  " + JSON.stringify((data[ii][prop2_value]))
                l6[0].innerHTML = prop3_value + ":  " + JSON.stringify((data[ii][prop3_value]))
                l7[0].innerHTML = prop4_value + ":  " + JSON.stringify((data[ii][prop4_value]))
                
                // radiodata()  
            })
        })




    }
}







