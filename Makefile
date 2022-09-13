# A Self-Documenting Makefile: http://marmelab.com/blog/2016/02/29/auto-documented-makefile.html

SHELL = /bin/bash
OS = $(shell uname | tr A-Z a-z)

.PHONY: docs-serve
docs-serve: ## Start the live-reloading docs server.
	@mkdocs serve

.PHONY: docs-build
docs-build: ##  Build the documentation site.
	@mkdocs build

.PHONY: mkdocs-help
mkdocs-help: ## Print help message and exit.
	@mkdocs -h

.PHONY: help
.DEFAULT_GOAL := help
help:
	@grep -h -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-10s\033[0m %s\n", $$1, $$2}'