const KEY = process.env.PAGESPEED_API_KEY;

export async function getPageSpeedScore(domain: string) {
  const response = await fetch(
    `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${domain}&key=${KEY}`
  );
  return response.json();
}
