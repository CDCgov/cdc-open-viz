# Effective-config characterization fixtures

This corpus is an opt-in development audit, not a normal blocking test. It snapshots fully hydrated package configs, so intentional changes to current package defaults can produce broad diffs even when migration behavior is unchanged.

To run the adapter-level comparison in strict mode, use:

```sh
COVE_RUN_EFFECTIVE_CONFIG_CHARACTERIZATION=1 yarn test-unit:quick -- --scope @cdc/core -- helpers/ver/tests/effectiveConfig.characterization.test.ts
```

To compare the fixtures with the config handed off by the real visualization components and write a non-blocking report, run:

```sh
node scripts/audit-effective-config-parity.mjs
```

To deliberately record the repository's current adapter output, run:

```sh
COVE_GENERATE_EFFECTIVE_CONFIG_FIXTURES=1 yarn test-unit:quick -- --scope @cdc/core -- helpers/ver/tests/effectiveConfig.characterization.test.ts
```

Fixture generation automatically enables the opt-in test. Review every resulting JSON diff before committing it; do not accept broad fixture updates solely to make the audit green. Promote confirmed compatibility requirements to focused, normally discovered tests. The generator freezes time and uses the same adapters as the assertion suite.
