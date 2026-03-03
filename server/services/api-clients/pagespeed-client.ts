const KEY = process.env.PAGESPEED_API_KEY;

const runPagespeed = async (domain: string) => {
    const response = await fetch(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${domain}&key=${KEY}&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo`
    );
    return response.json();
};

export const pageSpeedClient = { runPagespeed };
