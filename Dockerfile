FROM node:20 AS deps
WORKDIR /app

COPY package.json yarn.lock ./

RUN  yarn install

FROM node:20 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
RUN apt-get update && apt-get install -y jq
RUN yarn build

FROM node:20 AS runner
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
COPY --from=builder /app/tools ./tools
COPY --from=builder /app/db ./db
COPY --from=builder /app/helpers ./helpers

USER nextjs

EXPOSE 8080

ENV PORT 8080
ENV NODE_ENV production
ENV GITHUB_CLIENT_ID e6831840d043f12bfa06
ENV NEXT_PUBLIC_BASE_URL https://zemuldo.com
ENV NEXT_PUBLIC_API_URL https://zemuldo.com/api
ENV NEXT_PUBLIC_STATIC_IMAGES_URL https://static.zemuldo.com/images

CMD ["npm", "start"]
