let csv  = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
// console.log(csv);
const newArray = csv.split('\n');
// console.log(newArray);
//console.log(newArray);

let dataArray = [];
const transformingData = [];
for (let i=0; i < newArray.length;i++){
    let data = newArray[i].split(",");
    console.log("data:", data);
   dataArray.push(data);
} 

function toObject(data) {
    let rv = {}; // {key: value} {name: "Max"}
    for (let i = 1; i < data.length; i++) {
        //console.log("data[i]", data[i]);
        //iter1 0 0 < 4 true        0 + 1 0 + 1 =>// {id: 42} {id: 57}
        //iter2 1 1 < 4 true   1 + 1  =>    {name: Bruce }
        //iter3: 2 2 < 4 true 2 +1 2 + 1 => {occupation : Knight}
            //iter4: 3 3 < 4   4 true 2 +1 2 + 1 => {age: 41}
                //iter5: 
        for (let j = 0; j < data[i].length; j++) {
            //console.log("data[i][j]", data[i][j]); //data[0][0] = 'ID'
            rv = {...rv, [data[0][j].toLowerCase()]: data[i][j]} //obj["name"] 
        }      
        //console.log("rv", rv);
    
         transformingData.push(rv); // { id: '42, name: 'Bruce' }
        rv={};
    }


}
toObject(dataArray);
console.log("dataarrayAfterToObject", transformingData); 

let result = Object.keys(dataArray).map((key) => [key, dataArray[key]]);
console.log(result);