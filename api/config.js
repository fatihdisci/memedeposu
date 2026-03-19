module.exports = (req, res) => {
const url = process.env.SUPABASE_URL || “”;
const key = process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_KEY || “”;
res.setHeader(“Content-Type”, “application/javascript”);
res.setHeader(“Cache-Control”, “no-store”);
res.end(`window.__MEME_DEPOT_CONFIG__={SUPABASE_URL:${JSON.stringify(url)},SUPABASE_KEY:${JSON.stringify(key)}};`);
};