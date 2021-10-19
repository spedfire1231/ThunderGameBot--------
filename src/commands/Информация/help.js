const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const prefix = require("../../config.json").prefix;

module.exports = {
  name: "help",
  aliases : ['помощь'],
  description: "Показывает все доступные комманды бота",
  run: async (client, message, args) => {


    const roleColor =
      message.guild.me.displayHexColor === "#000000"
        ? "#ffffff"
        : message.guild.me.displayHexColor;

    if (!args[0]) {
      let categories = [];

      readdirSync("./src/commands/").forEach((dir) => {
        const commands = readdirSync(
            `./src/commands/${dir}/`
            ).filter((file) =>
          file.endsWith(".js")
        );

        const cmds = commands.map((command) => {
          let file = require(`../../commands/${dir}/${command}`);

          if (!file.name) return "Нет названия команды.";

          let name = file.name.replace(".js", "");

          return `\`${name}\``;
        });

        let data = new Object();

        data = {
          name: dir.toUpperCase(),
          value: cmds.length === 0 ? "В процессе." : cmds.join(" "),
        };

        categories.push(data);
      });

      const embed = new MessageEmbed()
        .setTitle("📬 Нужна помощь? Здесь все команды:")
        .addFields(categories)
        .setDescription(
          `Используй \`${prefix}help\` и название команды, чтобы посмотреть для чего нужна данная команда! Например: \`${prefix}помощь профиль\`.`
        )
        .setFooter(
          `Выполнено для - ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        .setColor('BLUE');
      return message.channel.send(embed);
    } else {
      const command =
        client.commands.get(args[0].toLowerCase()) ||
        client.commands.find(
          (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
        );

      if (!command) {
        const embed = new MessageEmbed()
          .setTitle(`Неизвестная команда! Используй \`${prefix}help\` для всех команд!`)
          .setColor("FF0000");
        return message.channel.send(embed);
      }

      const embed = new MessageEmbed()
        .setTitle("Информация о команде:")
        .addField("Префикс:", `\`${prefix}\``)
        .addField(
          "Команда:",
          command.name ? `\`${command.name}\`` : "Нет названия команды."
        )
        .addField(
          "Можно заменить на:",
          command.aliases
            ? `\`${command.aliases.join("` `")}\``
            : "Нет замен."
        )
        .addField(
          "Использование:",
          command.usage
            ? `\`${prefix}${command.name} ${command.usage}\``
            : `\`${prefix}${command.name}\``
        )
        .addField(
          "Описание:",
          command.description
            ? command.description
            : "Нет описания для данной команды"
        )
        .setFooter(
          `Выполнено для - ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        .setColor('BLUE');
      return message.channel.send(embed);
    }
  },
};