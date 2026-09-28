const INDEXNOW_KEY = 'a7f9c2e4b8d146039e5a2c7b1d8f4e60';
const HOST = 'argunsoftware.com';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

const urlList = [
  `https://${HOST}/`,
  `https://${HOST}/billing-software.html`,
  `https://${HOST}/garage-management-software.html`,
  `https://${HOST}/loan-management-system.html`,
  `https://${HOST}/ca-firm-management-system.html`,
  `https://${HOST}/llms.txt`,
  `https://${HOST}/sitemap.xml`,
  `https://${HOST}/software-company-in-siwan.html`,
  `https://${HOST}/software-company-in-chapra.html`,
  `https://${HOST}/software-company-in-motihari.html`,
  `https://${HOST}/software-company-in-patna.html`,
  `https://${HOST}/software-company-in-muzaffarpur.html`,
  `https://${HOST}/software-company-in-darbhanga.html`,
  `https://${HOST}/software-company-in-bhagalpur.html`,
  `https://${HOST}/software-company-in-vaishali.html`,
  `https://${HOST}/software-company-in-hajipur.html`,
  `https://${HOST}/software-company-in-ara.html`,
  `https://${HOST}/software-company-in-buxar.html`,
  `https://${HOST}/software-company-in-bettiah.html`,
  `https://${HOST}/software-company-in-samastipur.html`,
  `https://${HOST}/software-company-in-sitamarhi.html`,
  `https://${HOST}/software-company-in-gorakhpur.html`,
  `https://${HOST}/software-company-in-kushinagar.html`,
  `https://${HOST}/software-company-in-deoria.html`
];

async function submitToIndexNow() {
  console.log(`Submitting ${urlList.length} URLs to IndexNow (Bing, ChatGPT Search, Copilot, Perplexity)...`);
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: KEY_LOCATION,
        urlList
      })
    });

    console.log(`IndexNow Response Status: ${response.status} ${response.statusText}`);
    if (response.status === 200 || response.status === 202) {
      console.log('✓ Successfully notified IndexNow of all 24 URLs!');
    } else {
      const text = await response.text();
      console.log('Response details:', text);
    }
  } catch (err) {
    console.error('Error pinging IndexNow:', err.message);
  }
}

submitToIndexNow();
