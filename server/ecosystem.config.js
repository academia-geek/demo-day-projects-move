module.exports = {
    apps: [
        {
            name: "move-back-end",
            script: "./dist/index.js",
            watch: false,
            cron_restart: "*59 23 * * *",
            env: {
                NODE_ENV: "development",
            },
            env_production: {
                NODE_ENV: "production",
            }
        }
    ]
}