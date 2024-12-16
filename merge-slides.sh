trap 'exit 130' INT

echo "Copying all slidev presentations"
rm -r dist/
mkdir dist/

cp -r homepage/dist/* dist/

for item in $(find ./presentations -mindepth 1 -maxdepth 1 -type d); do
  cd "$item"
  directory_name=${PWD##*/}
  echo "Copying $directory_name"

  mv dist/ ../../dist/$directory_name
  cd ../../
done

echo "All presentations copied successfully"
