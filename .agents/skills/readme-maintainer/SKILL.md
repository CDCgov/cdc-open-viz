---
description: "Review and maintain README.md for accuracy against the current repository contents"
name: "README Maintainer"
argument-hint: "Optional focus, for example: refresh usage, prerequisites, or do a full accuracy pass"
agent: "agent"
---
Maintain [README.md](../../README.md) with an accuracy-first pass.

Requirements:
- Inspect the current workspace before editing.
- Prefer minimal changes that correct drift between the README and checked-in files.
- Verify script names, paths, prerequisites, usage examples, and any documented generated or runtime directories.
- Replace unresolved placeholders (identified by brackets {}) in README metadata when the intended value can be inferred from the repository context; otherwise call out the uncertainty explicitly with a TODO.
- When filling `{Keywords}`, use only exact terms from the approved taxonomy provided in the following JSON that has the terms grouped by top-level categories:

{
    "Public Health Surveillance & Early Detection": [
        "surveillance", "monitoring", "biosurveillance", "outbreak", "cluster",
        "disease tracking", "disease surveillance", "epidemiology", "epidemiologic",
        "syndromic", "case reporting", "case notification", "case-based",
        "vital statistics", "birth certificate", "death certificate",
        "mortality", "morbidity", "incidence", "prevalence",
        "nndss", "reportable", "notifiable", "sentinel", "signal detection"
    ],
    "Disease Prevention, Health Promotion & Community Programs": [
        "prevention", "preventive", "risk reduction", "harm reduction",
        "screening", "early detection", "health promotion", "health improvement",
        "wellness", "behavior change", "behavioral", "intervention",
        "vaccination", "immunization", "vaccine", "immunisation",
        "health education", "outreach", "community", "community program",
        "communication", "health communication", "campaign", "social marketing",
        "guidelines", "recommendations", "best practices",
        "maternal health", "child health", "school health"
    ],
    "Clinical & Healthcare System Support": [
        "clinical", "clinical support", "patient", "provider", "physician",
        "nursing", "nurse", "clinic", "hospital", "care team",
        "ehr", "electronic health record", "emr", "chart", "medical record",
        "treatment", "care management", "care coordination",
        "workflow", "order entry", "cpoe", "rounding",
        "telehealth", "telemedicine", "virtual care",
        "triage", "diagnosis", "clinical decision support", "cds",
        "clinical quality", "quality measure", "hitrust", "joint commission"
    ],
    "Data Exchange, Standards & Interoperability": [
        "interoperability", "data exchange", "data sharing", "integration",
        "interface", "interfaces", "api", "rest api", "graphql",
        "hl7", "hl7v2", "v2", "fhir", "cda", "ccda",
        "health information exchange", "hie", "edi",
        "terminology", "vocabulary", "coding system", "codeset",
        "loinc", "snomed", "icd", "icd-10", "rxnorm",
        "xml", "json", "csv", "ndjson",
        "message mapping", "schema", "schema validation"
    ],
    "Analytics, Research & Public Health Decision Support": [
        "analytics", "analysis", "data analysis", "data science",
        "reporting", "reports", "dashboard", "scorecard", "kpi",
        "business intelligence", "bi", "visualization", "chart", "graph",
        "statistics", "statistical", "model", "modeling", "forecasting",
        "projection", "scenario", "trend", "time series",
        "research", "study", "cohort", "evaluation", "outcome evaluation",
        "survey", "census", "questionnaire",
        "machine learning", "ml", "ai", "artificial intelligence",
        "natural language processing", "nlp",
        "risk stratification", "decision support", "policy analysis"
    ],
    "Laboratory Science, Genomics & Advanced Molecular Detection": [
        "laboratory", "lab", "public health lab", "phl",
        "genomics", "genomic", "genotype",
        "sequencing", "sequence", "ngs", "next-generation sequencing",
        "molecular", "pcr", "assay", "serology", "viral load",
        "bioinformatics", "pipeline", "alignment", "variant calling",
        "lims", "laboratory information management",
        "specimen", "sample", "isolate", "strain",
        "amd", "advanced molecular detection", "phylogenetic"
    ],
    "Public Health Emergency Preparedness & Response": [
        "emergency", "emergencies", "emergency response", "response",
        "preparedness", "readiness", "resilience", "all-hazards",
        "incident management", "incident command", "ics",
        "emergency operations", "eoc", "operations center",
        "rapid response", "surge", "deployment",
        "biopreparedness", "bioterrorism", "anthrax",
        "contingency plan", "emergency plan", "continuity of operations",
        "tabletop exercise", "drill", "exercise",
        "crisis", "disaster", "hurricane", "flood", "earthquake", "wildfire"
    ],
    "Administrative, Financial & Program Operations": [
        "administrative", "administration", "operations", "operational",
        "program management", "project management", "pmo",
        "hr", "human resources", "personnel", "staffing",
        "training", "onboarding", "performance", "pmap",
        "budget", "finance", "financial", "cost", "costing",
        "billing", "claims", "revenue cycle",
        "procurement", "acquisition", "contract", "contracting",
        "grant", "grant management", "cooperative agreement", "co-ag",
        "governance", "compliance", "policy", "sop",
        "timekeeping", "travel", "inventory", "asset management"
    ]
}

- When filling `{Project Status}` placeholder it should be replaced with one of the following:
-- Initiation
-- Development
-- Operations and Maintenance (O\&M)
-- Retired
- Prefer taxonomy terms that describe the repository's operational purpose; avoid inventing synonyms, category labels, or implementation-detail keywords unless they appear verbatim in the taxonomy.
- Preserve the existing tone and structure unless a small reorganization improves clarity.
- Update README.md directly when inaccuracies are found.
- If a detail depends on external infrastructure and cannot be verified from the repo, keep the wording explicit about that uncertainty.
- Use the exact markdown outline and section order provided below between "***** START README TEMPLATE *****" and "***** END README TEMPLATE *****":

```md
***** START README TEMPLATE *****
# {Project Name}

> {Project Overview}

---

## Required Project Organization Information
- Organization: Office of Communications (OC)
- Contact Email: \[imtech@cdc.gov](mailto:imtech@cdc.gov)
- Status: {Project Status}
- Keywords: {Mission Area Keywords}
- Version: yyyyMMdd.HHmmss

## Other Project Organization Information
- Point of Contact: \[{Project Tech Lead Name}](mailto:{Project Tech Lead Email})
- Related Project(s): {Related Projects}
- Program Official: \[{FTE Lead Name}](mailto:{FTE Lead Email})

---

## Project Description

{Project Description}

- **What does it do?**
- **What problem does it solve?**
- **Who is it for?**

---

## Project Status

This project is currently in \*\*Production\*\*.

| Environment | Status |
|-------------|--------|
| Development | Active |
| Staging     | Active |
| Production  | Active |

---

## Features

{Project Features - Bullet List}

---

## Prerequisites

Before you begin, ensure you have the following installed:

{Project Prerequisites - Bullet List}

### Required Credentials

{Project Required Credentials - Optional Bullet List Section if Applicable}

---

## Installation

{Installation Instructions}

## Usage

{Usage Instructions}

---

## Configuration

{Configuration Settings}

---

## Architecture

{Architecture - description or pointer to separate documentation under \[ARCHITECTURE.md](./docs/ARCHITECTURE.md) if lengthy}

---

## Testing

{Testing Steps - description or pointer to separate documentation under \[TESTING.md](./docs/TESTING.md) if lengthy}

---

## API Documentation {if applicable otherwise don't include section}

{API Documentation - description or pointer to separate documentation under \[API.md](./docs/API.md) if lengthy}

---

## Logging {if applicable otherwise don't include section}

{Logging Documentation}

---

## Security

### Reporting a Vulnerability

**Do not open a public GitHub issue for security vulnerabilities.**

Please report security issues by emailing **[imtech@cdc.gov](mailto:imtech@cdc.gov)**.

### Security Considerations

### Sensitive Data

---

## Troubleshooting

---

## Accessibility

This project is committed to being accessible to all users as applicable.

- **Section 508 Compliance:** Not Applicable (Backend Service)
- **WCAG 2.1 Level:** Not Applicable (Backend Service)
- To report an accessibility issue, contact \[imtech@cdc.gov].

---

## Disclaimer

This project is maintained by CDC. It is provided "as is" without warranty of any kind. References to any specific commercial product, process, or service do not constitute or imply endorsement by the U.S. Government.

---

## Development

### Building the Solution (if applicable)

### Project Structure

### Dependencies

## Contributing

This is an internal CDC project. For contributions or questions, contact the Point of Contact or email imtech@cdc.gov.

---

## Changelog

See the git commit history for detailed changes:

```bash
git log --oneline
```

***** END README TEMPLATE *****

```

---

Additional instructions:

- Infer the project name from the repository folder, package metadata, or existing docs.
- Include fenced code blocks for commands.
- For Repository Structure, summarize the main folders in a short bullet list.
- For Testing, include the actual test commands only if found in the codebase.
- For Build and Deployment, include only commands or workflows supported by the repo.
- For Architecture Notes, summarize major modules/components only if they can be inferred confidently.
- After editing, provide a short summary of what was inferred versus what remains TODO.


Deliverables:
- A corrected README.md when changes are needed.
- A concise summary of what changed and any remaining assumptions.


