import analyzePageSpeed from "./pagespeed";

export default async function executeInsights(domain: string) {
    const pageSpeedResult = await analyzePageSpeed(domain);
    return pageSpeedResult;
}

if (import.meta.main) {
    const response = await executeInsights("https://solve.co.uk");
    console.log(response);
}
