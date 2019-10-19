workflow "Publish to GRC" {
  on = "push"
  resolves = "Publish to GRC"
}

action "Setup Google Cloud" {
  uses = "zemuldo/grc-docker-build-push@master"
}