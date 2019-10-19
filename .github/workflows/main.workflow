workflow "Run gcloud command" {
  on = "push"
  resolves = "GCP List Clusters"
}

action "GCP Authenticate" {
  uses = "actions/gcloud/auth@master"
  secrets = ["GCLOUD_AUTH"]
}

action "GCP List Clusters" {
  needs = ["GCP Authenticate"]
  uses = "actions/gcloud/cli@master"
  args = "container clusters list"
}