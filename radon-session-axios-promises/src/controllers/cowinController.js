let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getSession =async function (req,res){
    try {
        let district =req.query.district_id
        let date =req.query.date
        
        
        console.log(`query params are: : ${district} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`
           
        }
    
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
    }
    

    let getWetherOfLandon =async function (req,res){
        try {
            let london=req.query.q
            let appid =req.query.appid
            
            
            console.log(`query params are: : ${london} ${appid}`)
            var options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${london}&appid=${appid}`
               
            }
        
            let result = await axios(options)
            console.log(result.data)
            res.status(200).send({ msg: result.data })
        }
        catch (err) {
            console.log(err)
            res.status(500).send({ msg: err.message })
        }
        }
        
    
    


        let getSortedCities =async function (req,res){
            try {
               
              let cities=  ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
             let cityObjArray=[]


                for(let i=0;i<=cities.length;i++){
                    
                    let obj={ city:cities[i]}
                  let res=await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=e117c3ee4386c00b68d4168f2f888d47`)
               
               obj.temp=res.data.main.temp
               cityObjArray.push(obj)
               
               
                }


                let sorted=cityObjArray.sort(function(a,b){return a.temp- b.temp})

                  res.status(200).send({ status:true, data : sorted })
            }
            catch (err) {
                console.log(err)
                res.status(500).send({ msg: err.message })
            }
            }








        
    
    










let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let memes =async function (req,res){
    try {

        let memsId=req.query.template_id
        let text0 =req.query.text0
        let text1 =req.query.text1
        let username =req.query.username
        let password=req.query.password

        let options = {
            method: "post",
            url:  `https://api.imgflip.com/caption_image?template_id=${memsId}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
           
        }
    
        let result = await axios(options)
   res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
    }
    








module.exports. getSortedCities = getSortedCities
 module.exports.memes = memes
module.exports.getWetherOfLandon = getWetherOfLandon
module.exports.getSession = getSession
module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp