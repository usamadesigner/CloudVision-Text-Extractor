
const API_KEY = 'AIzaSyBdgkf98j2G2Jy2G9Zy9_wfhgnSL3TteOs'; //put your key here.

//this endpoint will tell Google to use the Vision API. We are passing in our key as well.
const API_URL = `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`;
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

async function callGoogleVisionAsync(image) {
  // console.log('iamge is ', image);
  const body = generateBody(image); //pass in our image for the payload
  console.log('body', body);
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const result = await response.json();
  const detectedText = result.responses[0].fullTextAnnotation;
  return detectedText
  ? detectedText
  : { text: "This image doesn't contain any text!" };
  console.log('google Result ',result);
}
export default callGoogleVisionAsync;