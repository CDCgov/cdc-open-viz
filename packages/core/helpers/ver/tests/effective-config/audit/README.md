# Effective-config component parity audit

Run the opt-in audit from the repository root:

```sh
node scripts/audit-effective-config-parity.mjs
```

The audit renders all 53 configurations in the effective-config corpus through the real editor-mode visualization components and captures the config each component supplies to Advanced Options. Markup Include has no Advanced Options control, so its config is captured at the real base editor-panel handoff instead. The script compares production-stripped JSON with the checked-in characterization fixture.

Results are written to `/tmp/cove-effective-config-audit/report.md`. The command never updates checked-in fixtures and is excluded from normal test discovery.

Sparse standalone cases that omit data receive an empty data array so the real component can finish its loading state and expose its editor panel. That audit-only data field is removed from both sides before comparison. Structurally incomplete synthetic map and multi-dashboard inputs similarly receive only the minimum nested objects needed to mount; those additions are projected back out at the characterization boundary.

The legacy Waffle case with no `visualizationType` is mounted directly through the Waffle package because the generic visualization router requires that field before it can choose the package. This lets the audit verify the package's own `4.26.5` compatibility repair.

For dashboards, the comparison also removes the runtime object and the legacy compatibility dataset/data fields that the wrapper generates while loading data. Those fields occur after the characterization suite's explicit pre-remote-loading and pre-generated-runtime boundary.
