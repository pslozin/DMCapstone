import { isArray } from "util"

const simpleArray = []

const arryA = [
    {
        id: 5,
        name: "Philip"
    
    },
    {
        id: 7,
        name: "Slozin"
    
    },
    {
        id: 8,
        name: "Daniella"
    
    },
    {
        id: 18,
        name: "Daniella"
    
    }
]

const ObjA = {
    id: 5
}

const mixA = {arryA}


function deletefromobject(obj,id)
{
    console.log("BEFORE", obj)
    for(let i = 0; i < obj.arryA.length; i++){
        if(obj.arryA[i].id === id){
        console.log("FOUND ID", obj.arryA[i].id, "INDEX", i)
       obj.arryA.splice(i,1)
        }
    }

    // obj.arryA.splice(1, 1)
    console.log("AFTER", obj)
}

console.log("Simple Array", simpleArray, typeof(simpleArray))
console.log("Object",ObjA)
console.log("Array",arryA, typeof(arryA))
console.log("Object with Array",mixA, typeof(mixA), isArray(mixA))

console.log(mixA.arryA[1].id)

deletefromobject(mixA, 8)

