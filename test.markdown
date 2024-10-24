# folders sort
readme_index:
  with_frontmatter: true

meta:
  key1: value1
  key2: value2
  .
  .
  .

google:
  gtag:
  adsense:
  site_verification:

# GDPR compliant alternative to Google Analytics
mouseflow:
  project_api_key:

posthog:
  project_api_key:

telemetry:
  app_id:
  user_identifier:

umami:
  website_id:

mathjax: # this will prased to json, default: {}

# NOTE: mermaid custom link are no longer supported
# instead mermaid is updated to the lastest version
# available through cdn.jsdelivr.net
# mermaid:
#   custom:     # mermaid link
#   initialize: # this will prased to json, default: {}

scss:   # also _includes/extra/styles.scss
script: # also _includes/extra/script.js

translate:
  # shortcodes
  danger:
  note:
  tip:
  warning:
  # 404
  not_found:
  # copyright
  revision:
  # search
  searching:
  search:
  search_docs:
  search_results:
  search_results_found: # the "#" in this translate will replaced with results size!
  search_results_not_found:

plugins:
  - jemoji
  - jekyll-avatar
  - jekyll-mentions
