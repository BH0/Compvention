#!/usr/bin/env node
const fs = require("fs");
const program = require("commander");

program
  .option("-n, --name <type>", "comp name")
  .option("-ct, --component-type <type>", "functional or class");

program.parse(process.argv);

if (program.name && program.componentType) {
  fs.readFile(
    `bin/${program.componentType}-component-template/index.js`,
    "utf-8",
    (err, component) => {
      fs.mkdir(`${program.name}`, err => {
        console.log("err: " + err);
        fs.writeFile(
          `${program.name}/${program.name}.js`,
          component.replace(new RegExp("CompName", "g"), program.name),
          err => console.log("err: " + err)
        );
      });
    }
  );
}

