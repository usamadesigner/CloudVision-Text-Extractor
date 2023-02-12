
import {API_KEY1,API_KEY2,API_KEY3,API_KEY4} from "./env"
//this endpoint will tell Google to use the Vision API. We are passing in our key as well.

const API_URL = `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY1}`;
const API_URL2 = `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY2}`;
const API_URL3 = `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY3}`;
const API_URL4 = `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY4}`;


function generateBody(image) {
  const body = {
    requests: [
      {
        image: {
          content: image,
        },
        features: [
          {
            type: 'TEXT_DETECTION', //we will use this API for text detection purposes.
            maxResults: 1,
          },
        ],
      },
    ],
  };
  return body;
}
async function fetching(body,url){
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const result = await response.json();
  return result;
}
async function callGoogleVisionAsync(image) {

 const body = generateBody(image); //pass in our image for the payload
 const data=await fetching(body,API_URL).then((res)=>{
  console.log(res);
  return res;
 }).catch((err)=>{
  return err;
 })
 const detectedText = data.responses[0]?.fullTextAnnotation;
 return detectedText
 ? detectedText
 : { text: "" };
}
export default callGoogleVisionAsync;