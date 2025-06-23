import { d as defineEventHandler, c as createError, g as getQuery, r as readBody } from '../../../../index.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'ipx';

const _id_ = defineEventHandler(async (event) => {
  var _a;
  const userId = (_a = event.context.params) == null ? undefined : _a.id;
  if (!userId) {
    throw createError({
      statusCode: 400,
      statusMessage: "User ID is required"
    });
  }
  if (event.req.method === "GET") {
    const query = getQuery(event);
    return {
      message: `Fetching user ${userId}`,
      query
    };
  }
  if (event.req.method === "POST") {
    const body = await readBody(event);
    return {
      message: `Updating user ${userId}`,
      data: body
    };
  }
  throw createError({
    statusCode: 405,
    statusMessage: "Method Not Allowed"
  });
});

export { _id_ as default };
//# sourceMappingURL=_id_.mjs.map
