import { f as fromNodeMiddleware } from '../../../index.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'ipx';

const _id_ = fromNodeMiddleware((req, res, next) => {
  var _a;
  const urlParts = ((_a = req.url) == null ? undefined : _a.split("/")) || [];
  const userId = urlParts[urlParts.length - 1];
  if (!userId) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "User ID is required" }));
    return;
  }
  if (req.method === "GET") {
    const url = new URL(req.url || "", `http://${req.headers.host}`);
    const query = Object.fromEntries(url.searchParams);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: `Fetching user ${userId}`,
        query
      })
    );
    return;
  }
  if (req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          message: `Updating user ${userId}`,
          data: JSON.parse(body)
        })
      );
    });
    return;
  }
  res.writeHead(405, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Method Not Allowed" }));
});

export { _id_ as default };
//# sourceMappingURL=_id_.mjs.map
