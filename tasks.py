from invoke import task
from time import sleep
import urllib.request, webbrowser, os
import concurrent.futures as confu


def open_browser(addr):
    """
    Open browser
    """
    url = "http://" + addr
    while True:
        sleep(0.1)
        try:
            with urllib.request.urlopen(url) as res:
                if res:
                    break
        except urllib.error.HTTPError as err:
            pass
        except urllib.error.URLError as err:
            pass
    webbrowser.open(url, new=2, autoraise=True)


@task(help={
    "config-file": "Provide a specific MkDocs config",
    "dev-addr": "IP address and port to serve documentation locally (default: localhost:8000)"
})
def serve(c, config_file="mkdocs.yml", dev_addr="localhost:8000"):
    """
    Serve site and open browser
    """
    with confu.ThreadPoolExecutor(max_workers=os.cpu_count()) as executor:
        executor.submit(open_browser, dev_addr)
        c.run(f"mkdocs serve --config-file {config_file} --dev-addr {dev_addr}")
