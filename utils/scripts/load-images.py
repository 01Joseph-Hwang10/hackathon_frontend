from constants import IMAGE_ROOT, ROOT
import os
import sys
import re
import shutil


public_root = os.path.join(ROOT, 'public')
icons_root = os.path.join(public_root, 'icons')
image_root = os.path.join(public_root, 'image')

NESTED_TARGET = ['result', 'tab_bar_']

res = '@2x'

if len(sys.argv) > 1:
    if sys.argv[1] == '1':
        res = ''

def files_with_resolution(res: str, files: list) -> list:
    if len(res) == 0:
        return list(filter(lambda filename: not re.compile('@').search(filename), files))
    return list(filter(lambda filename: re.compile(res).search(filename), files))

def cleaned_filename(res: str, filename: str) -> str:
    if type(res) == type(str()):
        return filename.replace(res, '')
    return filename


def copy_with_new_name(res: str, current_folder: str, target: str, files: str) -> None:
    for filename in files:
        shutil.copy(os.path.join(current_folder, filename), os.path.join(target, cleaned_filename(res, filename)))

def files_with_extension(ext: str, files: list) -> list:
    return list(filter(lambda filename: os.path.splitext(filename)[1] == ext, files))

for foldername in os.listdir(IMAGE_ROOT):
    if foldername[0] == '.':
        continue
    current_folder = os.path.join(IMAGE_ROOT, foldername)
    files = files_with_resolution(res, os.listdir(current_folder))
    if foldername[0] == 'i' and foldername[1] == 'c':
        copy_with_new_name(res, current_folder, icons_root, files)
    if foldername == 'result':
        copy_with_new_name(res, current_folder, os.path.join(image_root, 'result'), files)
    if foldername == 'tab_bar_':
        files = files_with_extension('.svg', os.listdir(current_folder))
        copy_with_new_name(res, current_folder, os.path.join(image_root, 'tab_bar_'), files)
    if foldername == 'image':
        copy_with_new_name(res, current_folder, image_root, files)
