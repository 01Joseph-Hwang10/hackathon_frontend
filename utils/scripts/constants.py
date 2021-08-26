import os
from pathlib import Path
from subprocess import Popen

ROOT = Path(os.path.dirname(os.path.abspath(__file__))).parent.parent.absolute()

IMAGE_ROOT = os.path.join(Path(os.path.dirname(os.path.abspath(__file__))).parent.parent.parent.absolute(), 'images')

HOME = '/Users/hwanghyeongyu' # You need to change to your own root!

SCRIPT_ROOT = Path(os.path.dirname(os.path.abspath(__file__))).absolute()
