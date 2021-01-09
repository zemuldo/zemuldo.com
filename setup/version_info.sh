VERSION=$(cat package.json | jq '.version')
GITHUB_SHA=$(git rev-parse HEAD)

cat <<EOF > release.json
{"VERSION" : $VERSION, "GITHUB_SHA":"$GITHUB_SHA"}
EOF