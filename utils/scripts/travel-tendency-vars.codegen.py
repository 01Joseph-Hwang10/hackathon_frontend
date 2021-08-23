import csv
from constants import ROOT
from functions import indent
import os

data_path = os.path.join(ROOT, 'data/travel-tendency-vars.csv')
code_path = os.path.join(ROOT, 'src/data/travel-tendency-vars.ts')

TITLE = 0
NAME = 1
TAG_TITLE = 2
TAG_NAME = 3
DATA_TITLE = 4

codelines = [
    'import { TTVVars } from "./travel-tendency-vars.types"',
    '',
    '',
    'export const ttvVars: TTVVars[] = ['
]

def cleaned_input(string: str) -> str:
    words = string.split(' ')
    for i in range(len(words)):
        if i == 0:
            continue
        words[i] = words[i].capitalize()
    return ''.join(words)

with open(data_path, 'r') as csvfile:
    reader = csv.reader(csvfile)
    header = next(reader)
    for row in reader:
        codelines.append(indent('{', 2))
        codelines.append(indent('title: "%s",' % cleaned_input(row[TITLE]) ,4))
        codelines.append(indent('name: "%s",' % cleaned_input(row[NAME]) ,4))
        codelines.append(indent('tagTitle: "%s",' % cleaned_input(row[TAG_TITLE]) ,4))
        codelines.append(indent('tag: "%s",' % cleaned_input(row[TAG_NAME]) ,4))
        codelines.append(indent('dataTypeTitle: "%s",' % cleaned_input(row[DATA_TITLE]) ,4))
        codelines.append(indent('},', 2))
    codelines.append('];')

with open(code_path, 'w') as wf:
    wf.write('\n'.join(codelines))