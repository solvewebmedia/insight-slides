import { pageSpeedClient } from "@server/services/api-clients/pagespeed-client";
import Bun from "bun";

export default async function analyzePageSpeed(domain: string) {
    const response = await pageSpeedClient.runPagespeed(domain);
    const performanceScore = response.lighthouseResult.categories.performance.score;
    const accessibilityScore = response.lighthouseResult.categories.accessibility.score;
    const bestPracticesScore = response.lighthouseResult.categories["best-practices"].score;
    const seoScore = response.lighthouseResult.categories.seo.score;

    const score = {
        performance: performanceScore,
        accessibility: accessibilityScore,
        bestPractices: bestPracticesScore,
        seo: seoScore,
    };

    return { score };
}
