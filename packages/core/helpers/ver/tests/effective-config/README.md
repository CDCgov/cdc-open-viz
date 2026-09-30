# Effective-config characterization fixtures

Normal tests only read these fixtures. To deliberately record the repository's current output, run:

```sh
COVE_GENERATE_EFFECTIVE_CONFIG_FIXTURES=1 yarn test-unit:quick -- --scope @cdc/core -- helpers/ver/tests/effectiveConfig.characterization.test.ts
```

Review every resulting JSON diff before committing it. The generator freezes time and uses the same adapters as the assertion suite.
