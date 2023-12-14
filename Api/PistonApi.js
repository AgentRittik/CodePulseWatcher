const axios = require('axios');

async function getOutput(content){
    // let data = '{\r\n    "language": "javascript",\r\n    "version": "1.32.3",\r\n    "files": [\r\n        {\r\n            "name": "my_cool_code.js",\r\n            "content": "console.log(1)"\r\n        }\r\n    ]\r\n\r\n}';
    let data = {
        "language": "javascript",
        "version": "1.32.3",
        "files": [
            {
                "name": "index.js",
                "content": content
            }
        ]
    
    };
    let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://emkc.org/api/v2/piston/execute',
    headers: { 
        'Content-Type': 'text/plain', 
        'Cookie': 'engineerman.sid=s%3AcE3ZpDcWURDepeRgfaa2_sWVHrLxXn0G.CXFddDGVcE2CaYULrg55PQwyxgNug8L0w2H5vzT8mCI'
    },
    data : data
    };
    try{
        const response = await axios.request(config);
        console.log(JSON.stringify(response.data.run.output));
        return response.data.run.output;
    }
    catch(error){
        console.log(error);
    }
}

// const code = `console.log("hello")`;
// getOutput();

module.exports ={
    getOutput
}