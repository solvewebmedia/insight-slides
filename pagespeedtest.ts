import "dotenv/config";

/**
 * Fetches and displays PageSpeed Insights data.
 */
async function run() {
  const apiEndpoint =
      'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';
  const targetUrl = 'https://solve.co.uk/';

  const url = new URL(apiEndpoint);
  url.searchParams.set('url', targetUrl);
  url.searchParams.set('key', process.env.PAGESPEED_API_KEY);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();

    console.log('PageSpeed Insights API response:', json);

    //save to file
    const fs = await import('fs/promises');
    await fs.writeFile('pagespeed-insights.json', JSON.stringify(json, null, 2));
    console.log('PageSpeed Insights data saved to pagespeed-insights.json');

  } catch (error) {
    console.error('Error fetching PageSpeed Insights data:', error);
  }
}

run();