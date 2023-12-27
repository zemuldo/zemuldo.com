FROM node:14 AS deps
WORKDIR /app

COPY package.json package-lock.json ./
RUN  npm install

FROM node:14 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
RUN apt-get update && apt-get install -y jq
RUN npm run build

FROM node:14 AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
COPY --from=builder /app/server.js ./server.js
COPY --from=builder /app/apis ./apis
COPY --from=builder /app/api ./api
COPY --from=builder /app/tools ./tools
COPY --from=builder /app/db ./db
COPY --from=builder /app/helpers ./helpers

USER nextjs

EXPOSE 80

ENV PORT 80

CMD ["npm", "start"]
