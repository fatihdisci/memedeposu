module.exports = function handler(req, res) {
const supabaseUrl = process.env.SUPABASE_URL || “”;
const supabaseKey = process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_KEY || “”;

res.setHeader(“Content-Type”, “application/javascript; charset=utf-8”);
res.setHeader(“Cache-Control”, “no-store, max-age=0”);
res.status(200).send(
`window.__MEME_DEPOT_CONFIG__ = { SUPABASE_URL: ${JSON.stringify(supabaseUrl)}, SUPABASE_KEY: ${JSON.stringify(supabaseKey)} };`
);
};