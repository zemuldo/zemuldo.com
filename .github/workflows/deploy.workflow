action “git.master” {
  uses = zemuldo/grc-docker-build-push@master”
  needs = [“ruby.rubocop”, “ruby.rspec”]
  args = “branch master”
}