## Issues
- 使用 remix vite:dev 的时候，会导致 tailwindcss 报错，然后导致我 Form/form 标签下的 button
或 a 的正常功能不生效...

## Development

Run the Vite dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

### reference
https://www.prisma.io/blog/fullstack-remix-prisma-mongodb-2-ZTmOy58p4re8
