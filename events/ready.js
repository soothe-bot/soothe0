const { ActivityType } = require("discord.js");
const client = require("../index");

const activities = [
  { name: "s/help or /help", type: ActivityType.Playing, status: "online" },
  { name: "your heart 💗", type: ActivityType.Listening, status: "idle" },
  { name: "with 💗 by L RMN", type: ActivityType.Watching, status: "dnd" },
];

let currentActivityIndex = 0;

client.on("ready", async () => {
  console.log(`${client.user.username} Is Online`);
  updateActivity();

  // loading database
  await require("../handlers/Database")(client);

  // loading dashboard
  require("../server");

  client.guilds.cache.forEach(async (guild) => {
    await client.updateembed(client, guild);
  });
});

function updateActivity() {
  const activity = activities[currentActivityIndex];
  client.user.setActivity(activity.name, { type: activity.type });
  client.user.setStatus(activity.status);

  currentActivityIndex++;
  if (currentActivityIndex >= activities.length) {
    currentActivityIndex = 0;
  }

  setTimeout(updateActivity, 10000);
}
