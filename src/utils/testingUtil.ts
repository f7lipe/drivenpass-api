import "../config/envConfig.js"

export function testingUtil(testingObject: Object){
    if(process.env.MODE === "DEV") return testingObject;
    return {};
}