trap 'exit 130' INT

echo "Building all slidev presentations"
mkdir -p dist/
rm -r dist/*

for item in $(find ./presentations -mindepth 1 -maxdepth 1 -type d); do
  cd "$item"
  directory_name=${PWD##*/}
  echo "Building $directory_name"

  pnpm build --base "/$directory_name/"
  if [ $? -ne 0 ]; then
    echo "Something went wrong when building $directory_name"
    exit 1
  else
    echo "Successfully built $directory_name"
  fi

  mv dist/ ../../dist/$directory_name
  cd ../../
done

echo "All presentations built successfully"
