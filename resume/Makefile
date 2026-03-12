# LaTeX Resume Compilation
# Usage:
#   make          - Compile junfeng.tex to PDF (pdflatex)
#   make xelatex  - Compile with xelatex engine (for resume.cls / CJK)
#   make watch    - Auto-recompile on file changes
#   make clean    - Remove intermediate files

TEX = junfeng
LATEXMK = latexmk
BUILDDIR = ../build/resume

.PHONY: all xelatex watch clean

all:
	@mkdir -p $(BUILDDIR)
	$(LATEXMK) -pdf -g -outdir=$(BUILDDIR) $(TEX).tex
	@cp $(BUILDDIR)/$(TEX).pdf ./$(TEX).pdf
	@mkdir -p ../public/cv
	@cp $(BUILDDIR)/$(TEX).pdf ../public/cv/index.pdf

xelatex: $(TEX).tex
	@mkdir -p $(BUILDDIR)
	$(LATEXMK) -xelatex -outdir=$(BUILDDIR) $(TEX).tex
	@cp $(BUILDDIR)/$(TEX).pdf ./$(TEX).pdf

watch:
	@mkdir -p $(BUILDDIR)
	$(LATEXMK) -pdf -pvc -outdir=$(BUILDDIR) $(TEX).tex

clean:
	rm -rf $(BUILDDIR)
	rm -f $(TEX).pdf
