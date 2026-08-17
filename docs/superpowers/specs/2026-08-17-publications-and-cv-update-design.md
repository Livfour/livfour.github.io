# Publications and CV Update Design

## Goal

Add four 2026 papers to Junfeng Li's personal homepage and PDF CV while preserving the existing visual design, publication format, and unrelated in-progress work.

## Papers and Ordering

Add the papers at the top of the existing publication lists in this order:

1. DyPES-VLA: Learning Shared Dynamics Priors and Embodiment-Specific Control for Cross-Embodiment Manipulation
2. Robust-WAM: Bridging Generative Pretraining and Semantic Foresight in World-Action Models
3. SG-WAM: Text-Grounded and Spatial-aware Semantic Guidance for World-Action Models
4. Is Forward Prediction Enough? Physical State Grounding for JEPA World Models

Keep all existing publications after these entries and renumber the CV list accordingly.

## Homepage

Extend the `publications` data in `src/data.js`; do not redesign the publication card component. Use the author order and equal-contribution markers from the local manuscripts, and use the canonical arXiv title capitalization and identifiers:

- DyPES-VLA: `2608.06374`
- Robust-WAM: `2608.05903`
- SG-WAM: `2608.08839`
- PSG-JEPA: `2608.06799`

Every new entry receives a live arXiv Paper link. Add a Project link only when the URL has been verified to return a successful response:

- DyPES-VLA: `https://livfour.github.io/DyPES-VLA_RELEASE/`
- Robust-WAM: `https://haodong-yan.github.io/robust-wam-project-page/`
- PSG-JEPA: `https://haodong-yan.github.io/psg-jepa-project-page/`

Do not add an SG-WAM Project link because its intended URL currently returns 404. Do not add placeholder links or `coming soon` labels. No Code links are added unless a public code release is already available.

## CV

Add the same four papers to the top of the publication list in `resume/junfeng.tex`, using the current plain-text citation style. Underline Junfeng Li and preserve manuscript equal-contribution asterisks. Label each new paper as an arXiv preprint with its identifier and year 2026. Do not introduce per-paper hyperlinks or restructure the CV by year.

Rebuild both generated PDF copies:

- `resume/junfeng.pdf`
- `public/cv/index.pdf`

## Existing Work

The worktree already contains uncommitted visual changes in `src/App.jsx`, `src/index.css`, and `src/theme.jsx`, plus CV edits and generated PDFs. Preserve these changes. The implementation should edit only `src/data.js` and the publication portion of `resume/junfeng.tex`, then regenerate the two PDF files through the repository's existing build command.

## Verification

- Run the production React build and require a successful exit.
- Check that all four arXiv URLs and the three included project URLs resolve successfully.
- Compile the CV with the existing Make target.
- Confirm both generated PDF copies exist, are non-empty, and are valid PDF documents.
- Review the final diff to ensure no unrelated user changes were overwritten.
