# Serve and open with invoke



## invoke

> Invoke is a Python (2.7 and 3.4+) library for managing shell-oriented subprocesses and organizing executable Python code into CLI-invokable tasks. It draws inspiration from various sources (make/rake, Fabric 1.x, etc) to arrive at a powerful & clean feature set.

- [pyinvoke/invoke: Pythonic task management & command execution.](https://github.com/pyinvoke/invoke)



## Serve and open

Run `mkdocs serve` and open browser automatically.

```sh
inv serve
```

Serving on [localhost:8000](http://localhost:8000)

```sh
# set IP and port
inv serve --dev-addr 'localhost:5000'
# set config file
inv serve --config-file ./mkdocs-sample.yml
```



## Show all tasks

```sh
$ inv --list
Available tasks:

  serve    Serve site and open browser
```

Show task help.

```sh
$ inv serve --help
Usage: inv[oke] [--core-opts] serve [--options] [other tasks here ...]

Docstring:
  Serve site and open browser

Options:
  -c STRING, --config-file=STRING   Provide a specific MkDocs config
  -d STRING, --dev-addr=STRING      IP address and port to serve documentation locally (default: localhost:8000)
```

Tasks are defined by [tasks.py](https://github.com/peaceiris/mkdocs-material-boilerplate/blob/main/tasks.py)
