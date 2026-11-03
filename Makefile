.DEFAULT_GOAL := help

PROJECT_DIR := $(abspath $(dir $(lastword $(MAKEFILE_LIST))))
STAGING_DIR ?= $(abspath $(PROJECT_DIR)/../fitoutpermits-df-staging)
PROD_DIR ?= $(abspath $(PROJECT_DIR)/../fitoutpermit-prod-v2)
CONFIRM ?= 0

.PHONY: help install dev build start lint typecheck check deploy sync-to-prod-dry-run sync-to-prod

help:
	@echo "FitOutPermits — deployment commands"
	@echo "  make install                 Install locked dependencies"
	@echo "  make dev                     Start the development server"
	@echo "  make build                   Export the static site to out/"
	@echo "  make start                   Preview out/ with Cloudflare rules"
	@echo "  make lint / make typecheck   Run individual code checks"
	@echo "  make check                   Lint, type-check, build, verify SEO and GTM"
	@echo "  make deploy                  Check and deploy using local wrangler.toml"
	@echo "  make sync-to-prod-dry-run    Preview staging → production repo changes"
	@echo "  make sync-to-prod            Preview, confirm, then sync (no git push)"
	@echo "  Override destination: PROD_DIR=/absolute/path/to/production-repo"

install:
	npm ci

dev:
	npm run dev

build:
	npm run build

start:
	npm run start

lint:
	npm run lint

typecheck:
	npm run typecheck

check:
	npm run test:sync
	npm run check

deploy:
	npm run pages:deploy

sync-to-prod-dry-run:
	@bash "$(PROJECT_DIR)/scripts/sync-to-prod.sh" "$(STAGING_DIR)" "$(PROD_DIR)" --dry-run

sync-to-prod:
	@CONFIRM="$(CONFIRM)" bash "$(PROJECT_DIR)/scripts/sync-to-prod.sh" "$(STAGING_DIR)" "$(PROD_DIR)" --apply
