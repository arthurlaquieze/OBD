import typer
from typing import Optional
from pathlib import Path

app = typer.Typer()


@app.command()
def hello(name: str):
    typer.echo(f"Hello {name}")


@app.command()
def run_config(config: Optional[Path] = typer.Option(None)):
    if config is None:
        typer.echo("No config file")
        raise typer.Abort()
    if config.is_file():
        text = config.read_text()
        typer.echo(f"Config file contents:\n{text}")
    elif config.is_dir():
        typer.echo("Config is a directory, will use all its config files")
    elif not config.exists():
        typer.echo("The config doesn't exist")


if __name__ == "__main__":
    app()
