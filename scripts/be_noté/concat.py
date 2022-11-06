# import os
# files = [f for f in os.listdir('.') if os.path.]

from pathlib import Path

files = [f for f in Path("./").iterdir() if f.suffix == ".sql" and f.stem != "script"]

files.sort(key=lambda file: file.stem)
# print(files)

with open(Path("./script.sql"), "w") as out:
    for file in files:
        with open(file) as f:
            out.write(f"-- {file.stem}\n")
            out.writelines(f.readlines())
            out.write("\n")
