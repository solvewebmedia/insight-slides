import getPageSpeedInsights from "@server/services/external-apis/pagespeed-client";

if (import.meta.main) {
    const domain = "https://jacksonswinebar.co.uk";
    const response = await getPageSpeedInsights(domain);
    if (response.ok) {
        console.log("Success");
    } else {
        console.error("Error:", response.error);
    }
}
