import { pageSpeedClient } from "@server/services/external-apis/pagespeed-client";

export default async function analyzePageSpeed(domain: string) {
    const score = await pageSpeedClient.runPagespeed(domain);
    return { score };
}
