# ESLint / Prettier Help

## Prettier Help:

### Setting Up Format On Save

- Run yarn install to get updated dependencies for prettier.

- If you are a vs-code user you’ll want to enable format on save in your user settings (cmd+shift+p -> search “Open User Settings”)

`editor.formatOnSave": true​`

- Now, you should see the code format when saving (ctrl/cmd+s). There might be other settings to update, ie switching from one formatter another, make sure you’re using prettier in vs-code, and if you hit any road blocks reach out to a direct project contributor.

- Verify the rules found in .prettierrc are being applied to your code.
- If you have additional recommendations/opinions for code formatting post them here.

## ES Lint Help:

### Fixing Problems Before Comitting

- When running a package, you should see the problems panel (next to terminal) populate with potential fixes. You’ll want to filter this down so that the `./dist` and `./node_modules` folders aren’t showing issues using `​!**/node_modules, !**/dist`​ in the filter panel

Use `​// eslint-disable-line`​ and `​// eslint-disable-next-line​ sparingly`. You might also want to consider ignoring a single instead of everything ​ie. // `eslint-disable-next-line [rule name here]​`

Additionally, you can run a dry run to see the same output using:

`npx eslint --fix-dry-run [file_pattern]`

If you don’t see any errors you should be able to commit without any issues. The husky checks for prettier and eslint should turn green, your code will be formatted and pushed to Github.
