# Changing Configuration Fields

This guidance applies to adding fields, changing defaults, and moving or replacing existing fields in all visualization types and dashboards.

## 1. Shared Rules

Before changing a field, define what **existing configurations** should do and what **newly created configurations** should do. Those behaviors may differ. Preserve valid explicit choices, including `false` and `0`; do not use truthiness to decide whether a value was authored.

Keep these responsibilities distinct:

- **Migration:** preserve historical behavior when the configuration contract changes.
- **Creation default:** choose behavior for new configuration.
- **Input normalization:** handle incomplete or invalid configuration safely.

The editor and renderer should consume the same resolved configuration values. See [Resolve Effective Values Before Rendering](#6-resolve-effective-values-before-rendering).

The existing loading pipeline runs migrations before default hydration, so migrations can distinguish omitted fields from authored values. This ordering is guaranteed by the loading pipeline; changing a field does not require changing it. See [the migration system guide](./MIGRATION_SYSTEM.md) for implementation details.

For every scenario below, cover all applicable configuration paths, including standalone visualizations, dashboard children, and multi-dashboard configurations. Apply the shared [input-handling rules](#5-handling-incomplete-or-invalid-input) and [completion checklist](#7-editor-persistence-tests-and-documentation).

## 2. Adding a New Field

Give each meaningful behavior an explicit representation. For example, a new field could use:

```ts
lineEffectScope: 'adjacent' | 'outgoing'
```

Avoid making a missing property, `""`, or `null` the only way to select a supported behavior. Missing values may require a compatibility fallback, but the behavior should also have an explicit representation.

### Place the Creation Default

Decide what newly created configurations should use, then put that default in the appropriate place:

- **Visualization-level or nested-object field:** use the owning package's initial state or shared defaults for unconditional values. Put defaults that depend on visualization type, orientation, or dashboard context in the owning creation factory, such as `createNewChartConfig`. Default hydration fills missing object properties, but the effective new-configuration default may also depend on that factory's rules.
- **Field inside an array item**, such as a series, layer, annotation, or filter: add it to a typed factory or shared item-default definition used when creating that item. Default hydration does not fill properties inside array items.

Keep arrays empty when an empty array is the intended initial configuration. Do not add a sample item merely to define its defaults. Ensure all creation paths use the same default definition.

### Decide How Existing Configurations Receive the Field

Compare the intended existing behavior with the new default:

| Situation | Implementation |
| --- | --- |
| Existing configurations should use the new default | For object properties, default hydration is usually sufficient. For array-item properties, explicitly normalize or migrate existing items. |
| Existing configurations must retain behavior that differs from the new default | Write a migration assigning the explicit legacy value to existing configurations. Keep the new default in the object's creation path. |

If the new field replaces an existing representation, also follow [Moving or Replacing an Existing Field](#4-moving-or-replacing-an-existing-field).

## 3. Changing an Existing Field's Default

Separate configurations that explicitly save a value from those that omit the field. An explicit value equal to the old default may have been an intentional choice; do not assume it should change when the default changes.

Decide how omitted fields in existing configurations should behave:

| Intended behavior | Implementation |
| --- | --- |
| Retain the historical behavior | Write a migration that assigns the old effective value where the field was omitted. Determine that value from the historical runtime behavior and applicable context, rather than assuming the old initial-state value always applied. |
| Adopt the new default | Update the effective default. Object hydration may be sufficient; array-item fields still need normalization or migration because hydration does not fill their properties. |

For example, when changing a boolean default from `false` to `true`, preserve explicitly saved `false` and `true` values. If existing omissions must retain their historical `false` behavior, migrate those omissions to explicit `false`. If they should adopt `true`, let the effective default supply it. Newly created configurations should receive `true` in either case.

When changing a default, consider whether existing authors should be offered the new behavior through the [modernization system](./MODERNIZATION_SYSTEM.md#modernization-versus-config-migration). Recommended changes to valid presentation choices belong in an opt-in modernization recipe; compatibility migrations should preserve historical behavior. Updating the default for new configurations does not by itself require a modernization recipe, but offering that recommendation to existing configurations does.

Use the [creation-default placement rules](#place-the-creation-default) above. Check creation factories and context-dependent overrides as well as shared defaults. Inspect existing renderer and editor fallbacks and consolidate missing-value handling where possible, following [Resolve Effective Values Before Rendering](#6-resolve-effective-values-before-rendering).

## 4. Moving or Replacing an Existing Field

Use these rules when renaming a field, moving it to another object, or changing its representation, meaning, or allowed values:

- Define how old values map to the new representation and implement that translation in a migration.
- Handle old-only, new-only, both-present, and neither-present configurations. Define precedence when both representations exist and conflict.
- Preserve valid explicit choices during translation, including `false`, `0`, and empty values when supported. Use presence or validity checks rather than truthiness.
- Update runtime readers, editor writers, and exports consistently. Define whether the old representation remains accepted and when it is removed from saved configuration.

See [the migration system guide](./MIGRATION_SYSTEM.md) for migration mechanics.

## 5. Handling Incomplete or Invalid Input

Specify what happens when the field is missing, `""`, `null`, or unrecognized.

Default hydration fills missing or `undefined` properties in plain objects. It preserves `null`, `""`, unrecognized enum values, and malformed parent values; it does not validate or repair them. For example, `legend: null` remains `null`, so hydration cannot fill its child properties.

TypeScript does not validate imported JSON. Normalize or safely handle incomplete input at the loading boundary; a version-gated migration does not guarantee that every configuration reaching runtime contains the field. Choose fallback behavior consistent with the compatibility policy for that field.

## 6. Resolve Effective Values Before Rendering

Resolve missing or invalid configuration values before the editor and renderer consume them whenever possible. Both should use the same effective value.

Avoid defining independent behavioral fallbacks in renderer logic or editor controls. An editor fallback can display a selection that differs from the rendered behavior or the saved configuration.

When adding or changing a field, inspect existing renderer and editor fallbacks. Consolidate missing-value handling in input normalization rather than introducing additional defaults at each point of use.

When resolution requires runtime data or layout context, use a shared resolver wherever the behavior is interpreted. Keep defensive rendering guards focused on handling unusable input safely rather than choosing an alternative configuration behavior.

## 7. Editor, Persistence, Tests, and Documentation

When a behavior is intended to be selectable, expose it in the relevant editor and save its explicit value. Opening or editing an existing configuration must not silently replace its behavior with the new default. Exporting and reloading must preserve the selected value.

Use targeted tests to verify:

- Existing configurations retain their intended behavior.
- New configurations receive the intended default.
- Explicit choices survive editing, export, and reload.
- Missing and invalid values follow the defined policy, including for current-version configurations that skip migrations.
- For missing and invalid values, the editor's displayed selection, rendered behavior, and saved/reloaded behavior agree.
- Relevant nested-item and dashboard paths are covered.
- For default changes, omitted values and explicit values equal to the old default follow their respective policies.
- For moves or replacements, old-only, new-only, both-present (including conflicts), and neither-present configurations follow the mapping and precedence rules.

Update the owning package's `CONFIG.md` with the allowed values, new-configuration default, and behavior when the field is omitted. For moves or replacements, document any supported legacy representation consumers need to understand. Document shared fields in the shared configuration documentation according to the repository's [ownership rules](./CONFIG_DOCUMENTATION_GUIDE.md).
