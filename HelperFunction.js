
import {API_KEY} from "@env"
//this endpoint will tell Google to use the Vision API. We are passing in our key as well.
// const API='AIzaSyDnmmhLxRnUv6sXdcE21H016Kr-AdtQsEs';
const API_URL = `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`;
function generateBody(image) {
  console.log(image)
  console.log(API_KEY)
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

async function callGoogleVisionAsync(image) {
  const body = generateBody(image); //pass in our image for the payload
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const result = await response.json();
  console.log(result);
  const detectedText = result.responses[0]?.fullTextAnnotation;
  // console.log('google Result ',result);
  return detectedText
  ? detectedText
  : { text: "This image doesn't contain any text!" };
}
export default callGoogleVisionAsync;