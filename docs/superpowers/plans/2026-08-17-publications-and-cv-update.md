# Publications and CV Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add four verified 2026 papers to the personal homepage and PDF CV, exposing only live paper and project links.

**Architecture:** Keep the existing React publication-card component unchanged and extend only its `publications` data source. Mirror the same ordered citations in the LaTeX publication block, preserve all existing user edits, and regenerate both checked-in PDF copies through the existing Make target.

**Tech Stack:** React 19, Material UI, Create React App, LaTeX/latexmk, Make, curl

## Global Constraints

- Add papers in this order: DyPES-VLA, Robust-WAM, SG-WAM, PSG-JEPA, followed by all existing publications.
- Use canonical arXiv titles, author order, identifiers, and 2026 dates.
- Add Project links only for DyPES-VLA, Robust-WAM, and PSG-JEPA; SG-WAM has no Project or Code link.
- Do not add placeholder URLs or `coming soon` text.
- Preserve existing uncommitted changes in `src/App.jsx`, `src/index.css`, `src/theme.jsx`, `resume/junfeng.tex`, and the generated PDFs.
- Do not commit implementation files because the CV source and generated PDFs already contain user-authored changes that must remain unseparated.

---

### Task 1: Add the Four Homepage Publications

**Files:**
- Modify: `src/data.js:41-85`
- Verify: `src/App.jsx:170-243`

**Interfaces:**
- Consumes: the existing `publications: Array<{title, authors, venue, paper?, home_page?, github?}>` contract rendered by `PublicationCard`.
- Produces: four new publication objects at indices 0 through 3; existing objects retain their relative order after them.

- [ ] **Step 1: Verify the entries are initially absent**

Run:

```bash
! rg -q '2608\.06374|2608\.05903|2608\.08839|2608\.06799' src/data.js
```

Expected: exit status 0, proving none of the four identifiers is already present.

- [ ] **Step 2: Insert the exact publication objects before DualCoT-VLA**

Add this content immediately after `export const publications = [`:

```javascript
  {
    title:
      "DyPES-VLA: Learning Shared Dynamics Priors and Embodiment-Specific Control for Cross-Embodiment Manipulation",
    authors:
      "Junfeng Li*, Junjie He*, Zhide Zhong*, Yangyang Zheng*, Pingyue Sheng, Jiayu Dong, Ruixin Li, Haodong Yan, Jiaguan Zhu, Tianran Zhang, Runze Yu, Wen Chen, Liuqing Yang, Yuxiang Gao, Haoang Li",
    venue: "arXiv preprint arXiv:2608.06374, 2026.",
    paper: "https://arxiv.org/abs/2608.06374",
    home_page: "https://livfour.github.io/DyPES-VLA_RELEASE/",
  },
  {
    title:
      "Robust-WAM: Bridging Generative Pretraining and Semantic Foresight in World-Action Models",
    authors:
      "Haodong Yan*, Junfeng Li*, Junjie He*, Zhide Zhong, MingMing Yu, Wenxuan Song, Jiaguan Zhu, Yangyang Zheng, Yuqiao Du, Jiadi You, Yingjie Cai, Xu Yan, Guanyi Zhao, Bingbing Liu, Haoang Li",
    venue: "arXiv preprint arXiv:2608.05903, 2026.",
    paper: "https://arxiv.org/abs/2608.05903",
    home_page: "https://haodong-yan.github.io/robust-wam-project-page/",
  },
  {
    title:
      "SG-WAM: Text-Grounded and Spatial-aware Semantic Guidance for World-Action Models",
    authors:
      "Junjie He*, Junfeng Li*, Zhide Zhong*, Haodong Yan*, Ruixin Li, Yangyang Zheng, Jiaguan Zhu, Tianran Zhang, Yuqiao Du, Wen Chen, Shunbo Zhou, Haoang Li",
    venue: "arXiv preprint arXiv:2608.08839, 2026.",
    paper: "https://arxiv.org/abs/2608.08839",
  },
  {
    title:
      "Is Forward Prediction Enough? Physical State Grounding for JEPA World Models",
    authors:
      "Haodong Yan*, Jiaguan Zhu*, Mingyuan Jia, Ruiqing Yin, Junjie He, Zhide Zhong, Junfeng Li, Jinxuan Lu, Hengtao Li, Tianran Zhang, Jiayi Chen, Wenxuan Song, Wen Chen, Yuxiang Gao, Haoang Li",
    venue: "arXiv preprint arXiv:2608.06799, 2026.",
    paper: "https://arxiv.org/abs/2608.06799",
    home_page: "https://haodong-yan.github.io/psg-jepa-project-page/",
  },
```

- [ ] **Step 3: Verify the data contract and link policy**

Run:

```bash
for id in 2608.06374 2608.05903 2608.08839 2608.06799; do
  test "$(rg -o "$id" src/data.js | wc -l | tr -d ' ')" = "2"
done
test "$(rg -n 'home_page:' src/data.js | wc -l | tr -d ' ')" = "6"
! rg -qi 'coming soon' src/data.js
```

Expected: exit status 0. Each new identifier appears once in the venue and once in the URL; total Project links rise from three to six; no placeholder text exists.

### Task 2: Mirror the Publications in the CV

**Files:**
- Modify: `resume/junfeng.tex:197-227`

**Interfaces:**
- Consumes: the canonical metadata added to `src/data.js` and the existing LaTeX `itemize` citation format.
- Produces: nine numbered citations, with the four new arXiv papers numbered `[1]` through `[4]` and the five existing citations renumbered `[5]` through `[9]`.

- [ ] **Step 1: Verify the CV entries are initially absent**

Run:

```bash
! rg -q '2608\.06374|2608\.05903|2608\.08839|2608\.06799' resume/junfeng.tex
```

Expected: exit status 0.

- [ ] **Step 2: Insert the exact four citations at the top of the itemize block**

Insert after `\begin{itemize}`:

```latex
    \item[\textbf{[1]}] \underline{Junfeng Li*}, Junjie He*, Zhide Zhong*, Yangyang Zheng*,
      Pingyue Sheng, Jiayu Dong, Ruixin Li, Haodong Yan, Jiaguan Zhu, Tianran Zhang, Runze Yu,
      Wen Chen, Liuqing Yang, Yuxiang Gao, Haoang Li,
      ``DyPES-VLA: Learning Shared Dynamics Priors and Embodiment-Specific Control for Cross-Embodiment Manipulation,''
      \textit{arXiv preprint arXiv:2608.06374}, 2026.

    \item[\textbf{[2]}] Haodong Yan*, \underline{Junfeng Li*}, Junjie He*, Zhide Zhong,
      MingMing Yu, Wenxuan Song, Jiaguan Zhu, Yangyang Zheng, Yuqiao Du, Jiadi You, Yingjie Cai,
      Xu Yan, Guanyi Zhao, Bingbing Liu, Haoang Li,
      ``Robust-WAM: Bridging Generative Pretraining and Semantic Foresight in World-Action Models,''
      \textit{arXiv preprint arXiv:2608.05903}, 2026.

    \item[\textbf{[3]}] Junjie He*, \underline{Junfeng Li*}, Zhide Zhong*, Haodong Yan*,
      Ruixin Li, Yangyang Zheng, Jiaguan Zhu, Tianran Zhang, Yuqiao Du, Wen Chen, Shunbo Zhou, Haoang Li,
      ``SG-WAM: Text-Grounded and Spatial-aware Semantic Guidance for World-Action Models,''
      \textit{arXiv preprint arXiv:2608.08839}, 2026.

    \item[\textbf{[4]}] Haodong Yan*, Jiaguan Zhu*, Mingyuan Jia, Ruiqing Yin, Junjie He,
      Zhide Zhong, \underline{Junfeng Li}, Jinxuan Lu, Hengtao Li, Tianran Zhang, Jiayi Chen,
      Wenxuan Song, Wen Chen, Yuxiang Gao, Haoang Li,
      ``Is Forward Prediction Enough? Physical State Grounding for JEPA World Models,''
      \textit{arXiv preprint arXiv:2608.06799}, 2026.
```

- [ ] **Step 3: Renumber the existing citations without changing their content**

Change only the item labels:

```text
DualCoT-VLA: [1] -> [5]
VLA-OPD:     [2] -> [6]
FlowVLA:     [3] -> [7]
Open-world:  [4] -> [8]
SCSV:        [5] -> [9]
```

- [ ] **Step 4: Verify identifiers, numbering, and author emphasis**

Run:

```bash
for id in 2608.06374 2608.05903 2608.08839 2608.06799; do
  test "$(rg -o "$id" resume/junfeng.tex | wc -l | tr -d ' ')" = "1"
done
for n in 1 2 3 4 5 6 7 8 9; do
  rg -qF "\\item[\\textbf{[$n]}]" resume/junfeng.tex
done
test "$(rg -oF '\\underline{Junfeng Li' resume/junfeng.tex | wc -l | tr -d ' ')" = "9"
```

Expected: exit status 0, with one arXiv citation for each new paper, all nine item labels, and Junfeng Li underlined in every citation.

### Task 3: Build and Validate Both Deliverables

**Files:**
- Generate: `build/`
- Regenerate: `resume/junfeng.pdf`
- Regenerate: `public/cv/index.pdf`

**Interfaces:**
- Consumes: `src/data.js`, the existing React app, `resume/junfeng.tex`, and `resume/Makefile`.
- Produces: a successful production website build and two identical valid PDF files.

- [ ] **Step 1: Build the production website**

Run:

```bash
npm run build
```

Expected: exit status 0 and a production bundle under `build/`.

- [ ] **Step 2: Compile and publish the CV copies**

Run:

```bash
make resume
```

Expected: `latexmk` exits 0 and the Makefile copies the compiled PDF to both destinations.

- [ ] **Step 3: Verify the PDF artifacts**

Run:

```bash
file resume/junfeng.pdf public/cv/index.pdf
cmp resume/junfeng.pdf public/cv/index.pdf
pdfinfo resume/junfeng.pdf | rg '^(Pages|Page size|File size):'
test -s resume/junfeng.pdf
test -s public/cv/index.pdf
```

Expected: both files are PDFs, byte-identical, and non-empty; `pdfinfo` reports their page count, dimensions, and file size for review.

- [ ] **Step 4: Verify every published external link**

Run:

```bash
for url in \
  https://arxiv.org/abs/2608.06374 \
  https://arxiv.org/abs/2608.05903 \
  https://arxiv.org/abs/2608.08839 \
  https://arxiv.org/abs/2608.06799 \
  https://livfour.github.io/DyPES-VLA_RELEASE/ \
  https://haodong-yan.github.io/robust-wam-project-page/ \
  https://haodong-yan.github.io/psg-jepa-project-page/; do
  test "$(curl -L --silent --show-error --output /dev/null --write-out '%{http_code}' "$url")" = "200"
done
```

Expected: exit status 0; all seven included links return HTTP 200.

- [ ] **Step 5: Review the final diff without overwriting prior work**

Run:

```bash
git diff --check
git diff -- src/data.js resume/junfeng.tex
git status --short --branch
```

Expected: no whitespace errors; the source diff shows only four homepage objects, four CV citations, and citation renumbering in addition to the user's pre-existing CV edits. Existing changes in `src/App.jsx`, `src/index.css`, and `src/theme.jsx` remain present.
