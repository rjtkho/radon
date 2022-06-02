const printDate =function(){
let today=new Date();
console.log( "Today date is- "+ today.getDate())
console.log( "Current Month is- " +today.getMonth()+1)

}

const getBatchInfo=function(){
    console.log("Radon, W3D3, the topic for today is Nodejs module system")
}

module.exports.printDate=printDate;

module.exports.getBatchInfo=getBatchInfo