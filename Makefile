# Project Makefile

.PHONY: resume resume-xelatex resume-watch resume-clean

resume:
	$(MAKE) -C resume

resume-xelatex:
	$(MAKE) -C resume xelatex

resume-watch:
	$(MAKE) -C resume watch

resume-clean:
	$(MAKE) -C resume clean
