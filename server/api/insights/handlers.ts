import runFullInsights from "../../services/insights";

export async function handleRunInsights(req: Request) {
    const { domain } = await req.json();
    const auditId = await runFullInsights(domain);
    return new Response(JSON.stringify({ auditId }), { status: 200 });
}
