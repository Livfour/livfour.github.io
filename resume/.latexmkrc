# latexmk configuration for resume

# Use pdflatex by default
$pdf_mode = 1;

# Enable SyncTeX for editor forward/inverse search
$pdflatex = 'pdflatex -interaction=nonstopmode -synctex=1 %O %S';

# XeLaTeX command (used with latexmk -xelatex)
$xelatex = 'xelatex -interaction=nonstopmode -synctex=1 %O %S';

# Clean up extra extensions
$clean_ext = 'bbl run.xml synctex.gz';
